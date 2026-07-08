import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motionVariants";
import { BLOG_POSTS } from "../data/blogs";

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Hero */}
      <section className="bg-muted-bg py-20 px-6 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-4xl font-semibold mb-3"
        >
          LuxeNest Blog
        </motion.h1>
        <p className="text-foreground/60 max-w-md mx-auto">
          Decor ideas, styling tips, and curated Amazon finds — to help you create
          a home you love on any budget.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeUp}
              className="luxe-card overflow-hidden group"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="overflow-hidden aspect-[16/9]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/40">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/40">
                    By {post.author} · {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
