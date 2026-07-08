import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { fadeUp, viewportOnce } from "../lib/motionVariants";

const TESTIMONIALS = [
  { name: "Anjali Mehta", role: "Homeowner", quote: "Every piece I bought from a LuxeNest recommendation actually looked exactly like the photos. My living room finally feels finished.", rating: 5 },
  { name: "Rohan Kapoor", role: "Interior Designer", quote: "I send clients here for budget-friendly accent pieces. The curation is genuinely good, not just generic Amazon bestseller lists.", rating: 5 },
  { name: "Priya Nair", role: "Decor Blogger", quote: "The before/after room features gave me real ideas I could actually execute on a normal budget.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold mb-10"
        >
          What Our Community Says
        </motion.h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }}
          className="!pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="luxe-card p-7 h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=B5651D&color=fff&size=56`}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-foreground/50">{t.role}</p>
                  </div>
                </div>
                <p className="italic text-sm text-foreground/70" style={{ lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <div className="flex gap-1 text-accent mt-auto">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < t.rating ? "" : "opacity-25"} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
