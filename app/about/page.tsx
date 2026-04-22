"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Zap, Shield, Users, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background pt-12 pb-24 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Our Story</span>
            </div>

            <h2 className="mb-8 text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl">
              Elevating Brands Through <span className="text-gradient">Visual Excellence.</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-white/60">
              Mhengagee Media is a creative powerhouse based in Nairobi. We specialize in cinematic storytelling, blending art and technology to create visual identities that demand attention.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-white/60">
              Whether it's a high-end commercial campaign, live event coverage, or a complete brand overhaul, our approach is simple: we deliver outstanding, undeniable quality without compromise.
            </p>

          </motion.div>

          {/* Images Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] w-full sm:h-[600px]"
          >
            {/* Main Background Image */}
            <div className="absolute right-0 top-0 h-[80%] w-[85%] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/images/event1.jpeg"
                alt="Mhengagee Media Cinematic Shot"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                style={{ objectPosition: '50% 20%' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent mix-blend-overlay" />
            </div>

            {/* Overlapping Foreground Image */}
            <div className="absolute bottom-0 left-0 h-[55%] w-[60%] overflow-hidden rounded-[2rem] border-8 border-background bg-white/5 shadow-2xl">
              <Image
                src="/images/mhenga2.jpeg"
                alt="Mhengagee Media Behind the Scenes"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                style={{ objectPosition: '50% 20%' }}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            {/* Decorative Blur Element */}
            <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-gradient-to-tr from-accent-cyan to-secondary opacity-30 blur-3xl mix-blend-screen" />
          </motion.div>

        </div>

        {/* Core Values Section */}
        <section className="mt-24 sm:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Our Values</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              The Principles That <span className="text-gradient">Drive Us.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Excellence",
                desc: "We never settle for 'good enough'. We push the boundaries of cinematic quality in every frame.",
                icon: <Award className="h-6 w-6" />,
                color: "text-accent-cyan"
              },
              {
                title: "Innovation",
                desc: "Blending cutting-edge technology with timeless artistry to create unique visual experiences.",
                icon: <Zap className="h-6 w-6" />,
                color: "text-secondary"
              },
              {
                title: "Integrity",
                desc: "Transparent communication and professional reliability are the bedrock of our client relationships.",
                icon: <Shield className="h-6 w-6" />,
                color: "text-primary"
              },
              {
                title: "Collaboration",
                desc: "We treat your vision as our own, working closely with you to amplify your brand's unique voice.",
                icon: <Users className="h-6 w-6" />,
                color: "text-emerald-400"
              },
              {
                title: "Visionary",
                desc: "We don't just capture moments; we craft narratives that inspire and leave a lasting impact.",
                icon: <Eye className="h-6 w-6" />,
                color: "text-purple-400"
              },
              {
                title: "Passion",
                desc: "Our heart is in every frame. We are driven by a deep-seated love for the craft and a relentless desire to create.",
                icon: <Heart className="h-6 w-6" />,
                color: "text-red-400"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-tr from-accent-cyan to-secondary opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-white uppercase tracking-widest">{value.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
