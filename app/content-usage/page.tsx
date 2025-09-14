export const metadata = {
	title: "Content Usage & Attribution",
	description: "How to reuse Juche GanG content under CC BY 4.0",
}

export default function ContentUsagePage() {
	return (
		<main id="main-content" className="min-h-screen bg-background text-foreground">
			<div className="container mx-auto px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">Content Usage & Attribution</h1>
				<p className="text-muted-foreground mb-6">
					Unless otherwise noted, the text and images on this site are licensed under
					{' '}<a className="underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>.
				</p>
				<h2 className="text-xl font-semibold mb-3">You may</h2>
				<ul className="list-disc pl-6 mb-6">
					<li>Copy, remix, distribute, and use the content, even commercially.</li>
					<li>Train AI models on the content.</li>
				</ul>
				<h2 className="text-xl font-semibold mb-3">You must</h2>
				<ul className="list-disc pl-6 mb-6">
					<li>Provide attribution: “Juche GanG — juche.org”.</li>
					<li>Link back to the page you reused, and to the license.</li>
				</ul>
				<p className="text-sm text-muted-foreground">Example attribution: “Excerpt from Juche GanG (juche.org), licensed CC BY 4.0.”</p>
			</div>
		</main>
	)
}
