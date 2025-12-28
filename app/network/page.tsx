import { Metadata } from "next"
import Link from "next/link"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { ExternalLink, Globe, TrendingUp, Coins, ShoppingBag, User, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Network Map",
  description: "The JPanda Network - All sites and projects in one place.",
}

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
  sites: SiteInfo[]
}

const networks: NetworkGroup[] = [
  {
    name: "Peace & Geopolitics",
    description: "Korean reunification, truth-seeking, cultural heritage",
    color: "from-red-600 to-blue-600",
    sites: [
      {
        name: "Juche GanG",
        domain: "juche.org",
        url: "https://juche.org",
        description: "48 Laws of Excellence, briefings, Korean peace advocacy",
        status: 'live',
        icon: <Heart className="w-5 h-5" />,
        color: "text-red-400",
      },
      {
        name: "Tiger Unity",
        domain: "tiger.juche.org",
        url: "https://tiger.juche.org",
        description: "Korean reunification campaign - The Line is Temporary",
        status: 'live',
        icon: <span className="text-lg">🐅</span>,
        color: "text-amber-400",
      },
      {
        name: "North Korean Unity",
        domain: "north-korean-unity.vercel.app",
        url: "https://north-korean-unity.vercel.app",
        description: "Unity project and resources",
        status: 'live',
        icon: <Globe className="w-5 h-5" />,
        color: "text-blue-400",
      },
    ]
  },
  {
    name: "Economics & Analysis",
    description: "Debt tracking, market analysis, economic truth",
    color: "from-yellow-600 to-amber-600",
    sites: [
      {
        name: "1929 World",
        domain: "1929.world",
        url: "https://www.1929.world",
        description: "Global debt dashboard, economic analysis, market signals",
        status: 'live',
        icon: <TrendingUp className="w-5 h-5" />,
        color: "text-yellow-400",
      },
    ]
  },
  {
    name: "TON & Blockchain",
    description: "Decentralized applications on TON blockchain",
    color: "from-cyan-600 to-blue-600",
    sites: [
      {
        name: "Memescan",
        domain: "memescan.vercel.app",
        url: "https://memescan-astro.vercel.app",
        description: "Memecoin scanner and token analytics",
        status: 'building',
        icon: <Coins className="w-5 h-5" />,
        color: "text-cyan-400",
      },
      {
        name: "NotaryTON",
        domain: "notaryton.com",
        url: "https://notaryton.com",
        description: "Document notarization on TON blockchain",
        status: 'building',
        icon: <span className="text-lg">📜</span>,
        color: "text-purple-400",
      },
      {
        name: "Seal Casino",
        domain: "seal-casino.vercel.app",
        url: "https://seal-casino.vercel.app",
        description: "TON mini-app gaming",
        status: 'building',
        icon: <span className="text-lg">🎰</span>,
        color: "text-green-400",
      },
    ]
  },
  {
    name: "Commercial",
    description: "Business ventures and products",
    color: "from-purple-600 to-pink-600",
    sites: [
      {
        name: "Outlier Clothiers",
        domain: "outlierclothiers.com",
        url: "https://outlierclothiers.com",
        description: "Luxury surplus liquidation - premium fashion for less",
        status: 'live',
        icon: <ShoppingBag className="w-5 h-5" />,
        color: "text-purple-400",
      },
    ]
  },
  {
    name: "Personal",
    description: "Professional identity and personal projects",
    color: "from-slate-600 to-gray-600",
    sites: [
      {
        name: "Jesse James",
        domain: "jesse-resume.vercel.app",
        url: "https://jesse-resume.vercel.app",
        description: "Professional portfolio and experience",
        status: 'live',
        icon: <User className="w-5 h-5" />,
        color: "text-slate-400",
      },
      {
        name: "JucheGanG CA",
        domain: "juchegang.ca",
        url: "https://juchegang.ca",
        description: "Canadian personal brand (coming soon)",
        status: 'planned',
        icon: <span className="text-lg">🍁</span>,
        color: "text-red-400",
      },
    ]
  },
]

const StatusBadge = ({ status }: { status: 'live' | 'building' | 'planned' }) => {
  const styles = {
    live: "bg-green-500/20 text-green-400 border-green-500/30",
    building: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    planned: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  }
  const labels = {
    live: "Live",
    building: "Building",
    planned: "Planned",
  }
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <JucheHeader />

      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 text-white/70 rounded-full text-sm font-medium border border-white/10">
            <Globe className="w-4 h-4" />
            JPanda Network
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Network Map
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            All projects and sites in one place. Bookmark this page.
          </p>
        </header>

        {/* Quick Links */}
        <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Access</h2>
          <div className="flex flex-wrap gap-3">
            {networks.flatMap(n => n.sites).filter(s => s.status === 'live').map((site) => (
              <a
                key={site.domain}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors ${site.color}`}
              >
                {site.icon}
                <span className="text-white">{site.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Network Groups */}
        <div className="space-y-12">
          {networks.map((network) => (
            <section key={network.name}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`h-1 w-12 rounded bg-gradient-to-r ${network.color}`} />
                <div>
                  <h2 className="text-2xl font-bold text-white">{network.name}</h2>
                  <p className="text-white/60 text-sm">{network.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {network.sites.map((site) => (
                  <a
                    key={site.domain}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center ${site.color}`}>
                        {site.icon}
                      </div>
                      <StatusBadge status={site.status} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-sm text-white/50 mb-3">{site.domain}</p>
                    <p className="text-sm text-white/70">{site.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-white/40 group-hover:text-white/60 transition-colors">
                      Visit site <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bridge Section */}
        <section className="mt-16 p-8 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-blue-900/20 border border-white/10 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Two Worlds, One Vision</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Peace advocacy and economic truth on one side. Decentralized technology and commerce on the other.
              Connected by a commitment to sovereignty, transparency, and self-reliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/30 rounded-xl border border-red-500/20">
              <h3 className="text-lg font-bold text-red-400 mb-2">Truth & Peace</h3>
              <p className="text-white/60 text-sm mb-4">
                Counter-narratives, historical truth, Korean reunification.
                Content that challenges the mainstream.
              </p>
              <div className="flex gap-2">
                <a href="https://juche.org" className="px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded hover:bg-red-600/30">juche.org</a>
                <a href="https://www.1929.world" className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-sm rounded hover:bg-yellow-600/30">1929.world</a>
              </div>
            </div>
            <div className="p-6 bg-black/30 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Build & Trade</h3>
              <p className="text-white/60 text-sm mb-4">
                Decentralized applications, blockchain tools, commerce.
                Building the parallel economy.
              </p>
              <div className="flex gap-2">
                <a href="https://notaryton.com" className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-sm rounded hover:bg-cyan-600/30">notaryton</a>
                <a href="https://outlierclothiers.com" className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded hover:bg-purple-600/30">outlier</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-white/40 text-sm mt-12">
          Built by <a href="https://jesse-resume.vercel.app" className="text-white/60 hover:text-white underline">Jesse James</a> ·
          All sites independently operated ·
          <Link href="/" className="text-white/60 hover:text-white underline ml-1">Return home</Link>
        </p>
      </div>

      <JucheFooter />
    </main>
  )
}
