import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motionVariants";
import { getPostBySlug } from "../data/blogs";
import ProductCard from "../components/ProductCard";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold mb-4">Post not found</h1>
        <Link to="/blog" className="btn-primary inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/8] w-full overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/50 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-10 w-full">
            <span className="text-xs uppercase tracking-wide text-accent font-semibold">
              {post.category}
            </span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-3xl md:text-4xl font-semibold text-white mt-2 mb-3 leading-snug"
            >
              {post.title}
            </motion.h1>
            <p className="text-white/70 text-sm">
              By {post.author} · {post.date} · {post.readTime}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="space-y-5">
          {post.content.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2 key={i} className="font-display text-xl font-semibold mt-8 mb-2">
                  {section.text}
                </h2>
              );
            }
            if (section.type === "tip") {
              return (
                <div key={i} className="bg-primary/5 border-l-4 border-primary px-5 py-4 rounded-r-xl">
                  <p className="text-sm text-foreground/70 leading-relaxed italic">
                    {section.text}
                  </p>
                </div>
              );
            }
            return (
              <p key={i} className="text-foreground/70 leading-relaxed text-[15px]">
                {section.text}
              </p>
            );
          })}
        </div>

        {/* Amazon Disclosure */}
        <div className="mt-10 p-4 bg-muted-bg rounded-xl text-xs text-foreground/50 leading-relaxed">
          <strong className="text-foreground/70">Affiliate Disclosure: </strong>
          As an Amazon Associate, LuxeNest earns from qualifying purchases. 
          Clicking product links and purchasing helps support this site at no extra cost to you.
        </div>
      </article>

      {/* Embedded Products */}
      {post.products && post.products.length > 0 && (
        <section className="bg-muted-bg py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl font-semibold mb-8">
              Shop Products From This Article
            </h2>
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
            >
              {post.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link to="/blog" className="text-sm text-primary hover:underline">
          ← Back to all articles
        </Link>
      </div>

    </div>
  );
}
