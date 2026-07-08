import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCard({
  name,
  image,
  slug,
}: {
  name: string;
  image: string;
  slug: string;
}) {
  return (
    <Link to={`/category/${slug}`}>
      <motion.div className="luxe-card overflow-hidden relative aspect-[4/5] group cursor-pointer">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={400}
          height={500}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 text-white font-display text-lg font-medium translate-y-1 group-hover:-translate-y-0.5 transition-transform">
          {name}
        </span>
      </motion.div>
    </Link>
  );
}
