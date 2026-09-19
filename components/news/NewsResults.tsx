"use client";

import { useEffect, useState } from "react";
import { newsApi, type NewsArticle } from "@/config/api";
import NewsGrid from "@/components/news/NewsGrid";

function NewsSkeleton() {
    return <div className="grid animate-pulse gap-5 md:grid-cols-2 lg:gap-6"><div className="h-[360px] rounded-[2px] bg-black/10 md:col-span-2" />{[1, 2, 3, 4].map((item) => <div key={item} className="space-y-4 border border-black/5 bg-white p-4"><div className="aspect-[16/10] rounded-[2px] bg-black/10" /><div className="h-3 w-20 rounded bg-black/10" /><div className="h-7 w-4/5 rounded bg-black/10" /><div className="h-4 w-full rounded bg-black/10" /></div>)}</div>;
}

type NewsResultsProps = { category?: string };

export default function NewsResults({ category }: NewsResultsProps) {
    const [stories, setStories] = useState<NewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const categoryKey = category || "all";

    useEffect(() => {
        let isCurrent = true;
        newsApi.list({ category }).then(({ data }) => { if (isCurrent) setStories(Array.isArray(data) ? data : []); }).catch(() => { if (isCurrent) setErrorMessage("News is unavailable right now. Please check back shortly."); }).finally(() => { if (isCurrent) setIsLoading(false); });
        return () => { isCurrent = false; };
    }, [categoryKey, category]);

    if (isLoading) return <NewsSkeleton />;
    if (errorMessage) return <div className="border border-black/10 bg-white p-10"><h1 className="font-display text-3xl font-bold text-navy">We couldn&apos;t load the news.</h1><p className="mt-3 text-sm leading-6 text-black/55">{errorMessage}</p></div>;
    if (stories.length === 0) return <div className="border border-dashed border-black/15 bg-white p-10"><h1 className="font-display text-3xl font-bold text-navy">No news published yet.</h1><p className="mt-3 text-sm leading-6 text-black/55">{category ? `There are no published stories in ${category} yet.` : "Fresh stories will appear here as soon as they are published."}</p></div>;
    return <NewsGrid stories={stories} />;
}
