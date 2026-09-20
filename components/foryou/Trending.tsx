"use client";

import Link from "next/link";
import { ArrowUpRight, Flame } from "lucide-react";
import { useEffect, useState } from "react";
import Partners from "@/components/ui/Partners";
import { newsApi, type NewsArticle } from "@/config/api";

export default function Trending() {
  const [stories, setStories] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    newsApi
      .trending(4)
      .then(({ data }) => setStories(Array.isArray(data) ? data : []))
      .catch(() => setErrorMessage("Trending news is unavailable right now."))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <aside
      aria-labelledby="trending-heading"
      className="min-w-0 lg:border-l lg:border-black/10 lg:pl-8"
    >
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <h2
          id="trending-heading"
          className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-[-0.02em] text-navy"
        >
          <Flame size={20} className="text-secondary" />
          Trending
        </h2>
        <span className="font-accent text-[10px] uppercase tracking-[0.16em] text-black/40">
          This week
        </span>
      </div>

      {isLoading ? (
        <div className="animate-pulse divide-y divide-black/10">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-3 py-6">
              <div className="h-3 w-8 rounded bg-black/10" />
              <div className="h-5 w-4/5 rounded bg-black/10" />
              <div className="h-3 w-24 rounded bg-black/10" />
            </div>
          ))}
        </div>
      ) : errorMessage ? (
        <p className="py-6 text-sm leading-6 text-black/55">{errorMessage}</p>
      ) : stories.length === 0 ? (
        <p className="py-6 text-sm leading-6 text-black/55">
          No trending stories are available yet.
        </p>
      ) : (
        <div className="divide-y divide-black/10">
          {stories.map((story, index) => (
            <Link
              key={story.id}
              href={`/articles/${story.slug}`}
              className="group block py-6"
            >
              <div className="flex gap-4">
                <span className="font-display text-3xl font-bold leading-none text-primary/40 transition-colors group-hover:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
                    {story.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-[1.08] tracking-[-0.02em] text-navy transition-colors group-hover:text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.12em] text-black/40">
                    {story.readTime}{" "}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-4 rounded-[2px] bg-primary p-5 text-white sm:p-6">
        <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
          Stay in the loop
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight">
          The good stuff, once a week.
        </h3>
        <p className="mt-3 font-sans text-sm leading-6 text-white/70">
          A considered dispatch of stories, conversations, and images worth
          keeping.
        </p>
        <button
          type="button"
          className="mt-5 flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
        >
          Subscribe <ArrowUpRight size={15} />
        </button>
      </div>
      <Partners />
    </aside>
  );
}
