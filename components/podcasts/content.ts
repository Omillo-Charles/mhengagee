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

export const episodes: PodcastEpisode[] = [
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
	{
		id: "building-a-creative-life",
		title: "Building a creative life in Nairobi",
		description: "Three makers on staying curious, staying useful, and finding a rhythm that lasts.",
		season: "Season 01 · Episode 02",
		date: "Aug 31, 2026",
		duration: "29 min",
		image: "/images/branding1.jpeg",
		youtubeUrl: "https://www.youtube.com/@DSMMedia",
		spotifyUrl: "https://open.spotify.com/",
	},
	{
		id: "why-stories-stay",
		title: "Why some stories stay with us",
		description: "On memory, image-making, and the small details that turn a moment into meaning.",
		season: "Season 01 · Episode 01",
		date: "Aug 24, 2026",
		duration: "31 min",
		image: "/images/mhenga1.jpeg",
		youtubeUrl: "https://www.youtube.com/@DSMMedia",
		spotifyUrl: "https://open.spotify.com/",
	},
];