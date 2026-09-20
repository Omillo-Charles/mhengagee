import type { NewsArticle } from "@/config/api";
import NewsCard from "./NewsCard";

type NewsGridProps = {
  stories: NewsArticle[];
};

export default function NewsGrid({ stories }: NewsGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
      {stories.map((story, index) => (
        <NewsCard key={story.id} story={story} featured={index === 0} />
      ))}
    </div>
  );
}
