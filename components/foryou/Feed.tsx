"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { newsApi, type NewsArticle } from "@/config/api";

function FeedSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[16/9] rounded-[2px] bg-black/10 sm:aspect-[2/1]" />
      <div className="mt-8 divide-y divide-black/10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="grid gap-5 py-6 sm:grid-cols-[180px_1fr] sm:gap-6"
          >
            <div className="aspect-[16/10] rounded-[2px] bg-black/10 sm:h-[120px] sm:aspect-auto" />
            <div className="space-y-3 py-2">
              <div className="h-3 w-24 rounded bg-black/10" />
              <div className="h-6 w-4/5 rounded bg-black/10" />
              <div className="h-4 w-full rounded bg-black/10" />
              <div className="h-3 w-32 rounded bg-black/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatPublishedDate(value: string | null) {
  if (!value) return "Recently published";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default function Feed() {
  const [stories, setStories] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    newsApi
      .list()
      .then(({ data }) => setStories(Array.isArray(data) ? data : []))
      .catch(() =>
        setErrorMessage(
          "News is unavailable right now. Please check back shortly.",
        ),
      )
      .finally(() => setIsLoading(false));
  }, []);

  const [featuredStory, ...latestStories] = stories;

  return (
    <section id="for-you" aria-labelledby="feed-heading" className="min-w-0">
      <div className="mb-7 flex items-end justify-between gap-4 border-b border-black/10 pb-4">
        <div>
          <p className="mb-2 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            The daily edit
          </p>
          <h2
            id="feed-heading"
            className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-navy sm:text-4xl"
          >
            For you
          </h2>
        </div>
        <span className="hidden text-right font-accent text-[10px] uppercase tracking-[0.16em] text-black/40 sm:block">
          Stories worth your time
        </span>
      </div>

      {isLoading ? (
        <FeedSkeleton />
      ) : errorMessage ? (
        <div className="border border-black/10 bg-white p-8">
          <h3 className="font-display text-2xl font-bold text-navy">
            We couldn&apos;t load the news.
          </h3>
          <p className="mt-3 text-sm leading-6 text-black/55">{errorMessage}</p>
        </div>
      ) : !featuredStory ? (
        <div className="border border-dashed border-black/15 bg-white p-8">
          <h3 className="font-display text-2xl font-bold text-navy">
            No news published yet.
          </h3>
          <p className="mt-3 text-sm leading-6 text-black/55">
            Fresh stories will appear here as soon as they are published.
          </p>
        </div>
      ) : (
        <>
          <Link
            href={`/articles/${featuredStory.slug}`}
            className="group block overflow-hidden rounded-[2px] bg-navy text-white"
          >
            <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
              <img
                src={featuredStory.coverImage}
                alt={featuredStory.title}
                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  {featuredStory.category}
                </span>
                <h3 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-[0.96] tracking-[-0.03em] sm:text-5xl">
                  {featuredStory.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <p className="max-w-xl font-sans text-sm leading-6 text-white/65">
                {featuredStory.description}
              </p>
              <span className="flex shrink-0 items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                Read story <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
          <div className="mt-8 divide-y divide-black/10">
            {latestStories.map((story) => (
              <Link
                key={story.id}
                href={`/articles/${story.slug}`}
                className="group grid gap-5 py-6 sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-black/10 sm:aspect-auto sm:h-full sm:min-h-[120px]">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {story.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold leading-[1.05] tracking-[-0.02em] text-navy transition-colors group-hover:text-primary sm:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-2xl font-sans text-sm leading-6 text-black/55">
                    {story.description}
                  </p>
                  <span className="mt-4 flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.12em] text-black/40">
                    <Clock3 size={13} />
                    {formatPublishedDate(story.publishedAt)} · {story.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/news"
            className="group mt-8 flex w-fit items-center gap-3 border border-navy px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-navy hover:text-white"
          >
            View more news{" "}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </>
      )}
    </section>
  );
}
