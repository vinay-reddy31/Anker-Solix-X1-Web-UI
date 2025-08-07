"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function PowerTrifecta() {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [hoverPoint, setHoverPoint] = useState<number | null>(null);

  const togglePoint = (index: number) => {
    setActivePoint(activePoint === index ? null : index);
  };

  const points = [
    { id: 1, x: "40%", y: "30%", title: "Anker SOLIX Microinverter" },
    { id: 2, x: "68%", y: "64%", title: "Anker SOLIX EV Charger" },
    { id: 3, x: "36%", y: "70%", title: "Anker SOLIX User App" },
    { id: 4, x: "75%", y: "65%", title: "Anker SOLIX Energy Storage System" },
  ];

  return (
    <section className="bg-black text-white py-20 relative overflow-hidden flex flex-col items-center">
      {/* Motion Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 
                   bg-gradient-to-r from-[#00AEEF] to-[#00C853] bg-clip-text text-transparent"
      >
        The Power Trifecta
        <br />
        Backup, Savings, Energy Freedom
      </motion.h2>

      {/* Zoom Image with Overlay */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-[100%] h-auto"
        >
        <Image
            src="https://cdn.shopify.com/s/files/1/0508/1815/4652/files/KV_-_-tuya_3840x.jpg?v=1713950117"
            alt="Power Trifecta"
            width={1920}
            height={1080}
            className={`w-full h-auto transition-all duration-500 
            ${hoverPoint !== null ? "blur-sm opacity-80" : "blur-0 opacity-100"}`}
        />

        {/* Overlay (only on hover) */}
        {hoverPoint !== null && (
            <div className="absolute inset-0 bg-black bg-opacity-15 transition-opacity duration-500"></div>
        )}

        {/* Hotspots */}
        {points.map((point) => (
          <div
            key={point.id}
            className="absolute"
            style={{ top: point.y, left: point.x, transform: "translate(-50%, -50%)" }}
          >
            <button
              onClick={() => togglePoint(point.id)}
              onMouseEnter={() => setHoverPoint(point.id)}
              onMouseLeave={() => setHoverPoint(null)}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                activePoint === point.id ? "bg-white text-black" : "bg-cyan-400 text-white animate-pulse"
              }`}
            >
              {activePoint === point.id ? "-" : "+"}
            </button>

            {/* Tooltip (Visible on hover OR active) */}
            {(hoverPoint === point.id || activePoint === point.id) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 bg-black text-white p-3 rounded-lg shadow-lg w-48 text-sm"
              >
                <strong>{point.title}</strong>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
