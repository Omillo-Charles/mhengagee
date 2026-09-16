import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const sections = [
    { title: "Information we collect", body: "When you contact Mhengagee Media, request a quote, or create an account, we may collect information such as your name, email address, project details, and the messages you send us. We also receive basic technical information needed to keep the website secure and reliable." },
    { title: "How we use information", body: "We use your information to respond to inquiries, provide requested services, manage your account, improve our website, and communicate with you about relevant projects or updates. We do not sell your personal information." },
    { title: "Sharing and service providers", body: "We only share information when necessary to provide a requested service, operate our website, comply with the law, or protect the rights and safety of Mhengagee Media and our users. Service providers are expected to handle information responsibly." },
    { title: "Media and project material", body: "Project images, video, and other creative material are handled according to the agreement made with each client. We will not publish confidential client material without permission or an agreed usage arrangement." },
    { title: "Your choices", body: "You may ask us to access, correct, update, or delete personal information we hold about you. You may also ask us to stop sending non-essential communications. Contact us at hello@mhengagee.co.ke to make a request." },
    { title: "Updates to this policy", body: "We may update this policy as our services or legal obligations change. The latest version will always be posted on this page with its current effective date." },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
            <section className="mx-auto max-w-[980px] px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
                <Link href="/" className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-navy"><ArrowLeft size={14} /> Back home</Link>
                <div className="mt-12 border-b border-black/10 pb-8">
                    <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">Mhengagee Media</p>
                    <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Privacy policy</h1>
                    <p className="mt-5 font-sans text-sm text-black/50">Effective September 16, 2026</p>
                </div>
                <div className="mt-10 max-w-3xl space-y-10">
                    <p className="font-sans text-lg leading-8 text-black/65">We respect your privacy and want you to understand how Mhengagee Media handles information when you visit our website, contact us, or work with our team.</p>
                    {sections.map((section) => <section key={section.title}><h2 className="font-display text-2xl font-bold text-navy">{section.title}</h2><p className="mt-3 font-sans text-base leading-8 text-black/60">{section.body}</p></section>)}
                </div>
                <div className="mt-14 border-t border-black/10 pt-6"><a href="mailto:hello@mhengagee.co.ke" className="flex w-fit items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary hover:text-navy">Questions about privacy <ArrowUpRight size={14} /></a></div>
            </section>
        </main>
    );
}
