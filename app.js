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
    try {
      return Object.assign(
        { lang: "both", speed: "normal", shuffle: "off" },
        JSON.parse(localStorage.getItem("kotoba-settings") || "{}")
      );
    } catch {
      return { lang: "both", speed: "normal", shuffle: "off" };
    }
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
  const cardEmoji = $("cardEmoji"), wordJa = $("wordJa"), wordEn = $("wordEn");
  const quizEmoji = $("quizEmoji"), quizChoices = $("quizChoices");
  const playBtn = $("playBtn"), modeBtn = $("modeBtn");
  const settingsModal = $("settingsModal");

  // ---------- 音声読み上げ ----------
  let voices = [];
  function refreshVoices() { voices = speechSynthesis.getVoices(); }
  refreshVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = refreshVoices;
  }

  function pickVoice(lang) {
    const list = voices.filter((v) => v.lang.replace("_", "-").startsWith(lang));
    // iOS/macOSの標準音声を優先
    const preferred = lang === "ja" ? ["Kyoko", "O-Ren"] : ["Samantha", "Karen", "Daniel"];
    for (const name of preferred) {
      const hit = list.find((v) => v.name.includes(name));
      if (hit) return hit;
    }
    return list[0] || null;
  }

  function speak(text, lang) {
    return new Promise((resolve) => {
      if (!("speechSynthesis" in window)) return resolve();
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === "ja" ? "ja-JP" : "en-US";
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.rate = 0.85; // 子ども向けにすこしゆっくり
      u.onend = resolve;
      u.onerror = resolve;
      speechSynthesis.speak(u);
      // onendが発火しない環境向けの保険
      setTimeout(resolve, 1000 + text.length * 350);
    });
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
    state.deck = deck;
    state.cards = deck.cards.slice();
    if (state.settings.shuffle === "on") shuffle(state.cards);
    state.index = 0;
    state.mode = "flash";
    modeBtn.textContent = "❓";
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
      wordJa.innerHTML = card.ja + ' <span class="speaker">🔊</span>';
      wordEn.innerHTML = card.en + ' <span class="speaker">🔊</span>';
      wordJa.style.display = state.settings.lang === "en" ? "none" : "";
      wordEn.style.display = state.settings.lang === "ja" ? "none" : "";
    } else {
      flashCard.classList.add("hidden");
      quizCard.classList.remove("hidden");
      quizCard.style.animation = "none";
      void quizCard.offsetWidth;
      quizCard.style.animation = "";
      quizEmoji.textContent = card.e;
      renderChoices(card);
    }
  }

  function renderChoices(card) {
    const useEn = state.settings.lang === "en";
    const label = (c) => (useEn ? c.en : c.ja);
    const pool = state.deck.cards.filter((c) => c !== card);
    shuffle(pool);
    const options = [card, pool[0], pool[1]].filter(Boolean);
    shuffle(options);

    quizChoices.innerHTML = "";
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = label(opt);
      btn.addEventListener("click", async () => {
        if (opt === card) {
          btn.classList.add("correct");
          soundCorrect();
          quizChoices.querySelectorAll("button").forEach((b) => (b.disabled = true));
          await speak(card.ja, "ja");
          if (state.settings.lang === "both") await speak(card.en, "en");
          setTimeout(() => { if (state.mode === "quiz") next(); }, 700);
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          soundWrong();
        }
      });
      quizChoices.appendChild(btn);
    });
  }

  // ---------- ナビゲーション ----------
  function next() {
    state.index = (state.index + 1) % state.cards.length;
    soundPage();
    renderCard();
  }
  function prev() {
    state.index = (state.index - 1 + state.cards.length) % state.cards.length;
    soundPage();
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
      const card = state.cards[state.index];
      if (state.settings.lang !== "en") await speak(card.ja, "ja");
      if (!state.playing || token !== state.playToken) break;
      if (state.settings.lang !== "ja") {
        await pause(400);
        await speak(card.en, "en");
      }
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

  // ---------- イベント ----------
  $("closeBtn").addEventListener("click", closeDeck);
  $("prevBtn").addEventListener("click", () => { stopAutoplay(); prev(); });
  $("nextBtn").addEventListener("click", () => { stopAutoplay(); next(); });

  playBtn.addEventListener("click", () => {
    audio(); // iOSのオーディオ解錠
    if (state.playing) stopAutoplay();
    else startAutoplay();
  });

  modeBtn.addEventListener("click", () => {
    stopAutoplay();
    state.mode = state.mode === "flash" ? "quiz" : "flash";
    modeBtn.textContent = state.mode === "flash" ? "❓" : "🃏";
    renderCard();
  });

  wordJa.addEventListener("click", () => { audio(); speak(state.cards[state.index].ja, "ja"); });
  wordEn.addEventListener("click", () => { audio(); speak(state.cards[state.index].en, "en"); });
  cardEmoji.addEventListener("click", async () => {
    audio();
    const card = state.cards[state.index];
    if (state.settings.lang !== "en") await speak(card.ja, "ja");
    if (state.settings.lang !== "ja") await speak(card.en, "en");
  });

  // 設定
  $("settingsBtn").addEventListener("click", () => settingsModal.classList.remove("hidden"));
  $("settingsClose").addEventListener("click", () => settingsModal.classList.add("hidden"));
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) settingsModal.classList.add("hidden");
  });

  function bindSeg(id, key) {
    const seg = $(id);
    seg.querySelectorAll("button").forEach((btn) => {
      if (btn.dataset.v === state.settings[key]) {
        seg.querySelectorAll("button").forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
      }
      btn.addEventListener("click", () => {
        seg.querySelectorAll("button").forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        state.settings[key] = btn.dataset.v;
        saveSettings();
        if (!player.classList.contains("hidden")) renderCard();
      });
    });
  }
  bindSeg("langSeg", "lang");
  bindSeg("speedSeg", "speed");
  bindSeg("shuffleSeg", "shuffle");

  // ---------- PWA ----------
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  // ---------- 起動 ----------
  renderHome();
})();
