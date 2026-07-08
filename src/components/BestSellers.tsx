import { motion } from "framer-motion";
import ProductCard, { type Product } from "./ProductCard";
import { staggerContainer, fadeUp, viewportOnce } from "../lib/motionVariants";

// All product links below use real Amazon affiliate short-links (amzn.to),
// generated via Amazon SiteStripe with your tag (srishticurati-21) included.
const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "CASA-NEST Linen Embroidery Cushion Cover (16x16\", Pack of 2)",
    description: "Floral embroidered linen cushion covers, beige, set of 2.",
    image: "https://m.media-amazon.com/images/I/61pzKwySR+L._SY879_.jpg",
    price: "₹549",
    originalPrice: "₹1,499",
    rating: 4,
    sale: true,
    affiliateUrl: "https://amzn.to/4eBUiRx",
  },
  {
    id: "2",
    name: "AKWAY Rattan Hanging Lamp / Bamboo Ceiling Pendant Light",
    description: "Handwoven rattan and bamboo pendant lamp, warm ambient glow.",
    image: "https://m.media-amazon.com/images/I/61+mS50mhXL._SX522_.jpg",
    price: "₹3,699",
    originalPrice: "₹3,999",
    rating: 5,
    sale: true,
    affiliateUrl: "https://amzn.to/4eVpSsl",
  },
  {
    id: "3",
    name: "Trio Ceramic Vase Set, Matte Finish",
    description: "Handmade set of 3 decorative ceramic vases, modern matte finish.",
    image: "https://m.media-amazon.com/images/I/71-WNEe2mcL._SX679_.jpg",
    price: "₹949",
    originalPrice: "₹2,700",
    rating: 4,
    sale: true,
    affiliateUrl: "https://amzn.to/3T9Tvid",
  },
  {
    id: "4",
    name: "Regal Carpet Handwoven Wool Area Rug, 5x7 ft",
    description: "Export-quality handwoven wool blend rug, tufted, beige.",
    image: "https://m.media-amazon.com/images/I/51Vya4-CpNL.jpg",
    price: "₹8,949",
    originalPrice: "₹16,000",
    rating: 5,
    sale: true,
    affiliateUrl: "https://amzn.to/4vGaAio",
  },
  {
    id: "5",
    name: "Rousrie Premium Glass Wall Mirror, Golden Frame, 24x18\"",
    description: "Distortion-free glass mirror with elegant golden frame.",
    image: "https://m.media-amazon.com/images/I/811qWEKWV+L._SX679_.jpg",
    price: "₹1,999",
    originalPrice: "₹4,999",
    rating: 4,
    sale: true,
    affiliateUrl: "https://amzn.to/4gTaBuy",
  },
  {
    id: "6",
    name: "HomeStorie Eco-Friendly Bamboo Storage Boxes, Set of 3",
    description: "Stackable bamboo storage boxes with lid, large+medium+small.",
    image: "https://m.media-amazon.com/images/I/71Fh0aZ+oLL._SX679_.jpg",
    price: "₹1,785",
    originalPrice: "₹2,499",
    rating: 4,
    sale: true,
    affiliateUrl: "https://amzn.to/4gTaE9I",
  },
];

export default function BestSellers() {
  return (
    <section id="best-sellers" className="bg-muted-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10"
        >
          <h2 className="font-display text-3xl font-semibold mb-2">Best Sellers</h2>
          <p className="text-foreground/60">
            Our most-loved pieces, handpicked for style and comfort.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {PRODUCTS.map((p) => (
            <motion.div key={p.id} variants={fadeUp}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
