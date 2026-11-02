// Preview for Maryam's (facebook.com/themaryams.bd)
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  theme: "premium",
  accent: "#4E5B45",
  name: "Maryam's",
  nameLatin: "Authentic Pakistani brand outfits",
  tagline: "Original Pakistani brand outfits, tailored to fit you perfectly.",
  about:
    "Every piece is 100% authentic. Our in-house tailoring team stitches each outfit to your measurements, following the original Pakistani cuts, so you never have to worry about tricky fittings.",

  previewNote: "This is a demo. Product names and prices are samples and will be replaced with yours.",

  whatsapp: "8801632329036",
  messengerUsername: "themaryams.bd",
  facebookUrl: "https://www.facebook.com/themaryams.bd",
  phoneDisplay: "01632-329036",
  address: "East Shewrapara, Dhaka 1216",
  hours: "Open every day",

  delivery: [
    { id: "dhaka", label: "Inside Dhaka", fee: 80, time: "1–2 days" },
    { id: "bd", label: "Outside Dhaka", fee: 150, time: "3–5 days" },
  ],
  payment: ["Cash on delivery", "bKash", "Nagad"],

  lang: "en",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://kashshafcodes.github.io/",

  categories: [
    { id: "unstitched", label: "Unstitched" },
    { id: "stitched", label: "Stitched to fit" },
  ],

  products: [
    {
      id: "m1",
      name: "Pastel Embroidered Lawn, 3-piece",
      category: "unstitched",
      price: 6450,
      image: "photos/m1.jpg",
      description: "Embroidered lawn front with printed sleeves, dupatta and trouser fabric. Stitching available on request.",
      tag: "New in",
    },
    {
      id: "m2",
      name: "Indigo Block Print Suit, 3-piece",
      category: "unstitched",
      price: 4850,
      image: "photos/m2.jpg",
      description: "Indigo block-printed shirt with lace neckline, off-white trouser and printed dupatta.",
      tag: "Bestseller",
    },
    {
      id: "m3",
      name: "Spring Lawn Collection, set of 5 prints",
      category: "unstitched",
      price: 5900,
      image: "photos/m3.jpg",
      description: "Choose your print in the note at checkout. Each comes as a full 3-piece suit.",
    },
    {
      id: "m4",
      name: "Custom stitching",
      category: "stitched",
      price: 1200,
      color: "#3D4A3A",
      sizes: ["S", "M", "L", "XL", "Custom"],
      description: "Add this to any unstitched suit. Our tailors follow the original Pakistani cut; we'll call you for measurements.",
    },
  ],
};
