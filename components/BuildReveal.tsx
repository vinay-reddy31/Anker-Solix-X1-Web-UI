"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function BuildRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress inside section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // start animating when section enters viewport
  });

  // Map scroll progress to reveal positions
  const reveal1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const reveal2 = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] bg-black flex flex-col items-center justify-center"
    >
      {/* Title */}
      <div className="sticky top-20 text-center text-white z-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          5.9" Build Contains It All
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          X1 is ultra-thin and packed with a power density of 8.7W/ft³, the
          highest in the industry, thanks to its all-in-one design that combines
          battery and power modules.
        </p>
      </div>

      {/* Images stack */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="relative w-[400px] h-[600px]">
          {/* Image 1 */}
          <Image
            src="/image1.png" // Replace with Thickness image
            alt="Thickness 5.9"
            fill
            className="object-contain"
          />

          {/* Image 2 reveal over Image 1 */}
          <motion.div
            style={{
              clipPath: reveal1 && typeof reveal1.get() === "string"
                ? `inset(0 ${100 - parseFloat(reveal1.get())}% 0 0)`
                : undefined,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/image2.png" // Replace with mid-reveal image
              alt="Mid Reveal"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Image 3 reveal over Image 2 */}
          <motion.div
            style={{
              clipPath: reveal2 && typeof reveal2.get() === "string"
                ? `inset(0 ${100 - parseFloat(reveal2.get())}% 0 0)`
                : undefined,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/image3.png" // Replace with All-in-One image
              alt="All in One"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
