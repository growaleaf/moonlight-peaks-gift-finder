// Moonlight Peaks character gift preference data.
// Source: https://roonby.com/2026/11/09/moonlight-peaks-gift-guide-every-characters-favorite-and-hated-gifts/
// Article dated 2026-11-09. Fetched and parsed: 2026-11-24. Re-fetched 2026-11-24, content identical
// (only the Cloudflare email-obfuscation hash differed between fetches).
// Single source. Category entries ("Any Trash item (...)", "Blue Flowers", etc.) are kept
// verbatim as published; this tool does not expand them into individual items.
// Preferences may change with future game patches.

var MOONLIGHT_SOURCE = {
  url: "https://roonby.com/2026/11/09/moonlight-peaks-gift-guide-every-characters-favorite-and-hated-gifts/",
  articleDate: "2026-11-09",
  fetchedOn: "2026-11-24"
};

var MOONLIGHT_CHARACTERS = [
  {
    "name": "Alina",
    "loved": ["Black Rose"],
    "liked": ["Black Tulips", "Black Azalea", "Black Plumeria", "Diamond", "Golden Egg"],
    "neutral": ["Blue Flowers", "Yellow Flowers", "White Flowers", "Blood Orange", "Blood Grapes", "Gold Bar", "Common Mushroom"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Conch", "any Fish", "any Wood", "Dried Herbs"]
  },
  {
    "name": "Aras",
    "loved": ["Purple Moonlight Flower", "Blue Moonlight Flower"],
    "liked": ["Diamond", "Golden Egg"],
    "neutral": ["Black Flowers", "Blue Flowers", "Pink Flowers", "Purple Flowers", "White Flowers", "Red Wine", "Beer", "Blood Orange"],
    "hated": ["Any Hats", "any Clothing except Hats", "any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Fish", "any Ore", "any Wood", "Dried Herbs", "any Conch"]
  },
  {
    "name": "Brook",
    "loved": ["White Rose", "Top Hat"],
    "liked": ["Any Dairy item", "any Juice"],
    "neutral": ["Any Hat except Top Hat", "Diamond", "any Flower except White Rose"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Fish", "any Ore", "any Wood", "Dried Herbs", "any Conch", "any Insect/Critter"]
  },
  {
    "name": "Death",
    "loved": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Hat (Serious Hat, Flat Cap, etc.)"],
    "liked": ["Eggnog", "Egg", "Bread", "Cheese", "Beer", "any Juice", "any Flower", "Common Mushroom"],
    "neutral": ["Diamond", "Golden Egg", "Dried Herbs", "Cloth", "Charcoal", "Fertilizer", "Coin"],
    "hated": []
  },
  {
    "name": "Dragan",
    "loved": ["Purple Moonlight Flower", "Blue Moonlight Flower"],
    "liked": ["Diamond", "Golden Egg"],
    "neutral": ["Void Foods", "Moon Crystal", "any Flower except Moonlight Flowers", "any Hat", "Common Mushroom", "any Coffee"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Wood", "any Conch"]
  },
  {
    "name": "Elvira",
    "loved": ["Red Rose", "Diamond", "Serious Hat", "Gold Bar", "any Milkshake"],
    "liked": ["Any Flower", "Rose Quartz", "Moon Crystal", "any Cupcake", "any Fish", "any Jam", "any Juice", "Custom Bouquet", "Golden Egg"],
    "neutral": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Wood", "any Conch"],
    "hated": []
  },
  {
    "name": "Evan",
    "loved": ["Black Tulips", "Diamond", "any Coffee", "Flat Cap"],
    "liked": ["Any Flower", "any Clothes", "any Milkshake", "any Tea", "any Juice", "any Dessert item"],
    "neutral": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Wood", "any Conch"],
    "hated": []
  },
  {
    "name": "Fiona",
    "loved": ["White Tulips", "Diamond", "Golden Egg", "Witch Hat"],
    "liked": ["Any Processed Mana item (Mana Coffee, Mana Chocolate, etc.)", "Mana Essence", "any Dessert item", "any Jam", "any Juice"],
    "neutral": ["Common Mushroom"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Jada",
    "loved": ["Pink Azalea", "Pink Plumeria", "Yellow Azalea", "Yellow Plumeria", "any Coffee"],
    "liked": ["Diamond", "Golden Egg", "any Flower", "any Dairy item", "any Juice", "any Jam", "any Magic/Supernatural item (Crystal Orb, Empty Alchemy Jar, etc.)", "Gold Bar"],
    "neutral": ["Any Insect/Critter"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Dessert item", "any Ore", "any Wood", "any Conch"]
  },
  {
    "name": "Kim",
    "loved": ["Pink Flowers", "White Flowers"],
    "liked": ["Diamond", "Golden Egg", "Black Flowers", "Red Flowers", "Purple Flowers", "Yellow Flowers", "any Coffee", "any Fish-based food (Void Maki, Fishy Soup, Onigiri, etc.)"],
    "neutral": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"],
    "hated": []
  },
  {
    "name": "Llemi",
    "loved": ["Pink Plumeria", "Gold Bar", "Custom Bouquet", "Amour", "Heart Stone", "Rose Quartz", "Moon Crystal"],
    "liked": ["Diamond", "Golden Egg", "any Flower except Black Flowers", "any Juice", "any Jam", "any Dairy item", "any Dessert"],
    "neutral": ["Common Mushroom"],
    "hated": ["Black Flowers", "any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Ludo",
    "loved": ["Black Flowers", "Diamond", "Golden Egg", "any Flowerpot"],
    "liked": ["Any Pizza", "any Flower", "any Juice", "any Jam", "any Coffee", "any Hat"],
    "neutral": ["Common Mushroom"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Luna",
    "loved": ["Any Flower", "any Flowerpot", "any Houseplant", "any Mana item"],
    "liked": ["Diamond", "Golden Egg", "any Juice", "any Jam", "any Milkshake", "any Dessert", "any Dairy item"],
    "neutral": ["Common Mushroom"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Mina",
    "loved": ["Pink Flowers", "Red Rose", "Flowerpot (Azalea, Plumeria, Rose, Tulip)"],
    "liked": ["Diamond", "any Flower", "any Dairy item", "any Houseplant", "any Hat", "any Juice", "any Jam", "any Milkshake", "any Dessert", "any Fish-based food (Void Maki, Fishy Soup, Onigiri, etc.)"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Moon Goddess",
    "loved": ["Blue Moonlight Flower", "Purple Moonlight Flower", "Mana Moon Cupcake"],
    "liked": ["Moon Milkshake", "Moonfruit", "Mana Moon Jam", "Diamond", "Golden Egg"],
    "neutral": ["Any Flower", "Moon Crystal", "any Juice", "any Hat", "any Coffee", "any Jam", "any Dessert", "any Savory food item"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Noel",
    "loved": ["Mana Coffee", "Mana Wine", "Mana Potion"],
    "liked": ["Mana Coffee", "Mana Chocolate", "Mana Moon Cupcake", "Diamond", "Golden Egg"],
    "neutral": ["Any Fish", "Common Mushroom", "any Flower"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Orlock",
    "loved": ["Red Rose", "Red Wine", "White Wine", "Mana Wine", "Beer", "Eggnog"],
    "liked": ["Any Cupcake", "Irish Coffee", "any Flower", "Top Hat", "Mana Potion", "Mana Chocolate", "any Juice", "any Jam", "any Milkshake", "any Dessert", "any Fish-based food (Void Maki, Fishy Soup, Onigiri, etc.)"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Persephone",
    "loved": ["Any Flower", "any Houseplant", "any Coffee", "Rose Quartz"],
    "liked": ["Golden Egg", "Diamond", "any Juice", "any Jam", "any Soup", "any Cupcake", "any Insect/Critter", "any Fish"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore"]
  },
  {
    "name": "Pumpkin Head",
    "loved": ["Pumpkin", "any Pumpkin-based food (Pumpkin Pie, Pumpkin Stew, etc.)"],
    "liked": ["Honey", "any Juice", "any Milkshake", "any Hat", "any Coffee", "any Dairy item"],
    "neutral": ["Diamond", "Golden Egg", "any Flower"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Rei",
    "loved": ["Any Yellow Flower", "Flowerpot (Plumeria, Tulip, Rose, Azalea)"],
    "liked": ["Diamond", "Golden Egg", "Black Flowers", "Blue Flowers", "Pink Flowers", "Purple Flowers", "White Flowers", "any Houseplant", "any Juice", "any Hat", "Common Mushroom", "Honey"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Ridge",
    "loved": ["Any Blue Flower", "Flowerpot (Plumeria, Tulip, Rose, Azalea)", "Beer"],
    "liked": ["Diamond", "Golden Egg", "Black Flowers", "Yellow Flowers", "Pink Flowers", "Purple Flowers", "White Flowers", "any Juice", "any Jam", "any Wine", "any Wood", "Stone", "any Planks"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Insect/Critter", "any Fish"]
  },
  {
    "name": "Sabrina",
    "loved": ["Any Purple Flower", "Flowerpot (Plumeria, Tulip, Rose, Azalea)", "any Mana item (Mana Coffee, Mana Milkshake, etc.)", "Witch Hat"],
    "liked": ["Diamond", "Black Flowers", "Yellow Flowers", "White Flowers", "Pink Flowers", "Blue Flowers", "any Dairy item", "Gold Bar", "Golden Egg", "Gold Ore", "any Houseplant", "any Milkshake"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter", "any Fish"]
  },
  {
    "name": "Saga",
    "loved": ["Purple Kthonia", "Blue Kthonia", "Purple Moonlight Flower", "Blue Moonlight Flower", "any Tea"],
    "liked": ["Golden Egg", "Diamond", "any Flower", "any Juice", "any Jam", "any Hat", "any Milkshake", "any Wine", "Beer"],
    "neutral": ["Common Mushroom", "Honey"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter", "any Fish"]
  },
  {
    "name": "Samael",
    "loved": ["Red Rose", "Red Wine", "White Wine", "any Maki", "Diamond"],
    "liked": ["Black Flowers", "Blue Flowers", "White Flowers", "Yellow Flowers", "Red Flowers", "Purple Flowers", "Gold Bar", "any Mana item (Mana Coffee, Mana Milkshake, etc.)", "any Hat", "any Juice", "any Jam", "any Milkshake", "any Dairy item"],
    "neutral": ["Pink Flowers"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Wood", "any Ore", "any Insect/Critter"]
  },
  {
    "name": "Skull Girl",
    "loved": ["Any Flower", "any Insect/Critter", "any Houseplant", "any Food", "any Clothes"],
    "liked": [],
    "neutral": ["Common Mushroom"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Conch"]
  },
  {
    "name": "Sun God",
    "loved": ["Any Yellow Flower", "Flowerpot (Rose, Tulip, Plumeria, Azalea)", "Gold Bar"],
    "liked": ["Diamond", "Golden Egg", "Black Flowers", "Blue Flowers", "White Flowers", "Pink Flowers", "Red Flowers", "Purple Flowers", "any Hat", "Gold Ore", "any Golden Accessory (Armlet, Bracelet, Earrings, etc.)", "any Savory food item", "any Dessert"],
    "neutral": [],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore except Gold", "any Conch", "any Insect/Critter"]
  },
  {
    "name": "Tae",
    "loved": ["Any Pink Flower", "Flowerpot (Rose, Tulip, Plumeria, Azalea)", "any Accessory (Earrings, Armlet, etc.)"],
    "liked": ["Golden Egg", "Diamond", "Black Flowers", "Blue Flowers", "White Flowers", "Yellow Flowers", "Red Flowers", "Purple Flowers", "any Coffee", "any Jam", "any Juice", "Rose Quartz"],
    "neutral": ["Common Mushroom"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Conch", "any Insect/Critter"]
  },
  {
    "name": "Winston",
    "loved": ["Blue Azalea"],
    "liked": ["Golden Egg", "Diamond", "any Flower except Blue Azalea", "any Flowerpot", "any Hat", "any Juice", "any Soup", "any Wood", "any Planks", "Stone"],
    "neutral": ["Any Coffee"],
    "hated": ["Any Trash item (Rusty Soda Can, Plastic Rings, etc.)", "any Ore", "any Conch", "any Insect/Critter"]
  }
];

function findGiftMatches(query) {
  var q = String(query || "").trim().toLowerCase();
  if (!q) return [];
  var results = [];
  for (var i = 0; i < MOONLIGHT_CHARACTERS.length; i++) {
    var c = MOONLIGHT_CHARACTERS[i];
    var lovedHits = c.loved.filter(function (g) { return g.toLowerCase().indexOf(q) !== -1; });
    var likedHits = c.liked.filter(function (g) { return g.toLowerCase().indexOf(q) !== -1; });
    var neutralHits = c.neutral.filter(function (g) { return g.toLowerCase().indexOf(q) !== -1; });
    var hatedHits = c.hated.filter(function (g) { return g.toLowerCase().indexOf(q) !== -1; });
    if (lovedHits.length || likedHits.length || neutralHits.length || hatedHits.length) {
      results.push({ name: c.name, lovedHits: lovedHits, likedHits: likedHits, neutralHits: neutralHits, hatedHits: hatedHits });
    }
  }
  return results;
}

function findCharacter(name) {
  for (var i = 0; i < MOONLIGHT_CHARACTERS.length; i++) {
    if (MOONLIGHT_CHARACTERS[i].name === name) return MOONLIGHT_CHARACTERS[i];
  }
  return null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MOONLIGHT_CHARACTERS: MOONLIGHT_CHARACTERS, MOONLIGHT_SOURCE: MOONLIGHT_SOURCE, findGiftMatches: findGiftMatches, findCharacter: findCharacter };
}
