import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "../lib/motionVariants";

const ARTICLES = [
  { title: "10 Modern Living Room Ideas", tag: "Living Room", excerpt: "Clean lines, warm textures, and a few rules worth breaking.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=70", slug: "10-modern-living-room-ideas" },
  { title: "Small Bedroom Makeover", tag: "Bedroom", excerpt: "How to make 90 sq ft feel twice the size.", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=70", slug: "small-bedroom-makeover-guide" },
  { title: "Luxury Decor Under ₹2000", tag: "Budget", excerpt: "Pieces that look expensive without the price tag.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=70", slug: "luxury-decor-under-2000" },
  { title: "How To Style Open Shelves", tag: "Kitchen", excerpt: "The 3-layer method we use in every shelf styling project.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&q=70", slug: "" },
  { title: "Best Amazon Home Decor Finds", tag: "Roundup", excerpt: "Our most-saved finds from the past quarter, tested.", image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=400&q=70", slug: "" },
];

export default function BlogPreview() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold mb-10"
        >
          Latest Articles
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))" }}
        >
          {ARTICLES.map((a) => (
            <motion.article key={a.title} variants={fadeUp} className="luxe-card overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="w-full aspect-[14/9] object-cover"
              />
              <div className="p-5">
                <span className="text-xs uppercase tracking-wide text-secondary font-semibold">
                  {a.tag}
                </span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2">{a.title}</h3>
                <p className="text-sm text-foreground/60 mb-3">{a.excerpt}</p>
                <Link
                  to={a.slug ? `/blog/${a.slug}` : "/blog"}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
