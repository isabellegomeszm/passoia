// FOUNDATION
import foundation1 from "../../../assets/foundation-1.png";
import foundation2 from "../../../assets/foundation-2.png";
import foundation3 from "../../../assets/foundation-3.png";
import foundation4 from "../../../assets/foundation-4.png";
import foundation5 from "../../../assets/foundation-5.png";

// POWDER
import powder1 from "../../../assets/powder-1.png";
import powder2 from "../../../assets/powder-2.png";
import powder3 from "../../../assets/powder-3.png";
import powder4 from "../../../assets/powder-4.png";
import powder5 from "../../../assets/powder-5.png";

// BLUSH
import blush1 from "../../../assets/blush-1.png";
import blush2 from "../../../assets/blush-2.png";
import blush3 from "../../../assets/blush-3.png";
import blush4 from "../../../assets/blush-4.png";

// MASCARAS
import mascaraF from "../../../assets/mascara-f.png";
import mascaraL from "../../../assets/mascara-l.png";
import mascaraA from "../../../assets/mascara-a.png";

// GLOSS
import gloss1 from "../../../assets/gloss-1.png";
import gloss2 from "../../../assets/gloss-2.png";
import gloss3 from "../../../assets/gloss-3.png";
import gloss4 from "../../../assets/gloss-4.png";
import gloss5 from "../../../assets/gloss-5.png";
import gloss6 from "../../../assets/gloss-6.png";

// CONCEALER
import concealer1 from "../../../assets/concealer-1.png";
import concealer2 from "../../../assets/concealer-2.png";
import concealer3 from "../../../assets/concealer-3.png";

// EYESHADOWS
import eyeshadowNude from "../../../assets/eyeshadow-nude.png";
import eyeshadowGreen from "../../../assets/eyeshadow-green.png";
import eyeshadowOrange from "../../../assets/eyeshadow-orange.png";
import eyeshadowPurple from "../../../assets/eyeshadow-purple.png";
import eyeshadowMedia from "../../../assets/eyeshadow-media.png";
import eyeshadow120 from "../../../assets/eyeshadow-120.png";

// LIP LIQUID
import liquidRed from "../../../assets/liquid-red.png";
import liquidPink from "../../../assets/liquid-pink.png";
import liquidOrange from "../../../assets/liquid-orange.png";
import liquidPurple from "../../../assets/liquid-purple.png";

// LIP BULLET
import bulletBlue from "../../../assets/bullet-blue.png";
import bulletPink from "../../../assets/bullet-pink.png";
import bulletNude from "../../../assets/bullet-nude.png";
import bulletRose from "../../../assets/bullet-rose.png";
import bulletWine from "../../../assets/bullet-wine.png";
import bulletRed from "../../../assets/bullet-red.png";
import bulletPurple from "../../../assets/bullet-purple.png";

// BRUSHES + BAG
import brushP from "../../../assets/brush-p.png";
import brushG from "../../../assets/brush-g.png";
import bag from "../../../assets/bag.png";

// HAIR LINE
import shampooCondit from "../../../assets/shampoo-condit.png";
import hairMask from "../../../assets/hair-mask.png";
import leavein500 from "../../../assets/leavein-500.png";
import leavein300 from "../../../assets/leavein-300.png";

