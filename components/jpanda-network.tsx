"use client"

import { Globe, TrendingDown, Users, BookOpen } from "lucide-react"

interface NetworkSite {
  name: string
  url: string
  description: string
  icon: React.ReactNode
  color: string
}

const sites: NetworkSite[] = [
  {
    name: "Juche GanG",
    url: "https://juche.org",
    description: "Peace & Unity",
    icon: <Globe className="w-4 h-4" />,
    color: "text-korean-red hover:text-korean-red"
  },
  {
    name: "Tiger Unity",
    url: "https://tiger.juche.org",
    description: "Korean Reunification",
    icon: <Users className="w-4 h-4" />,
    color: "text-sovereign-gold hover:text-sovereign-gold"
  },
  {
    name: "1929 World",
    url: "https://1929.world",
    description: "Economic Analysis",
    icon: <TrendingDown className="w-4 h-4" />,
    color: "text-sovereign-gold hover:text-sovereign-gold"
  },
  {
    name: "Library",
    url: "https://juche.org/library",
    description: "Resources",
    icon: <BookOpen className="w-4 h-4" />,
    color: "text-river-mid hover:text-river-mid"
  }
]

interface JPandaNetworkProps {
  currentSite?: string // Exclude current site from links
  variant?: "full" | "compact" | "minimal"
  className?: string
}

export function JPandaNetwork({
  currentSite,
  variant = "compact",
  className = ""
}: JPandaNetworkProps) {
  const filteredSites = sites.filter(site => site.name !== currentSite)

  if (variant === "minimal") {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-xs text-cream/40 mb-2">JPanda Network</p>
        <div className="flex justify-center gap-3 text-xs">
          {filteredSites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${site.color} transition-colors`}
            >
              {site.name}
            </a>
          ))}
        </div>
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className={`border-t border-cream/10 pt-4 ${className}`}>
        <p className="text-xs uppercase tracking-wider text-cream/40 mb-3 text-center">
          Part of the JPanda Network
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {filteredSites.map((site, index) => (
            <span key={site.name} className="flex items-center gap-1">
              {index > 0 && <span className="text-cream/20 mr-3">•</span>}
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${site.color} transition-colors flex items-center gap-1`}
              >
                {site.icon}
                {site.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    )
  }

  // Full variant
  return (
    <div className={`border-t border-cream/10 pt-6 ${className}`}>
      <div className="text-center mb-4">
        <p className="text-sm font-medium text-cream/60">JPanda Network</p>
        <p className="text-xs text-cream/40">Independent Analysis & Advocacy</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {filteredSites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg bg-cream/5 hover:bg-cream/10 transition-all text-center"
          >
            <div className={`${site.color} mb-1 flex justify-center`}>
              {site.icon}
            </div>
            <p className="text-cream text-sm font-medium group-hover:text-cream/90">
              {site.name}
            </p>
            <p className="text-cream/50 text-xs">{site.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

// Standalone component for easy copy-paste to other projects
export function NetworkFooterStandalone() {
  return (
    <div className="border-t border-cream/10 py-4 text-center">
      <p className="text-xs text-cream/40 mb-2">Part of the JPanda Network</p>
      <div className="flex flex-wrap justify-center gap-4 text-xs">
        <a href="https://juche.org" className="text-korean-red hover:text-korean-red">Juche GanG</a>
        <span className="text-cream/20">•</span>
        <a href="https://tiger.juche.org" className="text-sovereign-gold hover:text-sovereign-gold">Tiger Unity</a>
        <span className="text-cream/20">•</span>
        <a href="https://1929.world" className="text-sovereign-gold hover:text-sovereign-gold">1929 World</a>
        <span className="text-cream/20">•</span>
        <a href="https://juche.org/library" className="text-river-mid hover:text-river-mid">Library</a>
      </div>
    </div>
  )
}
