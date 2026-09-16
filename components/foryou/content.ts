export type Story = {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
};

export const stories: Story[] = [
    {
        id: "nairobi-after-dark",
        category: "Culture",
        title: "Nairobi after dark: the city finding its own rhythm",
        excerpt: "A visual walk through the late-night places, people, and ideas giving Kenya's capital a new creative pulse.",
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
    {
        id: "sound-of-the-street",
        category: "Podcast",
        title: "The sound of the street is a history lesson",
        excerpt: "Three producers on field recordings, memory, and making room for the sounds we usually walk past.",
        author: "Akinyi Moraa",
        date: "Sep 08, 2026",
        readTime: "32 min listen",
        image: "/images/branding1.jpeg",
    },
    {
        id: "makers-of-tomorrow",
        category: "People",
        title: "Meet the makers building tomorrow from borrowed rooms",
        excerpt: "A portrait series about ambition, resourcefulness, and the communities behind the work.",
        author: "Maya Wambui",
        date: "Sep 05, 2026",
        readTime: "5 min read",
        image: "/images/mhenga1.jpeg",
    },
    {
        id: "creative-work-in-progress",
        category: "Creative work",
        title: "What happens before the camera starts rolling",
        excerpt: "Inside the planning, improvisation, and quiet collaboration that give a production its shape.",
        author: "Brian Otieno",
        date: "Sep 03, 2026",
        readTime: "5 min read",
        image: "/images/carousel/bts.jpeg",
    },
    {
        id: "visual-language-of-branding",
        category: "Branding",
        title: "The visual language behind a memorable brand",
        excerpt: "How thoughtful images, consistent choices, and a clear point of view help organizations become recognizable.",
        author: "Akinyi Moraa",
        date: "Aug 30, 2026",
        readTime: "6 min read",
        image: "/images/services/branding.jpeg",
    },
    {
        id: "events-worth-remembering",
        category: "Events",
        title: "Documenting the moments that bring people together",
        excerpt: "Event coverage becomes more than a record when it pays attention to energy, connection, and the details between the highlights.",
        author: "Maya Wambui",
        date: "Aug 27, 2026",
        readTime: "4 min read",
        image: "/images/services/eventcoverage.jpeg",
    },
    {
        id: "post-production-matters",
        category: "Behind the scenes",
        title: "The story continues in the edit",
        excerpt: "Why pacing, sound, and restraint in post-production can turn strong footage into a story people stay with.",
        author: "Brian Otieno",
        date: "Aug 24, 2026",
        readTime: "5 min read",
        image: "/images/services/postproduction.jpeg",
    },
];

export const trendingStories = [
    { rank: "01", title: "Why everyone is talking about the new creative economy", category: "News", readTime: "4 min read" },
    { rank: "02", title: "Inside the frame: five images that changed the conversation", category: "Visual essay", readTime: "7 min read" },
    { rank: "03", title: "A field guide to Nairobi's independent art spaces", category: "Culture", readTime: "6 min read" },
    { rank: "04", title: "The filmmakers putting East Africa on screen", category: "Film", readTime: "9 min read" },
];