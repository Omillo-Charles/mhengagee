import type { PodcastEpisode } from "./content";
import PodcastCard from "./PodcastCard";

type PodcastGridProps = {
	episodes: PodcastEpisode[];
};

export default function PodcastGrid({ episodes }: PodcastGridProps) {
	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{episodes.map((episode) => <PodcastCard key={episode.id} episode={episode} />)}
		</div>
	);
}