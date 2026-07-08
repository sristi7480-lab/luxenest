import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  sale?: boolean;
  editorsChoice?: boolean;
  affiliateUrl: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      className="luxe-card overflow-hidden flex flex-col"
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-[1.06]"
        />
        {product.sale && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Sale
          </span>
        )}
        {product.editorsChoice && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            Editor's Choice
          </span>
        )}
        <button
          aria-label="Toggle wishlist"
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          {wishlisted ? (
            <FaHeart className="text-primary" size={15} />
          ) : (
            <FaRegHeart className="text-foreground/70" size={15} />
          )}
        </button>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-medium text-base">{product.name}</h3>
        <p className="text-sm text-foreground/60">{product.description}</p>
        <div className="flex items-center gap-1 text-accent text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < product.rating ? "" : "opacity-25"} />
          ))}
        </div>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="font-bold text-primary font-display">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-foreground/40 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        <button className="text-xs underline self-start text-foreground/70 hover:text-primary transition-colors">
          Quick View
        </button>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="btn-primary text-center w-full mt-2 text-sm"
        >
          Buy on Amazon
        </a>
      </div>
    </motion.div>
  );
}
