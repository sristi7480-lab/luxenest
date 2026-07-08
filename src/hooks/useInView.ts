import { useRef } from "react";
import { useInView as useFramerInView } from "framer-motion";

/** Thin wrapper around framer-motion's useInView for scroll-triggered animation. */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useFramerInView(ref, { once: true, amount: 0.2 });
  return { ref, inView };
}
