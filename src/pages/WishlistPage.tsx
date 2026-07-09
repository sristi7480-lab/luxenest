import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import ProductCard, { type Product } from "../components/ProductCard";

// Import your product data so we can match saved product_ids to full product info
import { PRODUCTS as BEST_SELLERS } from "../components/BestSellers";

export default function WishlistPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [wishlistedProducts, setWishlistedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session?.user?.id ?? null);
    });
  }, []);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchWishlist = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("wishlists")
        .select("product_id")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching wishlist:", error.message);
        setLoading(false);
        return;
      }

      const savedIds = data.map((row) => row.product_id);
      const matched = BEST_SELLERS.filter((p) => savedIds.includes(p.id));
      setWishlistedProducts(matched);
      setLoading(false);
    };

    fetchWishlist();
  }, [userId]);

  if (!userId) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold mb-4">Your Wishlist</h1>
        <p className="text-foreground/60">Please sign in to view your saved items.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <p className="text-foreground/60">Loading your wishlist...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <h1 className="font-display text-3xl font-semibold mb-2">Your Wishlist</h1>
      <p className="text-foreground/60 mb-10">
        {wishlistedProducts.length} saved item{wishlistedProducts.length !== 1 ? "s" : ""}
      </p>

      {wishlistedProducts.length === 0 ? (
        <p className="text-foreground/60">
          You haven't saved anything yet. Browse our collections and tap the heart icon on
          items you love.
        </p>
      ) : (
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {wishlistedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}