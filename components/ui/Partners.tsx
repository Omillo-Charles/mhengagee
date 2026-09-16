import Image from "next/image";

const partners = [
	{ name: "DSM Media", image: "/partners/dsmlogo.jpg" },
	{ name: "OMYT3CH", image: "/partners/omytechlogo.png", href: "https://omytechkenya.co.ke" },
];

export default function Partners() {
	return (
		<section aria-labelledby="partners-heading" className="mt-8 border-t border-black/10 pt-6">
			<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">In collaboration with</p>
			<h2 id="partners-heading" className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.02em] text-navy">Our partners</h2>
			<div className="mt-5 grid grid-cols-2 gap-3">
				{partners.map((partner) => {
					const logo = (
						<span className="relative block aspect-square overflow-hidden rounded-[2px] border border-black/10 bg-white p-3 transition-transform duration-300 group-hover:scale-[1.02]">
							<Image src={partner.image} alt={partner.name} fill className="object-contain object-center p-3" sizes="140px" />
						</span>
					);

					return partner.href ? (
						<a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" aria-label={`Visit ${partner.name}`} className="group block">
							{logo}
							<span className="mt-2 block font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-black/45 transition-colors group-hover:text-primary">{partner.name}</span>
						</a>
					) : (
						<div key={partner.name} className="group block">
							{logo}
							<span className="mt-2 block font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-black/45">{partner.name}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}
