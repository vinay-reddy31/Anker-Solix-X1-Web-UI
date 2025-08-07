"use client";
import { motion } from "framer-motion";

export default function MinimalCostSection() {
  return (
    <section className="bg-black text-white px-0">
      {/* Heading Section */}
      <div className="text-center py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
        >
          Scale at Minimal Cost
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          Thanks to the modular design, you can start with a small system and add to it as your
          family grows. Every battery added connects to your system without energy loss.
        </motion.p>
      </div>

      {/* Sticky Video + Scroll Reveal Text Section */}
      <div className="relative h-[200vh]">
        {/* Sticky wrapper */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/6957b3ccfcfc4862b8fc32a495b8c3c1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Centered Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h3 className="text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text px-4">
              Always-On Power <br className="hidden md:block" />
              Ready for the Extreme
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
