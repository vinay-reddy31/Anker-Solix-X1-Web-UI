import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const essentialAppliances = [
  { name: "Wi-Fi Router", icon: "/icons/router.svg" },
  { name: "Lights", icon: "/icons/lights.svg" },
  { name: "Television", icon: "/icons/tv.svg" },
  { name: "Laptop/Home PC", icon: "/icons/laptop.svg" },
  { name: "Freezer", icon: "/icons/freezer.svg" },
  { name: "Washer/Dryer", icon: "/icons/washer.svg" }
];

const heavyAppliances = [
  { name: "Air Conditioner", icon: "/icons/ac.svg" },
  { name: "Dishwasher", icon: "/icons/dishwasher.svg" },
  { name: "Electric Oven", icon: "/icons/oven.svg" },
  { name: "Pool Pump", icon: "/icons/pool.svg" },
  { name: "Electric Vehicle", icon: "/icons/ev.svg" },
  { name: "Heat Pump", icon: "/icons/heatpump.svg" }
];

export default function EnergyScalerSection() {
  const [modules, setModules] = useState(1);

  const handleAdd = () => {
    if (modules < 4) setModules(modules + 1);
  };

  const handleRemove = () => {
    if (modules > 1) setModules(modules - 1);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
        >
          Energy Customized to Your Needs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          Scale power from 5kWh to 180kWh or 3kW to 36kW to perfectly match your
          needs with X1. No matter how much power or backup capacity you need.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-4">Essential Appliances</h3>
          <div className="grid grid-cols-3 gap-6 text-sm">
            {essentialAppliances.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Image src={item.icon} alt={item.name} width={32} height={32} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">Heavy Appliances</h3>
          <div className="grid grid-cols-3 gap-6 text-sm">
            {heavyAppliances.map((item, i) => {
              const isVisible =
                modules === 2 && i === 0 ||
                modules === 3 && i <= 2 ||
                modules === 4;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={32}
                    height={32}
                    className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-30"}`}
                  />
                  <span
                    className={`transition duration-300 ${
                      isVisible ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <motion.h3
            key={modules}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-2"
          >
            {modules * 3}kW/{modules * 5}kWh
          </motion.h3>
          <p className="text-gray-400 mb-6">
            {modules} Power Module{modules > 1 ? "s" : ""} + {modules} Battery Module{modules > 1 ? "s" : ""}
          </p>

          {/* Module Image Logic */}
          <div className="flex gap-4 items-end">
            {modules === 1 ? (
              <div className="relative">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0508/1815/4652/files/20231121-093902_1_1_3840x.png?v=1713423562"
                  alt="initial module"
                  width={300}
                  height={180}
                />
                <button
                  onClick={handleAdd}
                  className="absolute -top-3 -right-3 bg-gray-800 border border-white text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                >
                  +
                </button>
              </div>
            ) : (
              [...Array(modules - 1)].map((_, idx) => (
                <div key={idx} className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0508/1815/4652/files/A5101_A5220_08_V1_2_3840x.png?v=1713423562"
                    alt="expanded module"
                    width={120}
                    height={160}
                    className="rounded"
                  />
                  <button
                    onClick={handleRemove}
                    className="absolute -top-3 -right-3 bg-gray-800 border border-white text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
            {modules < 4 && (
              <button
                onClick={handleAdd}
                className="w-12 h-12 border-2 border-dashed border-white rounded-lg flex items-center justify-center text-3xl text-white hover:bg-white hover:text-black transition"
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
