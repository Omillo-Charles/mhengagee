import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { NewsArticle } from "@/config/api";

type NewsCardProps = {
  story: NewsArticle;
  featured?: boolean;
};

export default function NewsCard({ story, featured = false }: NewsCardProps) {
  return (
    <Link
      href={`/articles/${story.slug}`}
      className={`group block overflow-hidden rounded-[2px] border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] ${featured ? "md:col-span-2" : ""}`}
    >
      <div
        className={`relative overflow-hidden bg-navy ${featured ? "aspect-[16/8]" : "aspect-[16/10]"}`}
      >
        <img
          src={story.coverImage}
          alt={story.title}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
        <span className="absolute left-4 top-4 bg-white px-3 py-1.5 font-accent text-[9px] font-semibold uppercase text-navy">
          {story.category}
        </span>
        {featured && (
          <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            <ArrowUpRight size={17} />
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 font-accent text-[10px] uppercase text-black/40">
          <span>
            {story.publishedAt
              ? new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(story.publishedAt))
              : "Recently published"}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock3 size={12} />
            {story.readTime}
          </span>
        </div>
        <h2
          className={`mt-3 font-display font-bold leading-[1.04] text-navy transition-colors group-hover:text-primary ${featured ? "text-3xl sm:text-5xl" : "text-2xl"}`}
        >
          {story.title}
        </h2>
        <p className="mt-3 line-clamp-2 font-sans text-sm leading-6 text-black/55">
          {story.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="font-accent text-[10px] font-semibold uppercase text-black/45">
            By {story.author}
          </span>
          <ArrowUpRight
            size={16}
            className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
