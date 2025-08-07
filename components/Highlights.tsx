import { motion } from "framer-motion";

const highlights = [
  { id: 1, img: "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/Slice_234_2_-tuya_3840x.jpg?v=1713940386" },
  { id: 2, img: "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/Slice_235-tuya_3840x.jpg?v=1713940385" },
  { id: 3, img: "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/Slice_236_1_-tuya_3840x.jpg?v=1713940385" },
];

export default function Highlights() {
  return (
    <section className="bg-black text-white py-16">
      {/* Title with animation */}
      <motion.h1
        className="text-left text-3xl font-bold text-teal-400 mb-12 ml-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.7 }}
      >
        Get the X1 Highlights
      </motion.h1>

      {/* Grid */}
      <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4">
        {highlights.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.18, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Full Image */}
            <img
              src={item.img}
              alt={`Highlight ${item.id}`}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
