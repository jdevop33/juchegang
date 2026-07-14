"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { FileText, ArrowRight, Search, X } from "lucide-react"

export default function BriefingsContent() {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState("")

  // Honor the ?q= param advertised by the site's SearchAction schema
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q")
    if (q) setQuery(q)
  }, [])

  const updateQuery = (value: string) => {
    setQuery(value)
    const url = new URL(window.location.href)
    if (value.trim()) {
      url.searchParams.set("q", value)
    } else {
      url.searchParams.delete("q")
    }
    history.replaceState(null, "", url.toString())
  }
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  // Split items into "featured" and "standard" to map them to the bento grid easily
  const featuredBriefings = [
    {
      date: "Jul 2026",
      badge: "NEW",
      title: "The Score That Does Not Exist — 존재하지 않는 점수",
      desc: "The unified Chinese citizen score is a Western invention. The scoring-and-lending machine was built in London and San Francisco, carried east by Goldman Sachs alumni — and shut down at scale by exactly one government. Bilingual white paper, every claim verified against primary sources.",
      href: "/briefings/score-that-does-not-exist",
      colSpan: "md:col-span-2 lg:col-span-3"
    },
    {
      date: "Jul 2026",
      badge: "NEW",
      title: "The End of Endings",
      desc: "A grand audit of war termination, historical revisionism, and the algorithmic precipice. Why wars no longer end, who writes the history when they do, and what happens when machines inherit both jobs. From Thucydides to flash wars.",
      href: "/briefings/end-of-endings",
      colSpan: "md:col-span-2 lg:col-span-3"
    },
    {
      date: "Jul 2026",
      badge: "OSINT",
      title: "JCG-OSINT 070726 — Islamabad Memorandum in Open Breach",
      desc: "Tehran enforces the Hormuz corridor by fire; Washington revokes its own sixteen-day-old oil waiver and resumes strikes; twelve million mourn a martyred leader. Six key judgments with confidence levels, the twenty-day breach ledger, and what Seoul should read in this file.",
      href: "/briefings/jcg-osint-070726",
      colSpan: "md:col-span-2 lg:col-span-6"
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "Blowback — 역풍: 테러 지정의 무기화",
      desc: "How the country that built Al-Qaeda's infrastructure, created ISIS's officer corps, and nurtured Hamas now decides who is a terrorist and who isn't. From a crescent moon to the Brotherhood designation.",
      href: "/briefings/blowback",
      colSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "The Architecture of Ruin",
      desc: "What happens when you invite a superpower's weapons onto your soil to fight your neighbor. Six countries found out. Five are still paying. 750 bases. 80 countries. One pattern. One exception.",
      href: "/briefings/architecture-of-ruin",
      colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "The Sovereignty Protocol",
      desc: "Rented umbrellas, magazine maps, and the inheritance of Myeongnyang. A strategic assessment of how two Americans with a magazine split a 5,000-year civilization—and why 80 million Koreans united would render the arrangement obsolete.",
      href: "/briefings/sovereignty-protocol",
      colSpan: "md:col-span-1 lg:col-span-2"
    },
    {
      date: "Feb 2026",
      badge: "NEW",
      title: "“Don't Look Up”: The $800 Satellite Eavesdropping Crisis",
      desc: "~50% of GEO satellite signals unencrypted. $800 equipment cost. 2,711 T-Mobile numbers in 9 hours. How consumer-grade equipment exposed military secrets and critical infrastructure.",
      href: "/briefings/satellite-eavesdropping",
      colSpan: "md:col-span-2 lg:col-span-3"
    },
    {
      date: "Feb 2026",
      badge: "NEW",
      title: "DPRK Human Rights Claims vs Global Reality",
      desc: "The DPRK has ratified more core human rights treaties than the United States — five versus three. Data-driven comparative analysis across 14 areas with verifiable sources.",
      href: "/briefings/dprk-human-rights-analysis",
      colSpan: "md:col-span-1 lg:col-span-3"
    }
  ]

  const secondaryBriefings = [
    {
      date: "Jul 2026",
      badge: "NEW",
      title: "The Reliability Deficit",
      desc: "The Islamabad Memorandum in open breach, twenty days after signature. The collapse ledger, the license problem, twelve million mourners as strategic data, and the deficit no signature can fix. iPurpose Strategic Briefing №02.",
      href: "/briefings/reliability-deficit",
    },
    {
      date: "Jul 2026",
      badge: "NEW",
      title: "The Mirage of the Impenetrable Shield",
      desc: "Thirty-five years of missile defense combat data: 96% claims that became 9%, a shield defeated by a software update, and interceptors that cost 18 to 120 times their targets. iPurpose Strategic Briefing №01.",
      href: "/briefings/mirage-shield",
    },
    {
      date: "Jul 2026",
      badge: "NEW",
      title: "The Tribute Bill",
      desc: "Lindsey Graham's last act, the 500 percent tariff, and the de-dollarization it may end up financing. Market structure brief: on-record quotes from four named officials, the two-layer diagram, four watch markers, and the caveats.",
      href: "/briefings/tribute-bill",
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "Performative Ethics & the Sanctions Regime",
      desc: "564,000 annual deaths. 8 of 14 UN sanctions regimes target Africa. 2,500+ Pentagon-edited films. How virtue theater, media manipulation, and moral licensing maintain a codified global caste system.",
      href: "/briefings/performative-ethics-sanctions",
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "Sleepwalkers With Nuclear Weapons",
      desc: "Groupthink, conformity, and the Dunning-Kruger apocalypse. How cognitive biases in nuclear-armed governments create existential risk — from the Bay of Pigs to Able Archer 83.",
      href: "/briefings/sleepwalkers-nuclear",
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "OT Cybersecurity in Military Infrastructure",
      desc: "From Stuxnet to SolarWinds. How operational technology vulnerabilities in energy grids, weapons systems, and logistics networks threaten military readiness across NATO.",
      href: "/briefings/ot-cybersecurity",
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "The “China Collapse” Narrative — A Data-Driven Refutation",
      desc: "Decades of failed predictions vs. verified economic data. Manufacturing dominance, technological advancement, and the geopolitical function of collapse prophecy.",
      href: "/briefings/china-collapse-narrative",
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "The Five Months That Broke the Bloc — CIA Declassified",
      desc: "Part I: Poland's 134-day journey from the Roundtable Accords to a non-Communist prime minister. Analysis of five Top Secret CIA intelligence briefs, April–August 1989.",
      href: "/briefings/five-months-broke-bloc",
    },
    {
      date: "Mar 2026",
      badge: "NEW",
      title: "The Cracks Spread East — CIA Declassified",
      desc: "Part II: How the Baltic republics and East Germany slipped Moscow's grip. Three declassified Top Secret intelligence briefs reveal an empire cracking at every seam, June–July 1989.",
      href: "/briefings/cracks-spread-east",
    },
    {
      date: "Feb 2026",
      title: "The War Nobody Wins: A Behavioral Analysis of WW3",
      desc: "JPanda Papers behavioral analysis examining the psychology, industrial asymmetries, and strategic miscalculations driving the world toward a hypothetical global conflict.",
      href: "/briefings/war-nobody-wins",
    },
    {
      date: "Feb 2026",
      title: "Systemic Fragility: F-35 Lightning II Assessment",
      desc: "$2T+ lifecycle cost, 50% fleet availability, 232:1 China-US shipbuilding ratio. Comprehensive life-cycle assessment of the F-35 program and Western defense industrial capacity.",
      href: "/briefings/f35-systemic-fragility",
    },
    {
      date: "Feb 2026",
      title: "체계적 취약성과 전략적 현실 — F-35 종합 평가",
      desc: "F-35 라이트닝 II 프로그램의 종합 수명주기 평가. 2조 달러 이상의 비용, 50% 가동률, 232:1 조선 역량 비율. 한국어 전략 보고서.",
      href: "/briefings/f35-systemic-fragility-kr",
    },
    {
      date: "Feb 2026",
      title: "The New Weapons: Defense Energy & Materials Guide",
      desc: "From 50-year diamond batteries to truck-mounted lasers. A plain-language guide to the materials revolution reshaping modern warfare since 2003.",
      href: "/briefings/new-weapons",
    },
    {
      date: "Dec 2025",
      title: "The Tipping Point: EU's €90 Billion Ukraine Gamble",
      desc: "How Europe's latest support package transfers unprecedented fiscal risk to taxpayers. Fact-checked analysis of the December 2025 decision.",
      href: "/briefings/eu-ukraine-aid",
    },
    {
      title: "NGOs and Regime Change",
      desc: "How humanitarian rhetoric masks geopolitical operations. The sophisticated network deploying $300M+ annually across 100+ countries for regime change.",
      href: "/briefings/ngo-regime-change",
    },
    {
      title: "The Soros-Government Nexus",
      desc: "Documented relationships spanning financial partnerships, personnel exchanges, and policy influence. Over $300M in government funding revealed through comprehensive examination.",
      href: "/briefings/soros-government-nexus",
    },
    {
      title: "Koch Industries and Venezuelan Oil",
      desc: "Uncovering the complex web of economic interests and strategic dependencies. $409M dispute, refineries built for Venezuelan crude, and $3B in potential annual savings revealed.",
      href: "/briefings/koch-venezuelan-oil",
    },
    {
      badge: "CRITICAL",
      title: "Media Manipulation Decoded",
      desc: "How six corporations control 90% of what you see, think, and believe. The psychological weapons of mass distraction exposed.",
      href: "/briefings/media-manipulation-decoded",
      highlight: true
    }
  ]

  const trimmedQuery = query.trim().toLowerCase()
  const isSearching = trimmedQuery.length > 0

  const translatedBriefings = [
    { title: t('iranSnapbackTitle'), desc: t('iranSnapbackDesc'), href: "/briefings/iran-snapback" },
    { title: t('natoExpansionTitle'), desc: t('natoExpansionDesc'), href: "/briefings/nato-expansion" },
    { title: t('northKoreaDeceptionTitle'), desc: t('northKoreaDeceptionDesc'), href: "/briefings/dprk-narrative" },
    { title: t('ukraineDeceptionTitle'), desc: t('ukraineDeceptionDesc'), href: "/briefings/ukraine-deception" },
    { title: t('sanctionsWarfareTitle'), desc: t('sanctionsWarfareDesc'), href: "/briefings/sanctions-warfare" },
    { title: t('truthForPeaceTitle'), desc: t('truthForPeaceDesc'), href: "/briefings/truth-for-peace" },
    { title: t('aiConfessionTitle'), desc: t('aiConfessionDesc'), href: "/briefings/ai-confession" },
    { title: t('falseFlagOpsTitle'), desc: t('falseFlagOpsDesc'), href: "/briefings/false-flag-cyber-operations" },
    { title: t('navySealsTitle'), desc: t('navySealsDesc'), href: "/briefings/navy-seals-civilians" },
    { title: t('covertOperationsTitle'), desc: t('covertOperationsDesc'), href: "/briefings/covert-operations-declassified" },
    { title: t('koreanReunificationTitle'), desc: t('koreanReunificationDesc'), href: "/briefings/korean-reunification-path" },
    { title: t('frozenConflictsTitle'), desc: t('frozenConflictsDesc'), href: "/briefings/frozen-conflicts-profit" },
    { title: t('aptDownFilesTitle'), desc: t('aptDownFilesDesc'), href: "/briefings/apt-down-files" }
  ]

  type SearchEntry = { title: string; desc: string; href: string; date?: string; badge?: string }
  const toEntry = (b: { title: string; desc: string; href: string } & Partial<SearchEntry>): SearchEntry => ({
    title: b.title,
    desc: b.desc,
    href: b.href,
    date: b.date,
    badge: b.badge,
  })
  const allBriefings: SearchEntry[] = [
    ...featuredBriefings.map(toEntry),
    ...secondaryBriefings.map(toEntry),
    ...translatedBriefings.map(toEntry),
  ]

  const results = isSearching
    ? allBriefings.filter(
        (b) =>
          b.title.toLowerCase().includes(trimmedQuery) ||
          b.desc.toLowerCase().includes(trimmedQuery)
      )
    : []

  return (
    <div className="min-h-[100dvh] bg-river-depths selection:bg-sovereign-gold/30 selection:text-sovereign-gold">
      {/* Cinematic Hero Image */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden mb-16">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/gallery/paektu-hero-4.webp"
            alt="Mount Paektu at sunset - where truth meets understanding"
            fill
            className="object-cover scale-105 opacity-90"
            priority
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 h-full flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 backdrop-blur-md mb-6">
              <FileText className="w-4 h-4 text-sovereign-gold" />
              <span className="text-xs font-mono tracking-widest text-sovereign-gold uppercase">
                {t('briefings')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight tracking-tight text-cream">
              {t('briefingsTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/70 font-light max-w-2xl leading-relaxed">
              {t('briefingsSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Briefings Bento */}
      <section className="relative z-10 px-4 mb-24 -mt-20">
        <div className="container mx-auto max-w-7xl">
          {/* Search */}
          <div className="mb-10">
            <label htmlFor="briefings-search" className="sr-only">
              Search briefings
            </label>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-muted pointer-events-none" />
              <input
                id="briefings-search"
                type="search"
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
                placeholder="Search briefings by title or topic…"
                className="w-full bg-river-deep border border-river-current/60 rounded-lg pl-11 pr-11 py-3 text-[15px] text-cream placeholder:text-cream-muted/60 focus:outline-none focus:border-sovereign-gold/60 focus:ring-2 focus:ring-sovereign-gold/20 transition-colors [&::-webkit-search-cancel-button]:hidden"
              />
              {isSearching && (
                <button
                  type="button"
                  onClick={() => updateQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-cream-muted hover:text-sovereign-gold transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {isSearching && (
              <p className="mt-3 text-sm text-cream-muted">
                {results.length === 0
                  ? "No briefings match"
                  : `${results.length} briefing${results.length === 1 ? "" : "s"} found`}
                {" for "}
                <span className="text-sovereign-gold">&ldquo;{query.trim()}&rdquo;</span>
              </p>
            )}
          </div>

          {/* Search results */}
          {isSearching && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className="block relative p-6 rounded-xl border bg-[#0a1521] border-cream/5 hover:border-river-current/50 hover:bg-[#0e1c2c] transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4 min-h-[20px]">
                    {b.badge && (
                      <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border bg-sovereign-gold/10 border-sovereign-gold/20 text-sovereign-gold">
                        {b.badge}
                      </span>
                    )}
                    {b.date && (
                      <span className="text-cream/40 text-[10px] font-mono uppercase tracking-widest">
                        {b.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-[family-name:var(--font-heading)] text-cream/90 leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-sm leading-relaxed mb-6 flex-grow text-cream/60">
                    {b.desc}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-river-current">
                    Read <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
              {results.length === 0 && (
                <div className="md:col-span-2 lg:col-span-3 text-center py-16 border border-river-current/30 rounded-xl bg-river-deep/40">
                  <FileText className="w-8 h-8 text-cream-muted/50 mx-auto mb-4" />
                  <p className="text-cream/80 font-semibold mb-2">Nothing in the archive matches that.</p>
                  <p className="text-sm text-cream-muted">
                    Try a broader term, like &ldquo;sanctions&rdquo;, &ldquo;Korea&rdquo;, or &ldquo;missile&rdquo;.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 ${isSearching ? "hidden" : ""}`}>
            {featuredBriefings.map((briefing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative p-px rounded-2xl bg-gradient-to-b from-sovereign-gold/20 to-transparent ${briefing.colSpan}`}
              >
                <Link href={briefing.href} className="block relative bg-river-depths border border-sovereign-gold/10 rounded-[15px] p-8 md:p-10 h-full overflow-hidden inset-shadow-sm inset-shadow-sovereign-gold/5 group-hover:bg-[#122338] transition-colors duration-300 flex flex-col">
                  
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-16 h-16 text-sovereign-gold" />
                  </div>

                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <span className="px-3 py-1 bg-sovereign-gold/20 border border-sovereign-gold/30 text-sovereign-gold text-xs font-bold tracking-wider rounded-md">
                      {briefing.badge}
                    </span>
                    <span className="text-cream/50 text-xs font-mono uppercase tracking-widest">{briefing.date}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-heading)] text-cream group-hover:text-sovereign-gold transition-colors relative z-10 leading-tight">
                    {briefing.title}
                  </h2>
                  
                  <p className="text-cream/60 leading-relaxed relative z-10 mb-8 max-w-2xl flex-grow">
                    {briefing.desc}
                  </p>

                  <div className="relative z-10 inline-flex items-center gap-2 text-sovereign-gold text-sm font-bold tracking-widest uppercase mt-auto">
                    Read Report
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Briefings Grid */}
      <section className={`relative z-10 px-4 py-24 border-t border-cream/5 bg-river-depths/50 ${isSearching ? "hidden" : ""}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-cream">Intelligence & Analysis</h3>
            <div className="h-px bg-cream/10 flex-grow ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryBriefings.map((briefing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  href={briefing.href}
                  className={`block relative p-6 rounded-xl border transition-all duration-300 h-full flex flex-col ${
                    briefing.highlight 
                      ? 'bg-korean-red/10 border-korean-red/30 hover:bg-korean-red/20' 
                      : 'bg-[#0a1521] border-cream/5 hover:border-river-current/50 hover:bg-[#0e1c2c]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {briefing.badge && (
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded border ${
                        briefing.highlight 
                          ? 'bg-korean-red/20 border-korean-red/40 text-korean-red' 
                          : 'bg-sovereign-gold/10 border-sovereign-gold/20 text-sovereign-gold'
                      }`}>
                        {briefing.badge}
                      </span>
                    )}
                    {briefing.date && (
                      <span className="text-cream/40 text-[10px] font-mono uppercase tracking-widest">{briefing.date}</span>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 font-[family-name:var(--font-heading)] text-cream/90 leading-snug">
                    {briefing.title}
                  </h4>
                  
                  <p className={`text-sm leading-relaxed mb-6 flex-grow ${briefing.highlight ? 'text-cream/80' : 'text-cream/60'}`}>
                    {briefing.desc}
                  </p>

                  <div className={`mt-auto inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase ${
                    briefing.highlight ? 'text-korean-red' : 'text-river-current'
                  }`}>
                    Read <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Translated / Core Briefings List */}
      <section className={`relative z-10 px-4 py-24 border-t border-cream/5 bg-[#050a10] ${isSearching ? "hidden" : ""}`}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-cream mb-4">Core Briefings Repository</h3>
            <p className="text-cream/50 text-sm">Archived multinational intelligence reports and structural analyses.</p>
          </div>

          <div className="space-y-4">
            {translatedBriefings.map((briefing, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Link 
                  href={briefing.href}
                  className="group block p-5 rounded-xl border border-cream/5 bg-river-depths/30 hover:bg-[#122338] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-cream/90 group-hover:text-cream transition-colors mb-2">{briefing.title}</h4>
                      <p className="text-sm text-cream/50 line-clamp-2 sm:line-clamp-1">{briefing.desc}</p>
                    </div>
                    <div className="shrink-0 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-cream/5 group-hover:bg-sovereign-gold/10 group-hover:text-sovereign-gold transition-colors text-cream/30">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
