import Link from "next/link"
import { ArrowLeft, FileText, Image as ImageIcon, Newspaper } from "lucide-react"
import ImageViewer from "@/components/image-viewer"

export default function TruthProjectReportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/truth-project" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Truth Project
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Comprehensive Image Report</h1>
        <p className="text-xl text-white/80">Interactive visual review, inferred meaning, and narrative framing.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <ImageViewer alt="Uploaded reference artwork" />

          <section aria-labelledby="visual-analysis" className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 id="visual-analysis" className="text-2xl font-bold text-white flex items-center gap-2"><ImageIcon className="h-5 w-5" /> Visual content analysis</h2>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li>Stylistic lineage: modern propaganda poster language with halftone fields, high-contrast silhouettes, and assertive geometry.</li>
              <li>Primary symbols: industrial tool glyphs, raised fists, and calligraphic instrument—recontextualized into a new composite mark.</li>
              <li>Color psychology: dominant reds and blacks communicate urgency, solidarity, and moral seriousness.</li>
              <li>Typography: luminous Hangul arcs used as kinetic rhythm; legibility may be secondary to motion and aura.</li>
            </ul>
          </section>

          <section aria-labelledby="inferred-meaning" className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 id="inferred-meaning" className="text-2xl font-bold text-white flex items-center gap-2"><Newspaper className="h-5 w-5" /> Inferred meaning</h2>
            <p className="text-white/90">
              The artwork fuses labor, writing, and collective power into a single emblem, recasting historic symbols as a proposal for cooperative human agency. The gestural pen suggests authorship and accountability; the handshake and tools foreground work as dignity; the circular text implies orbit and community. Overall: affirmation, not incitement.
            </p>
          </section>

          <section aria-labelledby="narrative-arc" className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 id="narrative-arc" className="text-2xl font-bold text-white flex items-center gap-2"><FileText className="h-5 w-5" /> Narrative arc for the page</h2>
            <ol className="list-decimal pl-6 text-white/80 space-y-2">
              <li>Confession of bias: acknowledge how Western training frames certain symbols as threat by default.</li>
              <li>Re-seeing: consider the piece as craft, care, and coalition—not as propaganda.</li>
              <li>Human stakes: emphasize working people and families as the intended beneficiaries of peace.</li>
              <li>Bridge language: use anchors like Rust Belt experience to connect across audiences.</li>
            </ol>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Op-ed version</h3>
            <p className="text-white/80 mb-3">Read the long-form reflection that pairs with this report.</p>
            <Link href="/truth-project/op-ed" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              <FileText className="h-4 w-4" /> Open op-ed
            </Link>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Social snippets</h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>Thread hook, 15–20 tweets</li>
              <li>Carousel copy (6–9 frames)</li>
              <li>Short-form script outline</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Collaborate</h3>
            <p className="text-white/80 mb-3">Want to join the Truth Project? Reach out.</p>
            <Link href={{ pathname: '/contact', query: { subject: 'Truth Project Collaboration' } } as unknown as string} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}


