import { motion, useReducedMotion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useParallaxHero } from "../hooks/useParallaxHero";
import { staggerContainer, fadeUp } from "../lib/motionVariants";

export default function Hero() {
  const { ref, y } = useParallaxHero();
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-36 pb-24 px-6 overflow-hidden"
    >
      <motion.div
        style={{ y: reduce ? 0 : y }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img
          src="https://picsum.photos/seed/luxenest-hero/1600/1000"
          alt="Warm sunlit modern living room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,46,46,0.15) 0%, rgba(199,107,69,0.25) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl flex flex-col items-center"
      >
        <motion.span
          variants={fadeUp}
          className="luxe-card text-accent text-xs uppercase tracking-widest font-semibold px-4 py-2 mb-6"
        >
          Luxury Home Decor
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display font-semibold text-foreground"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.05 }}
        >
          Create Spaces You'll Love Coming Home To
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-foreground/70 max-w-2xl mt-5 mb-8"
          style={{ lineHeight: 1.7 }}
        >
          Discover hand-picked home decor ideas, furniture, lighting, wall
          art, rugs, and accessories that bring warmth, elegance, and comfort
          into every room.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <a href="#best-sellers" className="btn-primary">
            Shop Collection
          </a>
          <a href="#rooms" className="btn-outline">
            Explore Rooms
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-2 mt-10"
        >
          <div className="flex text-accent gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-sm text-foreground/60">
            Trusted by thousands of homeowners
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
