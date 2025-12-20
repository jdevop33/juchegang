"use client"

import Link from "next/link"
import { ArrowLeft, Presentation, Download, Calendar, Eye, Search, ExternalLink } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { useState } from "react"

interface Deck {
  id: string
  title: string
  description: string
  slideCount: number
  category: string
  date: string
  thumbnail?: string
  downloadUrl: string
  viewUrl?: string
  downloads: number
  featured?: boolean
}

// Slide deck data - add your presentations here
const decks: Deck[] = [
  // Example structure:
  // {
  //   id: "media-manipulation-101",
  //   title: "Media Manipulation 101",
  //   description: "How narratives are constructed and how to see through them",
  //   slideCount: 24,
  //   category: "Media Literacy",
  //   date: "2025-01-10",
  //   thumbnail: "/library/decks/thumbnails/media-manipulation.jpg",
  //   downloadUrl: "/library/decks/media-manipulation-101.pdf",
  //   viewUrl: "https://docs.google.com/presentation/d/...",
  //   downloads: 89,
  //   featured: true
  // }
]

const categories = ["All", "Media Literacy", "Geopolitics", "History", "Economics", "Peace Initiatives"]

export default function DecksPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDecks = decks.filter(deck => {
    const matchesCategory = activeCategory === "All" || deck.category === activeCategory
    const matchesSearch = deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          deck.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <JucheHeader />

      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Back Link */}
        <Link href="/library" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Library
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Presentation className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Slide Decks</h1>
              <p className="text-white/60">{decks.length} presentations available</p>
            </div>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search presentations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Decks Grid */}
        {filteredDecks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDecks.map((deck) => (
              <div
                key={deck.id}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 relative">
                  {deck.thumbnail ? (
                    <img src={deck.thumbnail} alt={deck.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Presentation className="w-16 h-16 text-white/20" />
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {deck.slideCount} slides
                  </div>
                  {deck.featured && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-amber-500/90 text-black text-xs font-medium rounded">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded">
                    {deck.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-purple-400 transition-colors">
                    {deck.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{deck.description}</p>

                  <div className="flex items-center justify-between text-sm text-white/40 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(deck.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {deck.downloads}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {deck.viewUrl && (
                      <a
                        href={deck.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </a>
                    )}
                    <a
                      href={deck.downloadUrl}
                      download
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-white/20 rounded-xl">
            <Presentation className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {decks.length === 0 ? "Presentations coming soon" : "No matches found"}
            </h3>
            <p className="text-white/60 max-w-md mx-auto">
              {decks.length === 0
                ? "We're preparing slide decks on key topics. Check back soon!"
                : "Try adjusting your search or filter criteria."
              }
            </p>
          </div>
        )}

        {/* Upload CTA */}
        <section className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a presentation to share?</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            If you've created educational content about Korean unity, peace initiatives, or media literacy,
            we'd love to feature it in our library.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            Contact Us
            <ExternalLink className="w-4 h-4" />
          </Link>
        </section>
      </div>

      <JucheFooter />
    </main>
  )
}
