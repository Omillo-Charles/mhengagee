"use client";

import Image from "next/image";
import { Headphones, Play } from "lucide-react";
import { useEffect, useState } from "react";
import FeatureRequest from "@/components/podcasts/FeatureRequest";
import { podcastApi, type YoutubePodcast } from "@/config/api";

function PodcastSkeleton() {
	return <div className="grid animate-pulse gap-6 sm:grid-cols-2 lg:grid-cols-3"><div className="h-[440px] rounded-[2px] bg-black/10 sm:col-span-2 lg:col-span-3" />{[1, 2, 3].map((item) => <div key={item} className="space-y-4 border border-black/5 bg-white p-4"><div className="aspect-[16/10] rounded-[2px] bg-black/10" /><div className="h-3 w-28 rounded bg-black/10" /><div className="h-6 w-4/5 rounded bg-black/10" /><div className="h-4 w-full rounded bg-black/10" /></div>)}</div>;
}

export default function PodcastsPage() {
	const [episodes, setEpisodes] = useState<YoutubePodcast[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [nextPageToken, setNextPageToken] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		podcastApi.youtube({ limit: 12 }).then(({ data, nextPageToken: token }) => {
			setEpisodes(data);
			setNextPageToken(token);
		}).catch(() => setErrorMessage("Podcasts are unavailable right now. Please check back shortly.")).finally(() => setIsLoading(false));
	}, []);

	const loadMoreEpisodes = async () => {
		if (!nextPageToken || isLoadingMore) return;
		setIsLoadingMore(true);
		try {
			const response = await podcastApi.youtube({ limit: 12, pageToken: nextPageToken });
			setEpisodes((currentEpisodes) => [...currentEpisodes, ...response.data]);
			setNextPageToken(response.nextPageToken);
		} catch {
			setErrorMessage("More podcasts could not be loaded right now. Please try again.");
		} finally {
			setIsLoadingMore(false);
		}
	};

	const [featuredEpisode, ...otherEpisodes] = episodes;

	return <main className="min-h-screen bg-[#f5f4f0] selection:bg-primary selection:text-white"><section className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16"><div className="mb-8 flex items-center justify-between border-y border-black/10 py-4"><div className="flex items-center gap-3 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"><Headphones size={16} />DSM Media Podcasts</div><div className="flex gap-6 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50"><span>All videos</span><span>YouTube channel</span></div></div>{isLoading ? <PodcastSkeleton /> : errorMessage && !episodes.length ? <div className="border border-black/10 bg-white p-10"><h1 className="font-display text-3xl font-bold text-navy">We couldn&apos;t load the podcasts.</h1><p className="mt-3 text-sm leading-6 text-black/55">{errorMessage}</p></div> : !featuredEpisode ? <div className="border border-dashed border-black/15 bg-white p-10"><h1 className="font-display text-3xl font-bold text-navy">No podcast videos published yet.</h1><p className="mt-3 text-sm leading-6 text-black/55">New conversations will appear here when they are published on YouTube.</p></div> : <><article className="grid overflow-hidden rounded-[2px] bg-navy text-white lg:grid-cols-[1.1fr_0.9fr]"><div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]"><Image src={featuredEpisode.thumbnail} alt={featuredEpisode.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" /><div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40" /><span className="absolute left-5 top-5 bg-accent-cyan px-3 py-1.5 font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-navy sm:left-8 sm:top-8">Latest episode</span></div><div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14"><p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">Latest conversation</p><h1 className="mt-4 font-display text-4xl font-bold leading-[0.94] tracking-[-0.035em] sm:text-6xl">{featuredEpisode.title}</h1><p className="mt-5 max-w-lg font-sans text-sm leading-7 text-white/65">{featuredEpisode.description}</p><div className="mt-8 flex flex-wrap gap-3"><a href={featuredEpisode.videoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-[#FF0000] px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-[#CC0000]">Watch on YouTube <Play size={14} fill="currentColor" /></a></div></div></article><div className="mb-7 mt-14 flex items-end justify-between border-b border-black/10 pb-4"><div><p className="mb-2 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">From DSM Media</p><h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-navy sm:text-4xl">More conversations</h2></div><span className="font-accent text-[10px] uppercase tracking-[0.16em] text-black/40">Watch at your pace</span></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{otherEpisodes.map((episode) => <article key={episode.id} className="group overflow-hidden rounded-[2px] border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"><a href={episode.videoUrl} target="_blank" rel="noreferrer" className="relative block aspect-[16/10] overflow-hidden bg-navy"><Image src={episode.thumbnail} alt={episode.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" /><span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white"><Play size={16} fill="currentColor" /></span></a><div className="p-5 sm:p-6"><div className="font-accent text-[10px] uppercase tracking-[0.12em] text-black/40">{new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(episode.publishedAt))} · Podcast video</div><h2 className="mt-3 font-display text-2xl font-bold leading-[1.04] tracking-[-0.025em] text-navy transition-colors group-hover:text-primary">{episode.title}</h2><p className="mt-3 line-clamp-2 font-sans text-sm leading-6 text-black/55">{episode.description}</p></div></article>)}</div>{nextPageToken && <div className="mt-10 flex justify-center"><button type="button" onClick={loadMoreEpisodes} disabled={isLoadingMore} className="border border-navy bg-navy px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary disabled:cursor-wait disabled:opacity-60">{isLoadingMore ? "Loading more" : "Load more videos"}</button></div>}{errorMessage && episodes.length > 0 && <p className="mt-4 text-center text-sm text-red-700">{errorMessage}</p>}</>}<FeatureRequest /></section></main>;
}
