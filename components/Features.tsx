"use client";

import { motion } from "framer-motion";

export default function ModularVideoSection() {
  return (
    <>
      {/* VIDEO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          src="https://cdn.shopify.com/videos/c/vp/bc0f0d84abe84aa8a1210b6344ba046d/bc0f0d84abe84aa8a1210b6344ba046d.HD-1080p-7.2Mbps-27053148.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        {/* Heading + Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Modular Build
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            Power That Scales with You
          </motion.h3>

          <motion.a
            href="https://cdn.shopify.com/videos/c/vp/bc0f0d84abe84aa8a1210b6344ba046d/bc0f0d84abe84aa8a1210b6344ba046d.HD-1080p-7.2Mbps-27053148.mp4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="px-6 py-3 bg-gradient-to-r from-[#00AEEF] to-[#00C853] rounded-full text-white font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Watch Video
          </motion.a>
        </motion.div>
      </section>

      {/* MODULAR INFO SECTION */}
      <section className="bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Each battery is packed with an innovative energy optimizer for
              independent charging and discharging, providing more attainable
              energy.
            </p>
            <p className="text-lg md:text-xl mt-6 leading-relaxed">
              The energy optimizer is what makes the modular design possible,
              allowing you to scale output and capacity based on your needs.
            </p>
          </motion.div>

          {/* Right Column Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                5–180kWh | 3–36kW
              </h3>
              <p className="text-sm md:text-base text-gray-400 mt-1">
                Energy for Your Exact Needs
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold">0 Energy Loss</h3>
              <p className="text-sm md:text-base text-gray-400 mt-1">
                While Expanding Capacity
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold">2350kWh</h3>
              <p className="text-sm md:text-base text-gray-400 mt-1">
                More Attainable Energy
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
