import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, MapPin, Send } from "lucide-react";

const navigation = [
    { label: "For You", href: "/" },
    { label: "News", href: "/news" },
    { label: "Podcasts", href: "/podcasts" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/15 bg-[var(--brand-background-dark)] text-white">
            <div className="h-1 w-full bg-[var(--brand-gradient)]" />
            <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
                <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1fr] lg:gap-20 lg:pb-16">
                    <div>
                        <Link href="/" className="group inline-flex items-center gap-3">
                            <span className="relative h-12 w-12 overflow-hidden rounded-md bg-white transition-transform duration-300 group-hover:scale-105">
                                <Image src="/images/mhenga1.jpeg" alt="Mhengagee Media" fill className="object-contain" sizes="48px" />
                            </span>
                            <span className="flex flex-col leading-none">
                                <span className="font-display text-xl font-bold uppercase tracking-[0.14em]">MHENGAGEE</span>
                                <span className="mt-1 font-accent text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--brand-accent-cyan)]">Media</span>
                            </span>
                        </Link>
                        <p className="mt-6 max-w-sm font-accent text-sm leading-7 text-white/55">Cinematic photography, film, and visual stories from Nairobi to everywhere your work needs to be seen.</p>
                        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--brand-accent-cyan)]">Instagram</a>
                            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--brand-accent-cyan)]">YouTube</a>
                            <a href="mailto:hello@mhengagee.co.ke" className="transition-colors hover:text-[var(--brand-accent-cyan)]">Email</a>
                        </div>
                    </div>

                    <nav aria-label="Footer navigation">
                        <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Navigate</p>
                        <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-1 sm:gap-y-3">
                            {navigation.map((item) => (
                                <Link key={item.label} href={item.href} className="group flex items-center gap-2 font-display text-lg text-white/80 transition-colors hover:text-white">
                                    {item.label}
                                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <div id="contact">
                        <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Find us here</p>
                        <div className="mt-5 space-y-4">
                            <a href="mailto:hello@mhengagee.co.ke" className="flex items-center gap-3 font-accent text-sm text-white/80 transition-colors hover:text-[var(--brand-accent-cyan)]"><Mail size={16} strokeWidth={1.7} className="text-[var(--brand-accent-cyan)]" />hello@mhengagee.co.ke</a>
                            <span className="flex items-center gap-3 font-accent text-sm text-white/65"><MapPin size={16} strokeWidth={1.7} className="text-[var(--brand-accent-cyan)]" />Nairobi, Kenya</span>
                            <span className="flex items-center gap-3 font-accent text-sm text-white/65"><Globe size={16} strokeWidth={1.7} className="text-[var(--brand-accent-cyan)]" />Available worldwide</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/15 pt-5 font-accent text-[10px] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Mhengagee Media</span>
                    <span>
                        Built and Maintained by{" "}
                        <a href="https://omytechkenya.co.ke" target="_blank" rel="noreferrer" className="text-white/70 transition-colors hover:text-[var(--brand-accent-cyan)]">OMYT3CH</a>
                    </span>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
                        <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
                        <Link href="/" className="flex items-center gap-2 transition-colors hover:text-white">Back to top <Send size={13} strokeWidth={1.7} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}