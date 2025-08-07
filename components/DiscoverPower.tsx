import { motion } from "framer-motion";

export default function DiscoverPower() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center bg-black">
      
      {/* Video Background */}
      <video
        src="https://cdn.shopify.com/videos/c/o/v/f8d9b86dd6944ccd85208edba0b42217.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Overlay for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Animated Text */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-3xl md:text-5xl font-bold text-center px-4"
      >
        <span className="bg-gradient-to-r from-[#00AEEF] to-[#00C853] bg-clip-text text-transparent">
          Discover the Power of X1
        </span>
      </motion.h2>
    </section>
  );
}
