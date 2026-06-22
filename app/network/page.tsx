"use client"

import Link from "next/link"
import Image from "next/image"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { ExternalLink, Globe, TrendingUp, Coins, ShoppingBag, User, Heart, FileText, ArrowRight, Network } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface SiteInfo {
  name: string
  domain: string
  url: string
  description: string
  status: 'live' | 'building' | 'planned'
  icon: React.ReactNode
  color: string
}

interface NetworkGroup {
  name: string
  description: string
  color: string
  badgeColor: string
  sites: SiteInfo[]
}

const networks: NetworkGroup[] = [
  {
    name: "Peace & Geopolitics",
    description: "Korean reunification, truth-seeking, cultural heritage",
    color: "from-korean-red/20 to-transparent",
    badgeColor: "bg-korean-red/20 text-korean-red border-korean-red/30",
    sites: [
      {
        name: "Juche GanG",
        domain: "juche.org",
        url: "https://juche.org",
        description: "48 Laws of Excellence, briefings, Korean peace advocacy",
        status: 'live',
        icon: <Heart className="w-6 h-6" />,
        color: "text-korean-red",
      },
      {
        name: "Tiger Unity",
        domain: "tiger.juche.org",
        url: "https://tiger.juche.org",
        description: "Korean reunification campaign - The Line is Temporary",
        status: 'live',
        icon: <Heart className="w-6 h-6" />,
        color: "text-sovereign-gold",
      },
      {
        name: "North Korean Unity",
        domain: "north-korean-unity.vercel.app",
        url: "https://north-korean-unity.vercel.app",
        description: "Unity project and resources",
        status: 'live',
        icon: <Globe className="w-6 h-6" />,
        color: "text-river-mid",
      },
    ]
  },
  {
    name: "Economics & Analysis",
    description: "Debt tracking, market analysis, economic truth",
    color: "from-sovereign-gold/20 to-transparent",
    badgeColor: "bg-sovereign-gold/20 text-sovereign-gold border-sovereign-gold/30",
    sites: [
      {
        name: "1929 World",
        domain: "1929.world",
        url: "https://www.1929.world",
        description: "Global debt dashboard, economic analysis, market signals",
        status: 'live',
        icon: <TrendingUp className="w-6 h-6" />,
        color: "text-sovereign-gold",
      },
    ]
  },
  {
    name: "TON & Blockchain",
    description: "Decentralized applications on TON blockchain",
    color: "from-river-mid/20 to-transparent",
    badgeColor: "bg-river-mid/20 text-river-mid border-river-mid/30",
    sites: [
      {
        name: "Memescan",
        domain: "memescan.vercel.app",
        url: "https://memescan-astro.vercel.app",
        description: "Memecoin scanner and token analytics",
        status: 'building',
        icon: <Coins className="w-6 h-6" />,
        color: "text-river-mid",
      },
      {
        name: "NotaryTON",
        domain: "notaryton.com",
        url: "https://notaryton.com",
        description: "Document notarization on TON blockchain",
        status: 'building',
        icon: <FileText className="w-6 h-6" />,
        color: "text-river-mid",
      },
      {
        name: "Seal Casino",
        domain: "seal-casino.vercel.app",
        url: "https://seal-casino.vercel.app",
        description: "TON mini-app gaming",
        status: 'building',
        icon: <Coins className="w-6 h-6" />,
        color: "text-river-mid",
      },
    ]
  },
  {
    name: "Commercial",
    description: "Business ventures and products",
    color: "from-river-current/20 to-transparent",
    badgeColor: "bg-river-current/20 text-river-current border-river-current/30",
    sites: [
      {
        name: "Outlier Clothiers",
        domain: "outlierclothiers.com",
        url: "https://outlierclothiers.com",
        description: "Luxury surplus liquidation - premium fashion for less",
        status: 'live',
        icon: <ShoppingBag className="w-6 h-6" />,
        color: "text-river-mid",
      },
    ]
  },
  {
    name: "Personal",
    description: "Professional identity and personal projects",
    color: "from-cream-muted/10 to-transparent",
    badgeColor: "bg-cream-muted/20 text-cream-muted border-cream-muted/30",
    sites: [
      {
        name: "Jesse James",
        domain: "jesse-resume.vercel.app",
        url: "https://jesse-resume.vercel.app",
        description: "Professional portfolio and experience",
        status: 'live',
        icon: <User className="w-6 h-6" />,
        color: "text-cream-muted",
      },
      {
        name: "JucheGanG CA",
        domain: "juchegang.ca",
        url: "https://juchegang.ca",
        description: "Canadian personal brand (coming soon)",
        status: 'planned',
        icon: <Globe className="w-6 h-6" />,
        color: "text-korean-red",
      },
    ]
  },
]

