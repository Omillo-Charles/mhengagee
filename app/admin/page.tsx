"use client";

import { useMemo, useState } from "react";
import {
    ArrowUpRight,
    LogOut,
    Pencil,
    Plus,
    Trash2,
} from "lucide-react";
import { AdminEditors } from "@/components/admin/AdminEditors";
import { AdminSidebar, type Section } from "@/components/admin/AdminSidebar";
import type { EditorState, NewsItem, PortfolioItem, PodcastEpisode } from "@/components/admin/types";

const initialNews: NewsItem[] = [
    {
        id: "nairobi-after-dark",
        category: "Culture",
        title: "Nairobi after dark",
        excerpt: "A visual walk through the late-night places, people, and ideas shaping the city's creative pulse.",
        author: "Maya Wambui",
        date: "Sep 12, 2026",
        readTime: "6 min read",
        image: "/images/mhenga2.jpeg",
    },
    {
        id: "new-african-cinema",
        category: "Cinematography",
        title: "The new African cinema is being built in plain sight",
        excerpt: "Independent filmmakers are turning smaller crews and sharper stories into a distinct visual language.",
        author: "Brian Otieno",
        date: "Sep 10, 2026",
        readTime: "8 min read",
        image: "/images/event1.jpeg",
    },
];

const initialPortfolio: PortfolioItem[] = [
    { id: "red-room-portrait", title: "Red room portrait", category: "Photography", image: "/images/carousel/creative.jpeg", width: 4096, height: 5120, feature: true },
    { id: "after-dark", title: "After dark", category: "Events", image: "/images/carousel/festival.jpeg", width: 716, height: 1075 },
    { id: "on-set", title: "On set", category: "Videography", image: "/images/services/cinematography.jpeg", width: 736, height: 736 },
];

const initialPodcasts: PodcastEpisode[] = [
    {
        id: "making-space-for-new-voices",
        title: "Making space for new voices",
        description: "A conversation about creative courage, community, and the work it takes to be heard.",
        season: "Season 01 · Episode 04",
        date: "Sep 14, 2026",
        duration: "42 min",
        image: "/images/mhenga2.jpeg",
        youtubeUrl: "https://www.youtube.com/@DSMMedia",
        spotifyUrl: "https://open.spotify.com/",
        featured: true,
    },
    {
        id: "the-work-behind-the-frame",
        title: "The work behind the frame",
        description: "What the final image does not show: process, patience, and the people behind the camera.",
        season: "Season 01 · Episode 03",
        date: "Sep 07, 2026",
        duration: "36 min",
        image: "/images/event1.jpeg",
        youtubeUrl: "https://www.youtube.com/@DSMMedia",
        spotifyUrl: "https://open.spotify.com/",
    },
];

const overviewStats = [
    { label: "Published", value: "42", tone: "text-navy" },
    { label: "Drafts", value: "11", tone: "text-primary" },
    { label: "Comments", value: "86", tone: "text-secondary" },
    { label: "Uploads", value: "316", tone: "text-accent-cyan" },
];

const settingActions = [
    { label: "Reset drafts", icon: Trash2, danger: false },
    { label: "Delete account", icon: Trash2, danger: true },
    { label: "Log out", icon: LogOut, danger: false },
];

const getIdFromTitle = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "item";

