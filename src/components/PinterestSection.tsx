import { motion } from "framer-motion";
import { fadeUp, hoverLift, viewportOnce } from "../lib/motionVariants";

const IMAGES = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=70",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=70",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=70",
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=70",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&q=70",
  "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=400&q=70",
  "https://images.unsplash.com/photo-1522444195799-478538b28823?w=400&q=70",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=70",
];
const SPANS = ["row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-2", "row-span-1", "row-span-1"];

export default function PinterestSection() {
  return (
    <section className="bg-muted-bg py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold mb-10"
        >
          Get Inspired Every Day
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense auto-rows-[140px] mb-10">
          {IMAGES.map((src, i) => (
            <motion.img
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              {...hoverLift}
              src={src}
              alt="Decor inspiration"
              loading="lazy"
              className={`rounded-xl w-full h-full object-cover hover:scale-[1.03] transition-transform ${SPANS[i]}`}
            />
          ))}
        </div>

        <a href="https://www.pinterest.com/sristisrivastava" target="_blank" rel="noopener noreferrer" className="btn-outline border-secondary">
          Follow on Pinterest
        </a>
      </div>
    </section>
  );
}
