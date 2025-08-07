import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    label: "Before Outage",
    video: "https://cdn.shopify.com/videos/c/vp/a27f13b34f824979805c7dd3bd455596/a27f13b34f824979805c7dd3bd455596.HD-1080p-4.8Mbps-26989145.mp4",
    title: "Storm Guard Mode",
    description:
      "X1 activates Storm Guard mode automatically when the National Weather Service issues a warning. Your battery will be fully charged in case an outage occurs.",
  },
  {
    label: "Outage Occurance",
    video: "https://cdn.shopify.com/videos/c/vp/786c567505ee45b1a4f10a0ab70d2799/786c567505ee45b1a4f10a0ab70d2799.HD-720p-4.5Mbps-26994865.mp4",
    title: "Under 20ms",
    description:
      "In less than 20ms, your power switches over to X1, so you can run appliances without interruption.",
  },
  {
    label: "During Blackouts",
    video: "https://cdn.shopify.com/videos/c/vp/987bd3fafee1469481b7a39a3cbe8bb5/987bd3fafee1469481b7a39a3cbe8bb5.HD-720p-3.0Mbps-27033966.mp4",
    title: "1.1X Rated Power Output",
    description:
      "Power with confidence thanks to the 1.1X rated power output. It's more than enough to run high-wattage home appliances at the same time.",
  },
  {
    label: "Extended Outages",
    video: "https://cdn.shopify.com/videos/c/vp/987bd3fafee1469481b7a39a3cbe8bb5/987bd3fafee1469481b7a39a3cbe8bb5.HD-720p-3.0Mbps-27033966.mp4",
    title: "24/7 Solar Power",
    description:
      "Normally, blackouts disrupt solar systems, too. Not with X1. You'll have a constant power supply for several days of energy.",
  },
];

export default function OffGridTabSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
          Extreme Off-Grid Performance
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          You're protected at all stages of an outage with X1 and its four off-grid features. They start long before a blackout occurs.
        </p>
      </div>

      {/* Video */}
      <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto shadow-xl">
        <video
          key={tabs[active].video}
          src={tabs[active].video}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Tab Controls */}
      <div className="flex justify-center mt-8 flex-wrap gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`text-sm md:text-base font-semibold px-4 py-2 border-b-2 transition-colors duration-300 ${
              active === index
                ? "text-green-400 border-green-400"
                : "text-gray-400 border-transparent hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Description */}
      <div className="mt-10 text-center max-w-2xl mx-auto">
        <motion.h3
          key={tabs[active].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-2"
        >
          {tabs[active].title}
        </motion.h3>
        <motion.p
          key={tabs[active].description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300"
        >
          {tabs[active].description}
        </motion.p>
      </div>
    </section>
  );
}