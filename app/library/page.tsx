"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileText,
  Presentation,
  Video,
  Download,
  BookOpen,
  Music,
  ExternalLink,
  Search,
  Filter,
  Star,
  File,
} from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import {
  getAllResources,
  getFeaturedResources,
  getResourcesByFileType,
  fileTypeInfo,
  type LibraryResource,
} from "@/data/library-resources"

const typeIcons: Record<string, React.ElementType> = {
  pdf: FileText,
  docx: File,
  slides: Presentation,
  video: Video,
  audio: Music,
  link: ExternalLink,
}

export default function LibraryPage() {
  const allResources = getAllResources()
  const featured = getFeaturedResources()
  const grouped = getResourcesByFileType()
  const fileTypes = Object.keys(grouped)

  const [activeFilter, setActiveFilter] = useState<string | "all" | "featured">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources =
    activeFilter === "featured"
      ? featured
      : activeFilter === "all"
        ? allResources
        : grouped[activeFilter] || []

  const displayResources = searchQuery
    ? filteredResources.filter(
        (r) =>
          r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : filteredResources

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <JucheHeader />

      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
            <BookOpen className="w-4 h-4" />
            Resource Library
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge is Power
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Documents, presentations, and resources for understanding the real
            story. Download, share, and spread the truth.
          </p>
          <p className="text-sm text-white/40 mt-3">
            {allResources.length} resources across {fileTypes.length} file types
          </p>
        </header>

        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-white/40 shrink-0" />
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === "all"
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                All ({allResources.length})
              </button>
              <button
                onClick={() => setActiveFilter("featured")}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors inline-flex items-center gap-1 ${
                  activeFilter === "featured"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                <Star className="w-3 h-3" />
                Featured ({featured.length})
              </button>
              {fileTypes.map((type) => {
                const info = fileTypeInfo[type]
                return (
                  <button
                    key={type}
                    onClick={() => setActiveFilter(type)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      activeFilter === type
                        ? `${info?.bgColor || "bg-white/20"} ${info?.color || "text-white"}`
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {info?.label || type.toUpperCase()} ({grouped[type].length})
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results */}
        {activeFilter === "all" && !searchQuery ? (
          // Grouped view — auto-organized by file type
          <div className="space-y-12">
            {/* Featured first */}
            {featured.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Featured
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {featured.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </section>
            )}

            {/* Then each file type */}
            {fileTypes.map((type) => {
              const info = fileTypeInfo[type]
              const Icon = typeIcons[type] || FileText
              return (
                <section key={type}>
                  <h2
                    className={`text-xl font-bold text-white mb-4 flex items-center gap-2`}
                  >
                    <Icon className={`w-5 h-5 ${info?.color || "text-white"}`} />
                    {info?.label || type.toUpperCase()}
                    <span className="text-sm font-normal text-white/40">
                      ({grouped[type].length})
                    </span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {grouped[type].map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        ) : (
          // Filtered/search view — flat list
          <div>
            {displayResources.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-white/20 rounded-xl">
                <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  No results found
                </h3>
                <p className="text-white/60 text-sm">
                  Try a different search term or filter.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {displayResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* How to Use */}
        <section className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-600/30">
          <h2 className="text-2xl font-bold text-white mb-6">
            How to Use This Library
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-3 text-lg font-bold">
                1
              </div>
              <h3 className="font-bold text-white mb-2">Browse & Download</h3>
              <p className="text-white/60 text-sm">
                All resources are free to download and share. No signup required.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-3 text-lg font-bold">
                2
              </div>
              <h3 className="font-bold text-white mb-2">Share Widely</h3>
              <p className="text-white/60 text-sm">
                Use in your own presentations, articles, or conversations.
                Attribution appreciated.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center mb-3 text-lg font-bold">
                3
              </div>
              <h3 className="font-bold text-white mb-2">Contribute</h3>
              <p className="text-white/60 text-sm">
                Have resources to add?{" "}
                <Link
                  href="/contact"
                  className="text-green-400 hover:underline"
                >
                  Contact us
                </Link>{" "}
                to contribute to the library.
              </p>
            </div>
          </div>
        </section>
      </div>

      <JucheFooter />
    </main>
  )
}

function ResourceCard({ resource }: { resource: LibraryResource }) {
  const info = fileTypeInfo[resource.type]
  const Icon = typeIcons[resource.type] || FileText

  return (
    <a
      href={resource.downloadUrl}
      download
      className="group flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${info?.bgColor || "bg-white/10"}`}
      >
        <Icon className={`w-6 h-6 ${info?.color || "text-white"}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors truncate">
            {resource.title}
          </h3>
          {resource.featured && (
            <Star className="w-3.5 h-3.5 text-yellow-400 shrink-0 fill-yellow-400" />
          )}
        </div>
        <p className="text-white/60 text-sm mt-1 line-clamp-2">
          {resource.description}
        </p>
        <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
          <span className={`font-medium ${info?.color || "text-white/60"}`}>
            {resource.type.toUpperCase()}
          </span>
          {resource.fileSize && <span>{resource.fileSize}</span>}
          {resource.pageCount && <span>{resource.pageCount} pages</span>}
          {resource.author && <span>by {resource.author}</span>}
        </div>
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resource.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-white/5 text-white/40 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <Download className="w-5 h-5 text-white/30 group-hover:text-green-400 transition-colors shrink-0 mt-1" />
    </a>
  )
}
