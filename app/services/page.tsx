"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const pricingData = {
  photography: [
    { title: "Basic Package", price: "10,000", features: ["4 Hours Coverage", "100+ Edited Photos"] },
    { title: "Standard Package", price: "20,000", features: ["Full Event Coverage (6-8hrs)", "200+ Edited Photos"] },
    { title: "Premium Package", price: "45,000", features: ["Full Event + Pre Event Coverage", "300+ Edited Photos", "1 Photo Album"] }
  ],
  videography: [
    { title: "Basic Package", price: "25,000", features: ["4 Hours Coverage", "Highlight Video (3-5 Minutes)"] },
    { title: "Standard Package", price: "40,000", features: ["Full Event Coverage", "Highlight + Full Event Video"] },
    { title: "Premium Package", price: "60,000", features: ["Full Event + Pre Event Coverage", "Highlight + Full + Drone Footage"] }
  ],
  combos: [
    { title: "Standard Combo", price: "45,000", features: ["Full Event", "200+ Photos", "Highlight Video"] },
    { title: "Premium Combo", price: "80,000", features: ["Full Event", "300+ Edited Photos", "1 Photo Album", "Full + Highlight Video", "Drone Footage"] }
  ],
  addons: [
    { title: "Drone Services", price: "15,000" },
    { title: "Live Streaming", price: "10,000" },
    { title: "Extra Photographer", price: "10,000" }
  ]
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background pt-12 pb-24 selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] -z-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Our Expertise</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl">
            Cinematic <span className="text-gradient">Services.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/50">
            From high-end corporate campaigns to unforgettable events, we deliver visual excellence through cutting-edge photography and videography.
          </p>
        </motion.div>

        {/* Services Sections */}
        <section className="relative flex flex-col gap-32">
          
          {/* Photography Section */}
          <div className="relative">
            {/* Visual Intro */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-4xl font-black uppercase tracking-tight text-white/90 mb-6">Photography <span className="text-primary">Excellence</span></h2>
                <p className="text-lg leading-relaxed text-white/60 mb-6">
                  Our photography goes beyond simply taking pictures. We craft compelling visual narratives that capture the emotion, energy, and essence of every moment.
                </p>
                <p className="text-lg leading-relaxed text-white/60">
                  Whether it's a dynamic event, a sleek corporate profile, or a high-fashion editorial, our team uses state-of-the-art equipment and masterful lighting techniques to ensure every shot is a masterpiece.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[300px] sm:h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 order-1 lg:order-2"
              >
                <Image src="/images/mhenga2.jpeg" alt="Professional Photography" fill className="object-cover" style={{ objectPosition: '50% 20%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </motion.div>
            </div>
            
            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingData.photography.map((pkg, idx) => (
                <PricingCard key={idx} {...pkg} index={idx} />
              ))}
            </div>
          </div>

          {/* Videography Section */}
          <div className="relative">
            {/* Visual Intro */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[300px] sm:h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                <Image src="/images/event1.jpeg" alt="Cinematic Videography" fill className="object-cover" style={{ objectPosition: '50% 20%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-4xl font-black uppercase tracking-tight text-white/90 mb-6">Cinematic <span className="text-secondary">Videography</span></h2>
                <p className="text-lg leading-relaxed text-white/60 mb-6">
                  We don't just record video; we produce cinema. Our videography team specializes in creating visually stunning, emotionally resonant films that leave a lasting impact.
                </p>
                <p className="text-lg leading-relaxed text-white/60">
                  From dynamic highlight reels to full-scale documentary coverage, we utilize high-end cinema cameras, drones, and meticulous color grading to elevate your brand's story.
                </p>
              </motion.div>
            </div>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingData.videography.map((pkg, idx) => (
                <PricingCard key={idx} {...pkg} index={idx} highlightColor="secondary" />
              ))}
            </div>
          </div>

          {/* Combos & Add-ons Block */}
          <div className="relative p-6 sm:p-12 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-transparent pointer-events-none" />
            
            {/* Combos */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-black uppercase tracking-tight text-white/90 mb-4">The Ultimate <span className="text-accent-yellow">Combos</span></h2>
              <p className="text-white/50 max-w-2xl mx-auto">Get the best of both worlds with our comprehensive media packages.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
              {pricingData.combos.map((pkg, idx) => (
                <PricingCard key={idx} {...pkg} index={idx} isLarge highlightColor="accent-yellow" />
              ))}
            </div>

            {/* Add-ons */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-black uppercase tracking-tight text-white/90 mb-4">Custom <span className="text-accent-cyan">Add-ons</span></h2>
              <p className="text-white/50 max-w-xl mx-auto">Enhance your package with specialized services.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {pricingData.addons.map((addon, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-morphism-dark p-6 rounded-3xl flex justify-between items-center group hover:bg-white/5 transition-colors border border-white/5"
                >
                  <span className="font-bold text-white/90 uppercase tracking-wide group-hover:text-accent-cyan transition-colors">{addon.title}</span>
                  <span className="text-accent-cyan font-black text-lg">Ksh {addon.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </section>

        {/* Footer Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 p-12 rounded-[3.5rem] bg-brand-gradient relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tighter">Ready to start?</h2>
            <p className="text-white/90 max-w-xl mb-10 text-lg md:text-xl font-bold">
              Let's capture your story. Contact us for custom quotes and availability.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:0712830837" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-wider hover:scale-110 transition-all shadow-xl text-lg">
                0712 830 837
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function PricingCard({ title, price, features, index, highlightColor = "primary", isLarge = false }: any) {
  const whatsappNumber = "254712830837";
  const message = `Hello Mhengagee Media! 👋 I am interested in the *${title}* (${highlightColor.toUpperCase()} package) for Ksh ${price}. Please provide more details on availability and booking.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass-morphism-dark p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500"
    >
      {/* Accent Background Glow */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-${highlightColor}`} />
      
      <div className="relative z-10">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-2">Package</h3>
        <h4 className="text-2xl font-black text-white uppercase mb-6 tracking-tight">{title}</h4>
        
        <div className="flex items-baseline gap-2 mb-8">
          <span className={`text-4xl font-black text-${highlightColor}`}>Ksh</span>
          <span className="text-5xl font-black text-white tracking-tighter">{price}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-white/70 font-medium">
              <svg className={`h-5 w-5 shrink-0 text-${highlightColor} mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-4 text-center rounded-2xl border-2 border-${highlightColor}/20 group-hover:border-${highlightColor} group-hover:bg-${highlightColor} text-white font-bold uppercase tracking-widest transition-all duration-300 shadow-lg group-hover:shadow-${highlightColor}/20`}
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
}
