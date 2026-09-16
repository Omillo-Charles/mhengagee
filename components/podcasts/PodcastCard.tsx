import Image from "next/image";
import { ArrowUpRight, Clock3, Play } from "lucide-react";
import type { PodcastEpisode } from "./content";

type PodcastCardProps = {
	episode: PodcastEpisode;
};

export default function PodcastCard({ episode }: PodcastCardProps) {
	return (
		<article className="group overflow-hidden rounded-[2px] border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
			<div className="relative aspect-[16/10] overflow-hidden bg-navy">
				<Image src={episode.image} alt={episode.title} fill className="object-cover object-top transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
				<span className="absolute left-4 top-4 bg-white px-3 py-1.5 font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-navy">DSM Media</span>
				<a href={episode.youtubeUrl} target="_blank" rel="noreferrer" aria-label={`Watch ${episode.title} on YouTube`} className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white transition-transform hover:scale-110 hover:bg-[#CC0000]"><Play size={16} fill="currentColor" /></a>
			</div>
			<div className="p-5 sm:p-6">
				<div className="flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.12em] text-black/40"><span>{episode.date}</span><span>·</span><span className="flex items-center gap-1"><Clock3 size={12} />{episode.duration}</span></div>
				<h2 className="mt-3 font-display text-2xl font-bold leading-[1.04] tracking-[-0.025em] text-navy transition-colors group-hover:text-primary">{episode.title}</h2>
				<p className="mt-3 line-clamp-2 font-sans text-sm leading-6 text-black/55">{episode.description}</p>
				<div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
					<span className="font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/45">{episode.season}</span>
					<a href={episode.spotifyUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-accent text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1DB954] transition-colors hover:text-[#16883D]">Spotify <ArrowUpRight size={14} /></a>
				</div>
			</div>
		</article>
	);
}