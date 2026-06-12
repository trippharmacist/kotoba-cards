// ことばカード — カードデータ
// 絵文字 + ひらがな + 英語。著作権フリー素材（絵文字）のみ使用。
// s = なきごえ・おと（あるカードだけ。読み上げで再生する）
const DECKS = [
  {
    id: "animals",
    name: "どうぶつ",
    emoji: "🦁",
    cards: [
      { e: "🐕", ja: "いぬ", en: "Dog", s: { ja: "わんわん！", en: "Woof woof!" } },
      { e: "🐈", ja: "ねこ", en: "Cat", s: { ja: "にゃーにゃー！", en: "Meow meow!" } },
      { e: "🐰", ja: "うさぎ", en: "Rabbit", s: { ja: "ぴょんぴょん！", en: "Hop hop!" } },
      { e: "🐻", ja: "くま", en: "Bear", s: { ja: "がおー！", en: "Roar!" } },
      { e: "🐼", ja: "ぱんだ", en: "Panda" },
      { e: "🦁", ja: "らいおん", en: "Lion", s: { ja: "がおー！", en: "Roar!" } },
      { e: "🐯", ja: "とら", en: "Tiger", s: { ja: "がおー！", en: "Roar!" } },
      { e: "🐘", ja: "ぞう", en: "Elephant", s: { ja: "ぱおーん！", en: "Pawooo!" } },
      { e: "🦒", ja: "きりん", en: "Giraffe" },
      { e: "🦓", ja: "しまうま", en: "Zebra", s: { ja: "ひひーん！", en: "Neigh!" } },
      { e: "🐵", ja: "さる", en: "Monkey", s: { ja: "うきうきー！", en: "Ooh ooh ah ah!" } },
      { e: "🐷", ja: "ぶた", en: "Pig", s: { ja: "ぶーぶー！", en: "Oink oink!" } },
      { e: "🐮", ja: "うし", en: "Cow", s: { ja: "もーもー！", en: "Moo moo!" } },
      { e: "🐴", ja: "うま", en: "Horse", s: { ja: "ひひーん！", en: "Neigh!" } },
      { e: "🐑", ja: "ひつじ", en: "Sheep", s: { ja: "めーめー！", en: "Baa baa!" } },
      { e: "🐔", ja: "にわとり", en: "Chicken", s: { ja: "こけこっこー！", en: "Cock-a-doodle-doo!" } },
      { e: "🐧", ja: "ぺんぎん", en: "Penguin" },
      { e: "🦉", ja: "ふくろう", en: "Owl", s: { ja: "ほーほー！", en: "Hoot hoot!" } },
      { e: "🐸", ja: "かえる", en: "Frog", s: { ja: "けろけろ！", en: "Ribbit ribbit!" } },
      { e: "🐢", ja: "かめ", en: "Turtle" },
      { e: "🐍", ja: "へび", en: "Snake", s: { ja: "しゅーしゅー！", en: "Hiss hiss!" } },
      { e: "🐊", ja: "わに", en: "Crocodile", s: { ja: "がぶがぶ！", en: "Snap snap!" } },
      { e: "🐫", ja: "らくだ", en: "Camel" },
      { e: "🐨", ja: "こあら", en: "Koala" },
      { e: "🦍", ja: "ごりら", en: "Gorilla", s: { ja: "うほうほ！", en: "Ooh ooh!" } },
      { e: "🦊", ja: "きつね", en: "Fox", s: { ja: "こんこん！", en: "Yip yip!" } },
      { e: "🐺", ja: "おおかみ", en: "Wolf", s: { ja: "わおーん！", en: "Awooo!" } },
      { e: "🦌", ja: "しか", en: "Deer" },
      { e: "🦔", ja: "はりねずみ", en: "Hedgehog" },
      { e: "🐭", ja: "ねずみ", en: "Mouse", s: { ja: "ちゅーちゅー！", en: "Squeak squeak!" } }
    ]
  },
  {
    id: "sea",
    name: "うみのいきもの",
    emoji: "🐬",
    cards: [
      { e: "🐟", ja: "さかな", en: "Fish" },
      { e: "🐬", ja: "いるか", en: "Dolphin", s: { ja: "きゅーきゅー！", en: "Click click!" } },
      { e: "🐳", ja: "くじら", en: "Whale", s: { ja: "ぷしゅー！", en: "Whoosh!" } },
      { e: "🦈", ja: "さめ", en: "Shark" },
      { e: "🐙", ja: "たこ", en: "Octopus" },
      { e: "🦑", ja: "いか", en: "Squid" },
      { e: "🦀", ja: "かに", en: "Crab", s: { ja: "ちょきちょき！", en: "Snip snip!" } },
      { e: "🦐", ja: "えび", en: "Shrimp" },
      { e: "🦭", ja: "あざらし", en: "Seal", s: { ja: "おうおう！", en: "Arf arf!" } },
      { e: "🐡", ja: "ふぐ", en: "Blowfish" },
      { e: "🐠", ja: "ねったいぎょ", en: "Tropical fish" },
      { e: "🐚", ja: "かいがら", en: "Seashell" }
    ]
  },
  {
    id: "bugs",
    name: "むし",
    emoji: "🦋",
    cards: [
      { e: "🦋", ja: "ちょうちょ", en: "Butterfly", s: { ja: "ひらひら！", en: "Flutter flutter!" } },
      { e: "🐝", ja: "はち", en: "Bee", s: { ja: "ぶんぶん！", en: "Buzz buzz!" } },
      { e: "🐞", ja: "てんとうむし", en: "Ladybug" },
      { e: "🐜", ja: "あり", en: "Ant" },
      { e: "🐌", ja: "かたつむり", en: "Snail" },
      { e: "🦗", ja: "ばった", en: "Grasshopper", s: { ja: "ぴょーん！", en: "Boing!" } },
      { e: "🕷️", ja: "くも", en: "Spider" },
      { e: "🐛", ja: "いもむし", en: "Caterpillar" }
    ]
  },
  {
    id: "food",
    name: "たべもの",
    emoji: "🍎",
    cards: [
      { e: "🍎", ja: "りんご", en: "Apple", s: { ja: "しゃくしゃく！", en: "Crunch crunch!" } },
      { e: "🍌", ja: "ばなな", en: "Banana" },
      { e: "🍊", ja: "みかん", en: "Orange" },
      { e: "🍓", ja: "いちご", en: "Strawberry" },
      { e: "🍇", ja: "ぶどう", en: "Grapes" },
      { e: "🍉", ja: "すいか", en: "Watermelon", s: { ja: "しゃくしゃく！", en: "Crunch crunch!" } },
      { e: "🍑", ja: "もも", en: "Peach" },
      { e: "🍈", ja: "めろん", en: "Melon" },
      { e: "🍍", ja: "ぱいなっぷる", en: "Pineapple" },
      { e: "🍋", ja: "れもん", en: "Lemon", s: { ja: "すっぱーい！", en: "So sour!" } },
      { e: "🍒", ja: "さくらんぼ", en: "Cherry" },
      { e: "🥝", ja: "きうい", en: "Kiwi" },
      { e: "🍅", ja: "とまと", en: "Tomato" },
      { e: "🍆", ja: "なす", en: "Eggplant" },
      { e: "🥕", ja: "にんじん", en: "Carrot", s: { ja: "ぽりぽり！", en: "Crunch crunch!" } },
      { e: "🌽", ja: "とうもろこし", en: "Corn" },
      { e: "🥦", ja: "ぶろっこりー", en: "Broccoli" },
      { e: "🍄", ja: "きのこ", en: "Mushroom" },
      { e: "🥔", ja: "じゃがいも", en: "Potato" },
      { e: "🧅", ja: "たまねぎ", en: "Onion" },
      { e: "🍞", ja: "ぱん", en: "Bread", s: { ja: "もぐもぐ！", en: "Yum yum!" } },
      { e: "🍙", ja: "おにぎり", en: "Rice ball", s: { ja: "もぐもぐ！", en: "Yum yum!" } },
      { e: "🥚", ja: "たまご", en: "Egg" },
      { e: "🥛", ja: "ぎゅうにゅう", en: "Milk", s: { ja: "ごくごく！", en: "Gulp gulp!" } },
      { e: "🧀", ja: "ちーず", en: "Cheese" },
      { e: "🍰", ja: "けーき", en: "Cake", s: { ja: "おいしー！", en: "Yummy!" } },
      { e: "🍦", ja: "あいすくりーむ", en: "Ice cream", s: { ja: "つめたーい！", en: "So cold!" } },
      { e: "🍪", ja: "くっきー", en: "Cookie", s: { ja: "さくさく！", en: "Crunch crunch!" } },
      { e: "🍫", ja: "ちょこれーと", en: "Chocolate" },
      { e: "🍮", ja: "ぷりん", en: "Pudding", s: { ja: "ぷるぷる！", en: "Wobble wobble!" } }
    ]
  },
  {
    id: "vehicles",
    name: "のりもの",
    emoji: "🚗",
    cards: [
      { e: "🚗", ja: "くるま", en: "Car", s: { ja: "ぶーぶー！", en: "Vroom vroom!" } },
      { e: "🚌", ja: "ばす", en: "Bus", s: { ja: "ぶーん！", en: "Vroom!" } },
      { e: "🚚", ja: "とらっく", en: "Truck", s: { ja: "ぶろろろー！", en: "Vroom vroom!" } },
      { e: "🚒", ja: "しょうぼうしゃ", en: "Fire engine", s: { ja: "うーうー、かんかん！", en: "Wee-oo wee-oo!" } },
      { e: "🚑", ja: "きゅうきゅうしゃ", en: "Ambulance", s: { ja: "ぴーぽーぴーぽー！", en: "Wee-oo wee-oo!" } },
      { e: "🚓", ja: "ぱとかー", en: "Police car", s: { ja: "うーうー！", en: "Wee-oo wee-oo!" } },
      { e: "🚃", ja: "でんしゃ", en: "Train", s: { ja: "がたんごとん！", en: "Choo choo!" } },
      { e: "🚅", ja: "しんかんせん", en: "Bullet train", s: { ja: "びゅーん！", en: "Whoosh!" } },
      { e: "🚂", ja: "きかんしゃ", en: "Steam train", s: { ja: "しゅっしゅっぽっぽ！", en: "Choo choo!" } },
      { e: "✈️", ja: "ひこうき", en: "Airplane", s: { ja: "びゅーん！", en: "Whoosh!" } },
      { e: "🚁", ja: "へりこぷたー", en: "Helicopter", s: { ja: "ばらばらばら！", en: "Whirr whirr!" } },
      { e: "🚢", ja: "ふね", en: "Ship", s: { ja: "ぼーっ！", en: "Toot toot!" } },
      { e: "🚲", ja: "じてんしゃ", en: "Bicycle", s: { ja: "りんりん！", en: "Ring ring!" } },
      { e: "🏍️", ja: "ばいく", en: "Motorcycle", s: { ja: "ぶろろろ！", en: "Vroom vroom!" } },
      { e: "🚕", ja: "たくしー", en: "Taxi" },
      { e: "🚜", ja: "とらくたー", en: "Tractor", s: { ja: "ぶろろろー！", en: "Vroom!" } },
      { e: "🚀", ja: "ろけっと", en: "Rocket", s: { ja: "ごごごー！", en: "Whoosh!" } },
      { e: "🛸", ja: "ゆーふぉー", en: "UFO" }
    ]
  },
  {
    id: "colors",
    name: "いろ",
    emoji: "🌈",
    cards: [
      { e: "🔴", ja: "あか", en: "Red" },
      { e: "🔵", ja: "あお", en: "Blue" },
      { e: "🟡", ja: "きいろ", en: "Yellow" },
      { e: "🟢", ja: "みどり", en: "Green" },
      { e: "🟠", ja: "おれんじ", en: "Orange" },
      { e: "🟣", ja: "むらさき", en: "Purple" },
      { e: "🩷", ja: "ぴんく", en: "Pink" },
      { e: "🟤", ja: "ちゃいろ", en: "Brown" },
      { e: "⚫", ja: "くろ", en: "Black" },
      { e: "⚪", ja: "しろ", en: "White" }
    ]
  },
  {
    id: "numbers",
    name: "かず",
    emoji: "🔢",
    cards: [
      { e: "1️⃣", ja: "いち", en: "One" },
      { e: "2️⃣", ja: "に", en: "Two" },
      { e: "3️⃣", ja: "さん", en: "Three" },
      { e: "4️⃣", ja: "よん", en: "Four" },
      { e: "5️⃣", ja: "ご", en: "Five" },
      { e: "6️⃣", ja: "ろく", en: "Six" },
      { e: "7️⃣", ja: "なな", en: "Seven" },
      { e: "8️⃣", ja: "はち", en: "Eight" },
      { e: "9️⃣", ja: "きゅう", en: "Nine" },
      { e: "🔟", ja: "じゅう", en: "Ten" }
    ]
  },
  {
    id: "shapes",
    name: "かたち",
    emoji: "⭐",
    cards: [
      { e: "⭕", ja: "まる", en: "Circle" },
      { e: "🔺", ja: "さんかく", en: "Triangle" },
      { e: "🟥", ja: "しかく", en: "Square" },
      { e: "⭐", ja: "ほし", en: "Star", s: { ja: "きらきら！", en: "Twinkle twinkle!" } },
      { e: "❤️", ja: "はーと", en: "Heart" },
      { e: "💎", ja: "だいやもんど", en: "Diamond", s: { ja: "きらきら！", en: "Twinkle twinkle!" } }
    ]
  },
  {
    id: "nature",
    name: "しぜん",
    emoji: "🌸",
    cards: [
      { e: "☀️", ja: "たいよう", en: "Sun" },
      { e: "🌙", ja: "つき", en: "Moon" },
      { e: "☁️", ja: "くも", en: "Cloud" },
      { e: "☔", ja: "あめ", en: "Rain", s: { ja: "ざーざー！", en: "Pitter patter!" } },
      { e: "⛄", ja: "ゆきだるま", en: "Snowman" },
      { e: "🌈", ja: "にじ", en: "Rainbow" },
      { e: "⚡", ja: "かみなり", en: "Lightning", s: { ja: "ごろごろ、どっかーん！", en: "Rumble rumble!" } },
      { e: "⛰️", ja: "やま", en: "Mountain", s: { ja: "やっほー！", en: "Yoo-hoo!" } },
      { e: "🌊", ja: "うみ", en: "Sea", s: { ja: "ざぶーん！", en: "Splash!" } },
      { e: "🌸", ja: "はな", en: "Flower" },
      { e: "🌳", ja: "き", en: "Tree" },
      { e: "🍂", ja: "おちば", en: "Leaves", s: { ja: "かさかさ！", en: "Rustle rustle!" } }
    ]
  },
  {
    id: "body",
    name: "からだ",
    emoji: "✋",
    cards: [
      { e: "👀", ja: "め", en: "Eyes" },
      { e: "👂", ja: "みみ", en: "Ear" },
      { e: "👃", ja: "はな", en: "Nose" },
      { e: "👄", ja: "くち", en: "Mouth", s: { ja: "あーん！", en: "Ahh!" } },
      { e: "✋", ja: "て", en: "Hand", s: { ja: "ぱちぱち！", en: "Clap clap!" } },
      { e: "🦶", ja: "あし", en: "Foot", s: { ja: "とことこ！", en: "Stomp stomp!" } },
      { e: "🦷", ja: "は", en: "Tooth", s: { ja: "がじがじ！", en: "Chomp chomp!" } }
    ]
  }
];
