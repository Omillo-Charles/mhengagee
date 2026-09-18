"use client";

import { Check, X } from "lucide-react";
import type { EditorState, NewsItem, PortfolioItem, PodcastEpisode } from "./types";

type EditorProps = {
    editor: EditorState;
    label: string;
    onClose: () => void;
    onNewsSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onPortfolioSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onPodcastSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const inputClass = "mt-2 w-full border-b border-black/15 bg-transparent px-0 py-2 text-sm text-navy outline-none placeholder:text-black/35";
const labelClass = "font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/55";
const uploadClass = "mt-2 block w-full cursor-pointer rounded-[2px] border border-dashed border-black/15 bg-white p-3 text-sm text-navy file:mr-3 file:rounded-[2px] file:border-0 file:bg-primary file:px-3 file:py-2 file:font-accent file:text-[9px] file:font-semibold file:uppercase file:tracking-[0.14em] file:text-white";

function EditorHeader({ label, onClose }: Pick<EditorProps, "label" | "onClose">) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
            <h3 className="font-display text-2xl font-bold text-navy">{label}</h3>
            <button type="button" onClick={onClose} className="rounded-full border border-black/10 p-2 text-navy hover:text-primary">
                <X size={14} />
            </button>
        </div>
    );
}

function EditorActions({ onClose }: { onClose: () => void }) {
    return (
        <div className="flex items-center justify-end gap-3 border-t border-black/10 pt-4">
            <button type="button" onClick={onClose} className="font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-black/55 hover:text-navy">Cancel</button>
            <button type="submit" className="inline-flex items-center gap-2 bg-navy px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary">
                <Check size={14} />
                Save
            </button>
        </div>
    );
}

export function AdminEditors({ editor, label, onClose, onNewsSubmit, onPortfolioSubmit, onPodcastSubmit }: EditorProps) {
    if (editor.kind === "news") {
        return <NewsEditor item={editor.item} label={label} onClose={onClose} onSubmit={onNewsSubmit} />;
    }

    if (editor.kind === "portfolio") {
        return <PortfolioEditor item={editor.item} label={label} onClose={onClose} onSubmit={onPortfolioSubmit} />;
    }

    return <PodcastEditor item={editor.item} label={label} onClose={onClose} onSubmit={onPodcastSubmit} />;
}

function NewsEditor({ item, label, onClose, onSubmit }: { item?: NewsItem; label: string; onClose: () => void; onSubmit: EditorProps["onNewsSubmit"] }) {
    return (
        <form onSubmit={onSubmit} className="space-y-5 rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5">
            <EditorHeader label={label} onClose={onClose} />
            <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-left"><span className={labelClass}>Title</span><input name="title" defaultValue={item?.title || ""} required className={inputClass} placeholder="Story title" /></label>
                <label className="block text-left"><span className={labelClass}>Category</span><input name="category" defaultValue={item?.category || "Culture"} className={inputClass} placeholder="Culture" /></label>
                <label className="block text-left md:col-span-2"><span className={labelClass}>Excerpt</span><textarea name="excerpt" defaultValue={item?.excerpt || ""} rows={4} className={`${inputClass} resize-none`} placeholder="Short summary..." /></label>
                <label className="block text-left"><span className={labelClass}>Author</span><input name="author" defaultValue={item?.author || "Mhengagee Media"} className={inputClass} placeholder="Maya Wambui" /></label>
                <label className="block text-left"><span className={labelClass}>Read time</span><input name="readTime" defaultValue={item?.readTime || "5 min read"} className={inputClass} placeholder="5 min read" /></label>
                <label className="block text-left"><span className={labelClass}>Date</span><input name="date" defaultValue={item?.date || "Sep 12, 2026"} className={inputClass} placeholder="Sep 12, 2026" /></label>
                <label className="block text-left"><span className={labelClass}>Upload image</span><input name="image" type="file" accept="image/*" required={!item} className={uploadClass} /></label>
            </div>
            <EditorActions onClose={onClose} />
        </form>
    );
}

function PortfolioEditor({ item, label, onClose, onSubmit }: { item?: PortfolioItem; label: string; onClose: () => void; onSubmit: EditorProps["onPortfolioSubmit"] }) {
    return (
        <form onSubmit={onSubmit} className="space-y-5 rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5">
            <EditorHeader label={label} onClose={onClose} />
            <label className="block text-left"><span className={labelClass}>Upload image</span><input name="image" type="file" accept="image/*" required className={uploadClass} /></label>
            {item?.image ? <div className="overflow-hidden rounded-[2px] border border-black/10 bg-white p-3"><img src={item.image} alt={item.title} className="h-48 w-full rounded-[2px] object-cover" /></div> : null}
            <input type="hidden" name="title" value={item?.title || "Untitled project"} />
            <input type="hidden" name="category" value={item?.category || "Photography"} />
            <input type="hidden" name="width" value={item?.width || 1200} />
            <input type="hidden" name="height" value={item?.height || 1600} />
            <input type="hidden" name="feature" value={item?.feature ? "true" : "false"} />
            <EditorActions onClose={onClose} />
        </form>
    );
}

function PodcastEditor({ item, label, onClose, onSubmit }: { item?: PodcastEpisode; label: string; onClose: () => void; onSubmit: EditorProps["onPodcastSubmit"] }) {
    return (
        <form onSubmit={onSubmit} className="space-y-5 rounded-[2px] border border-black/10 bg-[#f8f7f3] p-5">
            <EditorHeader label={label} onClose={onClose} />
            <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-left"><span className={labelClass}>Title</span><input name="title" defaultValue={item?.title || ""} required className={inputClass} placeholder="Episode title" /></label>
                <label className="block text-left md:col-span-2"><span className={labelClass}>Description</span><textarea name="description" defaultValue={item?.description || ""} rows={4} className={`${inputClass} resize-none`} placeholder="Short summary for the episode..." /></label>
                <label className="block text-left"><span className={labelClass}>Upload image</span><input name="image" type="file" accept="image/*" required={!item} className={uploadClass} /></label>
                <label className="block text-left"><span className={labelClass}>YouTube link</span><input name="youtubeUrl" defaultValue={item?.youtubeUrl || ""} required className={inputClass} placeholder="https://youtube.com/..." /></label>
                <label className="block text-left"><span className={labelClass}>Spotify link</span><input name="spotifyUrl" defaultValue={item?.spotifyUrl || ""} required className={inputClass} placeholder="https://open.spotify.com/..." /></label>
            </div>
            <input type="hidden" name="season" value={item?.season || "Season 01"} />
            <input type="hidden" name="date" value={item?.date || "Today"} />
            <input type="hidden" name="duration" value={item?.duration || "30 min"} />
            <input type="hidden" name="featured" value={item?.featured ? "true" : "false"} />
            <EditorActions onClose={onClose} />
        </form>
    );
}
