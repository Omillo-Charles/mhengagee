export type PortfolioItem = {
	id: string;
	title: string;
	category: "Photography" | "Videography" | "Commercials" | "Events";
	image: string;
	width: number;
	height: number;
	feature?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
	{ id: "red-room-portrait", title: "Red room portrait", category: "Photography", image: "/images/carousel/creative.jpeg", width: 4096, height: 5120, feature: true },
	{ id: "after-dark", title: "After dark", category: "Events", image: "/images/carousel/festival.jpeg", width: 716, height: 1075 },
	{ id: "the-maker", title: "The maker", category: "Photography", image: "/images/carousel/shoot1.jpeg", width: 4463, height: 6491 },
	{ id: "on-set", title: "On set", category: "Videography", image: "/images/services/cinematography.jpeg", width: 736, height: 736 },
	{ id: "product-in-focus", title: "Product in focus", category: "Commercials", image: "/images/services/commercial.jpeg", width: 736, height: 736 },
	{ id: "the-event-cut", title: "The event cut", category: "Events", image: "/images/event1.jpeg", width: 4410, height: 5512 },
	{ id: "behind-the-scenes", title: "Behind the scenes", category: "Videography", image: "/images/carousel/bts.jpeg", width: 1911, height: 3061 },
	{ id: "the-finished-frame", title: "The finished frame", category: "Photography", image: "/images/carousel/shoot2.jpeg", width: 4363, height: 6547 },
	{ id: "hair-and-light", title: "Hair and light", category: "Photography", image: "/images/carousel/hairstyles.jpeg", width: 736, height: 920 },
	{ id: "the-open-frame", title: "The open frame", category: "Photography", image: "/images/carousel/_.jpeg", width: 736, height: 920 },
	{ id: "event-stories", title: "Event stories", category: "Events", image: "/images/services/eventcoverage.jpeg", width: 736, height: 490 },
	{ id: "brand-in-focus", title: "Brand in focus", category: "Commercials", image: "/images/services/branding.jpeg", width: 735, height: 1086 },
	{ id: "the-final-cut", title: "The final cut", category: "Videography", image: "/images/services/postproduction.jpeg", width: 736, height: 981 },
	{ id: "the-campaign", title: "The campaign", category: "Commercials", image: "/images/rates.jpeg", width: 1236, height: 1600 },
	{ id: "mhengagee-studio", title: "Mhengagee studio", category: "Photography", image: "/images/mhenga1.jpeg", width: 500, height: 500 },
	{ id: "mhengagee-story", title: "Mhengagee story", category: "Photography", image: "/images/mhenga2.jpeg", width: 1080, height: 1620 },
	{ id: "brand-story", title: "Brand story", category: "Commercials", image: "/images/branding1.jpeg", width: 4262, height: 5328 },
];