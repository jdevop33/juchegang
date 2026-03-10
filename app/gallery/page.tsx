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
      // Skip hidden files/folders
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
  
  // Remove duplicates by preferring webp over jpg, then png over jpg
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
      
      // Priority: webp > png > jpg/jpeg
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
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />

      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/heros/0sunsetpaektu3.jpg"
            alt="Panoramic sunset over Mount Paektu crater with golden and purple skies"
            fill
            className="object-cover object-[center_40%]"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/50 via-[#0d1b2a]/20 to-background" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#0d1b2a]/60 backdrop-blur-sm text-[#d4a74a] rounded-full text-sm font-medium border border-[#d4a74a]/30">
            🎨 Gallery
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#f0ebe3] drop-shadow-lg font-[family-name:var(--font-heading)]">
            Media Gallery
          </h1>
          <p className="text-lg text-[#f0ebe3]/90 max-w-2xl mx-auto drop-shadow-md">
            A curated collection of powerful imagery. Click any image to explore in full detail.
          </p>
          {images.length > 0 && (
            <div className="mt-4 text-sm text-[#f0ebe3]/70">
              {images.length} images • High resolution • Full screen viewing
            </div>
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 pt-12 pb-16">

        {/* SoundCloud player */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden border border-border/60 bg-muted/20">
            <iframe
              title="Gallery soundtrack"
              width="100%"
              height="300"
              allow="autoplay"
              loading="lazy"
              style={{ border: 0 }}
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1087014736&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>
        </div>

        {images.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground">No media found</h3>
            <p className="text-muted-foreground">Images should be placed in /public/gallery/</p>
          </div>
        ) : (
          <>
            {/* Main gallery grid - Natural aspect ratios to preserve faces */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4" aria-label="Media gallery">
              {images.map((img, index) => (
                <div key={img.src} className="relative group">
                  <div className="relative w-full overflow-hidden rounded-lg bg-muted/30 border border-border/50 hover:border-accent/50 transition-all duration-300">
                    <GalleryImage 
                      src={img.src} 
                      alt={img.alt} 
                      index={index}
                      allImages={images}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery stats */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-6 px-6 py-3 bg-muted/30 rounded-full text-sm text-muted-foreground">
                <span>🖼️ {images.length} Images</span>
                <span>•</span>
                <span>🔍 Click to zoom</span>
                <span>•</span>
                <span>⬇️ Download available</span>
              </div>
            </div>

            {/* Historical Context Section */}
            <section className="mt-20 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#1b4965]/20 text-[#1b4965] dark:text-[#d4a74a] rounded-full text-sm font-medium">
                  📚 Historical Context
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  NATO Expansion and Russia-US Relations
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Primary sources and historical facts that provide essential context for understanding contemporary geopolitical developments.
                </p>
              </div>

              <div className="space-y-12">
                {/* Putin's 2007 Munich Speech */}
                <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4a74a]/20 text-[#d4a74a] rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Putin's 2007 Munich Security Conference Speech
                  </h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      Vladimir Putin delivered his landmark address at the Munich Conference on Security Policy on <strong>February 10, 2007</strong> - not 2008 as commonly misremembered. The official Kremlin transcript documents Putin's most direct challenge to Western security architecture since the Soviet collapse.
                    </p>
                    <blockquote className="border-l-4 border-[#1b4965] pl-4 my-6 italic bg-[#1b4965]/10 p-4 rounded-r">
                      <p className="mb-2">"I think it is obvious that NATO expansion does not have any relation with the modernisation of the Alliance itself or with ensuring security in Europe. On the contrary, it represents a serious provocation that reduces the level of mutual trust. And we have the right to ask: against whom is this expansion intended?"</p>
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed">
                      The Russian president explicitly invoked broken Western promises, quoting NATO Secretary General Manfred Wörner's May 17, 1990 statement about Soviet security guarantees. Putin warned that while "the stones and concrete blocks of the Berlin Wall have long been distributed as souvenirs," new dividing lines were emerging - "virtual walls" that "cut through our continent."
                    </p>
                  </div>
                </div>

                {/* NATO's Eastward Expansion */}
                <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4a74a]/20 text-[#d4a74a] rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    NATO's Seven Waves of Expansion
                  </h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The alliance's post-Cold War expansion began with German reunification on October 3, 1990, when former East German territory joined NATO under West Germany's existing membership. The expansion proceeded in distinct waves:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <div className="font-semibold text-[#1b4965] dark:text-[#d4a74a]">March 12, 1999</div>
                        <div className="text-sm text-muted-foreground">Czech Republic, Hungary, Poland</div>
                      </div>
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <div className="font-semibold text-[#1b4965] dark:text-[#d4a74a]">March 29, 2004</div>
                        <div className="text-sm text-muted-foreground">Bulgaria, Estonia, Latvia, Lithuania, Romania, Slovakia, Slovenia</div>
                      </div>
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <div className="font-semibold text-[#1b4965] dark:text-[#d4a74a]">April 1, 2009</div>
                        <div className="text-sm text-muted-foreground">Albania, Croatia</div>
                      </div>
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <div className="font-semibold text-[#1b4965] dark:text-[#d4a74a]">2017-2024</div>
                        <div className="text-sm text-muted-foreground">Montenegro, N. Macedonia, Finland, Sweden</div>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-[#1b4965] pl-4 my-6 italic bg-[#1b4965]/10 p-4 rounded-r">
                      <p className="mb-2">Secretary of State James Baker told Mikhail Gorbachev on February 9, 1990: <strong>"There would be no extension of NATO's jurisdiction for forces of NATO one inch to the east."</strong></p>
                    </blockquote>
                  </div>
                </div>

                {/* Cuban Missile Crisis */}
                <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4a74a]/20 text-[#d4a74a] rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    The Cuban Missile Crisis Precedent
                  </h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      When U.S. reconnaissance discovered Soviet missiles in Cuba on October 14, 1962, President Kennedy responded with unprecedented military mobilization, raising military readiness to <strong>DEFCON 2</strong> - one step from nuclear war.
                    </p>
                    <blockquote className="border-l-4 border-[#c73032] pl-4 my-6 italic bg-[#c73032]/10 p-4 rounded-r">
                      <p className="mb-2">"It shall be the policy of this nation to regard any nuclear missile launched from Cuba against any nation in the Western Hemisphere as an attack by the Soviet Union on the United States, requiring a full retaliatory response."</p>
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed">
                      The crisis established clear precedent that the United States would risk nuclear war to prevent hostile military deployments near its borders, a principle consistently applied throughout the Western Hemisphere under various iterations of the Monroe Doctrine.
                    </p>
                  </div>
                </div>

                {/* Economic Collapse */}
                <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4a74a]/20 text-[#d4a74a] rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Russia's Economic Catastrophe
                  </h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      The post-Soviet economic collapse between 1991 and 1998 represented what economists called "the most cataclysmic peacetime economic collapse of an industrial country in history." <strong>Russian GDP contracted 40-50% cumulatively</strong>, exceeding the depth of the Great Depression.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 my-6">
                      <div className="bg-[#c73032]/10 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-[#c73032]">2,520%</div>
                        <div className="text-xs text-muted-foreground">Inflation in 1992</div>
                      </div>
                      <div className="bg-[#c73032]/10 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-[#c73032]">6 years</div>
                        <div className="text-xs text-muted-foreground">Drop in male life expectancy</div>
                      </div>
                      <div className="bg-[#c73032]/10 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-[#c73032]">41.5%</div>
                        <div className="text-xs text-muted-foreground">Poverty rate by 1999</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* American Warnings */}
                <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4a74a]/20 text-[#d4a74a] rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    American Officials Warned of Russian Backlash
                  </h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <blockquote className="border-l-4 border-[#1b4965] pl-4 my-6 italic bg-[#1b4965]/10 p-4 rounded-r">
                      <p className="mb-2">George Kennan, architect of containment, called NATO expansion <strong>"the most fateful error of American policy in the entire post-Cold War era"</strong>, warning it would "inflame the nationalistic, anti-Western and militaristic tendencies in Russian opinion."</p>
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed">
                      Most striking was current CIA Director William Burns' February 1, 2008 cable titled <strong>"NYET MEANS NYET: RUSSIA'S NATO ENLARGEMENT REDLINES"</strong>, which warned that Ukraine's NATO aspirations could lead to "a major split, involving violence or at worst, civil war."
                    </p>
                  </div>
                </div>

                {/* Monroe Doctrine */}
                <div className="bg-gradient-to-r from-background to-muted/20 rounded-xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#d4a74a]/20 text-[#d4a74a] rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    America's Monroe Doctrine Sphere
                  </h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      Since President James Monroe declared in 1823 that European attempts "to extend their system to any portion of this hemisphere" would be considered "dangerous to our peace and safety," the United States has consistently intervened against foreign military presence in the Western Hemisphere.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Recent applications continue this pattern. When Russia deployed nuclear-capable bombers to Venezuela in 2018, National Security Adviser John Bolton declared the Monroe Doctrine "alive and well." Congressional leaders now cite Chinese port construction and telecommunications networks as violations of hemispheric security principles, demonstrating that the United States maintains its centuries-old opposition to foreign military presence in its sphere of influence - <strong>the same principle Russia invokes regarding NATO expansion to its borders.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Note */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full text-sm">
                  <span>📖</span>
                  <span>Historical context for informed understanding</span>
                  <span>🕊️</span>
                </div>
              </div>
            </section>
          </>
        )}
      </section>
      <JucheFooter />
    </main>
  )
}


