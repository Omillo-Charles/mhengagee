"use client";

import { motion } from "framer-motion";

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
    <main className="relative min-h-screen bg-background pt-8 pb-24 selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] -z-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6">
        {/* Rate Card Section */}
        <section className="relative">
          {/* Photography */}
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white/90">Photography <span className="text-primary">Packages</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {pricingData.photography.map((pkg, idx) => (
              <PricingCard key={idx} {...pkg} index={idx} />
            ))}
          </div>

          {/* Videography */}
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white/90">Videography <span className="text-secondary">Packages</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {pricingData.videography.map((pkg, idx) => (
              <PricingCard key={idx} {...pkg} index={idx} highlightColor="secondary" />
            ))}
          </div>

          {/* Combos */}
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white/90">Combo <span className="text-accent-yellow">Packages</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {pricingData.combos.map((pkg, idx) => (
              <PricingCard key={idx} {...pkg} index={idx} isLarge highlightColor="accent-yellow" />
            ))}
          </div>

          {/* Add-ons */}
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tight text-white/90">Custom <span className="text-accent-cyan">Add-ons</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingData.addons.map((addon, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-morphism-dark p-6 rounded-3xl flex justify-between items-center group hover:bg-white/5 transition-colors border border-white/5"
              >
                <span className="font-bold text-white/90 uppercase tracking-wide group-hover:text-accent-cyan transition-colors">{addon.title}</span>
                <span className="text-accent-cyan font-black text-lg">Ksh {addon.price}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
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
