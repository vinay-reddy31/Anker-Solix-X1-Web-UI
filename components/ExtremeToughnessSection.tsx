"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "100% Power at Frigid -4°F",
    content: "X1 solves battery power challenges during freezing weather. Thermal boosting kicks in at 32°F and keeps the battery operating at 68°F.",
  },
  {
    title: "100% Power at Ultra-Hot 131°F",
    content: "Most energy storage systems suffer from power output drops when the temperature rises. Not X1. It maintains 100% power even at 131°F thanks to its modular design and cooling system.",
  },
  {
    title: "IP65 Protection, 10-Year Warranty",
    content:
      "The die-cast body creates an IP65-rated seal that makes X1 dust- and water-resistant. You're also protected for a decade with a 10-year warranty.",
  },
];

export default function ExtremeToughnessSection() {
  const [openIndex, setOpenIndex] = useState(2); // Default open

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
          Power Up with Extreme Toughness
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Outages can be particularly brutal in the winter and summer. X1 is
          equipped to endure the extreme chill and heat with its superior build
          for peak performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Accordion */}
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="border-b border-gray-700 pb-4">
              <button
                className="flex justify-between w-full items-center"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-left">
                  {item.title}
                </h3>
                <span className="text-xl">
                  {openIndex === i ? "▾" : "▸"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 text-gray-400 text-sm leading-relaxed pr-6"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://cdn.shopify.com/s/files/1/0508/1815/4652/files/Mask_group_55_-tuya_3840x.jpg?v=1714104655"
            alt="Rainproof System"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
