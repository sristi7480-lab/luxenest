import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motionVariants";
import { FaEnvelope, FaPinterestP, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mykqnkyd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          Get In Touch
        </motion.h1>
        <p className="text-foreground/60 max-w-md mx-auto">
          Have a question, a product suggestion, or just want to say hi? I'd love to hear from you!
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-foreground/60 leading-relaxed">
              Whether you're looking for decor advice, want to collaborate, or have feedback
              about LuxeNest — drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-foreground/70">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-0.5">Email</p>
                <a href="mailto:luxenest.decor26@gmail.com" className="text-sm hover:text-primary transition-colors">
                  luxenest.decor26@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground/70">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FaPinterestP className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-0.5">Pinterest</p>
                <a
                  href="https://www.pinterest.com/sristisrivastava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  @sristisrivastava
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground/70">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FaInstagram className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-0.5">Instagram</p>
                <span className="text-sm text-foreground/40">Coming soon</span>
              </div>
            </div>
          </div>

          <div className="bg-muted-bg rounded-xl p-5 text-sm text-foreground/60 leading-relaxed">
            💡 <strong className="text-foreground">For product recommendations</strong> — tell me
            your room type, budget, and style preference and I'll point you in the right direction!
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {status === "success" ? (
            <div className="luxe-card p-10 text-center space-y-4">
              <span className="text-5xl">🎉</span>
              <h3 className="font-display text-xl font-semibold">Message Sent!</h3>
              <p className="text-foreground/60 text-sm">
                Thanks for reaching out! I'll get back to you within 24–48 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-primary text-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="luxe-card p-8 space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground/70 block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Priya Sharma"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 block mb-1.5">
                  Subject
                </label>
                <select
                  name="subject"
                  required
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                >
                  <option value="">Select a topic</option>
                  <option value="Product Recommendation">Product Recommendation</option>
                  <option value="Collaboration">Collaboration / Partnership</option>
                  <option value="Feedback">Feedback</option>
                  <option value="General Query">General Query</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground/70 block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me what's on your mind..."
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full text-sm disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
