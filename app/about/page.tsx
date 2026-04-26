"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Zap, Shield, Users, Eye, Heart } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background pt-12 pb-24 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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

            <p className="mb-6 text-lg leading-relaxed text-white/60">
              Founded with a vision to redefine how stories are told, we believe that every brand has a unique heartbeat. Our mission is to capture that rhythm through our lenses, translating your core values into striking visuals that resonate deeply with your target audience.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-white/60">
              From the initial concept board to the final polished export, our team of dedicated creatives, cinematographers, and editors work tirelessly to ensure perfection. We don't just follow trends; we set them, ensuring your content stands out in an increasingly crowded digital landscape.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-white/60">
              Whether it's a high-end commercial campaign, live event coverage, or a complete brand overhaul, our approach is simple: we deliver outstanding, undeniable quality without compromise. Let's create something legendary together.
            </p>

          </motion.div>

          {/* Images Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Stats Section */}
        <section className="mt-24 sm:mt-32">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {[
              { num: 100, suffix: "+", label: "Projects Completed", color: "from-primary to-accent-cyan" },
              { num: 50, suffix: "+", label: "Happy Clients", color: "from-secondary to-accent-yellow" },
              { num: 5, suffix: "+", label: "Years Experience", color: "from-accent-yellow to-accent-orange" },
              { num: 15, suffix: "+", label: "Awards Won", color: "from-accent-cyan to-primary" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] glass-morphism relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4 tracking-tighter flex items-center`}>
                  <AnimatedNumber value={stat.num} />
                  <span>{stat.suffix}</span>
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs Section (CV Timeline Design) */}
        <section className="mt-24 sm:mt-32 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">FAQs</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              Common <span className="text-gradient">Questions.</span>
            </h2>
          </motion.div>

          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line for CV design */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full" />
            
            <div className="flex flex-col gap-12">
              {[
                { q: "What services do you offer?", a: "We specialize in cinematic storytelling, photography, videography, live event coverage, and complete visual brand identity." },
                { q: "How long does a typical project take?", a: "Depending on the scope, standard photography projects take 1-2 weeks for delivery, while cinematic video productions take 2-4 weeks." },
                { q: "Do you travel for events?", a: "Yes! While we are based in Nairobi, we are available to travel across Kenya and internationally to capture your special moments." },
                { q: "How do we book your services?", a: "Simply reach out via our contact page or WhatsApp. We'll discuss your vision, provide a custom quote, and schedule your dates." }
              ].map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Node */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary -translate-x-[11px] md:-translate-x-1/2 z-10 group-hover:border-accent-cyan group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(45,91,255,0.5)]" />
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] ml-8 md:ml-0 p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-xl font-black text-white mb-4 tracking-tight">{faq.q}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mt-24 sm:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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

