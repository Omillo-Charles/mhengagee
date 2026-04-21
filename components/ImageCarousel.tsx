"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/carousel/40+ Short Hairstyles for Black Women - April 2026.jpeg",
  "/images/carousel/Full Moon Party Paradise - Koh Phangan's Full Moon Magic.jpeg",
  "/images/carousel/_.jpeg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slides every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[50vh] w-full overflow-hidden bg-background sm:h-[70vh] lg:h-[80vh]">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          {/* Blurred Background Fill */}
          <div className="absolute inset-0 z-0">
            <Image
              src={images[currentIndex]}
              alt="Blurred background"
              fill
              className="object-cover blur-3xl scale-125 opacity-30"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Sharp Foreground Image */}
          <div className="relative z-10 h-full w-full">
            <Image
              src={images[currentIndex]}
              alt="Carousel sliding image"
              fill
              className="object-contain drop-shadow-2xl"
              priority={currentIndex === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
