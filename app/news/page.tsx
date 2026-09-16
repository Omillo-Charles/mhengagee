import NewsGrid from "@/components/news/NewsGrid";
import NewsletterSignup from "@/components/news/NewsletterSignup";
import { stories } from "@/components/foryou/content";
import Link from "next/link";
import { BriefcaseBusiness, Clapperboard, Cpu, Globe2, HeartPulse, Landmark, Newspaper, Palette, Sparkles, Trophy } from "lucide-react";

const categoryIcons = {
	News: Newspaper,
	Sports: Trophy,
	Entertainment: Clapperboard,
	Business: BriefcaseBusiness,
	Technology: Cpu,
	Lifestyle: Sparkles,
	Culture: Palette,
	Politics: Landmark,
	Health: HeartPulse,
	World: Globe2,
};

const categories = [
	"News",
	"Sports",
	"Entertainment",
	"Business",
	"Technology",
	"Lifestyle",
	"Culture",
	"Politics",
	"Health",
	"World",
];

export default function NewsPage() {
	return (
		<main className="min-h-screen bg-[#f5f4f0] selection:bg-primary selection:text-white">
			<section className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16">
				<nav aria-label="News categories" className="mb-8 overflow-x-auto border-y border-black/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					<div className="mx-auto flex min-w-max items-center justify-center gap-7 py-4">
						{categories.map((category, index) => (
							<Link
								key={category}
								href={index === 0 ? "/news" : `/news?category=${category.toLowerCase()}`}
								className={`flex shrink-0 items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-primary ${index === 0 ? "text-primary" : "text-black/55"}`}
							>
								{(() => {
									const Icon = categoryIcons[category as keyof typeof categoryIcons];

									return <Icon size={14} strokeWidth={1.8} aria-hidden="true" />;
								})()}
								{category}
							</Link>
						))}
					</div>
				</nav>
				<NewsGrid stories={stories} />
				<NewsletterSignup />
			</section>
		</main>
	);
}
