// ことばカード — カードデータ
// 絵文字 + ひらがな + 英語。著作権フリー素材（絵文字）のみ使用。
// s = なきごえ・おと（あるカードだけ。読み上げで再生する）
const DECKS = [
  {
    id: "animals",
    name: "どうぶつ",
    emoji: "🦁",
    cards: [
      { e: "🐕", ja: "いぬ", en: "Dog", s: { ja: "わんわん！", en: "Woof woof!" }, img: "img/animals/dog.jpg" },
      { e: "🐈", ja: "ねこ", en: "Cat", s: { ja: "にゃーにゃー！", en: "Meow meow!" }, img: "img/animals/cat.jpg" },
      { e: "🐰", ja: "うさぎ", en: "Rabbit", s: { ja: "ぴょんぴょん！", en: "Hop hop!" }, img: "img/animals/rabbit.jpg" },
      { e: "🐻", ja: "くま", en: "Bear", s: { ja: "がおー！", en: "Roar!" }, img: "img/animals/bear.jpg" },
      { e: "🐼", ja: "ぱんだ", en: "Panda", img: "img/animals/panda.jpg" },
      { e: "🦁", ja: "らいおん", en: "Lion", s: { ja: "がおー！", en: "Roar!" }, img: "img/animals/lion.jpg" },
      { e: "🐯", ja: "とら", en: "Tiger", s: { ja: "がおー！", en: "Roar!" }, img: "img/animals/tiger.jpg" },
      { e: "🐘", ja: "ぞう", en: "Elephant", s: { ja: "ぱおーん！", en: "Pawooo!" }, img: "img/animals/elephant.jpg" },
      { e: "🦒", ja: "きりん", en: "Giraffe", img: "img/animals/giraffe.jpg" },
      { e: "🦓", ja: "しまうま", en: "Zebra", s: { ja: "ひひーん！", en: "Neigh!" }, img: "img/animals/zebra.jpg" },
      { e: "🐵", ja: "さる", en: "Monkey", s: { ja: "うきうきー！", en: "Ooh ooh ah ah!" }, img: "img/animals/monkey.jpg" },
      { e: "🐷", ja: "ぶた", en: "Pig", s: { ja: "ぶーぶー！", en: "Oink oink!" }, img: "img/animals/pig.jpg" },
      { e: "🐮", ja: "うし", en: "Cow", s: { ja: "もーもー！", en: "Moo moo!" }, img: "img/animals/cow.jpg" },
      { e: "🐴", ja: "うま", en: "Horse", s: { ja: "ひひーん！", en: "Neigh!" }, img: "img/animals/horse.jpg" },
      { e: "🐑", ja: "ひつじ", en: "Sheep", s: { ja: "めーめー！", en: "Baa baa!" }, img: "img/animals/sheep.jpg" },
      { e: "🐔", ja: "にわとり", en: "Chicken", s: { ja: "こけこっこー！", en: "Cock-a-doodle-doo!" }, img: "img/animals/chicken.jpg" },
      { e: "🐧", ja: "ぺんぎん", en: "Penguin", img: "img/animals/penguin.jpg" },
      { e: "🦉", ja: "ふくろう", en: "Owl", s: { ja: "ほーほー！", en: "Hoot hoot!" }, img: "img/animals/owl.jpg" },
      { e: "🐸", ja: "かえる", en: "Frog", s: { ja: "けろけろ！", en: "Ribbit ribbit!" }, img: "img/animals/frog.jpg" },
      { e: "🐢", ja: "かめ", en: "Turtle", img: "img/animals/turtle.jpg" },
      { e: "🐍", ja: "へび", en: "Snake", s: { ja: "しゅーしゅー！", en: "Hiss hiss!" }, img: "img/animals/snake.jpg" },
      { e: "🐊", ja: "わに", en: "Crocodile", s: { ja: "がぶがぶ！", en: "Snap snap!" }, img: "img/animals/crocodile.jpg" },
      { e: "🐫", ja: "らくだ", en: "Camel", img: "img/animals/camel.jpg" },
      { e: "🐨", ja: "こあら", en: "Koala", img: "img/animals/koala.jpg" },
      { e: "🦍", ja: "ごりら", en: "Gorilla", s: { ja: "うほうほ！", en: "Ooh ooh!" }, img: "img/animals/gorilla.jpg" },
      { e: "🦊", ja: "きつね", en: "Fox", s: { ja: "こんこん！", en: "Yip yip!" }, img: "img/animals/fox.jpg" },
      { e: "🐺", ja: "おおかみ", en: "Wolf", s: { ja: "わおーん！", en: "Awooo!" }, img: "img/animals/wolf.jpg" },
      { e: "🦌", ja: "しか", en: "Deer", img: "img/animals/deer.jpg" },
      { e: "🦔", ja: "はりねずみ", en: "Hedgehog", img: "img/animals/hedgehog.jpg" },
      { e: "🐭", ja: "ねずみ", en: "Mouse", s: { ja: "ちゅーちゅー！", en: "Squeak squeak!" }, img: "img/animals/mouse.jpg" }
    ]
  },
  {
    id: "sea",
    name: "うみのいきもの",
    emoji: "🐬",
    cards: [
      { e: "🐟", ja: "さかな", en: "Fish", img: "img/sea/fish.jpg" },
      { e: "🐬", ja: "いるか", en: "Dolphin", s: { ja: "きゅーきゅー！", en: "Click click!" }, img: "img/sea/dolphin.jpg" },
      { e: "🐳", ja: "くじら", en: "Whale", s: { ja: "ぷしゅー！", en: "Whoosh!" }, img: "img/sea/whale.jpg" },
      { e: "🦈", ja: "さめ", en: "Shark", img: "img/sea/shark.jpg" },
      { e: "🐙", ja: "たこ", en: "Octopus", img: "img/sea/octopus.jpg" },
      { e: "🦑", ja: "いか", en: "Squid", img: "img/sea/squid.jpg" },
      { e: "🦀", ja: "かに", en: "Crab", s: { ja: "ちょきちょき！", en: "Snip snip!" }, img: "img/sea/crab.jpg" },
      { e: "🦐", ja: "えび", en: "Shrimp", img: "img/sea/shrimp.jpg" },
      { e: "🦭", ja: "あざらし", en: "Seal", s: { ja: "おうおう！", en: "Arf arf!" }, img: "img/sea/seal.jpg" },
      { e: "🐡", ja: "ふぐ", en: "Blowfish", img: "img/sea/blowfish.jpg" },
      { e: "🐠", ja: "ねったいぎょ", en: "Tropical fish", img: "img/sea/tropical-fish.jpg" },
      { e: "🐚", ja: "かいがら", en: "Seashell", img: "img/sea/seashell.jpg" }
    ]
  },
  {
    id: "bugs",
    name: "むし",
    emoji: "🦋",
    cards: [
      { e: "🦋", ja: "ちょうちょ", en: "Butterfly", s: { ja: "ひらひら！", en: "Flutter flutter!" }, img: "img/bugs/butterfly.jpg" },
      { e: "🐝", ja: "はち", en: "Bee", s: { ja: "ぶんぶん！", en: "Buzz buzz!" }, img: "img/bugs/bee.jpg" },
      { e: "🐞", ja: "てんとうむし", en: "Ladybug", img: "img/bugs/ladybug.jpg" },
      { e: "🐜", ja: "あり", en: "Ant", img: "img/bugs/ant.jpg" },
      { e: "🐌", ja: "かたつむり", en: "Snail", img: "img/bugs/snail.jpg" },
      { e: "🦗", ja: "ばった", en: "Grasshopper", s: { ja: "ぴょーん！", en: "Boing!" }, img: "img/bugs/grasshopper.jpg" },
      { e: "🕷️", ja: "くも", en: "Spider", img: "img/bugs/spider.jpg" },
      { e: "🐛", ja: "いもむし", en: "Caterpillar", img: "img/bugs/caterpillar.jpg" }
    ]
  },
  {
    id: "food",
    name: "たべもの",
    emoji: "🍎",
    cards: [
      { e: "🍎", ja: "りんご", en: "Apple", img: "img/food/apple.jpg" },
      { e: "🍌", ja: "ばなな", en: "Banana", img: "img/food/banana.jpg" },
      { e: "🍊", ja: "みかん", en: "Orange", img: "img/food/orange.jpg" },
      { e: "🍓", ja: "いちご", en: "Strawberry", img: "img/food/strawberry.jpg" },
      { e: "🍇", ja: "ぶどう", en: "Grapes", img: "img/food/grapes.jpg" },
      { e: "🍉", ja: "すいか", en: "Watermelon", img: "img/food/watermelon.jpg" },
      { e: "🍑", ja: "もも", en: "Peach", img: "img/food/peach.jpg" },
      { e: "🍈", ja: "めろん", en: "Melon", img: "img/food/melon.jpg" },
      { e: "🍍", ja: "ぱいなっぷる", en: "Pineapple", img: "img/food/pineapple.jpg" },
      { e: "🍋", ja: "れもん", en: "Lemon", img: "img/food/lemon.jpg" },
      { e: "🍒", ja: "さくらんぼ", en: "Cherry", img: "img/food/cherry.jpg" },
      { e: "🥝", ja: "きうい", en: "Kiwi", img: "img/food/kiwi.jpg" },
      { e: "🍅", ja: "とまと", en: "Tomato", img: "img/food/tomato.jpg" },
      { e: "🍆", ja: "なす", en: "Eggplant", img: "img/food/eggplant.jpg" },
      { e: "🥕", ja: "にんじん", en: "Carrot", img: "img/food/carrot.jpg" },
      { e: "🌽", ja: "とうもろこし", en: "Corn", img: "img/food/corn.jpg" },
      { e: "🥦", ja: "ぶろっこりー", en: "Broccoli", img: "img/food/broccoli.png" },
      { e: "🍄", ja: "きのこ", en: "Mushroom", img: "img/food/mushroom.jpg" },
      { e: "🥔", ja: "じゃがいも", en: "Potato", img: "img/food/potato.jpg" },
      { e: "🧅", ja: "たまねぎ", en: "Onion", img: "img/food/onion.jpg" },
      { e: "🍞", ja: "ぱん", en: "Bread", img: "img/food/bread.jpg" },
      { e: "🍙", ja: "おにぎり", en: "Rice ball", img: "img/food/rice-ball.jpg" },
      { e: "🥚", ja: "たまご", en: "Egg", img: "img/food/egg.jpg" },
      { e: "🥛", ja: "ぎゅうにゅう", en: "Milk", img: "img/food/milk.jpg" },
      { e: "🧀", ja: "ちーず", en: "Cheese", img: "img/food/cheese.jpg" },
      { e: "🍰", ja: "けーき", en: "Cake", img: "img/food/cake.jpg" },
      { e: "🍦", ja: "あいすくりーむ", en: "Ice cream", img: "img/food/ice-cream.jpg" },
      { e: "🍪", ja: "くっきー", en: "Cookie", img: "img/food/cookie.jpg" },
      { e: "🍫", ja: "ちょこれーと", en: "Chocolate", img: "img/food/chocolate.jpg" },
      { e: "🍮", ja: "ぷりん", en: "Pudding", img: "img/food/pudding.jpg" }
    ]
  },
  {
    id: "vehicles",
    name: "のりもの",
    emoji: "🚗",
    cards: [
      { e: "🚗", ja: "くるま", en: "Car", img: "img/vehicles/car.jpg" },
      { e: "🚌", ja: "ばす", en: "Bus", img: "img/vehicles/bus.jpg" },
      { e: "🚚", ja: "とらっく", en: "Truck", img: "img/vehicles/truck.jpg" },
      { e: "🚒", ja: "しょうぼうしゃ", en: "Fire engine", s: { ja: "うーうー、かんかん！", en: "Wee-oo wee-oo!" }, img: "img/vehicles/fire-engine.jpg" },
      { e: "🚑", ja: "きゅうきゅうしゃ", en: "Ambulance", s: { ja: "ぴーぽーぴーぽー！", en: "Wee-oo wee-oo!" }, img: "img/vehicles/ambulance.jpg" },
      { e: "🚓", ja: "ぱとかー", en: "Police car", s: { ja: "うーうー！", en: "Wee-oo wee-oo!" }, img: "img/vehicles/police-car.jpg" },
      { e: "🚃", ja: "でんしゃ", en: "Train", img: "img/vehicles/train.jpg" },
      { e: "🚅", ja: "しんかんせん", en: "Bullet train", img: "img/vehicles/bullet-train.jpg" },
      { e: "🚂", ja: "きかんしゃ", en: "Steam train", img: "img/vehicles/steam-train.jpg" },
      { e: "✈️", ja: "ひこうき", en: "Airplane", img: "img/vehicles/airplane.jpg" },
      { e: "🚁", ja: "へりこぷたー", en: "Helicopter", img: "img/vehicles/helicopter.jpg" },
      { e: "🚢", ja: "ふね", en: "Ship", img: "img/vehicles/ship.jpg" },
      { e: "🚲", ja: "じてんしゃ", en: "Bicycle", img: "img/vehicles/bicycle.jpg" },
      { e: "🏍️", ja: "ばいく", en: "Motorcycle", img: "img/vehicles/motorcycle.jpg" },
      { e: "🚕", ja: "たくしー", en: "Taxi", img: "img/vehicles/taxi.jpg" },
      { e: "🚜", ja: "とらくたー", en: "Tractor", img: "img/vehicles/tractor.jpg" },
      { e: "🚀", ja: "ろけっと", en: "Rocket", img: "img/vehicles/rocket.jpg" },
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
      { e: "🌙", ja: "つき", en: "Moon", img: "img/nature/moon.jpg" },
      { e: "☁️", ja: "くも", en: "Cloud", img: "img/nature/cloud.jpg" },
      { e: "☔", ja: "あめ", en: "Rain", img: "img/nature/rain.jpg" },
      { e: "⛄", ja: "ゆきだるま", en: "Snowman", img: "img/nature/snowman.jpg" },
      { e: "🌈", ja: "にじ", en: "Rainbow", img: "img/nature/rainbow.jpg" },
      { e: "⚡", ja: "かみなり", en: "Lightning", img: "img/nature/lightning.jpg" },
      { e: "⛰️", ja: "やま", en: "Mountain", img: "img/nature/mountain.jpg" },
      { e: "🌊", ja: "うみ", en: "Sea", img: "img/nature/sea.jpg" },
      { e: "🌸", ja: "はな", en: "Flower", img: "img/nature/flower.jpg" },
      { e: "🌳", ja: "き", en: "Tree", img: "img/nature/tree.jpg" },
      { e: "🍂", ja: "おちば", en: "Leaves", img: "img/nature/leaves.jpg" }
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
