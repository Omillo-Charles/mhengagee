"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { id: "cinematography", title: "Cinematography", desc: "Premium visual storytelling and film production.", image: "/images/services/cinematography.jpeg" },
  { id: "branding", title: "Branding", desc: "Crafting memorable, high-impact digital identities.", image: "/images/services/branding.jpeg" },
  { id: "commercial", title: "Commercial", desc: "Product and campaign photography for brands.", image: "/images/services/commercial.jpeg" },
  { id: "eventcoverage", title: "Event Coverage", desc: "Capturing the raw energy of your most important moments.", image: "/images/services/eventcoverage.jpeg" },
  { id: "postproduction", title: "Post Production", desc: "Expert color grading, VFX, and sound design.", image: "/images/services/postproduction.jpeg" }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background pt-16 pb-24 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => {
            // Make the first item span the full width for a striking hero effect
            const isFeatured = index === 0;

            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[2rem] bg-white/5 ${
                  isFeatured ? 'md:col-span-2 aspect-square md:aspect-[21/9]' : 'aspect-square md:aspect-[4/3]'
                }`}
              >
                {/* Background Image */}
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Cyan/Pink Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/40 to-secondary/40 opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex w-full flex-col gap-2 pr-4 drop-shadow-xl transition-transform duration-500 group-hover:translate-x-2">
                      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl uppercase">
                        {service.title}
                      </h2>
                      <p className="text-sm font-medium text-white/80 md:max-w-[80%]">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Animated Arrow Icon */}
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:opacity-100 lg:flex transform translate-x-4 group-hover:translate-x-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
