import path from "path"
import { promises as fs } from "fs"
import Image from "next/image"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import GalleryImage from "@/components/gallery-image"

export const metadata = {
  title: "Gallery - Juche GanG",
  description: "Media gallery of Juche GanG. Responsive images optimized for all devices.",
}

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"])

async function listGalleryImages(): Promise<{ src: string; alt: string }[]> {
  const galleryDir = path.join(process.cwd(), "public", "gallery")

  async function walk(dir: string, baseUrl: string): Promise<string[]> {
    let entries: any[] = []
    try {
      entries = await fs.readdir(dir, { withFileTypes: true })
    } catch {
      return []
    }

    const files: string[] = []
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue
      const fullPath = path.join(dir, entry.name)
      const relUrl = `${baseUrl}/${entry.name}`
      if (entry.isDirectory()) {
        files.push(...(await walk(fullPath, relUrl)))
      } else if (allowedExtensions.has(path.extname(entry.name).toLowerCase() as any)) {
        files.push(relUrl)
      }
    }
    return files
  }

  const fileUrls = await walk(galleryDir, "/gallery")
  
  const deduplicatedUrls = new Map<string, string>()
  fileUrls.forEach(url => {
    const name = path.basename(url)
    const nameWithoutExt = name.replace(/\.[^.]+$/, '')
    const ext = path.extname(name).toLowerCase()
    
    if (!deduplicatedUrls.has(nameWithoutExt)) {
      deduplicatedUrls.set(nameWithoutExt, url)
    } else {
      const existingUrl = deduplicatedUrls.get(nameWithoutExt)!
      const existingExt = path.extname(existingUrl).toLowerCase()
      
      const priority = { '.webp': 3, '.png': 2, '.jpg': 1, '.jpeg': 1 }
      const currentPriority = priority[ext as keyof typeof priority] || 0
      const existingPriority = priority[existingExt as keyof typeof priority] || 0
      
      if (currentPriority > existingPriority) {
        deduplicatedUrls.set(nameWithoutExt, url)
      }
    }
  })
  
  return Array.from(deduplicatedUrls.values())
    .sort((a, b) => a.localeCompare(b))
    .map((url) => {
      const name = path.basename(url)
      return { src: url, alt: name.replace(/[-_]/g, " ") }
    })
}

