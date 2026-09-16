import Link from "next/link";
import { ArrowUpRight, Flame } from "lucide-react";
import Partners from "@/components/ui/Partners";
import SupportMedia from "@/components/ui/SupportMedia";
import { trendingStories } from "./content";

export default function Trending() {
    return (
        <aside aria-labelledby="trending-heading" className="min-w-0 lg:border-l lg:border-black/10 lg:pl-8">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <h2 id="trending-heading" className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-[-0.02em] text-navy"><Flame size={20} className="text-secondary" />Trending</h2>
                <span className="font-accent text-[10px] uppercase tracking-[0.16em] text-black/40">This week</span>
            </div>

            <div className="divide-y divide-black/10">
                {trendingStories.map((story) => (
                    <Link key={story.rank} href={`/articles/trending-${story.rank}`} className="group block py-6">
                        <div className="flex gap-4">
                            <span className="font-display text-3xl font-bold leading-none text-primary/40 transition-colors group-hover:text-primary">{story.rank}</span>
                            <div className="min-w-0">
                                <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">{story.category}</p>
                                <h3 className="mt-2 font-display text-xl font-bold leading-[1.08] tracking-[-0.02em] text-navy transition-colors group-hover:text-primary">{story.title}</h3>
                                <p className="mt-3 flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.12em] text-black/40">{story.readTime} <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-4 rounded-[2px] bg-primary p-5 text-white sm:p-6">
                <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">Stay in the loop</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight">The good stuff, once a week.</h3>
                <p className="mt-3 font-sans text-sm leading-6 text-white/70">A considered dispatch of stories, conversations, and images worth keeping.</p>
                <button type="button" className="mt-5 flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white">Subscribe <ArrowUpRight size={15} /></button>
            </div>
            <Partners />
			<SupportMedia />
        </aside>
    );
}