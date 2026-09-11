import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
};

export const signatureEdit: Product[] = [
  {
    id: "forest-linen-overshirt",
    name: "Forest Linen Overshirt",
    category: "Outerwear",
    price: 2890,
    oldPrice: 3490,
    image: p1,
    hoverImage: p9,
  },
  {
    id: "heritage-relaxed-trousers",
    name: "Heritage Relaxed Trousers",
    category: "Trousers",
    price: 3450,
    image: p2,
    hoverImage: p6,
  },
  {
    id: "atelier-cotton-shirt",
    name: "Atelier Cotton Shirt",
    category: "Shirts",
    price: 2490,
    oldPrice: 2990,
    image: p3,
    hoverImage: p5,
  },
  {
    id: "walnut-leather-belt",
    name: "Walnut Leather Belt",
    category: "Accessories",
    price: 1850,
    image: p4,
    hoverImage: p7,
  },
];

export const bestSellers: Product[] = [
  {
    id: "signature-oversized-shirt",
    name: "Signature Oversized Shirt",
    category: "Shirts",
    price: 2690,
    image: p5,
    hoverImage: p3,
    badge: "Best Seller",
  },
  {
    id: "essential-pleated-trousers",
    name: "Essential Pleated Trousers",
    category: "Trousers",
    price: 3190,
    image: p6,
    hoverImage: p2,
    badge: "Best Seller",
  },
  {
    id: "minimal-leather-tote",
    name: "Minimal Leather Tote",
    category: "Bags",
    price: 4850,
    image: p7,
    hoverImage: p12,
  },
  {
    id: "everyday-knit-polo",
    name: "Everyday Knit Polo",
    category: "Knitwear",
    price: 2950,
    image: p8,
    hoverImage: p1,
    badge: "Best Seller",
  },
];

export const newArrivals: Product[] = [
  {
    id: "signature-utility-jacket",
    name: "Signature Utility Jacket",
    category: "Outerwear",
    price: 5490,
    image: p9,
    hoverImage: p1,
    badge: "New",
  },
  {
    id: "relaxed-oxford-shirt",
    name: "Relaxed Oxford Shirt",
    category: "Shirts",
    price: 2790,
    image: p10,
    hoverImage: p5,
    badge: "New",
  },
  {
    id: "studio-wide-leg-pants",
    name: "Studio Wide-Leg Pants",
    category: "Trousers",
    price: 3290,
    image: p11,
    hoverImage: p6,
    badge: "New",
  },
  {
    id: "structured-crossbody-bag",
    name: "Structured Crossbody Bag",
    category: "Bags",
    price: 3850,
    image: p12,
    hoverImage: p7,
    badge: "New",
  },
];

export const allProducts: Product[] = [
  ...signatureEdit,
  ...bestSellers,
  ...newArrivals,
];

export const formatBDT = (value: number) =>
  `৳${value.toLocaleString("en-US")}`;