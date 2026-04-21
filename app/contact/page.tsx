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
  return (
    <main className="relative min-h-screen bg-background pt-16 pb-24">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column - Form & Socials */}
          <div className="flex flex-col gap-12">
            
            {/* Simple Form */}
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest text-white/70 uppercase">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition-all focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest text-white/70 uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition-all focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold tracking-widest text-white/70 uppercase">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="What is this regarding?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition-all focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest text-white/70 uppercase">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition-all focus:border-white/30"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="mt-2 rounded-xl bg-white px-8 py-4 text-sm font-bold tracking-widest text-black transition-all hover:scale-[1.02] active:scale-95 uppercase"
              >
                Submit
              </button>
            </form>

            {/* Direct Contact & Social Icons */}
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Direct Line</h4>
                <a 
                  href="tel:0712830837" 
                  className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-white px-8 text-sm font-bold tracking-widest text-black shadow-lg transition-transform hover:scale-105 hover:shadow-white/20"
                >
                  +254 712 830 837
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Connect</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 hover:shadow-white/20" 
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a 
                    href="#" 
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 hover:shadow-white/20" 
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                  <a 
                    href="#" 
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110 hover:shadow-white/20" 
                    aria-label="YouTube"
                  >
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Map */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Our Location</h4>
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5" style={{ height: "600px" }}>
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

        </div>
      </div>
    </main>
  );
}
