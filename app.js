// ことばカード — アプリ本体
(function () {
  "use strict";

  // ---------- 状態 ----------
  const state = {
    deck: null,
    cards: [],
    index: 0,
    mode: "flash", // "flash" | "quiz"
    playing: false,
    playToken: 0, // 自動再生の世代カウンタ（停止判定用）
    settings: loadSettings(),
  };

  function loadSettings() {
    let s;
    try {
      s = JSON.parse(localStorage.getItem("kotoba-settings") || "{}");
    } catch {
      s = {};
    }
    const merged = Object.assign({ lang: "ja", mode: "flash", speed: "normal", shuffle: "off" }, s);
    if (merged.lang !== "ja" && merged.lang !== "en") merged.lang = "ja"; // 旧「りょうほう」設定の移行
    return merged;
  }
  function saveSettings() {
    localStorage.setItem("kotoba-settings", JSON.stringify(state.settings));
  }

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);
  const home = $("home"), player = $("player");
  const deckGrid = $("deckGrid");
  const progressLabel = $("progressLabel"), progressFill = $("progressFill");
  const flashCard = $("flashCard"), quizCard = $("quizCard");
  const cardEmoji = $("cardEmoji"), wordMain = $("wordMain");
  const quizQuestion = $("quizQuestion"), quizChoices = $("quizChoices"), quizAsk = $("quizAsk");
  const playBtn = $("playBtn"), modeBtn = $("modeBtn");
  const settingsModal = $("settingsModal");

  // ---------- 音声読み上げ ----------
  let voices = [];
  function refreshVoices() { voices = speechSynthesis.getVoices(); }
  refreshVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = refreshVoices;
  }

  // macOS/iOSのおふざけ系ノベルティ音声（英語で誤選択されると最悪なので除外）
  const NOVELTY = ["Albert", "Bad News", "Bahh", "Bells", "Boing", "Bubbles", "Cellos",
    "Deranged", "Eddy", "Flo", "Fred", "Good News", "Grandma", "Grandpa", "Jester",
    "Junior", "Kathy", "Organ", "Ralph", "Reed", "Rocko", "Sandy", "Shelley",
    "Superstar", "Trinoids", "Whisper", "Wobble", "Zarvox"];

  function pickVoice(lang) {
    const prefix = lang === "ja" ? "ja" : "en";
    let list = voices.filter((v) => v.lang.replace("_", "-").toLowerCase().startsWith(prefix));
    list = list.filter((v) => !NOVELTY.some((n) => v.name.startsWith(n)));
    const score = (v) => {
      let s = 0;
      if (/enhanced|premium|natural|neural|拡張/i.test(v.name)) s += 8;
      if (lang === "en" && /^(Samantha|Ava|Allison|Susan|Zoe|Nicky|Joelle|Alex|Karen|Daniel|Moira|Tessa|Serena|Google US English|Microsoft)/.test(v.name)) s += 4;
      if (lang === "ja" && /^(Kyoko|O-?Ren|Google 日本語|Hattori)/.test(v.name)) s += 4;
      if (v.lang.replace("_", "-").toLowerCase() === (lang === "ja" ? "ja-jp" : "en-us")) s += 2;
      if (v.localService) s += 1;
      return s;
    };
    return list.sort((a, b) => score(b) - score(a))[0] || null;
  }

  function speak(text, lang) {
    return new Promise((resolve) => {
      if (!("speechSynthesis" in window)) return resolve();
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === "ja" ? "ja-JP" : "en-US";
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.rate = lang === "ja" ? 0.9 : 1.0; // 英語は等速のほうが自然
      u.onend = resolve;
      u.onerror = resolve;
      speechSynthesis.speak(u);
      // onendが発火しない環境向けの保険
      setTimeout(resolve, 1500 + text.length * 350);
    });
  }

  function speakWord(card) {
    const lang = state.settings.lang;
    return speak(lang === "ja" ? card.ja : card.en, lang);
  }

  // ---------- 効果音（WebAudio・素材ファイル不要） ----------
  let actx = null;
  function audio() {
    if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === "suspended") actx.resume();
    return actx;
  }
  function tone(freq, dur, delay, type, vol) {
    const ctx = audio();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(vol || 0.18, ctx.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + dur);
  }
  function soundCorrect() { tone(880, 0.15, 0); tone(1318, 0.35, 0.13); } // ピンポーン
  function soundWrong() { tone(160, 0.25, 0, "square", 0.1); } // ブッ
  function soundPage() { tone(660, 0.08, 0, "sine", 0.08); }

  // ---------- ホーム ----------
  function renderHome() {
    deckGrid.innerHTML = "";
    DECKS.forEach((deck) => {
      const btn = document.createElement("button");
      btn.className = "deck-btn";
      btn.innerHTML =
        '<span class="deck-emoji">' + deck.emoji + "</span>" +
        deck.name +
        '<span class="deck-count">' + deck.cards.length + "まい</span>";
      btn.addEventListener("click", () => openDeck(deck));
      deckGrid.appendChild(btn);
    });
  }

  function openDeck(deck) {
    audio(); // iOSのオーディオ解錠（タップ起点）
    state.deck = deck;
    state.cards = deck.cards.slice();
    if (state.settings.shuffle === "on") shuffle(state.cards);
    state.index = 0;
    state.mode = state.settings.mode;
    updateModeBtn();
    home.classList.add("hidden");
    player.classList.remove("hidden");
    renderCard();
  }

  function closeDeck() {
    stopAutoplay();
    speechSynthesis.cancel();
    player.classList.add("hidden");
    home.classList.remove("hidden");
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // ---------- カード表示 ----------
  function renderCard() {
    const card = state.cards[state.index];
    progressLabel.textContent = (state.index + 1) + " / " + state.cards.length;
    progressFill.style.width = ((state.index + 1) / state.cards.length) * 100 + "%";

    if (state.mode === "flash") {
      flashCard.classList.remove("hidden");
      quizCard.classList.add("hidden");
      // アニメーション再発火
      flashCard.style.animation = "none";
      void flashCard.offsetWidth;
      flashCard.style.animation = "";
      cardEmoji.textContent = card.e;
      const word = state.settings.lang === "ja" ? card.ja : card.en;
      wordMain.innerHTML = word + ' <span class="speaker">🔊</span>';
    } else {
      flashCard.classList.add("hidden");
      quizCard.classList.remove("hidden");
      quizCard.style.animation = "none";
      void quizCard.offsetWidth;
      quizCard.style.animation = "";
      renderQuiz(card);
    }
  }

  // ---------- クイズ（音声出題 → 絵を選ぶ） ----------
  function questionText(card) {
    return state.settings.lang === "ja"
      ? card.ja + "は どれかな？"
      : "Find the " + card.en.toLowerCase() + "!";
  }

  function askQuestion(card) {
    return speak(questionText(card), state.settings.lang);
  }

  function renderQuiz(card) {
    quizQuestion.textContent = questionText(card);
    const pool = state.deck.cards.filter((c) => c !== card);
    shuffle(pool);
    const options = [card, pool[0], pool[1]].filter(Boolean);
    shuffle(options);

    quizChoices.innerHTML = "";
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = opt.e;
      btn.setAttribute("aria-label", opt.ja);
      btn.addEventListener("click", async () => {
        audio();
        if (opt === card) {
          btn.classList.add("correct");
          quizChoices.querySelectorAll("button").forEach((b) => (b.disabled = true));
          soundCorrect();
          const praise = state.settings.lang === "ja"
            ? "せいかい！ " + card.ja + "！"
            : "Great job! " + card.en + "!";
          await speak(praise, state.settings.lang);
          setTimeout(() => { if (state.mode === "quiz") next(); }, 500);
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          soundWrong();
        }
      });
      quizChoices.appendChild(btn);
    });

    askQuestion(card); // 表示と同時に音声で出題
  }

  // ---------- ナビゲーション ----------
  function next() {
    state.index = (state.index + 1) % state.cards.length;
    if (state.mode === "flash") soundPage();
    renderCard();
  }
  function prev() {
    state.index = (state.index - 1 + state.cards.length) % state.cards.length;
    if (state.mode === "flash") soundPage();
    renderCard();
  }

  // ---------- 自動再生（フラッシュモード） ----------
  const SPEED_PAUSE = { slow: 2600, normal: 1600, fast: 800 };

  async function startAutoplay() {
    if (state.mode !== "flash") return;
    state.playing = true;
    playBtn.textContent = "⏸";
    playBtn.classList.add("playing");
    const token = ++state.playToken;

    while (state.playing && token === state.playToken) {
      await speakWord(state.cards[state.index]);
      if (!state.playing || token !== state.playToken) break;
      await pause(SPEED_PAUSE[state.settings.speed]);
      if (!state.playing || token !== state.playToken) break;
      next();
    }
  }

  function stopAutoplay() {
    state.playing = false;
    state.playToken++;
    speechSynthesis.cancel();
    playBtn.textContent = "▶";
    playBtn.classList.remove("playing");
  }

  function pause(ms) { return new Promise((r) => setTimeout(r, ms)); }

  // ---------- モード表示 ----------
  function updateModeBtn() {
    // ボタンは「切り替え先」を表示
    modeBtn.textContent = state.mode === "flash" ? "🎯" : "📖";
  }

  // ---------- イベント ----------
  $("closeBtn").addEventListener("click", closeDeck);
  $("prevBtn").addEventListener("click", () => { stopAutoplay(); prev(); });
  $("nextBtn").addEventListener("click", () => { stopAutoplay(); next(); });

  playBtn.addEventListener("click", () => {
    audio(); // iOSのオーディオ解錠
    if (state.mode !== "flash") return;
    if (state.playing) stopAutoplay();
    else startAutoplay();
  });

  modeBtn.addEventListener("click", () => {
    stopAutoplay();
    state.mode = state.mode === "flash" ? "quiz" : "flash";
    state.settings.mode = state.mode;
    saveSettings();
    syncSegs();
    updateModeBtn();
    renderCard();
  });

  wordMain.addEventListener("click", () => { audio(); speakWord(state.cards[state.index]); });
  cardEmoji.addEventListener("click", () => { audio(); speakWord(state.cards[state.index]); });
  quizAsk.addEventListener("click", () => { audio(); askQuestion(state.cards[state.index]); });

  // 設定
  $("settingsBtn").addEventListener("click", () => settingsModal.classList.remove("hidden"));
  $("settingsClose").addEventListener("click", () => settingsModal.classList.add("hidden"));
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) settingsModal.classList.add("hidden");
  });

  // セグメントボタン（ホームと設定の両方で使う）
  const SEGS = [
    ["homeLangSeg", "lang"],
    ["homeModeSeg", "mode"],
    ["speedSeg", "speed"],
    ["shuffleSeg", "shuffle"],
  ];

  function syncSegs() {
    SEGS.forEach(([id, key]) => {
      $(id).querySelectorAll("button").forEach((b) =>
        b.classList.toggle("on", b.dataset.v === state.settings[key])
      );
    });
  }

  SEGS.forEach(([id, key]) => {
    $(id).querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.settings[key] = btn.dataset.v;
        saveSettings();
        syncSegs();
        if (key === "mode" && !player.classList.contains("hidden")) {
          stopAutoplay();
          state.mode = btn.dataset.v;
          updateModeBtn();
          renderCard();
        }
        if (key === "lang" && !player.classList.contains("hidden")) renderCard();
      });
    });
  });

  // ---------- PWA ----------
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  // ---------- 起動 ----------
  renderHome();
  syncSegs();
})();
