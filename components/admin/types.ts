export type NewsItem = {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
};

export type PortfolioItem = {
    id: string;
    title: string;
    category: "Photography" | "Videography" | "Commercials" | "Events";
    image: string;
    width: number;
    height: number;
    feature?: boolean;
};

export type PodcastEpisode = {
    id: string;
    title: string;
    description: string;
    season: string;
    date: string;
    duration: string;
    image: string;
    youtubeUrl: string;
    spotifyUrl: string;
    featured?: boolean;
};

export type EditorState =
    | { kind: "news"; mode: "add" | "edit"; item?: NewsItem }
    | { kind: "portfolio"; mode: "add" | "edit"; item?: PortfolioItem }
    | { kind: "podcasts"; mode: "add" | "edit"; item?: PodcastEpisode };
