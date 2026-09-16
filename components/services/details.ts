export type ServiceDetails = {
	why: string;
	benefits: string[];
	deliverables: string[];
	process: { step: string; title: string; description: string }[];
	bestFor: string[];
};

export const serviceDetails: Record<string, ServiceDetails> = {
	branding: {
		why: "A strong brand is more than a logo. It is the feeling people get when they meet your work, the confidence they have when choosing you, and the consistency they recognize everywhere. We build visual systems that make your organization easier to understand, trust, and remember.",
		benefits: [
			"A clear visual point of view that separates you from generic competitors.",
			"Consistent imagery and direction across social, web, print, and campaigns.",
			"A practical brand foundation your team can use long after the project ends.",
			"Content that turns attention into a stronger relationship with your audience.",
		],
		deliverables: ["Brand discovery and creative direction", "Visual moodboards and reference systems", "Brand photography and campaign imagery", "Social and digital content direction", "A usable visual handoff for future content"],
		process: [
			{ step: "01", title: "Understand", description: "We learn your story, audience, ambition, competitors, and the perception you want to create." },
			{ step: "02", title: "Define", description: "We shape a visual direction with references, tone, color, composition, and the right creative territory." },
			{ step: "03", title: "Create", description: "We produce the photography, video, and branded content needed to make the direction real." },
			{ step: "04", title: "Activate", description: "We organize the final assets and guidance so your brand stays consistent across every next move." },
		],
		bestFor: ["New businesses building a credible first impression", "Growing brands that have outgrown inconsistent content", "Organizations launching a product, campaign, or new chapter", "Founders who want their story to look as strong as their work"],
	},
	photography: {
		why: "The right photograph gives people a reason to stop, look closer, and understand what matters. We create images with a human point of view rather than a collection of empty poses.",
		benefits: ["Images that feel specific to your people and purpose.", "A considered visual library for campaigns and everyday communication.", "Direction that helps subjects feel comfortable and natural.", "Files prepared for the platforms where your audience will see them."],
		deliverables: ["Creative planning and shot list", "Portrait, product, event, or campaign photography", "Professional selection and color finishing", "High-resolution and web-ready exports", "A curated final image library"],
		process: [
			{ step: "01", title: "Brief", description: "We clarify the goal, audience, location, mood, and practical needs of the shoot." },
			{ step: "02", title: "Prepare", description: "We build the shot list, references, schedule, and production plan." },
			{ step: "03", title: "Shoot", description: "We direct the session with care, adapting to the real energy of the moment." },
			{ step: "04", title: "Finish", description: "We select, refine, and deliver a focused collection ready to use." },
		],
		bestFor: ["Founder and team portraits", "Events and cultural moments", "Products and campaigns", "Editorial and social content"],
	},
	videography: {
		why: "Video lets an audience hear the voice, feel the energy, and see the details behind an idea. We make moving images with a clear purpose, from short social pieces to complete stories.",
		benefits: ["A clear story instead of disconnected footage.", "Production that respects your time and resources.", "Content designed for the platforms and audience that matter.", "A polished final film with room to feel human."],
		deliverables: ["Concept development and treatment", "Production planning and filming", "Interviews, b-roll, and event coverage", "Editing, sound, color, and captions", "Platform-ready cutdowns where needed"],
		process: [
			{ step: "01", title: "Concept", description: "We turn the brief into a simple, compelling story the audience can follow." },
			{ step: "02", title: "Plan", description: "We lock the locations, schedule, people, equipment, and production details." },
			{ step: "03", title: "Capture", description: "We film with a deliberate eye for performance, atmosphere, and useful detail." },
			{ step: "04", title: "Shape", description: "We edit the strongest material into a finished film with rhythm and intention." },
		],
		bestFor: ["Brand stories and campaigns", "Social media content", "Interviews and testimonials", "Events and behind-the-scenes films"],
	},
	cinematography: {
		why: "Cinematography gives an idea its atmosphere. Through light, movement, framing, and texture, we build visual worlds that make a story feel as important as it sounds.",
		benefits: ["A distinctive visual language for your production.", "Thoughtful lighting and composition that serve the story.", "Collaboration with directors, producers, and creative teams.", "Images designed to stay memorable beyond the first view."],
		deliverables: ["Visual development and references", "Camera, lens, and lighting direction", "On-set cinematography", "Production stills and supporting imagery", "Color-conscious finishing guidance"],
		process: [
			{ step: "01", title: "Read", description: "We understand the script, intention, audience, and emotional arc of the work." },
			{ step: "02", title: "Design", description: "We translate the story into light, lens, movement, palette, and visual references." },
			{ step: "03", title: "Shoot", description: "We protect the visual idea while staying responsive to the realities of production." },
			{ step: "04", title: "Refine", description: "We help the captured images carry their intended tone through the final stage." },
		],
		bestFor: ["Narrative films and documentaries", "Commercial productions", "Music and culture projects", "Visual campaigns with a strong point of view"],
	},
	"podcast-production": {
		why: "Good conversations deserve to sound clear, natural, and worth returning to. We take care of the technical and editorial details so hosts can focus on the conversation.",
		benefits: ["A reliable recording workflow for hosts and guests.", "Cleaner sound that is easier and more enjoyable to listen to.", "Editing that protects the rhythm and personality of a conversation.", "A repeatable format for a podcast that can grow."],
		deliverables: ["Recording setup and technical direction", "Episode editing and sound cleanup", "Intro, outro, and music integration", "Short clips for social promotion", "Final files prepared for publishing"],
		process: [
			{ step: "01", title: "Format", description: "We define the audience, episode shape, tone, and practical recording setup." },
			{ step: "02", title: "Record", description: "We guide the session and keep the technical side stable for everyone involved." },
			{ step: "03", title: "Edit", description: "We remove distractions while keeping the natural voice and energy of the episode." },
			{ step: "04", title: "Publish", description: "We deliver the finished episode and useful promotional cuts for the next release." },
		],
		bestFor: ["Interview podcasts", "Founder and organization shows", "Culture and community conversations", "Branded audio series"],
	},
	"event-coverage": {
		why: "An event disappears quickly, but a thoughtful record lets the people, atmosphere, and meaning live on. We document what happened without losing how it felt to be there.",
		benefits: ["Coverage that feels alive rather than staged.", "A balance of key moments, people, details, and atmosphere.", "A calm, professional presence in busy environments.", "Fast, useful assets for sharing the story while it is still fresh."],
		deliverables: ["Pre-event coverage plan", "Candid and directed photography", "Highlight video and behind-the-scenes footage", "Edited image gallery", "Social-ready selects and short clips"],
		process: [
			{ step: "01", title: "Map", description: "We understand the schedule, priorities, access, people, and moments that matter most." },
			{ step: "02", title: "Prepare", description: "We plan coverage around the event flow while leaving room for the unexpected." },
			{ step: "03", title: "Document", description: "We work discreetly and attentively, capturing both the headline and the human detail." },
			{ step: "04", title: "Deliver", description: "We edit and organize the final assets for memory, reporting, and immediate communication." },
		],
		bestFor: ["Launches and conferences", "Cultural and community events", "Weddings and celebrations", "Brand activations and live experiences"],
	},
};
