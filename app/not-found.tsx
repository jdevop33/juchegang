import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-white/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>
          <Link 
            href="/truth-project" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            View Truth Project
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-3">Popular Pages</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            <Link href="/gallery" className="text-white/70 hover:text-white transition-colors">
              📸 Gallery
            </Link>
            <Link href="/social" className="text-white/70 hover:text-white transition-colors">
              🌐 Social Media
            </Link>
            <Link href="/briefings" className="text-white/70 hover:text-white transition-colors">
              📄 Briefings
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
              ✉️ Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}