"use client";

import { motion } from "framer-motion";

export default function SmartEnergySection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-green-400 text-transparent bg-clip-text">
          Smart Energy, Max Savings
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          X1 features seven distinct energy modes. Three are for emergencies and four of them can be
          switched interchangeably to give you the best position to manage your energy.
        </p>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg"
      >
        <video
          src="https://cdn.shopify.com/videos/c/o/v/1b1bac0f31c6457d9ce0236cd8ab851e.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Bottom Text Blocks */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#111] p-6 rounded-lg flex-1"
        >
          <h3 className="text-xl font-bold">Profit in NEM 3.0 Mode</h3>
          <p className="mt-2 text-gray-400">
            Activate with one tap in the Anker app to beat NEM 3.0. Charge X1 with cheap electricity prices during the day and sell back electricity at night during peak prices for a profit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#111] p-6 rounded-lg flex-1"
        >
          <h3 className="text-xl font-bold">4.3X More Earnings</h3>
          <p className="mt-2 text-gray-400">
            Profit when selling electricity under NEM 3.0 mode.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
