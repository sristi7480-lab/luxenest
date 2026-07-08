import { motion } from "framer-motion";
import { FaGem, FaTags, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import { staggerContainer, fadeUp, viewportOnce, hoverLift } from "../lib/motionVariants";

const FEATURES = [
  { icon: FaGem, title: "Curated Home Products", desc: "Handpicked quality decor." },
  { icon: FaTags, title: "Affordable Luxury", desc: "Premium look without premium prices." },
  { icon: FaShieldAlt, title: "Trusted Recommendations", desc: "Carefully selected Amazon products." },
  { icon: FaLightbulb, title: "Design Inspiration", desc: "Ideas for every room and style." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold mb-12"
        >
          Why Choose LuxeNest
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} {...hoverLift} className="luxe-card p-7">
              <Icon className="text-accent mx-auto mb-4" size={32} />
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-foreground/60">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
