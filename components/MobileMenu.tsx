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
          {/* Backdrop for focus - removed blur as requested */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[105] bg-black/60 md:hidden"
          />

          <div className="fixed right-6 top-24 z-[110] w-fit min-w-[180px] md:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
              style={{ backgroundColor: "#0F172A", opacity: 1 }}
            >
              <div className="relative z-10 flex flex-col p-4">
                {/* Small Logo Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src="/images/mhenga1.jpeg"
                      alt="Mhengagee Logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Navigation Links - More compact */}
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${
                            isActive ? "bg-white/5 text-white" : "text-white/40 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {link.name}
                          <div className={`h-1 w-1 rounded-full bg-primary transition-all ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
