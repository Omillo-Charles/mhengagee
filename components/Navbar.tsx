"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 transition-all group-hover:border-white/20 group-hover:scale-105">
            <Image
              src="/images/mhenga1"
              alt="MHENGAGEE Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            MHENGAGEE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${
                  isActive ? "text-white" : "text-white/40 hover:text-white"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="relative overflow-hidden rounded-2xl bg-white px-8 py-3 text-[10px] font-black tracking-[0.15em] uppercase text-black transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Get Started</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-[110] flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-all active:scale-90 md:hidden ${
            isOpen ? "bg-white/10" : ""
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        navLinks={navLinks} 
      />
    </nav>
  );
}
