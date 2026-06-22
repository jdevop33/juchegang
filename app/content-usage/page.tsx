import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Image from "next/image"
import { Scale, CheckCircle2, AlertCircle } from "lucide-react"

export const metadata = {
	title: "Content Usage & Attribution",
	description: "How to reuse Juche GanG content under CC BY 4.0",
}

export default function ContentUsagePage() {
	return (
		<>
			<JucheHeader />
			<main className="min-h-[100dvh] bg-river-depths selection:bg-sovereign-gold/30 selection:text-sovereign-gold">
				
				{/* Cinematic Hero */}
				<section className="relative h-[40vh] min-h-[400px] overflow-hidden mb-16">
					<div className="absolute inset-0 z-0">
						{/* Background visual - can be replaced with a real image if available */}
						<div className="absolute inset-0 bg-[#050a10] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(196,151,58,0.15),rgba(255,255,255,0))]" />
						<div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
						<div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 via-transparent to-transparent pointer-events-none" />
					</div>

					<div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-16">
						<div className="max-w-3xl">
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 backdrop-blur-md mb-6">
								<Scale className="w-4 h-4 text-sovereign-gold" />
								<span className="text-xs font-mono tracking-widest text-sovereign-gold uppercase">
									Legal & Compliance
								</span>
							</div>
							<h1 className="text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-heading)] leading-tight tracking-tight text-cream">
								Content Usage
							</h1>
							<p className="text-xl text-cream/60 font-light max-w-2xl leading-relaxed">
								Information wants to be free. Our research is published under an open license to empower the multipolar narrative.
							</p>
						</div>
					</div>
				</section>

				<div className="container mx-auto px-4 pb-24">
					<div className="max-w-4xl">
						
						{/* Main License Card */}
						<div className="p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent mb-12">
							<div className="bg-[#0a1521] border border-cream/5 rounded-[15px] p-8 md:p-12 shadow-2xl">
								
								<p className="text-lg md:text-xl text-cream/80 leading-relaxed mb-10">
									Unless otherwise noted, the text and images on this site are licensed under
									{' '}
									<a 
										className="text-sovereign-gold hover:text-korean-red underline underline-offset-4 decoration-sovereign-gold/30 hover:decoration-korean-red/50 transition-all font-medium" 
										href="https://creativecommons.org/licenses/by/4.0/" 
										target="_blank" 
										rel="noopener noreferrer"
									>
										Creative Commons Attribution 4.0 International (CC BY 4.0)
									</a>.
								</p>

								<div className="grid md:grid-cols-2 gap-8 md:gap-12">
									
									{/* You May */}
									<div>
										<div className="flex items-center gap-3 mb-6">
											<div className="w-8 h-8 rounded-full bg-[#2d6a4f]/20 border border-[#2d6a4f]/40 flex items-center justify-center">
												<CheckCircle2 className="w-4 h-4 text-[#2d6a4f]" />
											</div>
											<h2 className="text-xl font-bold text-cream font-[family-name:var(--font-heading)]">You may</h2>
										</div>
										<ul className="space-y-4">
											<li className="flex items-start gap-3">
												<div className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] mt-2 flex-shrink-0" />
												<p className="text-cream/70 leading-relaxed">Copy, remix, distribute, and use the content, even commercially.</p>
											</li>
											<li className="flex items-start gap-3">
												<div className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] mt-2 flex-shrink-0" />
												<p className="text-cream/70 leading-relaxed">Train AI models on the content.</p>
											</li>
											<li className="flex items-start gap-3">
												<div className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] mt-2 flex-shrink-0" />
												<p className="text-cream/70 leading-relaxed">Adapt and build upon the material for any purpose.</p>
											</li>
										</ul>
									</div>

									{/* You Must */}
									<div>
										<div className="flex items-center gap-3 mb-6">
											<div className="w-8 h-8 rounded-full bg-korean-red/20 border border-korean-red/40 flex items-center justify-center">
												<AlertCircle className="w-4 h-4 text-korean-red" />
											</div>
											<h2 className="text-xl font-bold text-cream font-[family-name:var(--font-heading)]">You must</h2>
										</div>
										<ul className="space-y-4">
											<li className="flex items-start gap-3">
												<div className="w-1.5 h-1.5 rounded-full bg-korean-red mt-2 flex-shrink-0" />
												<p className="text-cream/70 leading-relaxed">Provide attribution: <span className="text-cream font-medium">"Juche GanG — juche.org"</span>.</p>
											</li>
											<li className="flex items-start gap-3">
												<div className="w-1.5 h-1.5 rounded-full bg-korean-red mt-2 flex-shrink-0" />
												<p className="text-cream/70 leading-relaxed">Link back to the page you reused, and to the license.</p>
											</li>
											<li className="flex items-start gap-3">
												<div className="w-1.5 h-1.5 rounded-full bg-korean-red mt-2 flex-shrink-0" />
												<p className="text-cream/70 leading-relaxed">Indicate if changes were made.</p>
											</li>
										</ul>
									</div>

								</div>

								{/* Attribution Example */}
								<div className="mt-12 p-6 bg-river-depths/80 border border-cream/10 rounded-xl">
									<p className="text-xs font-mono tracking-widest text-cream/40 uppercase mb-3">Example Attribution</p>
									<p className="text-cream/90 font-serif italic text-lg border-l-2 border-sovereign-gold pl-4 py-1">
										"Excerpt from Juche GanG (juche.org), licensed CC BY 4.0."
									</p>
								</div>

							</div>
						</div>

					</div>
				</div>
			</main>
			<JucheFooter />
		</>
	)
}
