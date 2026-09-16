"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Camera, Mail, MapPin, MessageCircle, Send, Video } from "lucide-react";

const services = ["Photography", "Videography", "Event coverage", "Commercial production", "Something else"];

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
			<section className="mx-auto max-w-[1440px] px-5 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
				<div className="grid overflow-hidden rounded-[2px] bg-navy text-white lg:grid-cols-[0.9fr_1.1fr]">
					<div className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-[620px]">
						<Image src="/images/branding1.jpeg" alt="Glennaspin Opemi, founder of Mhengagee Media" fill priority className="object-cover object-[72%_center]" sizes="(max-width: 1024px) 100vw, 45vw" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
						<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
							<p className="flex items-center gap-3 font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-cyan"><span className="h-px w-8 bg-accent-cyan" />Mhengagee Media</p>
							<p className="mt-4 font-display text-3xl font-bold uppercase leading-[0.95] sm:text-4xl">Stories made with purpose.</p>
						</div>
					</div>
					<div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-cyan">About the founder</p>
						<h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">Glennaspin<br />Opemi</h1>
						<p className="mt-3 font-accent text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Known professionally as Mhenga</p>
						<div className="mt-8 space-y-5 font-sans text-base leading-7 text-white/70">
							<p>Glennaspin Opemi, widely known as Mhenga, began his media career at the Cooperative University of Kenya, where his curiosity for storytelling grew into a life in visual media.</p>
							<p>He is the founder and producer at Mhengagee Media, a media personality at CUK, and a host, videographer, and photographer at DSM Studios in Nairobi, Kenya.</p>
							<p>Through his work, Glennaspin brings people, ideas, and real moments into focus, creating photography and video that feels immediate, thoughtful, and distinctly human.</p>
						</div>
						<div className="mt-9 flex flex-wrap gap-2 border-t border-white/15 pt-5">
							{["Founder", "Producer", "Host", "Videographer", "Photographer"].map((role) => <span key={role} className="rounded-full border border-white/20 px-3 py-2 font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70">{role}</span>)}
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16">
				<div className="grid overflow-hidden rounded-[2px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
					<div className="relative min-h-[380px] overflow-hidden bg-navy sm:min-h-[520px] lg:min-h-[720px]">
						<Image src="/images/mhenga2.jpeg" alt="Mhengagee Media portrait" fill priority className="object-cover object-[72%_center] transition duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 45vw" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
						<div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">
							<p className="flex items-center gap-3 font-accent text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-cyan"><span className="h-px w-8 bg-accent-cyan" />Mhengagee Media</p>
							<p className="mt-4 max-w-sm font-display text-3xl font-bold uppercase leading-[0.95] sm:text-4xl">Let&apos;s create something that moves people.</p>
						</div>
					</div>

					<div className="bg-navy p-5 text-white sm:p-9 lg:p-12">
						<div className="flex items-center justify-between border-b border-white/15 pb-6">
							<div><p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">Get in touch</p><h1 className="mt-2 font-display text-4xl font-bold leading-none sm:text-5xl">Contact us</h1></div>
							<Send size={26} className="text-accent-cyan" strokeWidth={1.5} />
						</div>

						{submitted ? (
							<div className="flex min-h-[400px] flex-col items-start justify-center">
								<span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-navy"><Send size={20} /></span>
								<h2 className="mt-6 font-display text-3xl font-bold">Message received.</h2>
								<p className="mt-3 max-w-md font-sans text-sm leading-6 text-white/65">Thanks for reaching out. This form is ready to connect to the admin inbox when the backend is wired up.</p>
								<button type="button" onClick={() => setSubmitted(false)} className="mt-7 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-cyan hover:text-white">Send another inquiry</button>
							</div>
						) : (
							<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
								<div className="grid gap-6 sm:grid-cols-2">
									<label className="block"><span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">Your name</span><input required name="name" type="text" className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent-cyan" placeholder="Jane Doe" /></label>
									<label className="block"><span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">Email address</span><input required name="email" type="email" className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent-cyan" placeholder="jane@example.com" /></label>
								</div>
								<label className="block"><span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">What do you need?</span><select name="service" defaultValue="" className="mt-2 w-full border-b border-white/20 bg-navy px-0 py-3 font-sans text-sm text-white outline-none transition-colors focus:border-accent-cyan"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
								<label className="block"><span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">Tell us about the project</span><textarea required name="message" rows={5} className="mt-2 w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent-cyan" placeholder="A few details about your idea, timeline, or budget..." /></label>
								<button type="submit" className="group flex items-center gap-3 rounded-full bg-accent-cyan px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-white">Send inquiry <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
							</form>
						)}
					</div>
				</div>

				<div className="mt-8 grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
					<a href="mailto:hello@mhengagee.co.ke" className="group flex items-center gap-3 rounded-[2px] bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-accent-cyan"><Mail size={17} /></span><span><span className="block font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">Email us</span><span className="mt-1 block font-sans text-sm text-navy group-hover:text-primary">hello@mhengagee.co.ke</span></span></a>
					<a href="https://wa.me/254740353025" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-[2px] bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"><MessageCircle size={17} /></span><span><span className="block font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">Message us</span><span className="mt-1 block font-sans text-sm text-navy group-hover:text-[#16883D]">WhatsApp</span></span></a>
					<a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-[2px] bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white"><Camera size={17} /></span><span><span className="block font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">Follow along</span><span className="mt-1 block font-sans text-sm text-navy group-hover:text-secondary">Instagram</span></span></a>
					<a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-[2px] bg-white p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white"><Video size={17} /></span><span><span className="block font-accent text-[9px] font-semibold uppercase tracking-[0.16em] text-black/40">Watch our work</span><span className="mt-1 block font-sans text-sm text-navy group-hover:text-[#CC0000]">YouTube</span></span></a>
				</div>

				<div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2 font-accent text-[10px] uppercase tracking-[0.16em] text-black/45"><MapPin size={14} className="text-primary" />Nairobi, Kenya · Available worldwide</span><Link href="/" className="flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-navy">Back to Mhengagee <ArrowUpRight size={15} /></Link></div>
			</section>
		</main>
	);
}