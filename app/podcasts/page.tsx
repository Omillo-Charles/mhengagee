import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Headphones, Play } from "lucide-react";
import PodcastGrid from "@/components/podcasts/PodcastGrid";
import FeatureRequest from "@/components/podcasts/FeatureRequest";
import { episodes } from "@/components/podcasts/content";

export default function PodcastsPage() {
	const [featuredEpisode, ...otherEpisodes] = episodes;

	return (
		<main className="min-h-screen bg-[#f5f4f0] selection:bg-primary selection:text-white">
			<section className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16">
				<div className="mb-8 flex items-center justify-between border-y border-black/10 py-4">
					<div className="flex items-center gap-3 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"><Headphones size={16} />DSM Media Podcasts</div>
					<div className="flex gap-6 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"><span>All episodes</span><span>Season one</span></div>
				</div>

				<article className="grid overflow-hidden rounded-[2px] bg-navy text-white lg:grid-cols-[1.1fr_0.9fr]">
					<div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]">
						<video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={featuredEpisode.image}>
							<source src="/videos/0122e4dedba262507d1ec9987289e94d_720w.mp4" type="video/mp4" />
						</video>
						<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40" />
						<span className="absolute left-5 top-5 bg-accent-cyan px-3 py-1.5 font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-navy sm:left-8 sm:top-8">Latest episode</span>
					</div>
					<div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">{featuredEpisode.season}</p>
						<h1 className="mt-4 font-display text-4xl font-bold leading-[0.94] tracking-[-0.035em] sm:text-6xl">{featuredEpisode.title}</h1>
						<p className="mt-5 max-w-lg font-sans text-sm leading-7 text-white/65">{featuredEpisode.description}</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<a href={featuredEpisode.youtubeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#FF0000] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-[#CC0000]">Watch on YouTube <Play size={14} fill="currentColor" /></a>
							<a href={featuredEpisode.spotifyUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#1DB954] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1DB954] transition-colors hover:bg-[#1DB954] hover:text-white">Listen on Spotify <ArrowUpRight size={14} /></a>
						</div>
					</div>
				</article>

				<div className="mb-7 mt-14 flex items-end justify-between border-b border-black/10 pb-4">
					<div><p className="mb-2 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">From DSM Media</p><h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-navy sm:text-4xl">More conversations</h2></div>
					<span className="font-accent text-[10px] uppercase tracking-[0.16em] text-black/40">Listen at your pace</span>
				</div>
				<PodcastGrid episodes={otherEpisodes} />
				<FeatureRequest />
			</section>
		</main>
	);
}
