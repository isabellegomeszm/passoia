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
import shampooCondit from "../../../assets/kit-hair.png";
import hairMask from "../../../assets/hair-mask.png";
import leavein500 from "../../../assets/leavein-500.png";
import leavein300 from "../../../assets/leavein-300.png";

export const Products = [
  {
    id: 1,
    name: "Flawless 24H High Coverage Foundation",
    type: "variable",
    category: "Face",
    defaultImage: foundation1,

    variations: [
      { id: "10", colorName: "#10", colorHex: "#F0D9C6", price: 99.90, image: foundation1 },
      { id: "20", colorName: "#20", colorHex: "#E1BD9D", price: 99.90, image: foundation2 },
      { id: "30", colorName: "#30", colorHex: "#B59777", price: 99.90, image: foundation3 },
      { id: "40", colorName: "#40", colorHex: "#AE845F", price: 99.90, image: foundation4 },
      { id: "50", colorName: "#50", colorHex: "#503528ff", price: 99.90, image: foundation5 },
    ],

    rating: 5
  },

  {
    id: 2,
    name: "Flawless Perfect Blur Compact Powder",
    price: 89.90,
    type: "variable",
    category: "Face",
    defaultImage: powder1,

    variations: [
      { id: "10", colorName: "#10", colorHex: "#F0D9C6", price: 79.90, image: powder1 },
      { id: "20", colorName: "#20", colorHex: "#E1BD9D", price: 79.90, image: powder2 },
      { id: "30", colorName: "#30", colorHex: "#B59777", price: 79.90, image: powder3 },
      { id: "40", colorName: "#40", colorHex: "#AE845F", price: 79.90, image: powder4 },
      { id: "50", colorName: "#50", colorHex: "#463026ff", price: 79.90, image: powder5 },
    ],

    rating: 5
  },

  {
    id: 3,
    name: "Flawless High Pigment Compact Blush",
    type: "variable",
    category: "Face",
    defaultImage: blush1,

    variations: [
      { id: "rose", colorName: "DUSTY ROSE", colorHex: "#D7908F", price: 59.90, image: blush1 },
      { id: "purple", colorName: "ROYAL VIOLET", colorHex: "#853B88", price: 59.90, image: blush2 },
      { id: "orange", colorName: "CORAL REEF", colorHex: "#E56D41", price: 59.90, image: blush3 },
      { id: "pink", colorName: "PINK PEONY", colorHex: "#D85B7E", price: 59.90, image: blush4 },
    ],

    rating: 5
  },

  {
    id: 4,
    name: "Flawless High Impact Mascara",
    price: 69.90,
    type: "simple",
    category: "Eyes",
    image: mascaraF,
    rating: 4
  },

  {
    id: 5,
    name: "Flawless Glass Effect Gloss Labial",
    type: "variable",
    category: "Lips",
    defaultImage: gloss1,

    variations: [
      { id: "transparent", colorName: "ICY SPARKLE",colorHex: "#EAEAEA", price: 49.90, image: gloss1 },
      { id: "peach", colorName: "SEDUCTIVE PEACH", colorHex: "#CA8B75", price: 49.90, image: gloss2 },
      { id: "pink", colorName: "PASSION PINK", colorHex: "#E96D96", price: 49.90, image: gloss3 },
      { id: "wine", colorName: "NOBLE WINE", colorHex: "#DB665D", price: 49.90, image: gloss4 },
      { id: "red", colorName: "DESIRE RED", colorHex: "#BA343A", price: 49.90, image: gloss5 },
      { id: "orange", colorName: "ELECTRIC ORANGE", colorHex: "#5F2027", price: 49.90, image: gloss6 },
    ],

    rating: 4.5
  },

  {
    id: 6,
    name: "Lilac Dream Total Length Mascara",
    price: 49.90,
    type: "simple",
    category: "Eyes",
    defaultImage: mascaraL,
    rating: 5
  },

  {
    id: 7,
    name: "Lilac Dream Eyeshadow Palette (20 colors)",
    price: 89.90,
    type: "simple",
    category: "Eyes",
    defaultImage: eyeshadowNude,
    rating: 4.3
  },

  {
    id: 8,
    name: "Flawless Camouflage Effect Stick Concealer",
    type: "variable",
    category: "Face",
    defaultImage: concealer1,

    variations: [
      { id: "claro", colorName: "IVORY", colorHex: "#EFE6D5", price: 49.90, image: concealer1 },
      { id: "medio", colorName: "BEIGE", colorHex: "#CB906B", price: 49.90, image: concealer2 },
      { id: "escuro", colorName: "ESPRESSO", colorHex: "#77432F", price: 49.90, image: concealer3 },
    ],

    rating: 4.5
  },

  {
    id: 9,
    name: "Aqua Veil Waterproof Definition Mascara",
    price: 89.90,
    type: "simple",
    category: "Eyes",
    defaultImage: mascaraA,
    rating: 4.3
  },

  {
    id: 10,
    name: "Infinite Glam Eyeshadow Palette  (24 colors)",
    price: 129.90,
    type: "simple",
    category: "Eyes",
    defaultImage: eyeshadowMedia,
    rating: 4.3
  },

  {
    id: 11,
    name: "Supreme Glow Professional Eyeshadow Palette  (40 colors)",
    price: 289.90,
    type: "simple",
    category: "Eyes",
    defaultImage: eyeshadow120,
    rating: 4.3
  },

  {
    id: 12,
    name: "Flawless 16H Matte Liquid Lipstick",
    type: "variable",
    category: "Lips",
    defaultImage: liquidRed,

    variations: [
      { id: "red", colorName: "VELVET KISS", colorHex: "#881719", price: 49.90, image: liquidRed },
      { id: "pink", colorName: "DIVA PINK", colorHex: "#D03984", price: 49.90, image: liquidPink },
      { id: "orange2", colorName: "SUNSET VIBE", colorHex: "#AF5331", price: 49.90, image: liquidOrange },
      { id: "purple2", colorName: "PLUM NOIR", colorHex: "#3B1B27", price: 49.90, image: liquidPurple },
    ],

    rating: 4.5
  },

  {
    id: 13,
    name: "Flawless Creamy Shine Bullet Lipstick",
    type: "variable",
    category: "Lips",
    defaultImage: bulletBlue,

    variations: [
      { id: "pink", colorName: "VIVID BLOOM", colorHex: "#B72D60", price: 49.90, image: bulletPink },
      { id: "nude", colorName: "ALMOND CREAM", colorHex: "#AD7263", price: 49.90, image: bulletNude },
      { id: "rose2", colorName: "ROSE PETAL", colorHex: "#A86D6D", price: 49.90, image: bulletRose },
      { id: "wine2", colorName: "DEEP GARNET", colorHex: "#7A3336", price: 49.90, image: bulletWine },
      { id: "blue", colorName: "MIDNIGHT SKY", colorHex: "#616A7F", price: 49.90, image: bulletBlue },
      { id: "red", colorName: "SCARLET LUST", colorHex: "#A41110", price: 49.90, image: bulletRed },
      { id: "lilac", colorName: "SOFT IRIS", colorHex: "#82405F", price: 49.90, image: bulletPurple },
    ],

    rating: 4.5
  },

  {
    id: 14,
    name: "Infinite Glam Brush Set (10 pcs)",
    price: 109.90,
    type: "simple",
    category: "Others",
    defaultImage: brushP,
    rating: 4.3
  },

  {
    id: 15,
    name: "Soft Dream Nécessaire",
    price: 159.90,
    type: "simple",
    category: "Others",
    defaultImage: bag,
    rating: 4.3
  },

  {
    id: 16,
    name: "Supreme Glow Professional Brush Set (17 pcs)",
    price: 179.90,
    type: "simple",
    category: "Others",
    defaultImage: brushG,
    rating: 4.3
  },

  {
    id: 17,
    name: "Luminesse High Shine Shampoo 1L + Conditioner 1L",
    price: 159.90,
    type: "simple",
    category: "Hair",
    defaultImage: shampooCondit,
    rating: 4.3
  },

  {
    id: 18,
    name: "Luminesse High Shine Hair Mask - 500g",
    price: 179.90,
    type: "simple",
    category: "Hair",
    defaultImage: hairMask,
    rating: 4.3
  },

  {
    id: 19,
    name: "Luminesse High Shine Leave-in Cream",
    type: "variable",
    category: "Hair",
    defaultImage: leavein500,

    variations: [
      { id: "500", colorName: "500mL", price: 49.90, image: leavein500 },
      { id: "300", colorName: "300mL", price: 39.90, image: leavein300 },
    ],

    rating: 4.5
  },
];

export default Products;
