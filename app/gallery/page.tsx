import path from "path"
import { promises as fs } from "fs"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import GalleryImage from "@/components/gallery-image"

export const metadata = {
  title: "Gallery - Juche GanG",
  description: "Media gallery of Juche GanG. Responsive images optimized for all devices.",
}

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]) as const

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
  return fileUrls
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
      <section className="container mx-auto px-4 pt-28 pb-16">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            🎨 Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Media Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of powerful imagery. Click any image to explore in full detail with navigation controls.
          </p>
          
          {images.length > 0 && (
            <div className="mt-6 text-sm text-muted-foreground">
              {images.length} images • High resolution • Full screen viewing
            </div>
          )}
        </header>

        {/* SoundCloud player */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden border border-border/60 bg-muted/20">
            <iframe
              title="Gallery soundtrack"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="0"
              allow="autoplay"
              loading="lazy"
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
            {/* Main gallery grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4" aria-label="Media gallery">
              {images.map((img, index) => (
                <div key={img.src} className="relative group">
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted/30 border border-border/50 hover:border-accent/50 transition-all duration-300">
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
          </>
        )}
      </section>
      <JucheFooter />
    </main>
  )
}