export default async function GalleryPage() {
  const images = await listGalleryImages()

  return (
    <main className="min-h-[100dvh] bg-[#050505] text-cream selection:bg-sovereign-gold/30">
      <JucheHeader />

      {/* Hero Section: Ethereal Glass */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-4 md:px-8 overflow-hidden">
        {/* Background Radial Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-sovereign-gold/5 blur-[120px] rounded-[100%] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            Media Archive
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Visual Registry
          </h1>
          <p className="text-xl md:text-2xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
            A curated collection of historical and contemporary photography. Raw, unedited, direct from the source.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-8 pb-32">

        {/* SoundCloud Double-Bezel */}
        <div className="mb-24 flex justify-center">
          <div className="w-full max-w-3xl p-1.5 rounded-[2rem] bg-white/5 border border-white/10">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#0a0a0a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <iframe
                title="Gallery soundtrack"
                width="100%"
                height="166"
                allow="autoplay"
                loading="lazy"
                style={{ border: 0 }}
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1087014736&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
              />
            </div>
          </div>
        </div>

        {images.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-xl text-cream-muted tracking-tight">No media found in the archive.</p>
          </div>
        ) : (
          <>
            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[280px]" aria-label="Media gallery">
              {images.map((img, index) => {
                // Procedural Layout Generation
                const isHero = index % 11 === 0;
                const isTall = index % 5 === 0 && !isHero;
                const isWide = index % 4 === 0 && !isHero && !isTall;
                
                let spanClasses = "lg:col-span-4 row-span-1";
                if (isHero) spanClasses = "lg:col-span-8 row-span-2";
                else if (isTall) spanClasses = "lg:col-span-4 row-span-2";
                else if (isWide) spanClasses = "lg:col-span-8 row-span-1";

                return (
                  <div key={img.src} className={`p-1.5 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-500 ${spanClasses}`}>
                    <div className="relative w-full h-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#0a0a0a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <GalleryImage 
                        src={img.src} 
                        alt={img.alt} 
                        index={index}
                        allImages={images}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Historical Context Section */}
        <section className="mt-40 max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-sovereign-gold/20">
              Primary Sources
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream tracking-tighter">
              Historical Context
            </h2>
            <p className="text-xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
              Declassified materials, speeches, and treaties that formed the modern geopolitical faultlines.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {[
              {
                id: "1",
                title: "Putin's 2007 Munich Speech",
                content: (
                  <>
                    <p className="text-lg text-cream-muted leading-relaxed mb-6">
                      Vladimir Putin delivered his landmark address at the Munich Conference on Security Policy on <strong>February 10, 2007</strong>. The official Kremlin transcript documents Putin's most direct challenge to Western security architecture since the Soviet collapse.
                    </p>
                    <blockquote className="border-l-2 border-sovereign-gold/50 pl-6 my-8 italic text-xl text-cream leading-relaxed">
                      "I think it is obvious that NATO expansion does not have any relation with the modernisation of the Alliance itself... On the contrary, it represents a serious provocation that reduces the level of mutual trust."
                    </blockquote>
                  </>
                )
              },
              {
                id: "2",
                title: "NATO's Seven Waves of Expansion",
                content: (
                  <>
                    <p className="text-lg text-cream-muted leading-relaxed mb-8">
                      The alliance's post-Cold War expansion began with German reunification. It proceeded in distinct, aggressive waves despite early assurances.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        { date: "March 12, 1999", places: "Czech Republic, Hungary, Poland" },
                        { date: "March 29, 2004", places: "Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, Slovenia" },
                        { date: "April 1, 2009", places: "Albania, Croatia" },
                        { date: "2017-2024", places: "Montenegro, N. Macedonia, Finland, Sweden" }
                      ].map((wave, i) => (
                        <div key={i} className="p-1 rounded-2xl bg-white/5 border border-white/10">
                          <div className="bg-[#0a0a0a] rounded-[calc(1rem-2px)] p-6 h-full">
                            <div className="text-sm font-bold text-sovereign-gold mb-2">{wave.date}</div>
                            <div className="text-cream text-base">{wave.places}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <blockquote className="border-l-2 border-sovereign-gold/50 pl-6 italic text-xl text-cream leading-relaxed">
                      Secretary of State James Baker told Mikhail Gorbachev on February 9, 1990: <strong>"There would be no extension of NATO's jurisdiction for forces of NATO one inch to the east."</strong>
                    </blockquote>
                  </>
                )
              },
              {
                id: "3",
                title: "The Cuban Missile Crisis Precedent",
                content: (
                  <>
                    <p className="text-lg text-cream-muted leading-relaxed mb-6">
                      When U.S. reconnaissance discovered Soviet missiles in Cuba on October 14, 1962, President Kennedy responded with unprecedented military mobilization, raising military readiness to <strong>DEFCON 2</strong> - one step from nuclear war.
                    </p>
                    <p className="text-lg text-cream-muted leading-relaxed">
                      The crisis established clear precedent that the United States would risk nuclear war to prevent hostile military deployments near its borders.
                    </p>
                  </>
                )
              },
              {
                id: "4",
                title: "Russia's Economic Catastrophe (1990s)",
                content: (
                  <>
                    <p className="text-lg text-cream-muted leading-relaxed mb-8">
                      The post-Soviet economic collapse represented what economists called "the most cataclysmic peacetime economic collapse of an industrial country in history." <strong>Russian GDP contracted 40-50% cumulatively.</strong>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { stat: "2,520%", label: "Inflation in 1992" },
                        { stat: "-6 Yrs", label: "Male Life Expectancy" },
                        { stat: "41.5%", label: "Poverty Rate (1999)" }
                      ].map((item, i) => (
                        <div key={i} className="p-1 rounded-2xl bg-[#0a0a0a] border border-white/5 text-center">
                          <div className="py-8">
                            <div className="text-3xl font-bold text-cream mb-2 tracking-tighter">{item.stat}</div>
                            <div className="text-xs text-cream-muted tracking-widest uppercase">{item.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )
              }
            ].map((section) => (
              <div key={section.id} className="p-1.5 md:p-2 rounded-[2.5rem] bg-white/5 border border-white/10 group">
                <div className="bg-[#0a0a0a] rounded-[calc(2.5rem-0.5rem)] p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:bg-[#111]">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4 text-cream tracking-tight">
                    <span className="w-10 h-10 bg-sovereign-gold/10 text-sovereign-gold rounded-full flex items-center justify-center text-sm font-bold border border-sovereign-gold/20 shrink-0">
                      {section.id}
                    </span>
                    {section.title}
                  </h3>
                  <div className="max-w-3xl">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <JucheFooter />
    </main>
  )
}


