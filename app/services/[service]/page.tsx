import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { services } from "@/components/services/content";
import { serviceDetails } from "@/components/services/details";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return services.map((service) => ({ service: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
	const { service: slug } = await params;
	const service = services.find((item) => item.slug === slug);
	const details = serviceDetails[slug];

	if (!service || !details) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-[#f5f4f0] text-navy selection:bg-primary selection:text-white">
			<article className="mx-auto max-w-[1400px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pt-12">
				<div className="mb-10 flex items-center justify-between border-b border-black/10 pb-4">
					<Link href="/#services-heading" className="inline-flex items-center gap-2 font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55 transition-colors hover:text-primary">
						<ArrowLeft size={14} />
						Back to services
					</Link>
					<span className="font-accent text-[10px] uppercase tracking-[0.18em] text-black/40">{service.kicker}</span>
				</div>

				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
					<div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-navy shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
						<Image src={service.image} alt={service.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
					</div>
					<div>
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">MhengaGee Media</p>
						<h1 className="mt-3 max-w-2xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-7xl">{service.title}</h1>
						<p className="mt-7 max-w-xl text-lg leading-8 text-black/65">{service.body}</p>
						<Link href="/contact" className="group mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy">
							Start a project
							<ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</Link>
					</div>
				</div>

				<section className="mt-20 grid gap-10 border-t border-black/10 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20" aria-labelledby="why-heading">
					<div>
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Why this matters</p>
						<h2 id="why-heading" className="mt-3 max-w-md font-display text-4xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-5xl">Make the work easier to see, trust, and choose.</h2>
					</div>
					<div className="max-w-2xl text-base leading-8 text-black/65">
						<p>{details.why}</p>
						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							{details.benefits.map((benefit) => <p key={benefit} className="border-t border-black/10 pt-4 text-sm leading-6 text-navy">{benefit}</p>)}
						</div>
					</div>
				</section>

				<section className="mt-20 grid gap-10 bg-navy p-6 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:p-14" aria-labelledby="deliverables-heading">
					<div>
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">What you get</p>
						<h2 id="deliverables-heading" className="mt-3 max-w-md font-display text-4xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-5xl">A clear output, built for real use.</h2>
					</div>
					<ul className="grid gap-4 sm:grid-cols-2">
						{details.deliverables.map((deliverable, index) => <li key={deliverable} className="border-t border-white/15 pt-4 text-sm leading-6 text-white/70"><span className="mr-3 font-accent text-[10px] text-accent-yellow">0{index + 1}</span>{deliverable}</li>)}
					</ul>
				</section>

				<section className="mt-20" aria-labelledby="process-heading">
					<div className="max-w-xl">
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">How we work</p>
						<h2 id="process-heading" className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-5xl">A thoughtful process from brief to delivery.</h2>
					</div>
					<div className="mt-10 grid border-y border-black/10 md:grid-cols-4">
						{details.process.map((phase) => <div key={phase.step} className="border-b border-black/10 py-6 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"><span className="font-accent text-[10px] font-semibold tracking-[0.16em] text-primary">{phase.step}</span><h3 className="mt-5 font-display text-2xl font-bold text-navy">{phase.title}</h3><p className="mt-3 text-sm leading-6 text-black/60">{phase.description}</p></div>)}
					</div>
				</section>

				<section className="mt-20 grid gap-10 border-t border-black/10 pt-12 lg:grid-cols-2" aria-labelledby="fit-heading">
					<div>
						<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">A good fit for</p>
						<h2 id="fit-heading" className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-5xl">Good work starts with the right conversation.</h2>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{details.bestFor.map((item) => <div key={item} className="border border-black/10 bg-white p-5 text-sm leading-6 text-navy">{item}</div>)}
					</div>
				</section>

				<section className="mt-20 flex flex-col gap-6 bg-primary p-6 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
					<div><p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">Ready when you are</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[0.95] sm:text-5xl">Let&apos;s make something people remember.</h2></div>
					<Link href="/contact" className="group inline-flex w-fit shrink-0 items-center gap-2 bg-white px-5 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-navy hover:text-white">Talk to us <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
				</section>
			</article>
		</main>
	);
}