const StatusBadge = ({ status }: { status: 'live' | 'building' | 'planned' }) => {
  const styles = {
    live: "bg-river-mid/20 text-river-mid border-river-mid/30",
    building: "bg-sovereign-gold/20 text-sovereign-gold border-sovereign-gold/30",
    planned: "bg-cream-muted/20 text-cream-muted border-cream-muted/30",
  }
  const labels = {
    live: "Live",
    building: "Building",
    planned: "Planned",
  }
  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export default function NetworkPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  return (
    <main className="min-h-[100dvh] bg-river-depths selection:bg-sovereign-gold/30 selection:text-sovereign-gold">
      <JucheHeader />

      {/* Cinematic Hero Image */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden mb-16">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/gallery/paektu-hero-.webp"
            alt="The JPanda Network - interconnected nodes of truth and technology"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-river-depths/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-river-depths via-river-depths/60 to-transparent" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 h-full flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cream/10 bg-cream/5 backdrop-blur-md mb-6">
              <Network className="w-4 h-4 text-cream/70" />
              <span className="text-xs font-mono tracking-widest text-cream/70 uppercase">
                JPanda Network
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight tracking-tight text-cream">
              Network Map
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/70 font-light max-w-2xl leading-relaxed">
              The interconnected ecosystem of truth-seeking, decentralized infrastructure, and sovereign commerce.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24 -mt-16 relative z-10">
        
        {/* Quick Links Horizontal Scroll */}
        <div className="mb-20">
          <h2 className="text-sm font-mono tracking-widest uppercase text-cream/50 mb-6 pl-2">Quick Navigation</h2>
          <div className="flex flex-wrap gap-3">
            {networks.flatMap(n => n.sites).filter(s => s.status === 'live').map((site, i) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
                key={site.domain}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-5 py-3 bg-[#0a1521] hover:bg-[#122338] border border-cream/5 hover:border-cream/20 rounded-xl transition-all shadow-lg shadow-black/20`}
              >
                <span className={site.color}>{site.icon}</span>
                <span className="text-cream text-sm font-bold tracking-wide">{site.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Network Groups */}
        <div className="space-y-24">
          {networks.map((network, index) => (
            <section key={network.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6 mb-10"
              >
                <div className={`px-4 py-2 rounded border ${network.badgeColor} text-xs font-bold tracking-widest uppercase`}>
                  {network.name}
                </div>
                <div className="h-px bg-cream/5 flex-grow" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {network.sites.map((site, siteIndex) => (
                  <motion.a
                    key={site.domain}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: siteIndex * 0.1 }}
                    className={`group relative p-px rounded-2xl bg-gradient-to-b ${network.color} block`}
                  >
                    <div className="relative bg-[#0a1521] border border-cream/5 rounded-[15px] p-8 h-full flex flex-col hover:bg-[#0e1c2c] transition-colors duration-500 overflow-hidden">
                      
                      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                        <ExternalLink className={`w-16 h-16 ${site.color}`} />
                      </div>

                      <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className={`w-14 h-14 rounded-xl bg-cream/5 flex items-center justify-center border border-cream/5 shadow-inner ${site.color}`}>
                          {site.icon}
                        </div>
                        <StatusBadge status={site.status} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-cream mb-2 font-[family-name:var(--font-heading)] group-hover:text-cream/90 transition-colors relative z-10">
                        {site.name}
                      </h3>
                      
                      <p className="text-xs font-mono tracking-widest text-cream/40 mb-4 relative z-10">
                        {site.domain}
                      </p>
                      
                      <p className="text-cream/60 leading-relaxed text-sm mb-8 flex-grow relative z-10">
                        {site.description}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cream/30 group-hover:text-cream/80 transition-colors relative z-10">
                        Explore Protocol <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bridge Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-korean-red/10 via-river-current/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
          
          <div className="relative p-px rounded-3xl bg-gradient-to-b from-cream/10 to-transparent">
            <div className="relative bg-[#050a10] border border-cream/5 rounded-[23px] p-10 md:p-16 overflow-hidden">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/5 border border-cream/10 mb-8">
                  <Network className="w-8 h-8 text-cream/50" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">Two Worlds, One Vision</h2>
                <p className="text-cream/60 text-lg leading-relaxed">
                  Peace advocacy and economic truth on one side. Decentralized technology and commerce on the other.
                  Connected by a commitment to sovereignty, transparency, and self-reliance.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-px rounded-2xl bg-gradient-to-br from-korean-red/30 to-transparent">
                  <div className="h-full p-8 bg-[#0a1521] rounded-[15px] border border-korean-red/10">
                    <h3 className="text-xl font-bold text-korean-red mb-3 font-[family-name:var(--font-heading)]">Truth & Peace</h3>
                    <p className="text-cream/60 leading-relaxed mb-6">
                      Counter-narratives, historical truth, Korean reunification.
                      Content that challenges the mainstream.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://juche.org" className="px-4 py-2 bg-[#122338] text-korean-red text-sm font-bold tracking-wider rounded border border-korean-red/20 hover:bg-[#1a3350] transition-colors">juche.org</a>
                      <a href="https://www.1929.world" className="px-4 py-2 bg-[#122338] text-sovereign-gold text-sm font-bold tracking-wider rounded border border-sovereign-gold/20 hover:bg-[#1a3350] transition-colors">1929.world</a>
                    </div>
                  </div>
                </div>
                <div className="p-px rounded-2xl bg-gradient-to-bl from-river-mid/30 to-transparent">
                  <div className="h-full p-8 bg-[#0a1521] rounded-[15px] border border-river-mid/10">
                    <h3 className="text-xl font-bold text-river-mid mb-3 font-[family-name:var(--font-heading)]">Build & Trade</h3>
                    <p className="text-cream/60 leading-relaxed mb-6">
                      Decentralized applications, blockchain tools, commerce.
                      Building the parallel economy.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://notaryton.com" className="px-4 py-2 bg-[#122338] text-river-mid text-sm font-bold tracking-wider rounded border border-river-mid/20 hover:bg-[#1a3350] transition-colors">notaryton</a>
                      <a href="https://outlierclothiers.com" className="px-4 py-2 bg-[#122338] text-river-current text-sm font-bold tracking-wider rounded border border-river-current/20 hover:bg-[#1a3350] transition-colors">outlier</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

      <JucheFooter />
    </main>
  )
}
