"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function MinimalistDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7, once: false });

  return (
    <section className="relative h-[300vh] bg-black overflow-hidden">
      {/* Sticky container for video and text */}
      <div className="sticky top-0 h-screen w-full z-10">
        {/* Video layer */}
        <video
          src="https://cdn.shopify.com/videos/c/o/v/7ca7ee6ebe3c46a48de5b88eecc7aa88.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay text appears after scroll threshold */}
        <div
          ref={ref}
          className="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Minimalist Design <br /> Sleek Power for Your Home
            </h2>
            <a
              href="https://cdn.shopify.com/videos/c/o/v/7ca7ee6ebe3c46a48de5b88eecc7aa88.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-green-400 hover:opacity-90 transition"
            >
              Watch Video
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