export const Products = [
  {
    id: 1,
    name: "Flawless 24H High Coverage Foundation",
    price: 89.90,
    type: "variable",
    defaultImage: foundation1,

    variations: [
      { id: "10", colorName: "10", image: foundation1 },
      { id: "20", colorName: "20", image: foundation2 },
      { id: "30", colorName: "30", image: foundation3 },
      { id: "40", colorName: "40", image: foundation4 },
      { id: "50", colorName: "50", image: foundation5 },
    ],

    rating: 5
  },

  {
    id: 2,
    name: "Flawless Perfect Blur Compact Powder",
    price: 79.90,
    type: "variable",
    defaultImage: powder1,

    variations: [
      { id: "10", colorName: "10", image: powder1 },
      { id: "20", colorName: "20", image: powder2 },
      { id: "30", colorName: "30", image: powder3 },
      { id: "40", colorName: "40", image: powder4 },
      { id: "50", colorName: "50", image: powder5 },
    ],

    rating: 5
  },

  {
    id: 3,
    name: "Flawless High Pigment Compact Blush",
    price: 39.90,
    type: "variable",
    defaultImage: blush1,

    variations: [
      { id: "rose", colorName: "Dusty Rose", image: blush1 },
      { id: "purple", colorName: "Royal Violet", image: blush2 },
      { id: "orange", colorName: "Coral Reef", image: blush3 },
      { id: "pink", colorName: "Pink Peony", image: blush4 },
    ],

    rating: 5
  },

  {
    id: 4,
    name: "Flawless High Impact Mascara",
    price: 69.90,
    type: "simple",
    image: mascaraF,
    rating: 4
  },

  {
    id: 5,
    name: "Flawless Glass Effect Gloss Labial",
    price: 49.90,
    type: "variable",
    defaultImage: gloss1,

    variations: [
      { id: "transparent", colorName: "Icy Sparkle", image: gloss1 },
      { id: "peach", colorName: "Seductive Peach", image: gloss2 },
      { id: "pink", colorName: "Passion Pink", image: gloss3 },
      { id: "wine", colorName: "Noble Wine", image: gloss4 },
      { id: "red", colorName: "Desire Red", image: gloss5 },
      { id: "orange", colorName: "Electric Orange", image: gloss6 },
    ],

    rating: 4.5
  },

  {
    id: 6,
    name: "Lilac Dream Total Length Mascara",
    price: 49.90,
    type: "simple",
    defaultImage: mascaraL,
    rating: 5
  },

  {
    id: 7,
    name: "Lilac Dream Eyeshadow Palette (20 colors)",
    price: 89.90,
    type: "simple",
    defaultImage: eyeshadowNude,
    rating: 4.3
  },

  {
    id: 8,
    name: "Flawless Camouflage Effect Stick Concealer",
    price: 49.90,
    type: "variable",
    defaultImage: concealer1,

    variations: [
      { id: "claro", colorName: "Ivory", image: concealer1 },
      { id: "medio", colorName: "Beige", image: concealer2 },
      { id: "escuro", colorName: "Espresso", image: concealer3 },
    ],

    rating: 4.5
  },

  {
    id: 9,
    name: "Aqua Veil Waterproof Definition Mascara",
    price: 89.90,
    type: "simple",
    defaultImage: mascaraA,
    rating: 4.3
  },

  {
    id: 10,
    name: "Flawless High Pigment Eyeshadow Palette (30 colors)",
    price: 129.90,
    type: "variable",
    defaultImage: eyeshadowPurple,

    variations: [
      { id: "green", colorName: "Moss Garden", image: eyeshadowGreen },
      { id: "orange", colorName: "Amber Hour", image: eyeshadowOrange },
      { id: "purple", colorName: "Mystic Bloom", image: eyeshadowPurple },
    ],

    rating: 4.5
  },

  {
    id: 11,
    name: "Infinite Glam Eyeshadow Palette (24 colors)",
    price: 129.90,
    type: "simple",
    defaultImage: eyeshadowMedia,
    rating: 4.3
  },

  {
    id: 12,
    name: "Supreme Glow Professional Eyeshadow Palette (120 colors)",
    price: 289.90,
    type: "simple",
    defaultImage: eyeshadow120,
    rating: 4.3
  },

  {
    id: 13,
    name: "Flawless 16H Matte Liquid Lipstick",
    price: 69.90,
    type: "variable",
    defaultImage: liquidRed,

    variations: [
      { id: "red", colorName: "Velvet Kiss", image: liquidRed },
      { id: "pink", colorName: "Diva Pink", image: liquidPink },
      { id: "orange2", colorName: "Sunset Vibe", image: liquidOrange },
      { id: "purple2", colorName: "Plum Noir", image: liquidPurple },
    ],

    rating: 4.5
  },

  {
    id: 14,
    name: "Flawless Creamy Shine Bullet Lipstick",
    price: 59.90,
    type: "variable",
    defaultImage: bulletBlue,

    variations: [
      { id: "pink", colorName: "Vivid Bloom", image: bulletPink },
      { id: "nude", colorName: "Almond Cream", image: bulletNude },
      { id: "rose2", colorName: "Rose Petal", image: bulletRose },
      { id: "wine2", colorName: "Deep Garnet", image: bulletWine },
      { id: "blue", colorName: "Midnight Sky", image: bulletBlue },
      { id: "red", colorName: "Scarlet Lust", image: bulletRed },
      { id: "lilac", colorName: "Soft Iris", image: bulletPurple },
    ],

    rating: 4.5
  },

  {
    id: 15,
    name: "Infinite Glam Brush Set (10 pcs)",
    price: 109.90,
    type: "simple",
    defaultImage: brushP,
    rating: 4.3
  },

  {
    id: 16,
    name: "Soft Dream Nécessaire",
    price: 159.90,
    type: "simple",
    defaultImage: bag,
    rating: 4.3
  },

  {
    id: 17,
    name: "Supreme Glow Professional Brush Set (17 pcs)",
    price: 179.90,
    type: "simple",
    defaultImage: brushG,
    rating: 4.3
  },

  {
    id: 18,
    name: "Luminesse High Shine Shampoo 1L + Conditioner 1L",
    price: 159.90,
    type: "simple",
    defaultImage: shampooCondit,
    rating: 4.3
  },

  {
    id: 19,
    name: "Luminesse High Shine Hair Mask - 500g",
    price: 179.90,
    type: "simple",
    defaultImage: hairMask,
    rating: 4.3
  },

  {
    id: 20,
    name: "Luminesse High Shine Leave-in Cream",
    price: 59.90,
    type: "variable",
    defaultImage: leavein500,

    variations: [
      { id: "500", colorName: "Leave-in 500mL", image: leavein500 },
      { id: "300", colorName: "Leave-in 300mL", image: leavein300 },
    ],

    rating: 4.5
  },
];

export default Products;
