"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Send } from "lucide-react";

const services = ["Photography", "Videography", "Cinematography", "Podcast production", "Branding", "Event coverage", "Other"];
const budgets = ["Under KES 50,000", "KES 50,000 - 100,000", "KES 100,000 - 250,000", "KES 250,000+", "I need guidance"];

export default function QuotePage() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
			<section className="mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16">
				<div className="mb-8 flex items-center justify-between border-b border-black/10 pb-4">
					<Link href="/portfolio" className="inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55 transition-colors hover:text-primary"><ArrowLeft size={14} />Back to portfolio</Link>
					<span className="font-accent text-[10px] uppercase tracking-[0.18em] text-black/40">Project estimate</span>
				</div>

				<div className="grid overflow-hidden rounded-[2px] bg-white text-navy shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[0.78fr_1.22fr]">
					<div className="relative min-h-[360px] overflow-hidden sm:min-h-[500px] lg:min-h-full">
						<Image src="/images/mhenga2.jpeg" alt="MhengaGee Media creator holding a camera" fill priority className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 40vw" />
						<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
						<div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white sm:p-10"><p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">Let&apos;s make it real</p><h1 className="mt-3 max-w-md font-display text-4xl font-bold leading-[0.94] tracking-[-0.035em] text-white sm:text-6xl">Tell us what you&apos;re building.</h1><p className="mt-5 max-w-md text-sm leading-7 text-white/75">The more we understand, the more accurately we can shape a useful quote for your project.</p></div>
					</div>

					<div className="bg-white p-5 sm:p-10 lg:p-14">
						{submitted ? (
							<div className="flex min-h-[620px] flex-col justify-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-navy"><Check size={21} /></span><h2 className="mt-6 font-display text-4xl font-bold text-navy">Brief received.</h2><p className="mt-4 max-w-md text-sm leading-7 text-black/65">Thanks for sharing the details. This quote form is ready to connect to the email and estimation workflow when the backend is wired up.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-8 w-fit font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-navy">Submit another brief</button></div>
						) : (
								<form onSubmit={handleSubmit} className="space-y-8">
								<div className="border-b border-black/10 pb-6"><p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Request a quote</p><h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">Project brief</h2><p className="mt-3 max-w-xl text-sm leading-6 text-black/55">No detail is too early. Share what you know and we&apos;ll ask about the rest.</p></div>
								<div><p className="quote-step">01 <span>Your details</span></p>
								<div className="grid gap-6 sm:grid-cols-2">
									<label className="block"><span className="quote-field-label">Your name</span><input required name="name" type="text" placeholder="Jane Doe" className="quote-field-input" /></label>
									<label className="block"><span className="quote-field-label">Company or organization</span><input name="company" type="text" placeholder="Your company" className="quote-field-input" /></label>
								</div>
								<div className="grid gap-6 sm:grid-cols-2">
									<label className="block"><span className="quote-field-label">Email address</span><input required name="email" type="email" placeholder="you@example.com" className="quote-field-input" /></label>
									<label className="block"><span className="quote-field-label">Phone or WhatsApp</span><input name="phone" type="tel" placeholder="+254..." className="quote-field-input" /></label>
								</div>
								</div>
								<div><p className="quote-step">02 <span>Project basics</span></p>
								<div className="grid gap-6 sm:grid-cols-2">
									<label className="block"><span className="quote-field-label">Service needed</span><select required name="service" defaultValue="" className="quote-field-input"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
									<label className="block"><span className="quote-field-label">Estimated budget</span><select name="budget" defaultValue="" className="quote-field-input"><option value="" disabled>Select a range</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
								</div>
								<div className="grid gap-6 sm:grid-cols-2">
									<label className="block"><span className="quote-field-label">Preferred project date</span><input name="date" type="date" className="quote-field-input" /></label>
									<label className="block"><span className="quote-field-label">Location</span><input name="location" type="text" placeholder="Nairobi / Remote" className="quote-field-input" /></label>
								</div>
								</div>
								<div><p className="quote-step">03 <span>Tell us about the work</span></p>
								<label className="block"><span className="quote-field-label">What should we create?</span><textarea required name="brief" rows={5} placeholder="Tell us about the project, audience, goals, deliverables, references, and anything else that will help us understand the work." className="quote-field-input resize-none" /></label>
								<label className="mt-6 block"><span className="quote-field-label">How did you hear about us?</span><input name="referral" type="text" placeholder="Instagram, referral, search..." className="quote-field-input" /></label>
								</div>
								<div className="flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-xs leading-5 text-black/45">We&apos;ll review your brief and follow up with the right next steps.</p><button type="submit" className="group flex items-center justify-center gap-3 bg-primary px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy">Send project brief <Send size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div>
							</form>
						)}
					</div>
				</div>

				<div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm leading-6 text-black/55">Prefer a direct conversation? Email <a href="mailto:hello@mhengagee.co.ke" className="font-semibold text-navy hover:text-primary">hello@mhengagee.co.ke</a></p><Link href="/contact" className="inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary hover:text-navy">General contact <ArrowUpRight size={15} /></Link></div>
			</section>
		</main>
	);
}
