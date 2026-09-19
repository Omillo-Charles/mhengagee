import Link from "next/link";
import { BriefcaseBusiness, Clapperboard, Cpu, Globe2, HeartPulse, Landmark, Newspaper, Palette, Sparkles, Trophy } from "lucide-react";
import NewsletterSignup from "@/components/news/NewsletterSignup";
import NewsResults from "@/components/news/NewsResults";

const categoryIcons = { News: Newspaper, Sports: Trophy, Entertainment: Clapperboard, Business: BriefcaseBusiness, Technology: Cpu, Lifestyle: Sparkles, Culture: Palette, Politics: Landmark, Health: HeartPulse, World: Globe2 };
const categories = ["News", "Sports", "Entertainment", "Business", "Technology", "Lifestyle", "Culture", "Politics", "Health", "World"];

type NewsPageProps = {
	searchParams: Promise<{ category?: string }>;
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
	const params = await searchParams;
	const selectedCategory = categories.find((category) => category.toLowerCase() === params.category?.toLowerCase());

	return <main className="min-h-screen bg-[#f5f4f0] selection:bg-primary selection:text-white"><section className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16"><nav aria-label="News categories" className="mb-8 overflow-x-auto border-y border-black/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"><div className="mx-auto flex min-w-max items-center justify-center gap-7 py-4">{categories.map((category, index) => { const Icon = categoryIcons[category as keyof typeof categoryIcons]; const isActive = selectedCategory ? selectedCategory === category : index === 0; return <Link key={category} href={index === 0 ? "/news" : `/news?category=${category.toLowerCase()}`} className={`flex shrink-0 items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-primary ${isActive ? "text-primary" : "text-black/55"}`}><Icon size={14} strokeWidth={1.8} aria-hidden="true" />{category}</Link>; })}</div></nav><NewsResults category={selectedCategory} /><NewsletterSignup /></section></main>;
}
