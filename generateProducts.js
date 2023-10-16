const names = [
  "SleekDesk",
  "ComfyChair",
  "EcoShelf",
  "NordicTable",
  "BrightLamp",
  "SoftSofa",
  "WallMirror",
  "CozyBed",
  "SpaceRug",
  "ChicCabinet",
  "LoftStool",
  "ClassicClock",
  "PatioSet",
  "KidsBunk",
  "OfficeDrawer",
  "KitchenIsland",
  "BathRack",
  "VanityMirror",
  "DiningSet",
  "BarStool",
  "GardenBench",
  "StorageBox",
  "TVStand",
  "Nightstand",
  "Wardrobe",
  "Bookcase",
  "CoffeeTable",
  "BalconySet",
  "LoungeChair",
  "StudyDesk",
  "FloorLamp",
  "Cushion",
  "WallArt",
  "ShoeRack",
  "LaundryBasket",
  "WineRack",
  "Futon",
  "Curtains",
  "BeanBag",
  "PendantLight"
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomProduct = (id, showStatus) => {
  const kinds = ["Outdoor bar table and stool", "Dining table", "Armchair", "Bookcase"];
  const images = [
    "https://www.ikea.com/images/fa/88/fa88c91a4ac8db60f44b50cce69166b8.jpg?f=s",
    "https://www.realestate.com.au/news-image/w_1500,h_2000/v1657596856/news-lifestyle-content-assets/wp-content/production/ikea-billy_1500x2000.jpg?_i=AA",
    "https://www.ikea.com/ext/ingkadam/m/7938d3e6281c0a51/original/PH187084.jpg?f=s",
    "https://www.ikea.com/ext/ingkadam/m/784988de0fe4f71b/original/PH176296-crop001.jpg?f=s",
  ];

  const name = names[getRandomInt(0, names.length - 1)] + ` ${id}`;
  const kind = kinds[getRandomInt(0, kinds.length - 1)] + ` ${getRandomInt(1, 10)}`;
  const image = images[getRandomInt(0, images.length - 1)];
  const itemId = getRandomInt(1, 2);
  const price = getRandomInt(500, 2000);
  const oldPrice = showStatus ?  price + getRandomInt(50, 300) : undefined;
  const status = showStatus ? {
    type: "sale",
    quantity: `${getRandomInt(10, 90)}%`,
  } : undefined;

  return {
    id,
    itemId,
    name,
    kind,
    image,
    price,
    oldPrice,
    status,
  };
};
