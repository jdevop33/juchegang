import Link from "next/link"
import { Home, Image, Globe, FileText, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-river-depths via-river-deep to-river-depths flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-korean-red mb-4">404</h1>
          <h2 className="text-3xl font-bold text-cream mb-4">Page Not Found</h2>
          <p className="text-xl text-cream/70 mb-8">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-korean-red hover:bg-korean-red/80 text-cream font-medium rounded-lg transition-colors"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>
          <Link
            href="/truth-project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-river-current hover:bg-river-current/80 text-cream font-medium rounded-lg transition-colors"
          >
            View Truth Project
          </Link>
        </div>

        <div className="mt-12 p-6 bg-cream/5 rounded-lg border border-cream/10">
          <h3 className="text-lg font-semibold text-cream mb-3">Popular Pages</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
              <Image className="h-4 w-4" />
              Gallery
            </Link>
            <Link href="/social" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
              <Globe className="h-4 w-4" />
              Social Media
            </Link>
            <Link href="/briefings" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
              <FileText className="h-4 w-4" />
              Briefings
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
