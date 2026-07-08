import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motionVariants";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-primary py-16 px-6 text-center text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-xl mx-auto"
      >
        <h2 className="font-display text-3xl font-semibold mb-6">
          Get Weekly Home Decor Inspiration
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full bg-white text-foreground px-5 py-3 flex-1 outline-none"
          />
          <button
            type="submit"
            className="bg-accent text-foreground font-semibold rounded-full px-7 py-3 hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="text-sm mt-4 opacity-90">You're subscribed — welcome to LuxeNest!</p>
        )}
        {status === "error" && (
          <p className="text-sm mt-4 opacity-90">Please enter a valid email address.</p>
        )}
      </motion.div>
    </section>
  );
}
