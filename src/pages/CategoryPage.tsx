import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { getCategoryBySlug } from "../data/categories";
import { fadeUp } from "../lib/motionVariants";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold mb-4">
          Category not found
        </h1>
        <p className="text-foreground/60 mb-6">
          That room or style doesn't exist yet.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/40 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-4xl font-semibold text-white mb-2"
            >
              {category.name}
            </motion.h1>
            <p className="text-white/85 max-w-xl">{category.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {category.products.length === 0 ? (
          <p className="text-foreground/60 text-center py-20">
            We're curating products for this collection — check back soon, or
            browse our{" "}
            <Link to="/#best-sellers" className="text-primary underline">
              Best Sellers
            </Link>{" "}
            in the meantime.
          </p>
        ) : (
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
          >
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
