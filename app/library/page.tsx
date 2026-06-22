"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Presentation, Video, Download, ArrowRight, BookOpen, FolderOpen } from "lucide-react"
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
    <main className="min-h-[100dvh] bg-river-depths text-cream selection:bg-sovereign-gold/30">
      <JucheHeader />

      {/* Ethereal Glass Hero */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-4 md:px-8 overflow-hidden">
        {/* Deep ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-river-current/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <BookOpen className="w-3 h-3" />
              Resource Library
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Knowledge is Power
            </h1>
            <p className="text-xl md:text-2xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
              Documents, presentations, and resources for understanding the real story. Download, share, and spread the truth.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 pb-32 max-w-[1400px]">
        
        {/* Asymmetrical Bento Categories */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              // Make the first item take up 8 cols, next two take 6/6 or whatever fits Asymmetrical Bento
              const isHero = index === 0;
              const colSpan = isHero ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
              
              if (category.comingSoon) {
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                    className={`p-1.5 rounded-[2rem] bg-white/5 border border-white/10 opacity-60 ${colSpan}`}
                  >
                    <div className="bg-river-deep rounded-[calc(2rem-0.375rem)] p-8 md:p-12 h-full relative overflow-hidden flex flex-col justify-between min-h-[320px]">
                      <div className="absolute top-6 right-6 px-3 py-1 bg-white/5 border border-white/10 text-cream-muted text-[10px] tracking-[0.2em] uppercase rounded-full">
                        Coming Soon
                      </div>
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                        <Icon className="w-6 h-6 text-cream-muted" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-cream mb-4 tracking-tight">{category.title}</h2>
                        <p className="text-cream-muted text-lg leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className={`p-1.5 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-500 group ${colSpan}`}
                >
                  <Link href={category.href} className="block h-full">
                    <div className="bg-river-depths rounded-[calc(2rem-0.375rem)] p-8 md:p-12 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:bg-river-deep flex flex-col justify-between min-h-[320px]">
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:border-sovereign-gold/30">
                        <Icon className="w-6 h-6 text-cream group-hover:text-sovereign-gold transition-colors" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-cream mb-4 tracking-tight group-hover:text-sovereign-gold transition-colors">
                          {category.title}
                        </h2>
                        <p className="text-cream-muted text-lg leading-relaxed mb-8">{category.description}</p>
                        <div className="flex items-center justify-between border-t border-white/5 pt-6">
                          <span className="text-cream-muted text-sm font-medium uppercase tracking-[0.2em]">
                            {category.count} {category.count === 1 ? 'item' : 'items'}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-sovereign-gold/10 text-cream group-hover:text-sovereign-gold">
                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Double-Bezel Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center">
                <Download className="w-5 h-5 text-sovereign-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight">
                Featured Downloads
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {featuredResources.map((resource: LibraryResource, i) => {
                const isExternal = resource.downloadUrl.startsWith('http')
                return (
                <motion.a
                  key={resource.id}
                  href={resource.downloadUrl}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { download: true })}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="group p-1.5 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 active:scale-[0.98]"
                >
                  <div className="bg-river-depths rounded-[calc(2rem-0.375rem)] p-6 md:p-8 flex items-center gap-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:bg-river-deep">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-500 ${
                      resource.type === 'slides' ? 'bg-sovereign-gold/5 border-sovereign-gold/20 group-hover:bg-sovereign-gold/10' :
                      'bg-river-current/5 border-river-current/20 group-hover:bg-river-current/10'
                    }`}>
                      {resource.type === 'slides' ? (
                        <Presentation className="w-6 h-6 text-sovereign-gold" />
                      ) : (
                        <FileText className="w-6 h-6 text-river-current" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-cream mb-2 truncate group-hover:text-white transition-colors tracking-tight">
                        {resource.title}
                      </h3>
                      <p className="text-cream-muted text-sm truncate mb-3">{resource.description}</p>
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-cream/40">
                        <span className="px-2 py-1 rounded bg-white/5">{resource.type}</span>
                        <span>{resource.fileSize}</span>
                        {resource.pageCount && <span>{resource.pageCount} pages</span>}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white">
                      <Download className="w-5 h-5 text-cream-muted group-hover:text-[#0d1b2a]" />
                    </div>
                  </div>
                </motion.a>
              )})}
            </div>
          </section>
        )}

        {/* Empty State */}
        {featuredResources.length === 0 && (
          <section className="text-center py-32 p-2 rounded-[3rem] bg-white/5 border border-white/10 mb-32">
            <div className="bg-river-deep rounded-[calc(3rem-0.5rem)] p-12 md:p-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <FolderOpen className="w-16 h-16 text-white/20 mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-cream mb-4 tracking-tight">Library is being built</h3>
              <p className="text-lg text-cream-muted max-w-lg mx-auto mb-10 leading-relaxed">
                We're adding documents, slide decks, and resources. Check back soon or explore our briefings in the meantime.
              </p>
              <Link
                href="/briefings"
                className="group relative inline-flex items-center justify-center pl-8 pr-2 py-2 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white"
              >
                <span className="mr-6">Browse Briefings</span>
                <div className="w-10 h-10 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* How to Use Section - Structuralism */}
        <section className="p-1.5 md:p-2 rounded-[3rem] bg-white/5 border border-white/10">
          <div className="bg-river-deep rounded-[calc(3rem-0.5rem)] p-12 md:p-20 lg:p-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-16 tracking-tight">How to Use This Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {[
                { step: "1", title: "Browse & Download", desc: "All resources are free to download and share. No signup required.", color: "text-river-current", bg: "bg-river-current/10" },
                { step: "2", title: "Share Widely", desc: "Use in your own presentations, articles, or conversations. Attribution appreciated.", color: "text-sovereign-gold", bg: "bg-sovereign-gold/10" },
                { step: "3", title: "Contribute", desc: "Have resources to add? Contact us to contribute to the library.", color: "text-korean-red", bg: "bg-korean-red/10" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start group">
                  <div className={`w-14 h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-8 text-xl font-bold border border-white/5 transition-transform duration-500 group-hover:scale-110`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-cream mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-cream-muted text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <JucheFooter />
    </main>
  )
}
