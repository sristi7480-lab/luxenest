import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motionVariants";
import { CATEGORIES } from "../data/categories";

const TRENDING_SLUGS = [
  "living-room",
  "bedroom",
  "boho-decor",
  "modern-farmhouse",
  "scandinavian-style",
  "japandi-interior",
  "industrial-design",
];

export default function TrendingCollections() {
  const collections = CATEGORIES.filter((c) => TRENDING_SLUGS.includes(c.slug));

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
          Trending Collections
        </motion.h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-12"
        >
          {collections.map((c) => (
            <SwiperSlide key={c.slug}>
              <div className="luxe-card overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 flex items-center justify-between">
                  <span className="font-medium text-sm">{c.name}</span>
                  <Link to={`/category/${c.slug}`} className="text-xs underline text-primary">
                    Shop Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
