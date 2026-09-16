import { Coffee, Smartphone } from "lucide-react";

export default function SupportMedia() {
	return (
		<section aria-labelledby="support-heading" className="mt-8 border-t border-black/10 pt-6">
			<p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Keep the work moving</p>
			<h2 id="support-heading" className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.02em] text-navy">Support MhengaGee Media</h2>
			<p className="mt-3 text-sm leading-6 text-black/60">Help us keep telling stories, creating opportunities, and building media that matters.</p>

			<div className="mt-5 grid gap-2 min-[360px]:grid-cols-2">
				<div className="border border-black/10 bg-white p-3">
					<p className="font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">Paybill</p>
					<p className="mt-1 font-display text-lg font-bold text-navy">000000</p>
				</div>
				<div className="border border-black/10 bg-white p-3">
					<p className="font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">Account</p>
					<p className="mt-1 font-display text-lg font-bold text-navy">MHENGAGEE</p>
				</div>
			</div>

			<label className="mt-4 block">
				<span className="font-accent text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">Amount (KES)</span>
				<input type="number" min="1" inputMode="numeric" placeholder="Enter amount" className="mt-2 w-full border border-black/15 bg-white px-3 py-3 font-sans text-sm text-navy outline-none transition-colors placeholder:text-black/35 focus:border-primary" />
			</label>

			<div className="mt-3 grid gap-2">
				<button type="button" className="flex items-center justify-center gap-2 bg-primary px-4 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy">
					<Smartphone size={15} />
					Pay via STK push
				</button>
				<button type="button" className="flex items-center justify-center gap-2 border border-primary px-4 py-3 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-white">
					<Coffee size={15} />
					Buy us coffee
				</button>
			</div>
		</section>
	);
}