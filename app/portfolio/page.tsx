"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioItems } from "@/components/cinematography/content";
import {
  portfolioApi,
  type PortfolioItem as StoredPortfolioItem,
} from "@/config/api";

function StoredPortfolioGallery({ items }: { items: StoredPortfolioItem[] }) {
  return (
    <section className="mt-12 border-t border-black/10 pt-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            Latest additions
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.03em]">
            From the studio archive
          </h2>
        </div>
        <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
          {items.length} stored {items.length === 1 ? "image" : "images"}
        </p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <figure
            key={item.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-[2px] bg-white"
          >
            <Image
              src={item.image}
              alt="Portfolio work from the studio archive"
              width={1200}
              height={1600}
              className="h-auto w-full object-contain transition duration-700 hover:scale-[1.015]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const [storedItems, setStoredItems] = useState<StoredPortfolioItem[]>([]);

  useEffect(() => {
    portfolioApi
      .list({ page: 1, limit: 50 })
      .then(({ data }) => setStoredItems(data))
      .catch(() => setStoredItems([]));
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mb-8 flex flex-col items-start gap-5 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Selected work
            </p>
            <h1 className="font-display text-3xl font-bold uppercase leading-none tracking-[-0.03em] sm:text-4xl">
              Photography &amp; videography
            </h1>
          </div>
          <Link
            href="/quote"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy"
          >
            Request a quote <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {portfolioItems.map((item) => (
            <figure
              key={item.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[2px] bg-white"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="h-auto w-full object-contain transition duration-700 hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>

        {storedItems.length > 0 && (
          <StoredPortfolioGallery items={storedItems} />
        )}

        <div className="mt-3 grid gap-3 sm:gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[220px] overflow-hidden rounded-[2px] bg-black sm:min-h-[260px]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-70"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/services/cinematography.jpeg"
            >
              <source
                src="/videos/0122e4dedba262507d1ec9987289e94d_720w.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <div>
                <p className="font-accent text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                  Motion
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  See it in motion.
                </h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                <Play size={16} fill="currentColor" />
              </span>
            </div>
          </div>
          <div className="flex min-h-[260px] flex-col justify-between rounded-[2px] bg-primary p-5 text-white sm:min-h-[260px] sm:p-8">
            <div>
              <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Your next story
              </p>
              <h3 className="mt-3 max-w-md font-display text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s make something worth remembering.
              </h3>
              <p className="mt-4 max-w-md font-sans text-sm leading-6 text-white/75">
                From campaign films to portraits and event coverage, bring us
                the idea and we&apos;ll help shape the frame.
              </p>
            </div>
            <Link
              href="/quote"
              className="mt-7 flex w-fit items-center gap-2 rounded-full bg-navy px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-navy"
            >
              Request a quote <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div>
            <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
              Have a project in mind?
            </p>
            <p className="mt-2 font-display text-2xl font-bold">
              Tell us where to point the camera.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/254712830837"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#25D366] hover:bg-[#25D366]"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/quote"
              className="flex items-center gap-2 rounded-full bg-accent-cyan px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-white"
            >
              Get a quote <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
