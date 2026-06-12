// ことばカード — カードデータ
// 絵文字 + ひらがな + 英語。著作権フリー素材（絵文字）のみ使用。
const DECKS = [
  {
    id: "animals",
    name: "どうぶつ",
    emoji: "🦁",
    cards: [
      { e: "🐕", ja: "いぬ", en: "Dog" },
      { e: "🐈", ja: "ねこ", en: "Cat" },
      { e: "🐰", ja: "うさぎ", en: "Rabbit" },
      { e: "🐻", ja: "くま", en: "Bear" },
      { e: "🐼", ja: "ぱんだ", en: "Panda" },
      { e: "🦁", ja: "らいおん", en: "Lion" },
      { e: "🐯", ja: "とら", en: "Tiger" },
      { e: "🐘", ja: "ぞう", en: "Elephant" },
      { e: "🦒", ja: "きりん", en: "Giraffe" },
      { e: "🦓", ja: "しまうま", en: "Zebra" },
      { e: "🐵", ja: "さる", en: "Monkey" },
      { e: "🐷", ja: "ぶた", en: "Pig" },
      { e: "🐮", ja: "うし", en: "Cow" },
      { e: "🐴", ja: "うま", en: "Horse" },
      { e: "🐑", ja: "ひつじ", en: "Sheep" },
      { e: "🐔", ja: "にわとり", en: "Chicken" },
      { e: "🐧", ja: "ぺんぎん", en: "Penguin" },
      { e: "🦉", ja: "ふくろう", en: "Owl" },
      { e: "🐸", ja: "かえる", en: "Frog" },
      { e: "🐢", ja: "かめ", en: "Turtle" },
      { e: "🐍", ja: "へび", en: "Snake" },
      { e: "🐊", ja: "わに", en: "Crocodile" },
      { e: "🐫", ja: "らくだ", en: "Camel" },
      { e: "🐨", ja: "こあら", en: "Koala" },
      { e: "🦍", ja: "ごりら", en: "Gorilla" },
      { e: "🦊", ja: "きつね", en: "Fox" },
      { e: "🐺", ja: "おおかみ", en: "Wolf" },
      { e: "🦌", ja: "しか", en: "Deer" },
      { e: "🦔", ja: "はりねずみ", en: "Hedgehog" },
      { e: "🐭", ja: "ねずみ", en: "Mouse" }
    ]
  },
  {
    id: "sea",
    name: "うみのいきもの",
    emoji: "🐬",
    cards: [
      { e: "🐟", ja: "さかな", en: "Fish" },
      { e: "🐬", ja: "いるか", en: "Dolphin" },
      { e: "🐳", ja: "くじら", en: "Whale" },
      { e: "🦈", ja: "さめ", en: "Shark" },
      { e: "🐙", ja: "たこ", en: "Octopus" },
      { e: "🦑", ja: "いか", en: "Squid" },
      { e: "🦀", ja: "かに", en: "Crab" },
      { e: "🦐", ja: "えび", en: "Shrimp" },
      { e: "🦭", ja: "あざらし", en: "Seal" },
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
      { e: "🦋", ja: "ちょうちょ", en: "Butterfly" },
      { e: "🐝", ja: "はち", en: "Bee" },
      { e: "🐞", ja: "てんとうむし", en: "Ladybug" },
      { e: "🐜", ja: "あり", en: "Ant" },
      { e: "🐌", ja: "かたつむり", en: "Snail" },
      { e: "🦗", ja: "ばった", en: "Grasshopper" },
      { e: "🕷️", ja: "くも", en: "Spider" },
      { e: "🐛", ja: "いもむし", en: "Caterpillar" }
    ]
  },
  {
    id: "food",
    name: "たべもの",
    emoji: "🍎",
    cards: [
      { e: "🍎", ja: "りんご", en: "Apple" },
      { e: "🍌", ja: "ばなな", en: "Banana" },
      { e: "🍊", ja: "みかん", en: "Orange" },
      { e: "🍓", ja: "いちご", en: "Strawberry" },
      { e: "🍇", ja: "ぶどう", en: "Grapes" },
      { e: "🍉", ja: "すいか", en: "Watermelon" },
      { e: "🍑", ja: "もも", en: "Peach" },
      { e: "🍈", ja: "めろん", en: "Melon" },
      { e: "🍍", ja: "ぱいなっぷる", en: "Pineapple" },
      { e: "🍋", ja: "れもん", en: "Lemon" },
      { e: "🍒", ja: "さくらんぼ", en: "Cherry" },
      { e: "🥝", ja: "きうい", en: "Kiwi" },
      { e: "🍅", ja: "とまと", en: "Tomato" },
      { e: "🍆", ja: "なす", en: "Eggplant" },
      { e: "🥕", ja: "にんじん", en: "Carrot" },
      { e: "🌽", ja: "とうもろこし", en: "Corn" },
      { e: "🥦", ja: "ぶろっこりー", en: "Broccoli" },
      { e: "🍄", ja: "きのこ", en: "Mushroom" },
      { e: "🥔", ja: "じゃがいも", en: "Potato" },
      { e: "🧅", ja: "たまねぎ", en: "Onion" },
      { e: "🍞", ja: "ぱん", en: "Bread" },
      { e: "🍙", ja: "おにぎり", en: "Rice ball" },
      { e: "🥚", ja: "たまご", en: "Egg" },
      { e: "🥛", ja: "ぎゅうにゅう", en: "Milk" },
      { e: "🧀", ja: "ちーず", en: "Cheese" },
      { e: "🍰", ja: "けーき", en: "Cake" },
      { e: "🍦", ja: "あいすくりーむ", en: "Ice cream" },
      { e: "🍪", ja: "くっきー", en: "Cookie" },
      { e: "🍫", ja: "ちょこれーと", en: "Chocolate" },
      { e: "🍮", ja: "ぷりん", en: "Pudding" }
    ]
  },
  {
    id: "vehicles",
    name: "のりもの",
    emoji: "🚗",
    cards: [
      { e: "🚗", ja: "くるま", en: "Car" },
      { e: "🚌", ja: "ばす", en: "Bus" },
      { e: "🚚", ja: "とらっく", en: "Truck" },
      { e: "🚒", ja: "しょうぼうしゃ", en: "Fire engine" },
      { e: "🚑", ja: "きゅうきゅうしゃ", en: "Ambulance" },
      { e: "🚓", ja: "ぱとかー", en: "Police car" },
      { e: "🚃", ja: "でんしゃ", en: "Train" },
      { e: "🚅", ja: "しんかんせん", en: "Bullet train" },
      { e: "🚂", ja: "きかんしゃ", en: "Steam train" },
      { e: "✈️", ja: "ひこうき", en: "Airplane" },
      { e: "🚁", ja: "へりこぷたー", en: "Helicopter" },
      { e: "🚢", ja: "ふね", en: "Ship" },
      { e: "🚲", ja: "じてんしゃ", en: "Bicycle" },
      { e: "🏍️", ja: "ばいく", en: "Motorcycle" },
      { e: "🚕", ja: "たくしー", en: "Taxi" },
      { e: "🚜", ja: "とらくたー", en: "Tractor" },
      { e: "🚀", ja: "ろけっと", en: "Rocket" },
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
      { e: "⭐", ja: "ほし", en: "Star" },
      { e: "❤️", ja: "はーと", en: "Heart" },
      { e: "💎", ja: "だいやもんど", en: "Diamond" }
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
      { e: "☔", ja: "あめ", en: "Rain" },
      { e: "⛄", ja: "ゆきだるま", en: "Snowman" },
      { e: "🌈", ja: "にじ", en: "Rainbow" },
      { e: "⚡", ja: "かみなり", en: "Lightning" },
      { e: "⛰️", ja: "やま", en: "Mountain" },
      { e: "🌊", ja: "うみ", en: "Sea" },
      { e: "🌸", ja: "はな", en: "Flower" },
      { e: "🌳", ja: "き", en: "Tree" },
      { e: "🍂", ja: "おちば", en: "Leaves" }
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
      { e: "👄", ja: "くち", en: "Mouth" },
      { e: "✋", ja: "て", en: "Hand" },
      { e: "🦶", ja: "あし", en: "Foot" },
      { e: "🦷", ja: "は", en: "Tooth" }
    ]
  }
];
