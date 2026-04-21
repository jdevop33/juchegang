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
    color: "current",
    href: "/library/documents"
  },
  {
    id: "decks",
    title: "Slide Decks",
    description: "Presentations on geopolitics, history, and peace initiatives",
    icon: Presentation,
    count: decks.length,
    color: "gold",
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
    <main className="min-h-screen bg-gradient-to-b from-river-depths via-river-current to-river-depths">
      <JucheHeader />

      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-sm font-medium border border-sovereign-gold/30">
            <BookOpen className="w-4 h-4" />
            Resource Library
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Knowledge is Power
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Documents, presentations, and resources for understanding the real story.
            Download, share, and spread the truth.
          </p>
        </header>

        {/* Category Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            const colorClasses = {
              current: "border-river-current bg-river-current/20 hover:bg-river-current/30",
              gold: "border-sovereign-gold/30 bg-sovereign-gold/10 hover:bg-sovereign-gold/20",
              red: "border-korean-red/30 bg-korean-red/10 hover:bg-korean-red/20"
            }
            const iconColorClasses = {
              current: "text-river-current bg-river-current/20",
              gold: "text-sovereign-gold bg-sovereign-gold/20",
              red: "text-korean-red bg-korean-red/20"
            }

            if (category.comingSoon) {
              return (
                <div
                  key={category.id}
                  className={`relative rounded-xl border ${colorClasses[category.color as keyof typeof colorClasses]} p-6 opacity-60`}
                >
                  <div className="absolute top-4 right-4 px-2 py-1 bg-cream/10 text-cream/60 text-xs rounded">
                    Coming Soon
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${iconColorClasses[category.color as keyof typeof iconColorClasses]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-cream mb-2">{category.title}</h2>
                  <p className="text-cream/60 text-sm mb-4">{category.description}</p>
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
                <h2 className="text-xl font-bold text-cream mb-2 group-hover:text-sovereign-gold transition-colors">
                  {category.title}
                </h2>
                <p className="text-cream/60 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cream/40 text-sm">
                    {category.count} {category.count === 1 ? 'item' : 'items'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-cream/40 group-hover:text-cream group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            )
          })}
        </section>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-cream mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-sovereign-gold" />
              Featured Downloads
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredResources.map((resource: LibraryResource) => {
                const isExternal = resource.downloadUrl.startsWith('http')
                return (
                <a
                  key={resource.id}
                  href={resource.downloadUrl}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { download: true })}
                  className="group flex items-center gap-4 p-4 bg-river-depths/50 border border-river-current rounded-xl hover:bg-river-current/30 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    resource.type === 'slides' ? 'bg-sovereign-gold/20' :
                    resource.type === 'docx' ? 'bg-river-current/30' : 'bg-river-current/30'
                  }`}>
                    {resource.type === 'slides' ? (
                      <Presentation className="w-6 h-6 text-sovereign-gold" />
                    ) : resource.type === 'docx' ? (
                      <FileText className="w-6 h-6 text-river-current" />
                    ) : (
                      <FileText className="w-6 h-6 text-river-current" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-cream group-hover:text-sovereign-gold transition-colors truncate">
                      {resource.title}
                    </h3>
                    <p className="text-cream/60 text-sm truncate">{resource.description}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-cream/40">
                      <span>{resource.type.toUpperCase()}</span>
                      <span>{resource.fileSize}</span>
                      {resource.pageCount && <span>{resource.pageCount} pages</span>}
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-cream/40 group-hover:text-sovereign-gold transition-colors shrink-0" />
                </a>
              )})}
            </div>
          </section>
        )}

        {/* Empty State */}
        {featuredResources.length === 0 && (
          <section className="text-center py-16 border border-dashed border-river-current rounded-xl">
            <FolderOpen className="w-16 h-16 text-cream/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-cream mb-2">Library is being built</h3>
            <p className="text-cream/60 max-w-md mx-auto mb-6">
              We're adding documents, slide decks, and resources.
              Check back soon or explore our briefings in the meantime.
            </p>
            <Link
              href="/briefings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-river-current hover:bg-river-current/80 text-cream font-medium rounded-lg transition-colors"
            >
              <FileText className="w-4 h-4" />
              Browse Briefings
            </Link>
          </section>
        )}

        {/* How to Use */}
        <section className="mt-16 bg-gradient-to-r from-river-depths/70 to-river-current/30 rounded-xl p-8 border border-river-current">
          <h2 className="text-2xl font-bold text-cream mb-6">How to Use This Library</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 bg-river-current/30 text-sovereign-gold rounded-lg flex items-center justify-center mb-3 text-lg font-bold">1</div>
              <h3 className="font-bold text-cream mb-2">Browse & Download</h3>
              <p className="text-cream/60 text-sm">All resources are free to download and share. No signup required.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-sovereign-gold/20 text-sovereign-gold rounded-lg flex items-center justify-center mb-3 text-lg font-bold">2</div>
              <h3 className="font-bold text-cream mb-2">Share Widely</h3>
              <p className="text-cream/60 text-sm">Use in your own presentations, articles, or conversations. Attribution appreciated.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-korean-red/20 text-korean-red rounded-lg flex items-center justify-center mb-3 text-lg font-bold">3</div>
              <h3 className="font-bold text-cream mb-2">Contribute</h3>
              <p className="text-cream/60 text-sm">Have resources to add? Contact us to contribute to the library.</p>
            </div>
          </div>
        </section>
      </div>

      <JucheFooter />
    </main>
  )
}
