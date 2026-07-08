import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motionVariants";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="bg-background">

      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/7] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
            alt="Beautiful home interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl font-semibold text-white text-center"
          >
            About LuxeNest
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6 text-foreground/70 leading-relaxed"
        >
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Hi, I'm Srish 👋
          </h2>
          <p>
            Welcome to LuxeNest — a space I created for anyone who believes that a beautiful
            home doesn't have to cost a fortune. I'm passionate about interior styling, smart
            shopping, and helping people transform their living spaces with carefully curated
            finds that are both affordable and elegant.
          </p>
          <p>
            LuxeNest was born out of a simple idea: there are so many incredible home decor
            products out there, but finding the right ones takes time, research, and a good eye.
            I do that work for you — browsing, testing, and handpicking pieces that genuinely
            look great in a real home, not just in a showroom.
          </p>
          <p>
            Whether you're doing a full room makeover or just looking for that one perfect
            accent piece, you'll find honest recommendations here — from cushions and lighting
            to rugs, mirrors, and storage. Every product you see on LuxeNest has been chosen
            with care, with your budget and style in mind.
          </p>
          <p>
            Follow along on{" "}
            <a
              href="https://www.pinterest.com/sristisrivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Pinterest
            </a>{" "}
            for daily decor inspiration, and feel free to{" "}
            <Link to="/contact" className="text-primary underline">
              reach out
            </Link>{" "}
            anytime — I'd love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="bg-muted-bg py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="font-display text-2xl font-semibold mb-10 text-center"
          >
            What LuxeNest Offers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🛋️",
                title: "Curated Collections",
                desc: "Every product is handpicked across Living Room, Bedroom, Kitchen, Lighting, and more.",
              },
              {
                icon: "💸",
                title: "Budget Friendly",
                desc: "Beautiful decor doesn't have to be expensive. We focus on value-for-money finds.",
              },
              {
                icon: "✅",
                title: "Honest Recommendations",
                desc: "We only recommend products with strong reviews and real customer feedback.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="luxe-card p-6 text-center"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-display text-lg font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section id="disclosure" className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-muted-bg border border-border rounded-xl p-8 space-y-4"
        >
          <h2 className="font-display text-xl font-semibold">Affiliate Disclosure</h2>
          <p className="text-sm text-foreground/60 leading-relaxed">
            LuxeNest is a participant in the Amazon Associates Programme, an affiliate
            advertising programme designed to provide a means for sites to earn advertising
            fees by advertising and linking to Amazon.in.
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed">
            <strong className="text-foreground">As an Amazon Associate I earn from qualifying purchases.</strong>{" "}
            This means if you click on a product link on this site and make a purchase on
            Amazon, we may receive a small commission at no extra cost to you. This helps
            keep LuxeNest running and allows us to continue curating great products for you.
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed">
            We only recommend products we genuinely believe in. Our editorial opinions are
            never influenced by affiliate relationships.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
