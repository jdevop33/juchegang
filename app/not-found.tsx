import Link from "next/link"
import { Home, Image as ImageIcon, Globe, FileText, Mail, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-river-depths text-cream flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden selection:bg-korean-red/30">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[800px] bg-korean-red/5 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Massive 404 Typography */}
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-[12rem] md:text-[18rem] leading-none font-bold tracking-tighter bg-gradient-to-b from-korean-red to-korean-red/20 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <div className="w-px h-64 bg-white/10 hidden md:block" />

        {/* Messaging & Actions */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4 tracking-tight">Lost in the Matrix.</h2>
          <p className="text-xl text-cream-muted mb-12 max-w-md leading-relaxed">
            The coordinates you requested do not exist in this domain. Return to the source.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center pl-8 pr-2 py-2 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white"
            >
              <span className="mr-6">Return Home</span>
              <div className="w-10 h-10 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                <Home className="w-5 h-5" strokeWidth={2} />
              </div>
            </Link>
          </div>

          <div className="p-1.5 rounded-3xl bg-white/5 border border-white/10 w-full max-w-md mx-auto md:mx-0">
            <div className="bg-river-deep rounded-[calc(1.5rem-0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <h3 className="text-sm font-bold text-cream-muted mb-4 uppercase tracking-[0.2em]">Recovered Signals</h3>
              <div className="grid grid-cols-2 gap-3 text-left">
                <Link href="/gallery" className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cream-muted group-hover:text-cream group-hover:scale-110 transition-all duration-300">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-cream-muted group-hover:text-cream transition-colors">Gallery</span>
                </Link>
                <Link href="/social" className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cream-muted group-hover:text-cream group-hover:scale-110 transition-all duration-300">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-cream-muted group-hover:text-cream transition-colors">Social</span>
                </Link>
                <Link href="/briefings" className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cream-muted group-hover:text-cream group-hover:scale-110 transition-all duration-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-cream-muted group-hover:text-cream transition-colors">Briefings</span>
                </Link>
                <Link href="/contact" className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cream-muted group-hover:text-cream group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-cream-muted group-hover:text-cream transition-colors">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
