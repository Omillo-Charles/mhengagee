import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Clapperboard, Mic2, Video } from "lucide-react";
import Feed from "@/components/foryou/Feed";
import Trending from "@/components/foryou/Trending";
import { services } from "@/components/services/content";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f4f0] selection:bg-primary selection:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_12%_0%,rgba(0,204,255,0.12),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(214,41,118,0.08),transparent_28%)]" />
      <section className="relative mx-auto max-w-[1440px] px-4 pb-14 pt-2 sm:px-8 sm:pb-20 sm:pt-4 lg:px-12 lg:pt-6">
        <section className="border-t border-black/10 pt-4 lg:pt-8" aria-labelledby="services-heading">
          <div className="grid overflow-hidden rounded-[2px] bg-navy text-white lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[300px] bg-black/20 sm:min-h-[420px] lg:min-h-[560px]">
              <Image
                src="/images/mhenga2.jpeg"
                alt="MhengaGee Media creator holding a camera"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan sm:bottom-8 sm:left-8">Made with intention</p>
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-14">
              <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">What we do</p>
              <h2 id="services-heading" className="mt-3 max-w-xl font-display text-3xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">Stories built to be seen and remembered.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:mt-6">MhengaGee Media helps people, brands, and organizations turn ideas into clear, compelling visual stories.</p>

              <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {[
                  { icon: Camera, title: "Photography", text: "Portraits, events, products, and campaigns." },
                  { icon: Video, title: "Videography", text: "Films and content that move with purpose." },
                  { icon: Clapperboard, title: "Cinematography", text: "Visual direction with a distinctive point of view." },
                  { icon: Mic2, title: "Podcast production", text: "From recording and editing to final delivery." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="border-t border-white/15 py-5">
                    <Icon size={20} className="text-accent-yellow" />
                    <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="group flex w-fit items-center gap-2 border border-white/30 px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-accent-cyan hover:bg-accent-cyan hover:text-navy">
                  Start a project
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a href="https://wa.me/254740353025" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 border border-[#25D366] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-black/10 pt-10 lg:mt-20 lg:pt-14" aria-labelledby="service-cards-heading">
          <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Explore our services</p>
              <h2 id="service-cards-heading" className="mt-2 max-w-2xl font-display text-3xl font-bold leading-[1.02] tracking-[-0.03em] text-navy sm:text-4xl">Find the right way to tell your story.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/portfolio" className="inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-primary">
                View what we&apos;ve done already
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/contact" className="hidden items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-primary sm:inline-flex">
                Start a project
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="overflow-hidden rounded-[2px] border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <Image src={service.image} alt={service.title} fill className="object-cover object-top transition duration-700 hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-primary">{service.kicker}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="group mt-5 inline-flex items-center gap-2 border border-navy px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-white">
                    Learn more
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14 grid gap-12 sm:mt-20 lg:mt-28 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <Feed />
          <Trending />
        </div>
      </section>
    </main>
  );
}
