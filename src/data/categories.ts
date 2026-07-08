import type { Product } from "../components/ProductCard";

export interface Category {
  slug: string;
  name: string;
  image: string;
  description: string;
  // Curated products for this room/category. Empty until you add real
  // product screenshots for that category — same process used for Best Sellers.
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "living-room",
    name: "Living Room",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    description:
      "Layer warm textiles, low ambient lighting, and natural wood tones to create a room that invites you to slow down.",
    products: [],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    description:
      "Soft linens, calming neutrals, and gentle lighting for a bedroom that feels like a retreat.",
    products: [],
  },
  {
    slug: "dining-room",
    name: "Dining Room",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    description:
      "Statement lighting and warm wood tones to make every meal feel like an occasion.",
    products: [],
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    description:
      "Functional and beautiful — smart storage and decor that makes your kitchen a joy to cook in.",
    products: [],
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    description:
      "Spa-like calm with elegant mirrors, soft textiles, and natural materials.",
    products: [],
  },
  {
    slug: "wall-decor",
    name: "Wall Decor",
    image:
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
    description:
      "Mirrors, art, and statement pieces that turn empty walls into focal points.",
    products: [],
  },
  {
    slug: "lighting",
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=800&q=80",
    description:
      "From ambient pendant lights to cozy table lamps, set the mood for every room.",
    products: [],
  },
  {
    slug: "boho-decor",
    name: "Boho Decor",
    image:
      "https://images.unsplash.com/photo-1522444195799-478538b28823?w=800&q=80",
    description:
      "Rattan, macrame, and earthy textures for a relaxed, free-spirited look.",
    products: [],
  },
  {
    slug: "modern-farmhouse",
    name: "Modern Farmhouse",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    description:
      "Rustic charm meets clean lines — warm woods, neutral palettes, and cozy textures.",
    products: [],
  },
  {
    slug: "scandinavian-style",
    name: "Scandinavian Style",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
    description:
      "Light woods, soft neutrals, and clean minimalism for a calm, functional home.",
    products: [],
  },
  {
    slug: "japandi-interior",
    name: "Japandi Interior",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    description:
      "A blend of Japanese minimalism and Scandinavian warmth — quiet, intentional spaces.",
    products: [],
  },
  {
    slug: "industrial-design",
    name: "Industrial Design",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    description:
      "Exposed materials, metal accents, and raw textures for an edgy, urban feel.",
    products: [],
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
