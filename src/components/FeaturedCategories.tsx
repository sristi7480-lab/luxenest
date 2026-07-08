import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "../data/categories";
import { staggerContainer, fadeUp, viewportOnce } from "../lib/motionVariants";

// Show a curated subset of rooms on the homepage grid.
const FEATURED_SLUGS = [
  "living-room",
  "bedroom",
  "dining-room",
  "kitchen",
  "bathroom",
  "wall-decor",
  "lighting",
  "boho-decor",
];

export default function FeaturedCategories() {
  const categories = CATEGORIES.filter((c) => FEATURED_SLUGS.includes(c.slug));

  return (
    <section className="bg-muted-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold mb-10"
        >
          Shop by Room
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
        >
          {categories.map((c) => (
            <motion.div key={c.slug} variants={fadeUp}>
              <CategoryCard name={c.name} image={c.image} slug={c.slug} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
