"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EnergyCarousel() {
    const images = [
        "https://cdn.shopify.com/s/files/1/0493/9834/9974/files/1_1-_6K_1-tuya_2046x.jpg?v=1713884721",
        "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/16_1_750x.jpg?v=1712548838",
        "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/X1-Product-image16_1_750x.jpg?v=1712548838",
        "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/15_-_1_750x.jpg?v=1712548838",
        "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/4-_-_2_750x.jpg?v=1712548838",
        "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/3_-_6K_1_750x.jpg?v=1712548839",
      ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Blurred Background (Full Width) */}
      <motion.div
        key={activeImage} // trigger animation on change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={activeImage}
          alt="Background Blur"
          fill
          className="object-cover blur-3xl opacity-50"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-10 
                   bg-gradient-to-r from-[#00AEEF] to-[#00C853] bg-clip-text text-transparent"
      >
        Energy for Every Situation
      </motion.h2>

      {/* Carousel (Foreground) */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides
          loop
          pagination={{ clickable: true }}
          navigation
          onSlideChange={(swiper) => setActiveImage(images[swiper.realIndex])}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={600}
                className="rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
