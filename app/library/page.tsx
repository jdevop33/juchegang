"use client"

import Link from "next/link"
import { FileText, Presentation, Video, Download, ArrowRight, BookOpen, FolderOpen, MessageCircle } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { documents, decks, media, getFeaturedResources, type LibraryResource } from "@/data/library-resources"

const categories = [
  {
    id: "documents",
    title: "Documents & Reports",
    description: "Research papers, fact sheets, and primary source analysis",
    icon: FileText,
    count: documents.length,
    color: "blue",
    href: "/library/documents"
  },
  {
    id: "decks",
    title: "Slide Decks",
    description: "Presentations on geopolitics, history, and peace initiatives",
    icon: Presentation,
    count: decks.length,
    color: "purple",
    href: "/library/decks"
  },
  {
    id: "media",
    title: "Media Archive",
    description: "Curated videos, podcasts, and visual resources",
    icon: Video,
    count: media.length,
    color: "red",
    href: "/library/media",
    comingSoon: media.length === 0
  }
]

const featuredResources = getFeaturedResources()

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <JucheHeader />

      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
            <BookOpen className="w-4 h-4" />
            Resource Library
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge is Power
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Documents, presentations, and resources for understanding the real story.
            Download, share, and spread the truth.
          </p>
        </header>

        {/* Category Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            const colorClasses = {
              blue: "border-blue-500/30 bg-blue-900/20 hover:bg-blue-900/30",
              purple: "border-purple-500/30 bg-purple-900/20 hover:bg-purple-900/30",
              red: "border-red-500/30 bg-red-900/20 hover:bg-red-900/30"
            }
            const iconColorClasses = {
              blue: "text-blue-400 bg-blue-500/20",
              purple: "text-purple-400 bg-purple-500/20",
              red: "text-red-400 bg-red-500/20"
            }

            if (category.comingSoon) {
              return (
                <div
                  key={category.id}
                  className={`relative rounded-xl border ${colorClasses[category.color as keyof typeof colorClasses]} p-6 opacity-60`}
                >
                  <div className="absolute top-4 right-4 px-2 py-1 bg-white/10 text-white/60 text-xs rounded">
                    Coming Soon
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${iconColorClasses[category.color as keyof typeof iconColorClasses]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{category.title}</h2>
                  <p className="text-white/60 text-sm mb-4">{category.description}</p>
                </div>
              )
            }

            return (
              <Link
                key={category.id}
                href={category.href}
                className={`group rounded-xl border ${colorClasses[category.color as keyof typeof colorClasses]} p-6 transition-all`}
              >
                <div className={`w-12 h-12 rounded-lg ${iconColorClasses[category.color as keyof typeof iconColorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h2>
                <p className="text-white/60 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm">
                    {category.count} {category.count === 1 ? 'item' : 'items'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            )
          })}
        </section>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-green-400" />
              Featured Downloads
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredResources.map((resource: LibraryResource) => (
                <a
                  key={resource.id}
                  href={resource.downloadUrl}
                  download
                  className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    resource.type === 'slides' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                  }`}>
                    {resource.type === 'slides' ? (
                      <Presentation className="w-6 h-6 text-purple-400" />
                    ) : (
                      <FileText className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                      {resource.title}
                    </h3>
                    <p className="text-white/60 text-sm truncate">{resource.description}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-white/40">
                      <span>{resource.type.toUpperCase()}</span>
                      <span>{resource.fileSize}</span>
                      {resource.pageCount && <span>{resource.pageCount} pages</span>}
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-white/40 group-hover:text-green-400 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {featuredResources.length === 0 && (
          <section className="text-center py-16 border border-dashed border-white/20 rounded-xl">
            <FolderOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Library is being built</h3>
            <p className="text-white/60 max-w-md mx-auto mb-6">
              We're adding documents, slide decks, and resources.
              Check back soon or explore our briefings in the meantime.
            </p>
            <Link
              href="/briefings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <FileText className="w-4 h-4" />
              Browse Briefings
            </Link>
          </section>
        )}

        {/* How to Use */}
        <section className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-600/30">
          <h2 className="text-2xl font-bold text-white mb-6">How to Use This Library</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-3 text-lg font-bold">1</div>
              <h3 className="font-bold text-white mb-2">Browse & Download</h3>
              <p className="text-white/60 text-sm">All resources are free to download and share. No signup required.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-3 text-lg font-bold">2</div>
              <h3 className="font-bold text-white mb-2">Share Widely</h3>
              <p className="text-white/60 text-sm">Use in your own presentations, articles, or conversations. Attribution appreciated.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mb-3 text-lg font-bold">3</div>
              <h3 className="font-bold text-white mb-2">Contribute</h3>
              <p className="text-white/60 text-sm">Have resources to add? Contact us to contribute to the library.</p>
            </div>
          </div>
        </section>
      </div>

      <JucheFooter />
    </main>
  )
}
