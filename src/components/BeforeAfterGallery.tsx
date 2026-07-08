import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motionVariants";

const PAIRS = [
  {
    before:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    before:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    before:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    before:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=70&sat=-100",
    after:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
  },
];

export default function BeforeAfterGallery() {
  return (
    <section className="bg-muted-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display text-3xl font-semibold mb-10"
        >
          Room Transformations
        </motion.h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="!pb-12"
        >
          {PAIRS.map((pair, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src={pair.before}
                    alt="Before"
                    loading="lazy"
                    className="rounded-xl w-full aspect-[5/4] object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-foreground/80 text-white text-xs px-3 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={pair.after}
                    alt="After"
                    loading="lazy"
                    className="rounded-xl w-full aspect-[5/4] object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
