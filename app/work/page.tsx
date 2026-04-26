"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const categories = ["All", "Cinematography", "Photography", "Branding", "Events"];

const projects = [
  {
    id: 1,
    title: "Cinematic Event Coverage",
    category: "Cinematography",
    image: "/images/event1.jpeg",
    span: "col-span-1 md:col-span-2 row-span-2",
    position: "object-[50%_20%]",
  },
  {
    id: 2,
    title: "Studio Portraits",
    category: "Photography",
    image: "/images/mhenga2.jpeg",
    span: "col-span-1",
    position: "object-[50%_20%]",
  },
  {
    id: 3,
    title: "Behind the Scenes",
    category: "Photography",
    image: "/images/carousel/bts.jpeg",
    span: "col-span-1",
    position: "object-[50%_20%]",
  },
  {
    id: 4,
    title: "Visual Brand Identity",
    category: "Branding",
    image: "/images/branding1.jpeg",
    span: "col-span-1",
    position: "object-[50%_20%]",
  },
  {
    id: 5,
    title: "Festival Highlights",
    category: "Events",
    image: "/images/carousel/festival.jpeg",
    span: "col-span-1 md:col-span-2",
    position: "object-[50%_20%]",
  },
  {
    id: 6,
    title: "Professional Shoots",
    category: "Cinematography",
    image: "/images/carousel/shoot1.jpeg",
    span: "col-span-1",
    position: "object-[50%_20%]",
  },
  {
    id: 7,
    title: "Production Design",
    category: "Branding",
    image: "/images/carousel/shoot2.jpeg",
    span: "col-span-1",
    position: "object-[50%_20%]",
  },
  {
    id: 8,
    title: "Creative Storytelling",
    category: "Events",
    image: "/images/carousel/creative.jpeg",
    span: "col-span-1 md:col-span-2",
    position: "object-[50%_20%]",
  }
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-background pt-12 pb-24 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Our Portfolio</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl">
            Selected <span className="text-gradient">Works.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/50">
            A showcase of cinematic storytelling, brand identities, and moments captured through our lens.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center lg:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 text-[10px] font-bold tracking-widest uppercase transition-all ${
                activeCategory === cat 
                ? "bg-white text-black" 
                : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 ${project.span}`}
            >
              {/* Blurred Background Fill */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt="Blurred background"
                  fill
                  className="object-cover blur-2xl scale-110 opacity-40 transition-transform duration-700 group-hover:scale-125"
                />
              </div>

              {/* Sharp Foreground Image */}
              <div className="relative z-10 h-full w-full p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 rounded-[2.5rem] bg-white/5 border border-white/10 p-12 text-center"
        >
          <h2 className="text-3xl font-black tracking-tighter text-white mb-6">Have a project in mind?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Let's collaborate to create something truly legendary. Our team is ready to bring your vision to life with cinematic excellence.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-widest text-black transition-all hover:scale-105 active:scale-95 uppercase"
          >
            Start a Project
          </a>
        </motion.div>

      </div>
    </main>
  );
}
