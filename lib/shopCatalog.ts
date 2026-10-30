export const CATEGORIES = ["Sculptures", "Jewelry", "Papyrus Art", "Spices"] as const;

export const MATERIALS = [
  "Stone",
  "Brass",
  "Gold Plated",
  "Papyrus",
  "Natural Spices",
  "Semi-Precious Stones",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type Material = (typeof MATERIALS)[number];

export type ProductDetail = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  material: Material;
  inStock?: boolean;
  reviews: number;
  rating: number;
  image: string;
  gallery: [string, string, string, string];
  description: string;
  details: ProductDetail[];
};

export const products: Product[] = [
  {
    id: "golden-pharaoh-bust",
    name: "Golden Pharaoh Bust",
    price: 249,
    category: "Sculptures",
    material: "Gold Plated",
    reviews: 24,
    rating: 4.9,
    image: "/images/shop/golden-pharaoh-bust.png",
    gallery: [
      "/images/products/golden-pharaoh-bust/front.png",
      "/images/products/golden-pharaoh-bust/left.png",
      "/images/products/golden-pharaoh-bust/back.png",
      "/images/products/golden-pharaoh-bust/right.png",
    ],
    description: "Handcrafted in Egypt with timeless detail and a quiet, collector-worthy presence.",
    details: [
      { label: "Material", value: "Brass with gold finish" },
      { label: "Origin", value: "Egypt" },
      { label: "Dimensions", value: "H 24 cm × W 18 cm × D 12 cm" },
    ],
  },
  {
    id: "nile-blue-necklace",
    name: "Nile Blue Necklace",
    price: 189,
    category: "Jewelry",
    material: "Semi-Precious Stones",
    reviews: 18,
    rating: 4.9,
    image: "/images/shop/nile-blue-necklace.png",
    gallery: [
      "/images/products/nile-blue-necklace/front.png",
      "/images/products/nile-blue-necklace/left.png",
      "/images/products/nile-blue-necklace/back.png",
      "/images/products/nile-blue-necklace/right.png",
    ],
    description: "A scarab-inspired statement necklace in lapis blue, turquoise, and warm antiqued gold.",
    details: [
      { label: "Material", value: "Lapis, turquoise & brass" },
      { label: "Origin", value: "Cairo, Egypt" },
      { label: "Dimensions", value: "L 42 cm × W 8 cm × H 2 cm" },
    ],
  },
  {
    id: "hand-painted-papyrus",
    name: "Hand-painted Papyrus",
    price: 79,
    category: "Papyrus Art",
    material: "Papyrus",
    reviews: 12,
    rating: 4.8,
    image: "/images/shop/hand-painted-papyrus.png",
    gallery: [
      "/images/products/hand-painted-papyrus/front.png",
      "/images/products/hand-painted-papyrus/left.png",
      "/images/products/hand-painted-papyrus/back.png",
      "/images/products/hand-painted-papyrus/right.png",
    ],
    description: "A hand-painted story on warm natural papyrus, made to bring a fragment of ancient Egypt home.",
    details: [
      { label: "Material", value: "Natural papyrus & wood" },
      { label: "Origin", value: "Luxor, Egypt" },
      { label: "Dimensions", value: "H 32 cm × W 48 cm × D 4 cm" },
    ],
  },
  {
    id: "desert-spice-set",
    name: "Desert Spice Set",
    price: 69,
    category: "Spices",
    material: "Natural Spices",
    reviews: 15,
    rating: 4.9,
    image: "/images/shop/desert-spice-set.png",
    gallery: [
      "/images/products/desert-spice-set/front.png",
      "/images/products/desert-spice-set/left.png",
      "/images/products/desert-spice-set/back.png",
      "/images/products/desert-spice-set/right.png",
    ],
    description: "Four aromatic blends presented in an engraved chest inspired by Egypt's golden markets.",
    details: [
      { label: "Material", value: "Natural spices & brass" },
      { label: "Origin", value: "Aswan, Egypt" },
      { label: "Dimensions", value: "H 15 cm × W 34 cm × D 24 cm" },
    ],
  },
  {
    id: "anubis-figurine",
    name: "Anubis Figurine",
    price: 129,
    category: "Sculptures",
    material: "Stone",
    reviews: 20,
    rating: 4.9,
    image: "/images/shop/anubis-figurine.png",
    gallery: [
      "/images/products/anubis-figurine/front.png",
      "/images/products/anubis-figurine/left.png",
      "/images/products/anubis-figurine/back.png",
      "/images/products/anubis-figurine/right.png",
    ],
    description: "A polished black stone guardian with blue and gold details, shaped for a modern altar or shelf.",
    details: [
      { label: "Material", value: "Resin stone & brass" },
      { label: "Origin", value: "Giza, Egypt" },
      { label: "Dimensions", value: "H 19 cm × W 28 cm × D 12 cm" },
    ],
  },
  {
    id: "royal-cartouche",
    name: "Royal Cartouche",
    price: 159,
    category: "Jewelry",
    material: "Gold Plated",
    reviews: 16,
    rating: 4.8,
    image: "/images/shop/royal-cartouche.png",
    gallery: [
      "/images/products/royal-cartouche/front.png",
      "/images/products/royal-cartouche/left.png",
      "/images/products/royal-cartouche/back.png",
      "/images/products/royal-cartouche/right.png",
    ],
    description: "A vertical cartouche pendant with rich blue inlay, designed as a personal symbol to carry daily.",
    details: [
      { label: "Material", value: "Gold plated brass & lapis" },
      { label: "Origin", value: "Cairo, Egypt" },
      { label: "Dimensions", value: "H 9 cm × W 3 cm × D 1 cm" },
    ],
  },
];
