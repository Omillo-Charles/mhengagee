import type { Story } from "@/components/foryou/content";
import NewsCard from "./NewsCard";

type NewsGridProps = {
	stories: Story[];
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
