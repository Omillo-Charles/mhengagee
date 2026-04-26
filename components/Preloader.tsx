"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type PreloadPhase = "actual" | "decorative" | "done";

export default function Preloader() {
  const [phase, setPhase] = useState<PreloadPhase>("actual");

  useEffect(() => {
    // Lock scrolling while any loading phase is active
    document.body.style.overflow = "hidden";
    
    let timer: NodeJS.Timeout;

    const startDecorativePhase = () => {
      setPhase("decorative");
      // Start the 3-second decorative timer
      timer = setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "unset";
      }, 3000);
    };

    // Check if the page is already fully loaded
    if (document.readyState === "complete") {
      startDecorativePhase();
    } else {
      // Wait for the window to finish loading all assets
      window.addEventListener("load", startDecorativePhase);
    }

    return () => {
      window.removeEventListener("load", startDecorativePhase);
      if (timer) clearTimeout(timer);
      if (phase === "done") document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
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
            <div className={`relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(45,91,255,0.3)] transition-all duration-500 ${phase === "actual" ? "animate-pulse" : ""}`}>
              <Image
                src="/images/mhenga1.jpeg"
                alt="MHENGAGEE Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Text Area */}
            <div className="h-16 flex flex-col items-center justify-center relative w-full">
              <AnimatePresence mode="wait">
                {phase === "actual" ? (
                  <motion.div
                    key="text-loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute flex flex-col items-center"
                  >
                    <span className="text-sm font-bold tracking-[0.5em] text-white/70 uppercase animate-pulse text-center">
                      MHENGAGEE Loading...
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="text-decorative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute flex flex-col items-center"
                  >
                    <h1 className="text-3xl sm:text-4xl font-black tracking-[0.2em] text-white">
                      MHENGAGEE
                    </h1>
                    <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase mt-2">
                      Media
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Loading Progress Line */}
            <div className="mt-4 h-[3px] w-48 overflow-hidden rounded-full bg-white/10 relative">
              {phase === "actual" ? (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              ) : (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full bg-gradient-to-r from-primary via-accent-cyan to-secondary"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
