import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    label: "Self-Consumption Mode",
    title: "Self-Consumption Mode",
    description:
      "Minimize grid electricity. Your solar panels charge X1 and power your home during the day while you use X1 battery power at night. No grid power needed.",
  },
  {
    label: "Time-of-Use Mode",
    title: "Time-of-Use Mode",
    description:
      "Use X1’s smart scheduling to store energy during low-rate periods and use it when grid prices spike. Optimize your energy savings.",
  },
  {
    label: "Off-Grid Mode",
    title: "Off-Grid Mode",
    description:
      "Operate independently from the grid. X1 provides backup energy and runs essential appliances in remote or outage-prone areas.",
  },
  {
    label: "NEM 3.0 Mode",
    title: "NEM 3.0 Mode",
    description:
      "Take advantage of solar export rules. X1 helps you maximize your export credits under NEM 3.0 by intelligently managing surplus energy.",
  },
];

export default function EnergyModeTabs() {
  const [active, setActive] = useState(0);

  const videoUrl =
    "https://cdn.shopify.com/videos/c/vp/753dfe2212a04017b2429bb4bb1dbc7b/753dfe2212a04017b2429bb4bb1dbc7b.HD-720p-1.6Mbps-27734505.mp4";

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
          Intelligent Energy Modes
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Choose from four smart operating modes to fit your energy needs and maximize savings with the X1 battery system.
        </p>
      </div>

      {/* Video Block (Stays Constant) */}
      <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto shadow-xl">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-8 flex-wrap gap-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`text-sm md:text-base font-semibold px-3 py-2 border-b-2 transition duration-300 ${
              active === index
                ? "text-cyan-400 border-cyan-400"
                : "text-gray-400 border-transparent hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Tab Content */}
      <div className="mt-10 text-center max-w-2xl mx-auto">
        <motion.h3
          key={tabs[active].title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-3"
        >
          {tabs[active].title}
        </motion.h3>
        <motion.p
          key={tabs[active].description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300"
        >
          {tabs[active].description}
        </motion.p>
      </div>
    </section>
  );
}
