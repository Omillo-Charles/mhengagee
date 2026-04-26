"use client";

import { motion } from "framer-motion";
import ServicesCarousel from "@/components/ServicesCarousel";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedNumber from "@/components/AnimatedNumber";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background selection:bg-primary selection:text-white">
      {/* Hero Video Section */}
      <section className="relative h-screen w-full">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/0122e4dedba262507d1ec9987289e94d_720w.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Multi-layered Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase backdrop-blur-md"
            >
              Mhengagee media
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-9xl"
            >
              CRAFTING <br />
              <span className="text-gradient">VISUAL</span> MASTERPIECES
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/70 md:text-xl"
            >
              Where vision meets reality. Mhengagee Media elevates digital identities through cinematic excellence and visionary creative direction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >
              <Link href="/work" className="w-full sm:w-auto">
                <button className="group relative w-full overflow-hidden rounded-2xl bg-white px-10 py-5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10">EXPLORE OUR WORK</span>
                  <div className="absolute inset-0 -translate-x-full bg-primary/10 transition-transform group-hover:translate-x-0" />
                </button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <button className="glass-morphism w-full rounded-2xl px-10 py-5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95">
                  GET IN TOUCH
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 w-full z-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="container mx-auto max-w-5xl"
          >
            <div 
              className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-8 md:gap-6 [&::-webkit-scrollbar]:hidden" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { num: 100, suffix: "+", label: "Projects", color: "from-primary to-accent-cyan" },
                { num: 50, suffix: "+", label: "Clients", color: "from-secondary to-accent-yellow" },
                { num: 5, suffix: "+", label: "Years", color: "from-accent-yellow to-accent-orange" },
                { num: 15, suffix: "+", label: "Awards", color: "from-accent-cyan to-primary" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-[140px] shrink-0 snap-center md:min-w-0 flex flex-col items-center text-center">
                  <div className={`text-4xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 flex items-center`}>
                    <AnimatedNumber value={stat.num} />
                    <span>{stat.suffix}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── SERVICES MARQUEE ───── */}
      <div className="relative z-20 -mt-[1px]">
        <ServicesCarousel />
      </div>

      {/* ───── IMAGE CAROUSEL ───── */}
      <ImageCarousel />

      {/* ───── ABOUT SECTION ───── */}
      <section className="relative z-10 bg-background pb-24 sm:pb-32 pt-12 sm:pt-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">About Us</span>
            </div>

            <h2 className="mb-8 text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl">
              Elevating Brands Through <span className="text-gradient">Visual Excellence.</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-white/60">
              Mhengagee Media is a creative powerhouse based in Nairobi. We specialize in cinematic storytelling, blending art and technology to create visual identities that demand attention.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-white/60">
              Whether it's a commercial campaign or a brand overhaul, our approach is simple: we deliver outstanding quality without compromise.
            </p>

            <Link href="/about">
              <button className="group relative overflow-hidden rounded-2xl bg-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase text-black transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10">Read Our Story</span>
                <div className="absolute inset-0 -translate-x-full bg-primary/10 transition-transform group-hover:translate-x-0" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
