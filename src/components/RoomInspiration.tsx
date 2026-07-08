import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideLeft, slideRight, floatImage, viewportOnce } from "../lib/motionVariants";
import { CATEGORIES } from "../data/categories";

const ROOM_SLUGS = ["living-room", "bedroom", "dining-room", "kitchen", "bathroom"];

export default function RoomInspiration() {
  const rooms = CATEGORIES.filter((c) => ROOM_SLUGS.includes(c.slug));

  return (
    <section id="rooms">
      {rooms.map((room, i) => {
        const reversed = i % 2 === 1;
        const bg = i % 2 === 0 ? "bg-muted-bg" : "bg-background";
        return (
          <div key={room.slug} className={`${bg} py-20 px-6`}>
            <div
              className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ${
                reversed ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                variants={reversed ? slideRight : slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <motion.img
                  variants={floatImage}
                  animate="float"
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="rounded-xl w-full object-cover aspect-[7/5]"
                />
              </motion.div>
              <motion.div
                variants={reversed ? slideLeft : slideRight}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
              >
                <h3 className="font-display text-2xl font-semibold mb-3">{room.name}</h3>
                <p className="text-foreground/70 mb-6" style={{ lineHeight: 1.7 }}>
                  {room.description}
                </p>
                <Link to={`/category/${room.slug}`} className="btn-outline">
                  Shop Products
                </Link>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
