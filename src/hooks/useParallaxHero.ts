import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

/** Returns a ref for the hero section and a y MotionValue for a subtle parallax background. */
export function useParallaxHero(): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ~0.85x speed parallax, disabled on mobile
  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 120]);

  return { ref, y };
}
