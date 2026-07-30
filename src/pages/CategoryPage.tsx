import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard, { type Product } from "../components/ProductCard";
import { getCategoryBySlug } from "../data/categories";
import { fadeUp } from "../lib/motionVariants";
import { supabase } from "../lib/supabaseClient";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", slug)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching category products:", error.message);
        setLoading(false);
        return;
      }

      const mapped: Product[] = data.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        image: p.image,
        price: p.price,
        originalPrice: p.original_price ?? undefined,
        rating: p.rating,
        sale: p.sale,
        editorsChoice: p.editors_choice,
        affiliateUrl: p.affiliate_url,
      }));

      setProducts(mapped);
      setLoading(false);
    };

    fetchProducts();
  }, [slug]);

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
        {loading ? (
          <p className="text-center py-20 text-foreground/60">Loading products...</p>
        ) : products.length === 0 ? (
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}