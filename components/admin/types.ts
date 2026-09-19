export type PortfolioItem = {
    id: string;
    title: string;
    category: "Photography" | "Videography" | "Commercials" | "Events";
    image: string;
    width: number;
    height: number;
    feature?: boolean;
    publishedAt?: string | null;
};

export type EditorState =
    | { kind: "portfolio"; mode: "add" | "edit"; item?: PortfolioItem };
