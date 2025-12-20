"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Image, Share2, Search, Users, Globe, Brain, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        {t('backToLaws')}
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('truthProjectTitle')}</h1>
        <p className="text-xl text-white/80">{t('truthProjectSubtitle')}</p>
      </div>

      {/* Featured: Beyond Ideology */}
      <div className="mb-12 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full font-medium">
                FEATURED ANALYSIS
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Beyond Ideology: The Psychology of Political Division</h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Dr. Roy's groundbreaking lecture reveals how politicians manipulate us through fear and artificial divisions. 
              Discover why "all ideologies are dumb" and how we can find unity through understanding rather than hatred.
            </p>
            <Link 
              href="/truth-project/beyond-ideology"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              <Brain className="w-4 h-4 mr-2" />
              Read Full Analysis
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">{t('investigationsTitle')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/truth-project/empires-receipts" className="block rounded-lg border border-red-500/30 bg-red-900/20 px-6 py-4 text-center text-white hover:bg-red-900/30 transition-colors">
            <div className="text-sm text-red-400 mb-1">FLAGSHIP EXPOSÉ</div>
            <div className="font-semibold">The Empire's Receipts</div>
            <div className="text-sm text-white/60 mt-1">When actions and words don't match, the receipts tell the real story</div>
          </Link>
          <Link href="/truth-project/power-dynamics" className="block rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-6 py-4 text-center text-white hover:bg-cyan-900/30 transition-colors">
            <div className="text-sm text-cyan-400 mb-1">COMPREHENSIVE ANALYSIS</div>
            <div className="font-semibold">How Major Powers Actually Behave</div>
            <div className="text-sm text-white/60 mt-1">Multi-language research exposes Cold War myths vs reality</div>
          </Link>
          <Link href="/truth-project/wikipedia-bureaucrats" className="block rounded-lg border border-red-500/30 bg-red-900/20 px-6 py-4 text-center text-white hover:bg-red-900/30 transition-colors">
            <div className="text-sm text-red-400 mb-1">EXPOSÉ</div>
            <div className="font-semibold">Wikipedia's Hidden Power</div>
            <div className="text-sm text-white/60 mt-1">16 anonymous bureaucrats control the world's knowledge</div>
          </Link>
          <Link href="/truth-project/wikipedia-neutrality" className="block rounded-lg border border-blue-500/30 bg-blue-900/20 px-6 py-4 text-center text-white hover:bg-blue-900/30 transition-colors">
            <div className="text-sm text-blue-400 mb-1">INVESTIGATION</div>
            <div className="font-semibold">Wikipedia's Contested Neutrality</div>
            <div className="text-sm text-white/60 mt-1">How systematic bias shapes global information</div>
          </Link>
          <Link href="/truth-project/fiction-becomes-fact" className="block rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-4 text-center text-white hover:bg-purple-900/30 transition-colors">
            <div className="text-sm text-purple-400 mb-1">ANALYSIS</div>
            <div className="font-semibold">When Fiction Becomes Fact</div>
            <div className="text-sm text-white/60 mt-1">The psychology of narrative dependence</div>
          </Link>
          <Link href="/truth-project/sovereign-wealth-seizures" className="block rounded-lg border border-yellow-500/30 bg-yellow-900/20 px-6 py-4 text-center text-white hover:bg-yellow-900/30 transition-colors">
            <div className="text-sm text-yellow-400 mb-1">HISTORICAL ANALYSIS</div>
            <div className="font-semibold">Sovereign Wealth Seizures</div>
            <div className="text-sm text-white/60 mt-1">From colonial plunder to frozen Russian assets</div>
          </Link>
          <Link href="/truth-project/eu-fiscal-gamble" className="block rounded-lg border border-blue-500/30 bg-blue-900/20 px-6 py-4 text-center text-white hover:bg-blue-900/30 transition-colors">
            <div className="text-sm text-blue-400 mb-1">NEW - DEC 2025</div>
            <div className="font-semibold">EU's &euro;90B Fiscal Gamble</div>
            <div className="text-sm text-white/60 mt-1">Deep analysis of Europe's riskiest financial commitment</div>
          </Link>
          <Link href="/briefings/ai-censorship-matrix" className="block rounded-lg border border-green-500/30 bg-green-900/20 px-6 py-4 text-center text-white hover:bg-green-900/30 transition-colors">
            <div className="text-sm text-green-400 mb-1">BRIEFING</div>
            <div className="font-semibold">The AI Censorship Matrix</div>
            <div className="text-sm text-white/60 mt-1">How AI systems are programmed with bias</div>
          </Link>
          <Link href="/briefings/north-korea-deception" className="block rounded-lg border border-orange-500/30 bg-orange-900/20 px-6 py-4 text-center text-white hover:bg-orange-900/30 transition-colors">
            <div className="text-sm text-orange-400 mb-1">BRIEFING</div>
            <div className="font-semibold">The DPRK Narrative</div>
            <div className="text-sm text-white/60 mt-1">Challenging mainstream narratives</div>
          </Link>
          <Link href="/truth-project/liberation-frameworks" className="block rounded-lg border border-green-500/30 bg-green-900/20 px-6 py-4 text-center text-white hover:bg-green-900/30 transition-colors">
            <div className="text-sm text-green-400 mb-1">LIBERATION GUIDE</div>
            <div className="font-semibold">Liberation Frameworks</div>
            <div className="text-sm text-white/60 mt-1">Practical tools for breaking free and building unity</div>
          </Link>
        </div>
        
        <div className="mt-8">
          <Link href="/gallery/unity-reconnaissance" className="block rounded-lg border border-blue-500/30 bg-blue-900/20 px-6 py-4 text-center text-white hover:bg-blue-900/30 transition-colors max-w-md mx-auto">
            <div className="text-sm text-blue-400 mb-1">SPECIAL GALLERY</div>
            <div className="font-semibold">Unity Reconnaissance</div>
            <div className="text-sm text-white/60 mt-1">Historical evidence of natural cooperation before manufactured division</div>
          </Link>
        </div>
        
        <div className="mt-8">
          <Link href="/briefings/media-manipulation-decoded" className="block rounded-lg border border-red-500/30 bg-red-900/20 px-6 py-4 text-center text-white hover:bg-red-900/30 transition-colors max-w-md mx-auto">
            <div className="text-sm text-red-400 mb-1">MEDIA BRIEFING</div>
            <div className="font-semibold">Media Manipulation Decoded</div>
            <div className="text-sm text-white/60 mt-1">How six corporations control what you see, think, and believe</div>
          </Link>
        </div>
      </div>
    </div>
  )
}