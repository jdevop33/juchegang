"use client"

import Link from "next/link"
import { ArrowLeft, FileText, Download, Calendar, Eye, Search } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { useState } from "react"

interface Document {
  id: string
  title: string
  description: string
  category: string
  date: string
  fileSize: string
  fileType: string
  downloadUrl: string
  downloads: number
  featured?: boolean
}

// Document data - add your documents here
const documents: Document[] = [
  {
    id: "eu-ukraine-factcheck",
    title: "EU Ukraine Funding Factcheck Report",
    description: "Analysis of EU funding commitments to Ukraine - separating fact from narrative",
    category: "Geopolitics",
    date: "2025-12-20",
    fileSize: "23 KB",
    fileType: "PDF",
    downloadUrl: "/documents/eu_ukraine_factcheck_report.pdf",
    downloads: 0,
    featured: true
  }
]

const categories = ["All", "Economics", "History", "Geopolitics", "Culture", "Peace Initiatives"]

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = activeCategory === "All" || doc.category === activeCategory
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-river-depths via-river-deep to-river-depths">
      <JucheHeader />

      <div className="container mx-auto px-4 pt-28 pb-16">
        {/* Back Link */}
        <Link href="/library" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Library
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-river-mid/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-river-mid" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cream">Documents & Reports</h1>
              <p className="text-cream/60">{documents.length} resources available</p>
            </div>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/40" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-cream/5 border border-cream/10 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-river-mid/50"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-river-current text-cream"
                    : "bg-cream/5 text-cream/70 hover:bg-cream/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Documents List */}
        {filteredDocuments.length > 0 ? (
          <div className="space-y-4">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="group bg-cream/5 border border-cream/10 rounded-xl p-6 hover:bg-cream/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-river-mid/20 text-river-mid text-xs font-medium rounded">
                        {doc.fileType}
                      </span>
                      <span className="px-2 py-1 bg-cream/10 text-cream/60 text-xs rounded">
                        {doc.category}
                      </span>
                      {doc.featured && (
                        <span className="px-2 py-1 bg-sovereign-gold/20 text-sovereign-gold text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-cream mb-2 group-hover:text-river-mid transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-cream/60 text-sm mb-4">{doc.description}</p>
                    <div className="flex items-center gap-4 text-sm text-cream/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(doc.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span>{doc.fileSize}</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {doc.downloads} downloads
                      </span>
                    </div>
                  </div>
                  <a
                    href={doc.downloadUrl}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-river-current hover:bg-river-current text-cream font-medium rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-cream/20 rounded-xl">
            <FileText className="w-16 h-16 text-cream/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-cream mb-2">
              {documents.length === 0 ? "Documents coming soon" : "No matches found"}
            </h3>
            <p className="text-cream/60 max-w-md mx-auto">
              {documents.length === 0
                ? "We're preparing research documents and reports. Check back soon!"
                : "Try adjusting your search or filter criteria."
              }
            </p>
          </div>
        )}
      </div>

      <JucheFooter />
    </main>
  )
}
