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
  let files: string[] = []
  try {
    files = await fs.readdir(galleryDir)
  } catch {
    return []
  }
  return files
    .filter((name) => allowedExtensions.has(path.extname(name).toLowerCase() as any))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ src: `/gallery/${name}`, alt: name.replace(/[-_]/g, " ") }))
}

export default async function GalleryPage() {
  const images = await listGalleryImages()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <section className="container mx-auto px-4 pt-28 pb-16">
        <header className="mb-10 text-center">
          <h1 className="text-headline mb-3">Media Gallery</h1>
          <p className="text-muted-foreground">Optimized images that adapt beautifully across devices.</p>
        </header>

        {images.length === 0 ? (
          <div className="text-center text-muted-foreground">No media found in /public/gallery</div>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4" aria-label="Media gallery">
            {images.map((img) => (
              <li key={img.src} className="relative">
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                  <GalleryImage src={img.src} alt={img.alt} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <JucheFooter />
    </main>
  )
}