export default function AdminPage() {
    const [activeSection, setActiveSection] = useState<Section>("overview");
    const [news, setNews] = useState<NewsItem[]>(initialNews);
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>(initialPortfolio);
    const [podcasts, setPodcasts] = useState<PodcastEpisode[]>(initialPodcasts);
    const [editor, setEditor] = useState<EditorState | null>(null);

    const activeEditorLabel = useMemo(() => {
        if (!editor) return "";
        if (editor.kind === "news") return editor.mode === "add" ? "Add news item" : "Edit news item";
        if (editor.kind === "portfolio") return editor.mode === "add" ? "Add portfolio image" : "Edit portfolio image";
        return editor.mode === "add" ? "Add podcast episode" : "Edit podcast episode";
    }, [editor]);

    const openAdd = (kind: EditorState["kind"]) => setEditor({ kind, mode: "add" });
    function openEdit(kind: "news", item: NewsItem): void;
    function openEdit(kind: "portfolio", item: PortfolioItem): void;
    function openEdit(kind: "podcasts", item: PodcastEpisode): void;
    function openEdit(kind: EditorState["kind"], item: NewsItem | PortfolioItem | PodcastEpisode) {
        if (kind === "news" && "excerpt" in item) {
            setEditor({ kind, mode: "edit", item });
        } else if (kind === "portfolio" && "width" in item) {
            setEditor({ kind, mode: "edit", item });
        } else if (kind === "podcasts" && "youtubeUrl" in item) {
            setEditor({ kind, mode: "edit", item });
        }
    }
    const closeEditor = () => setEditor(null);

    const handleNewsSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const file = formData.get("image") as File | null;
        const generatedImage = file && file.name
            ? URL.createObjectURL(file)
            : String(formData.get("imageUrl") || (editor?.kind === "news" && editor.item ? editor.item.image : "/images/mhenga1.jpeg"));
        const payload = {
            id: String(formData.get("id") || getIdFromTitle(String(formData.get("title") || "news-item"))),
            category: String(formData.get("category") || "General"),
            title: String(formData.get("title") || "Untitled story"),
            excerpt: String(formData.get("excerpt") || ""),
            author: String(formData.get("author") || "Mhengagee Media"),
            date: String(formData.get("date") || "Today"),
            readTime: String(formData.get("readTime") || "5 min read"),
            image: generatedImage,
        } as NewsItem;

        if (editor?.kind === "news" && editor.mode === "edit" && editor.item) {
            setNews((items) => items.map((item) => (item.id === editor.item!.id ? { ...item, ...payload } : item)));
        } else {
            setNews((items) => [payload, ...items]);
        }
        closeEditor();
    };

    const handlePortfolioSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const file = formData.get("image") as File | null;
        const generatedImage = file && file.name ? URL.createObjectURL(file) : String(formData.get("imageUrl") || (editor?.kind === "portfolio" && editor.item ? editor.item.image : "/images/mhenga1.jpeg"));
        const payload = {
            id: String(formData.get("id") || getIdFromTitle(String(formData.get("title") || "portfolio-item"))),
            title: String(formData.get("title") || file?.name?.replace(/\.[^/.]+$/, "") || "Untitled project"),
            category: (String(formData.get("category") || "Photography") as PortfolioItem["category"]),
            image: generatedImage,
            width: Number(formData.get("width") || 1200),
            height: Number(formData.get("height") || 1600),
            feature: Boolean(formData.get("feature")),
        } as PortfolioItem;

        if (editor?.kind === "portfolio" && editor.mode === "edit" && editor.item) {
            setPortfolio((items) => items.map((item) => (item.id === editor.item!.id ? { ...item, ...payload } : item)));
        } else {
            setPortfolio((items) => [payload, ...items]);
        }
        closeEditor();
    };

    const handlePodcastSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const file = formData.get("image") as File | null;
        const generatedImage = file && file.name
            ? URL.createObjectURL(file)
            : String(formData.get("imageUrl") || (editor?.kind === "podcasts" && editor.item ? editor.item.image : "/images/mhenga1.jpeg"));
        const payload = {
            id: String(formData.get("id") || getIdFromTitle(String(formData.get("title") || "podcast-episode"))),
            title: String(formData.get("title") || "Untitled episode"),
            description: String(formData.get("description") || ""),
            season: String(formData.get("season") || "Season 01"),
            date: String(formData.get("date") || "Today"),
            duration: String(formData.get("duration") || "30 min"),
            image: generatedImage,
            youtubeUrl: String(formData.get("youtubeUrl") || "https://www.youtube.com/@DSMMedia"),
            spotifyUrl: String(formData.get("spotifyUrl") || "https://open.spotify.com/"),
            featured: Boolean(formData.get("featured")),
        } as PodcastEpisode;

        if (editor?.kind === "podcasts" && editor.mode === "edit" && editor.item) {
            setPodcasts((items) => items.map((item) => (item.id === editor.item!.id ? { ...item, ...payload } : item)));
        } else {
            setPodcasts((items) => [payload, ...items]);
        }
        closeEditor();
    };

    const handleDelete = (kind: EditorState["kind"], id: string) => {
        if (kind === "news") setNews((items) => items.filter((item) => item.id !== id));
        if (kind === "portfolio") setPortfolio((items) => items.filter((item) => item.id !== id));
        if (kind === "podcasts") setPodcasts((items) => items.filter((item) => item.id !== id));
    };

    const renderNewsPanel = () => (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">News</p>
                    <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-navy">Stories</h1>
                </div>
                <button type="button" onClick={() => openAdd("news")} className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy">
                    <Plus size={14} />
                    Add story
                </button>
            </div>

            {editor?.kind === "news" && <AdminEditors editor={editor} label={activeEditorLabel} onClose={closeEditor} onNewsSubmit={handleNewsSubmit} onPortfolioSubmit={handlePortfolioSubmit} onPodcastSubmit={handlePodcastSubmit} />}

            <div className="space-y-4">
                {news.map((item) => (
                    <div key={item.id} className="rounded-[2px] border border-black/10 bg-[#f8f7f3] p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative h-20 w-20 overflow-hidden rounded-[2px] border border-black/10 bg-white">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">{item.category}</p>
                                    <h3 className="mt-2 font-display text-2xl font-bold text-navy">{item.title}</h3>
                                    <p className="mt-2 text-sm text-black/55">{item.author} · {item.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button type="button" onClick={() => openEdit("news", item)} className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-navy hover:border-primary hover:text-primary">
                                    <Pencil size={12} />
                                    Edit
                                </button>
                                <button type="button" onClick={() => handleDelete("news", item.id)} className="inline-flex items-center gap-2 border border-red-200 bg-red-50 px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-red-700 hover:bg-red-100">
                                    <Trash2 size={12} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPortfolioPanel = () => (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Portfolio</p>
                    <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-navy">Gallery</h1>
                </div>
                <button type="button" onClick={() => openAdd("portfolio")} className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy">
                    <Plus size={14} />
                    Add image
                </button>
            </div>

            {editor?.kind === "portfolio" && <AdminEditors editor={editor} label={activeEditorLabel} onClose={closeEditor} onNewsSubmit={handleNewsSubmit} onPortfolioSubmit={handlePortfolioSubmit} onPodcastSubmit={handlePodcastSubmit} />}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {portfolio.map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-[2px] border border-black/10 bg-[#f8f7f3]">
                        <div className="relative aspect-[4/5] overflow-hidden bg-white">
                            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="space-y-3 p-4">
                            <div className="flex items-center justify-between gap-2">
                                <p className="font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">{item.category}</p>
                                {item.feature && <span className="rounded-full bg-primary/10 px-2 py-1 font-accent text-[8px] font-semibold uppercase tracking-[0.14em] text-primary">Featured</span>}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-navy">{item.title}</h3>
                            <div className="flex items-center gap-2">
                                <button type="button" onClick={() => openEdit("portfolio", item)} className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-navy hover:border-primary hover:text-primary">
                                    <Pencil size={12} />
                                    Edit
                                </button>
                                <button type="button" onClick={() => handleDelete("portfolio", item.id)} className="inline-flex items-center gap-2 border border-red-200 bg-red-50 px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-red-700 hover:bg-red-100">
                                    <Trash2 size={12} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPodcastPanel = () => (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Podcasts</p>
                    <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-navy">Episodes</h1>
                </div>
                <button type="button" onClick={() => openAdd("podcasts")} className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy">
                    <Plus size={14} />
                    Add episode
                </button>
            </div>

            {editor?.kind === "podcasts" && <AdminEditors editor={editor} label={activeEditorLabel} onClose={closeEditor} onNewsSubmit={handleNewsSubmit} onPortfolioSubmit={handlePortfolioSubmit} onPodcastSubmit={handlePodcastSubmit} />}

            <div className="space-y-4">
                {podcasts.map((item) => (
                    <div key={item.id} className="rounded-[2px] border border-black/10 bg-[#f8f7f3] p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative h-20 w-20 overflow-hidden rounded-[2px] border border-black/10 bg-white">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">{item.season}</p>
                                    <h3 className="mt-2 font-display text-2xl font-bold text-navy">{item.title}</h3>
                                    <p className="mt-2 text-sm text-black/55">{item.date} · {item.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button type="button" onClick={() => openEdit("podcasts", item)} className="inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-navy hover:border-primary hover:text-primary">
                                    <Pencil size={12} />
                                    Edit
                                </button>
                                <button type="button" onClick={() => handleDelete("podcasts", item.id)} className="inline-flex items-center gap-2 border border-red-200 bg-red-50 px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-red-700 hover:bg-red-100">
                                    <Trash2 size={12} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSettingsPanel = () => (
        <div className="space-y-6">
            <div className="border-b border-black/10 pb-5">
                <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Settings</p>
                <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-navy">Account</h1>
            </div>

            <div className="space-y-4">
                {settingActions.map(({ label, icon: Icon, danger }) => (
                    <button
                        key={label}
                        type="button"
                        className={`flex w-full items-center justify-between gap-4 rounded-[2px] border p-4 text-left transition-colors ${danger ? "border-red-200 bg-red-50 text-red-700 hover:bg-red-100" : "border-black/10 bg-[#f8f7f3] text-navy hover:bg-white"
                            }`}
                    >
                        <span className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                                <Icon size={15} />
                            </span>
                            <span className="font-display text-xl font-bold">{label}</span>
                        </span>
                        <ArrowUpRight size={15} />
                    </button>
                ))}
            </div>
        </div>
    );

    const renderOverviewPanel = () => (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Overview</p>
                    <h1 className="mt-2 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-navy">Dashboard</h1>
                </div>
                <button type="button" onClick={() => setActiveSection("news")} className="inline-flex items-center gap-2 bg-navy px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary">
                    <Plus size={14} />
                    New item
                </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {overviewStats.map((stat) => (
                    <div key={stat.label} className="rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5">
                        <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">{stat.label}</p>
                        <p className={`mt-5 font-display text-4xl font-bold tracking-[-0.04em] ${stat.tone}`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[2px] border border-black/10 bg-white p-5">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="font-display text-2xl font-bold text-navy">Recently published</h2>
                        <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/40">This week</span>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "City lights after dark", type: "News", time: "2 days ago" },
                            { title: "Brand refresh case study", type: "Portfolio", time: "3 days ago" },
                            { title: "Behind the set", type: "Podcast", time: "5 days ago" },
                        ].map((item) => (
                            <div key={item.title} className="flex items-center justify-between gap-4 rounded-[2px] border border-black/10 bg-[#f8f7f3] p-4">
                                <div>
                                    <p className="font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">{item.type}</p>
                                    <p className="mt-2 font-display text-xl font-bold text-navy">{item.title}</p>
                                </div>
                                <span className="font-accent text-[10px] uppercase tracking-[0.14em] text-black/45">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2px] border border-black/10 bg-navy p-5 text-white">
                    <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">Before publishing</p>
                    <h2 className="mt-3 font-display text-2xl font-bold">Quick checklist</h2>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
                        <li>• Check the headline and date</li>
                        <li>• Make sure the image fits the layout</li>
                        <li>• Confirm the links and CTA</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeSection) {
            case "overview":
                return renderOverviewPanel();
            case "news":
                return renderNewsPanel();
            case "portfolio":
                return renderPortfolioPanel();
            case "podcasts":
                return renderPodcastPanel();
            case "settings":
                return renderSettingsPanel();
            default:
                return renderOverviewPanel();
        }
    };

    return (
        <main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
            <div className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
                <div className="grid min-h-[calc(100vh-4rem)] overflow-hidden rounded-[2px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)] lg:grid-cols-[240px_minmax(0,1fr)]">
                    <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

                    <section className="p-5 sm:p-6 lg:p-8">{renderContent()}</section>
                </div>
            </div>
        </main>
    );
}
