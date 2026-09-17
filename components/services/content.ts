export type Service = {
	slug: string;
	title: string;
	description: string;
	image: string;
	kicker: string;
	body: string;
};

export const services: Service[] = [
	{
		slug: "photography",
		title: "Photography",
		description: "Portraits, events, products, and campaigns shaped with clarity and character.",
		image: "/images/carousel/creative.jpeg",
		kicker: "Still images",
		body: "We create photographs that feel immediate, considered, and true to the people or ideas in front of the lens. From portraits and events to products and campaigns, every frame is built around your story.",
	},
	{
		slug: "videography",
		title: "Videography",
		description: "Purposeful video content for brands, people, and moments that deserve to move.",
		image: "/images/carousel/bts.jpeg",
		kicker: "Moving images",
		body: "Our videography service brings together planning, production, and an attentive eye for detail to create films and content that connect with an audience.",
	},
	{
		slug: "cinematography",
		title: "Cinematography",
		description: "Visual direction with a distinctive point of view, from the first frame to the final cut.",
		image: "/images/services/cinematography.jpeg",
		kicker: "Visual direction",
		body: "We use light, composition, movement, and texture to give each production a visual language that feels intentional and stays with the viewer.",
	},
	{
		slug: "podcast-production",
		title: "Podcast production",
		description: "Recording, editing, and finishing conversations that sound as good as they feel.",
		image: "/images/services/postproduction.jpeg",
		kicker: "Sound and story",
		body: "From a clear recording setup to a polished final episode, we help turn conversations and ideas into podcasts people want to keep listening to.",
	},
	{
		slug: "branding",
		title: "Branding",
		description: "A coherent visual presence that helps your work become recognizable and remembered.",
		image: "/images/services/branding.jpeg",
		kicker: "Identity systems",
		body: "We help brands find a visual point of view through thoughtful imagery, direction, and content that makes the right impression across every touchpoint.",
	},
	{
		slug: "event-coverage",
		title: "Event coverage",
		description: "A sensitive, energetic record of the people and details that make an event matter.",
		image: "/images/services/eventcoverage.jpeg",
		kicker: "Live moments",
		body: "We document events as they unfold, balancing the headline moments with the small interactions, atmosphere, and details that bring the whole experience back to life.",
	},
];
