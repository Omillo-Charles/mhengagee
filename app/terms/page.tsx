import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const sections = [
  {
    title: "Using this website",
    body: "You may use Mhengagee Media for lawful purposes and in a way that does not disrupt the website, compromise its security, or infringe the rights of another person. Content on this website is provided for general information about our work and services.",
  },
  {
    title: "Creative services",
    body: "Photography, videography, production, and related services are delivered according to the scope, timelines, fees, usage rights, and other terms agreed with each client. A quote or inquiry does not create a contract until both parties agree to the project terms.",
  },
  {
    title: "Intellectual property",
    body: "Unless otherwise agreed in writing, the website design, text, logos, photographs, videos, and other materials published by Mhengagee Media belong to Mhengagee Media or their respective rights holders. Please request permission before copying, modifying, or commercially using them.",
  },
  {
    title: "User submissions",
    body: "When you send an inquiry or other material, you confirm that you have the right to share it. You remain responsible for the material you submit and for ensuring that it does not violate another person’s rights or applicable law.",
  },
  {
    title: "Third-party links",
    body: "Our website may link to services such as YouTube, Spotify, WhatsApp, Instagram, or other third-party websites. Those services have their own terms and privacy policies, and Mhengagee Media is not responsible for their content or practices.",
  },
  {
    title: "Disclaimer and changes",
    body: "We work to keep the website accurate and available, but we do not guarantee that every page, asset, or service description will always be complete or uninterrupted. We may update these terms as the website and our services develop.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
      <section className="mx-auto max-w-[980px] px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase text-primary transition-colors hover:text-navy"
        >
          <ArrowLeft size={14} /> Back home
        </Link>
        <div className="mt-12 border-b border-black/10 pb-8">
          <p className="font-accent text-[10px] font-semibold uppercase text-primary">
            Mhengagee Media
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] sm:text-7xl">
            Terms of use
          </h1>
          <p className="mt-5 font-sans text-sm text-black/50">
            Effective September 16, 2026
          </p>
        </div>
        <div className="mt-10 max-w-3xl space-y-10">
          <p className="font-sans text-lg leading-8 text-black/65">
            These terms explain the basic rules for using the Mhengagee Media
            website and engaging our creative services. By using the site, you
            agree to follow them.
          </p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold text-navy">
                {section.title}
              </h2>
              <p className="mt-3 font-sans text-base leading-8 text-black/60">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-14 border-t border-black/10 pt-6">
          <a
            href="mailto:hello@mhengagee.co.ke"
            className="flex w-fit items-center gap-2 font-accent text-[10px] font-semibold uppercase text-primary hover:text-navy"
          >
            Questions about these terms <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
