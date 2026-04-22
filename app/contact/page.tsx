"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.582 6.186a2.71 2.71 0 0 0-1.905-1.916C17.994 3.8 12 3.8 12 3.8s-5.994 0-7.677.47a2.71 2.71 0 0 0-1.905 1.916C1.948 7.878 1.948 12 1.948 12s0 4.122.47 5.814a2.71 2.71 0 0 0 1.905 1.916C5.994 20.2 12 20.2 12 20.2s5.994 0 7.677-.47a2.71 2.71 0 0 0 1.905-1.916c.47-1.692.47-5.814.47-5.814s0-4.122-.47-5.814zm-11.8 9.071V8.743L15.342 12l-5.56 3.257z"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "254712830837";
    const text = `Hello Mhengagee Media! 👋\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject || "General Inquiry"}\n\n*Message:* ${message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <main className="relative min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Get in Touch</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column - Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-md shadow-2xl"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase ml-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder-white/20 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase ml-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder-white/20 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="subject" className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase ml-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder-white/20 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase ml-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder-white/20 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group relative mt-4 overflow-hidden rounded-2xl bg-white px-10 py-5 text-sm font-black tracking-widest text-black transition-all hover:scale-[1.02] active:scale-95 uppercase shadow-xl hover:shadow-white/10"
              >
                <span className="relative z-10 transition-colors group-hover:text-white">Send Message</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-tr from-accent-cyan to-secondary transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </form>

            {/* Direct Contact & Social Icons */}
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between px-4">
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Direct Line</h4>
                <a 
                  href="tel:0712830837" 
                  className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-white px-10 text-sm font-black tracking-widest text-black shadow-lg transition-transform hover:scale-105 hover:shadow-white/20"
                >
                  +254 712 830 837
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">Connect</h4>
                <div className="flex items-center gap-4">
                  {[
                    { icon: <InstagramIcon />, label: "Instagram" },
                    { icon: <TwitterIcon />, label: "Twitter" },
                    { icon: <YoutubeIcon />, label: "YouTube" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 hover:shadow-white/20" 
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual & Map (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Intelligent Carousel Integration */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/5 shadow-2xl" style={{ height: "400px" }}>
              <div className="h-full w-full">
                <ImageCarousel />
              </div>
            </div>

            {/* Location Map */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase ml-4">Our Location</h4>
              <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl" style={{ height: "350px" }}>
                <iframe 
                  src="https://www.google.com/maps?q=Cooperative+University+of+Kenya&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Map to Cooperative University of Kenya"
                  className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
