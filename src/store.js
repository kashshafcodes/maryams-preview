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
  builtByUrl: "https://wa.me/8801700000000",

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
      image: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/884924457_1648865366940454_1493978736283666184_n.jpg?stp=dst-jpg_tt6&cstp=mx1710x2048&ctp=s1710x2048&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=USJjzfSNxjkQ7kNvwFspghA&_nc_oc=AdqdKYgGWExp1vdjj2ANmPUQHym3FGg3BYuj4-NJMtdnRfUuFGau9ebjBL47YVfNBNA&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=jSD6V-C35F-qKV4SO0zTJQ&_nc_ss=792a8&oh=00_AQRizhuzpIsuY5qZgKViTIQ52A_79EgLQDl1PFhL_R9ydw&oe=6AEE93B5",
      description: "Embroidered lawn front with printed sleeves, dupatta and trouser fabric. Stitching available on request.",
      tag: "New in",
    },
    {
      id: "m2",
      name: "Indigo Block Print Suit, 3-piece",
      category: "unstitched",
      price: 4850,
      image: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.99422-6/884624068_1108500912028577_2392135344029016261_n.png?stp=dst-jpg_tt6&cstp=mx1084x1355&ctp=s1084x1355&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=f8gPfe7NU6EQ7kNvwHR8Bga&_nc_oc=AdrMtpvN4goehOcZN95wsviNyuX79oitQIUH-T6YZcXAELqgPMUKUTTkp2vDFp-mtDI&_nc_zt=14&_nc_ht=scontent.fdac24-5.fna&_nc_gid=KJRdjnQmZp0KY-wx66SarQ&_nc_ss=792a8&oh=00_AQSRsLvW4lwQe4qaAFiUnJVXO2c12leDt4yIIhI_4TimXA&oe=6AEE8CC4",
      description: "Indigo block-printed shirt with lace neckline, off-white trouser and printed dupatta.",
      tag: "Bestseller",
    },
    {
      id: "m3",
      name: "Spring Lawn Collection, set of 5 prints",
      category: "unstitched",
      price: 5900,
      image: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/886551766_1648865376940453_9049332711588000579_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mK322abHnYkQ7kNvwHFdy41&_nc_oc=Adov8LREmA8NW5g-4W-x8aNQlDKSoc_l5iuyLOdFfDhLwOAMyGHRJM2g2ZcX_v12gmE&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=Mj6E3eNts9sGGx83OnewZQ&_nc_ss=792a8&oh=00_AQSNjF9cBs9fg_QYDHjR_xt1efW9eqHkY6Fk1iAK3V6FjA&oe=6AEEBB71",
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
