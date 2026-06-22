"use client"

import { useState } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ArrowRight, FileText, Image, Share2, Search, Users, Globe, Brain, Star, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { motion } from "framer-motion"

export default function TruthProjectPage() {
  const { t, language } = useLanguage()

  const investigations = [
    {
      href: "/truth-project/empires-receipts",
      badge: "FLAGSHIP EXPOSÉ",
      badgeColor: "korean-red",
      title: "The Empire's Receipts",
      desc: "When actions and words don't match, the receipts tell the real story",
      size: "large"
    },
    {
      href: "/truth-project/power-dynamics",
      badge: "COMPREHENSIVE ANALYSIS",
      badgeColor: "cream-muted",
      title: "How Major Powers Actually Behave",
      desc: "Multi-language research exposes Cold War myths vs reality",
      size: "medium"
    },
    {
      href: "/truth-project/wikipedia-bureaucrats",
      badge: "EXPOSÉ",
      badgeColor: "korean-red",
      title: "Wikipedia's Hidden Power",
      desc: "16 anonymous bureaucrats control the world's knowledge",
      size: "small"
    },
    {
      href: "/truth-project/wikipedia-neutrality",
      badge: "INVESTIGATION",
      badgeColor: "cream-muted",
      title: "Wikipedia's Contested Neutrality",
      desc: "How systematic bias shapes global information",
      size: "medium"
    },
    {
      href: "/truth-project/fiction-becomes-fact",
      badge: "ANALYSIS",
      badgeColor: "cream-muted",
      title: "When Fiction Becomes Fact",
      desc: "The psychology of narrative dependence",
      size: "small"
    },
    {
      href: "/truth-project/sovereign-wealth-seizures",
      badge: "HISTORICAL ANALYSIS",
      badgeColor: "sovereign-gold",
      title: "Sovereign Wealth Seizures",
      desc: "From colonial plunder to frozen Russian assets",
      size: "medium"
    },
    {
      href: "/truth-project/eu-fiscal-gamble",
      badge: "NEW - DEC 2025",
      badgeColor: "sovereign-gold",
      title: "EU's €90B Fiscal Gamble",
      desc: "Deep analysis of Europe's riskiest financial commitment",
      size: "large"
    },
    {
      href: "/briefings/ai-censorship-matrix",
      badge: "BRIEFING",
      badgeColor: "cream-muted",
      title: "The AI Censorship Matrix",
      desc: "How AI systems are programmed with bias",
      size: "small"
    },
    {
      href: "/briefings/north-korea-deception",
      badge: "BRIEFING",
      badgeColor: "sovereign-gold",
      title: "The DPRK Narrative",
      desc: "Challenging mainstream narratives",
      size: "medium"
    },
    {
      href: "/truth-project/liberation-frameworks",
      badge: "LIBERATION GUIDE",
      badgeColor: "cream-muted",
      title: "Liberation Frameworks",
      desc: "Practical tools for breaking free and building unity",
      size: "large"
    }
  ]

  return (
    <main className="min-h-[100dvh] bg-[#050505] text-cream selection:bg-sovereign-gold/30">
      <JucheHeader />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <NextImage
            src="/images/heros/05.jpg"
            alt="Dramatic clouds parting over Heaven Lake crater at Mount Paektu"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]" />
          
          {/* Subtle light leak */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-korean-red/10 blur-[120px] rounded-[100%] pointer-events-none" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <Search className="w-3 h-3 text-sovereign-gold" />
              {language === 'kr' ? '심층 취재 아카이브' : 'Deep Investigation Archive'}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent">
              {t('truthProjectTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-cream-muted max-w-3xl mx-auto leading-relaxed">
              {t('truthProjectSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-4 md:px-8 pb-32">
        <div className="container mx-auto max-w-[1400px]">

          {/* Featured Double-Bezel Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="mb-24"
          >
            <div className="p-1.5 md:p-2 rounded-[3rem] bg-gradient-to-br from-sovereign-gold/20 via-white/5 to-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-sovereign-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="bg-[#050505] rounded-[calc(3rem-0.5rem)] p-8 md:p-16 lg:p-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#0a0a0a] to-[#111] rounded-full border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative">
                  <div className="absolute inset-0 rounded-full border border-sovereign-gold/20 animate-[spin_10s_linear_infinite]" />
                  <Brain className="w-10 h-10 lg:w-12 lg:h-12 text-sovereign-gold drop-shadow-[0_0_15px_rgba(235,172,0,0.5)]" />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <span className="flex items-center gap-1.5 text-[10px] bg-sovereign-gold/10 border border-sovereign-gold/20 text-sovereign-gold px-3 py-1.5 rounded-full font-medium tracking-[0.2em] uppercase">
                      <Star className="w-3 h-3" />
                      Featured Analysis
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 tracking-tight">
                    Beyond Ideology: The Psychology of Political Division
                  </h2>
                  <p className="text-xl text-cream-muted mb-10 leading-relaxed max-w-3xl">
                    Dr. Roy's groundbreaking lecture reveals how politicians manipulate us through fear and artificial divisions.
                    Discover why "all ideologies are dumb" and how we can find unity through understanding rather than hatred.
                  </p>
                  <Link
                    href="/truth-project/beyond-ideology"
                    className="inline-flex items-center justify-center pl-8 pr-2 py-2 rounded-full bg-cream text-[#050505] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white group/btn"
                  >
                    <span className="mr-6">Read Full Analysis</span>
                    <div className="w-10 h-10 rounded-full bg-[#050505]/10 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-105">
                      <ArrowRight className="w-5 h-5" strokeWidth={2} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investigations Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
                {t('investigationsTitle')}
              </h2>
              <p className="text-cream-muted text-lg max-w-2xl">
                Deconstructing mainstream narratives through rigorous primary source analysis and geopolitical realism.
              </p>
            </div>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 mb-16">
            {investigations.map((item, index) => {
              let spanClass = "lg:col-span-4"
              if (item.size === "large") spanClass = "lg:col-span-8"
              if (item.size === "medium" && index % 2 === 0) spanClass = "lg:col-span-6"
              if (item.size === "medium" && index % 2 !== 0) spanClass = "lg:col-span-6"

              // Badge color mapping
              const colorMaps: Record<string, string> = {
                "korean-red": "bg-korean-red/10 text-korean-red border-korean-red/20",
                "sovereign-gold": "bg-sovereign-gold/10 text-sovereign-gold border-sovereign-gold/20",
                "cream-muted": "bg-white/5 text-cream-muted border-white/10"
              }
              const badgeStyle = colorMaps[item.badgeColor] || colorMaps["cream-muted"]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  viewport={{ once: true }}
                  className={`p-1.5 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 group flex flex-col ${spanClass}`}
                >
                  <Link href={item.href} className="bg-[#0a0a0a] rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:bg-[#111] flex flex-col h-full min-h-[280px]">
                    <div className="mb-auto">
                      <div className={`inline-block px-3 py-1 mb-6 rounded-md text-[10px] font-medium tracking-[0.2em] uppercase border ${badgeStyle}`}>
                        {item.badge}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mb-4 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-cream-muted text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex items-center text-sm font-medium tracking-[0.1em] uppercase text-cream/30 group-hover:text-cream/80 transition-colors">
                      Read Report <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Supplementary Sections */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-1.5 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-sovereign-gold/30 transition-all duration-500"
            >
              <Link href="/gallery/unity-reconnaissance" className="block bg-[#050505] rounded-[calc(2.5rem-0.375rem)] p-12 text-center h-full flex flex-col justify-center items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-8 transition-transform duration-500 group-hover:scale-110">
                  <Image className="w-6 h-6 text-cream-muted" />
                </div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase bg-white/5 text-cream-muted border border-white/10">
                  Special Gallery
                </div>
                <h3 className="text-3xl font-bold text-cream mb-4 tracking-tight">Unity Reconnaissance</h3>
                <p className="text-cream-muted text-lg max-w-sm">Historical evidence of natural cooperation before manufactured division.</p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-1.5 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:border-korean-red/30 transition-all duration-500"
            >
              <Link href="/briefings/media-manipulation-decoded" className="block bg-[#050505] rounded-[calc(2.5rem-0.375rem)] p-12 text-center h-full flex flex-col justify-center items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-8 transition-transform duration-500 group-hover:scale-110">
                  <Globe className="w-6 h-6 text-cream-muted" />
                </div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase bg-korean-red/10 text-korean-red border border-korean-red/20">
                  Media Briefing
                </div>
                <h3 className="text-3xl font-bold text-cream mb-4 tracking-tight">Media Manipulation Decoded</h3>
                <p className="text-cream-muted text-lg max-w-sm">How six corporations control what you see, think, and believe.</p>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  )
}

