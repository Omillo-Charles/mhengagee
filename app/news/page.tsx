"use client";

import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    title: "President Award Club Hike: Cinematic Journey",
    date: "2 months ago",
    category: "Events",
    videoId: "_IOFgqhtkUc",
    description: "Capturing the breathtaking journey of the Cooperative University of Kenya President Award Club during their recent hike."
  },
  {
    id: 2,
    title: "CUK Student Council: Freshers Night Updates",
    date: "5 months ago",
    category: "Campus News",
    videoId: "Dy9I4MA7bzc",
    description: "Crucial updates from the Students Council regarding the Ngong' Racecourse Freshers Night 2025/2026."
  },
  {
    id: 3,
    title: "President Award Debate Championship",
    date: "4 months ago",
    category: "Competition",
    videoId: "O_S_B-dFWEI",
    description: "Relive the intense and intellectual moments from the Cooperative University President Award Debate Championship."
  },
  {
    id: 4,
    title: "Graduation Ceremony: Gordon Oduor at Ngong'",
    date: "4 months ago",
    category: "Special Events",
    videoId: "EyDA_rWJZEM",
    description: "A cinematic coverage of the graduation ceremony of Gordon Oduor, celebrating academic achievement."
  }
];

export default function NewsPage() {
  return (
    <main className="relative min-h-screen bg-background pt-12 pb-24 selection:bg-primary selection:text-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Latest Updates</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl">
            News & <span className="text-gradient">Insights.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/50">
            Stay updated with the latest events, campus news, and behind-the-scenes content from Mhengagee Media.
          </p>
        </motion.div>

        {/* Featured Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 h-[300px] sm:h-[450px] relative">
               <iframe 
                src={`https://www.youtube.com/embed/${newsItems[0].videoId}`}
                className="absolute inset-0 w-full h-full"
                title={newsItems[0].title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12">
              <span className="mb-4 inline-block text-[10px] font-bold tracking-[0.2em] text-primary uppercase">{newsItems[0].category}</span>
              <h2 className="mb-6 text-3xl font-black tracking-tighter text-white sm:text-4xl">
                {newsItems[0].title}
              </h2>
              <p className="mb-8 text-white/60 leading-relaxed">
                {newsItems[0].description}
              </p>
              <div className="text-sm font-medium text-white/40">{newsItems[0].date}</div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <div className="relative mb-6 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <iframe 
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  className="absolute inset-0 w-full h-full"
                  title={item.title}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">{item.category}</span>
                  <span className="text-[10px] font-medium text-white/30">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 rounded-[2.5rem] bg-white/5 border border-white/10 p-12 text-center"
        >
          <h2 className="text-3xl font-black tracking-tighter text-white mb-6">Want to see more?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Subscribe to our YouTube channel for regular updates and high-quality cinematic content from the heart of Cooperative University.
          </p>
          <a 
            href="https://youtube.com/@mhengagee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-widest text-black transition-all hover:scale-105 active:scale-95 uppercase"
          >
            Visit Our Channel
          </a>
        </motion.div>

      </div>
    </main>
  );
}
