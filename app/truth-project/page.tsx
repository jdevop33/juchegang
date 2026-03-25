"use client"

import { useState } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ArrowLeft, FileText, Image, Share2, Search, Users, Globe, Brain, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"

export default function TruthProjectPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const { t } = useLanguage()

  const sections = [
    { id: "overview", label: t('overviewLabel'), icon: Globe },
    { id: "op-ed", label: t('opedLabel'), icon: FileText },
    { id: "visuals", label: t('visualsLabel'), icon: Image },
    { id: "social", label: t('socialLabel'), icon: Share2 },
    { id: "bias-tool", label: t('biasToolLabel'), icon: Search },
    { id: "partnership", label: t('partnershipLabel'), icon: Users },
  ]

  return (
    <>
    <JucheHeader />
    <main className="min-h-screen bg-[#0d1b2a] pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <NextImage
            src="/images/heros/05.jpg"
            alt="Dramatic clouds parting over Heaven Lake crater at Mount Paektu"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/70 via-[#0d1b2a]/40 to-[#0d1b2a]" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#f0ebe3] mb-4 font-[family-name:var(--font-heading)] drop-shadow-lg">{t('truthProjectTitle')}</h1>
          <p className="text-xl md:text-2xl text-[#f0ebe3]/90 max-w-3xl drop-shadow-md">{t('truthProjectSubtitle')}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

      {/* Featured: Beyond Ideology */}
      <div className="mb-12 bg-gradient-to-r from-[#0d1b2a] via-[#1b4965] to-[#0d1b2a] rounded-2xl p-8 border border-[#d4a74a]/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-[#1b4965] to-[#d4a74a] rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-[#f0ebe3]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-[#d4a74a]" />
              <span className="text-xs bg-[#d4a74a]/20 text-[#d4a74a] px-2 py-1 rounded-full font-medium">
                FEATURED ANALYSIS
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#f0ebe3] mb-3">Beyond Ideology: The Psychology of Political Division</h2>
            <p className="text-[#f0ebe3]/80 mb-4 leading-relaxed">
              Dr. Roy's groundbreaking lecture reveals how politicians manipulate us through fear and artificial divisions.
              Discover why "all ideologies are dumb" and how we can find unity through understanding rather than hatred.
            </p>
            <Link
              href="/truth-project/beyond-ideology"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1b4965] to-[#d4a74a] hover:from-[#0d1b2a] hover:to-[#1b4965] text-[#f0ebe3] font-bold rounded-lg transition-all transform hover:scale-105"
            >
              <Brain className="w-4 h-4 mr-2" />
              Read Full Analysis
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#f0ebe3] mb-6">{t('investigationsTitle')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/truth-project/empires-receipts" className="block rounded-lg border border-[#c73032]/30 bg-[#c73032]/10 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#c73032]/20 transition-colors">
            <div className="text-sm text-[#c73032] mb-1">FLAGSHIP EXPOSÉ</div>
            <div className="font-semibold">The Empire's Receipts</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">When actions and words don't match, the receipts tell the real story</div>
          </Link>
          <Link href="/truth-project/power-dynamics" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors">
            <div className="text-sm text-[#a0b4c8] mb-1">COMPREHENSIVE ANALYSIS</div>
            <div className="font-semibold">How Major Powers Actually Behave</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">Multi-language research exposes Cold War myths vs reality</div>
          </Link>
          <Link href="/truth-project/wikipedia-bureaucrats" className="block rounded-lg border border-[#c73032]/30 bg-[#c73032]/10 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#c73032]/20 transition-colors">
            <div className="text-sm text-[#c73032] mb-1">EXPOSÉ</div>
            <div className="font-semibold">Wikipedia's Hidden Power</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">16 anonymous bureaucrats control the world's knowledge</div>
          </Link>
          <Link href="/truth-project/wikipedia-neutrality" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors">
            <div className="text-sm text-[#a0b4c8] mb-1">INVESTIGATION</div>
            <div className="font-semibold">Wikipedia's Contested Neutrality</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">How systematic bias shapes global information</div>
          </Link>
          <Link href="/truth-project/fiction-becomes-fact" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors">
            <div className="text-sm text-[#a0b4c8] mb-1">ANALYSIS</div>
            <div className="font-semibold">When Fiction Becomes Fact</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">The psychology of narrative dependence</div>
          </Link>
          <Link href="/truth-project/sovereign-wealth-seizures" className="block rounded-lg border border-[#d4a74a]/30 bg-[#d4a74a]/10 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#d4a74a]/20 transition-colors">
            <div className="text-sm text-[#d4a74a] mb-1">HISTORICAL ANALYSIS</div>
            <div className="font-semibold">Sovereign Wealth Seizures</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">From colonial plunder to frozen Russian assets</div>
          </Link>
          <Link href="/truth-project/eu-fiscal-gamble" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors">
            <div className="text-sm text-[#a0b4c8] mb-1">NEW - DEC 2025</div>
            <div className="font-semibold">EU's &euro;90B Fiscal Gamble</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">Deep analysis of Europe's riskiest financial commitment</div>
          </Link>
          <Link href="/briefings/ai-censorship-matrix" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors">
            <div className="text-sm text-[#a0b4c8] mb-1">BRIEFING</div>
            <div className="font-semibold">The AI Censorship Matrix</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">How AI systems are programmed with bias</div>
          </Link>
          <Link href="/briefings/north-korea-deception" className="block rounded-lg border border-[#d4a74a]/30 bg-[#d4a74a]/10 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#d4a74a]/20 transition-colors">
            <div className="text-sm text-[#d4a74a] mb-1">BRIEFING</div>
            <div className="font-semibold">The DPRK Narrative</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">Challenging mainstream narratives</div>
          </Link>
          <Link href="/truth-project/liberation-frameworks" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors">
            <div className="text-sm text-[#a0b4c8] mb-1">LIBERATION GUIDE</div>
            <div className="font-semibold">Liberation Frameworks</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">Practical tools for breaking free and building unity</div>
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/gallery/unity-reconnaissance" className="block rounded-lg border border-[#1b4965]/50 bg-[#1b4965]/20 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#1b4965]/30 transition-colors max-w-md mx-auto">
            <div className="text-sm text-[#a0b4c8] mb-1">SPECIAL GALLERY</div>
            <div className="font-semibold">Unity Reconnaissance</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">Historical evidence of natural cooperation before manufactured division</div>
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/briefings/media-manipulation-decoded" className="block rounded-lg border border-[#c73032]/30 bg-[#c73032]/10 px-6 py-4 text-center text-[#f0ebe3] hover:bg-[#c73032]/20 transition-colors max-w-md mx-auto">
            <div className="text-sm text-[#c73032] mb-1">MEDIA BRIEFING</div>
            <div className="font-semibold">Media Manipulation Decoded</div>
            <div className="text-sm text-[#f0ebe3]/60 mt-1">How six corporations control what you see, think, and believe</div>
          </Link>
        </div>
      </div>
    </div>
    </main>
    <JucheFooter />
    </>
  )
}
