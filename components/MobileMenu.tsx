"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for focus - made darker to ensure contrast */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[105] bg-black/90 backdrop-blur-[120px] md:hidden"
          />
          
          <div className="fixed right-6 top-24 z-[110] w-[calc(100vw-48px)] max-w-sm md:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              style={{ backgroundColor: "#0F172A", opacity: 1 }} // Force absolute opacity and color
            >
              <div className="relative z-10 flex flex-col p-8">
                {/* Logo Image */}
                <div className="mb-10 flex justify-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image
                      src="/images/mhenga1"
                      alt="Mhengagee Logo"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Link 
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-xl p-4 text-sm font-bold tracking-widest uppercase transition-all ${
                            isActive ? "bg-white/5 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {link.name}
                          <div className={`h-1.5 w-1.5 rounded-full bg-primary transition-all ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="my-8 h-[1px] w-full bg-white/10" />

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-white py-4 text-[10px] font-black tracking-[0.2em] uppercase text-black transition-all active:scale-95"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
