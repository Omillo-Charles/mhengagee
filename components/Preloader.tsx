"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo Image */}
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(45,91,255,0.3)]">
              <Image
                src="/images/mhenga1.jpeg"
                alt="MHENGAGEE Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl sm:text-4xl font-black tracking-[0.2em] text-white">
                MHENGAGEE
              </h1>
              <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase mt-2">
                Media
              </span>
            </motion.div>

            {/* Loading Progress Line */}
            <motion.div 
              className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-primary via-accent-cyan to-secondary"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
