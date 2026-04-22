import Link from "next/link";
import Image from "next/image";

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.582 6.186a2.71 2.71 0 0 0-1.905-1.916C17.994 3.8 12 3.8 12 3.8s-5.994 0-7.677.47a2.71 2.71 0 0 0-1.905 1.916C1.948 7.878 1.948 12 1.948 12s0 4.122.47 5.814a2.71 2.71 0 0 0 1.905 1.916C5.994 20.2 12 20.2 12 20.2s5.994 0 7.677-.47a2.71 2.71 0 0 0 1.905-1.916c.47-1.692.47-5.814.47-5.814s0-4.122-.47-5.814zm-11.8 9.071V8.743L15.342 12l-5.56 3.257z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 transition-all group-hover:border-white/20 group-hover:scale-105">
                <Image
                  src="/images/mhenga1.jpeg"
                  alt="MHENGAGEE Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                MHENGAGEE<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              A Nairobi-based creative powerhouse dedicated to crafting visual identities that demand attention through cinematic storytelling and uncompromising quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {["Work", "About", "Services", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm font-medium text-white/50 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Connect</h4>
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@mhengagee.com" className="text-sm font-medium text-white/50 transition-colors hover:text-white">
                hello@mhengagee.com
              </a>
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

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-white/40">
            &copy; {currentYear} Mhengagee Media. All rights reserved.
          </p>
          <p className="text-xs font-medium text-white/40">
            Built and maintained by{" "}
            <a 
              href="https://omytech.co.ke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors"
            >
              OMYT3CH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
