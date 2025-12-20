"use client"

import { Menu, X, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import * as Drawer from "vaul"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function JucheHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()

  // Add scroll detection for header transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-gradient-to-r from-red-950/95 via-red-900/90 to-red-950/95 backdrop-blur-xl border-b border-gradient-to-r from-red-600/50 via-yellow-500/30 to-red-600/50 shadow-lg shadow-red-900/20" 
          : "bg-gradient-to-r from-transparent via-black/10 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {pathname === "/" ? (
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <Link href="/" className="bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                Juche GanG
              </Link>
            </h1>
          ) : (
            <Link 
              href="/" 
              aria-label="Home" 
              className="group inline-flex items-center gap-3 transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image 
                  src="/uselogo.svg" 
                  alt="Juche GanG" 
                  width={56} 
                  height={56} 
                  priority 
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(236,29,37,0.6)] group-hover:brightness-110 group-hover:rotate-[5deg]"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="sr-only">Juche GanG</span>
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Link href="/contact" className="group px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 text-black font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 border border-yellow-600/20">
            {t('contact')}
          </Link>
          <button onClick={() => setIsMenuOpen(true)} className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gradient-to-r from-red-500/30 via-yellow-400/20 to-red-500/30 text-white/90 hover:text-white bg-gradient-to-r from-red-950/20 via-transparent to-red-950/20 hover:from-red-800/30 hover:via-red-700/20 hover:to-red-800/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm overflow-hidden" aria-label="Open menu">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-400/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Menu className="h-5 w-5 relative z-10 transition-all duration-300 group-hover:rotate-180" />
            <span className="uppercase tracking-wide text-sm font-semibold relative z-10">Menu</span>
            <Sparkles className="h-3 w-3 absolute top-0 right-0 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          </button>
        </div>

        {/* Mobile: language + menu + contact */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <Link href="/contact" className="px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold transition-all duration-300 transform hover:scale-105 text-sm shadow-md hover:shadow-lg">
            {t('contact')}
          </Link>
          <button className="group relative text-red-200 hover:text-white p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-12" aria-label="Toggle menu" onClick={() => setIsMenuOpen(true)}>
            {isMenuOpen ? <X className="h-6 w-6 transition-all duration-300" /> : <Menu className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(236,29,37,0.8)]" />}
            <div className="absolute inset-0 rounded-full bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
          </button>
        </div>
      </div>
      {/* Unified Drawer Root to avoid duplicate overlays */}
      <Drawer.Root direction="right" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-gradient-to-br from-black/80 via-red-950/40 to-black/80 backdrop-blur-md transition-opacity duration-300" />
          <Drawer.Content className="fixed right-0 top-0 h-screen w-[92vw] max-w-[560px] bg-gradient-to-br from-[#0b0a0a] via-red-950/10 to-[#0b0a0a] border-l border-gradient-to-b from-red-500/30 via-yellow-400/20 to-red-500/30 shadow-2xl shadow-red-900/50 will-change-transform backdrop-blur-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-xl font-bold bg-gradient-to-r from-red-300 via-yellow-200 to-red-300 bg-clip-text text-transparent">Navigation</span>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="group p-2 text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90">
                <X className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </button>
            </div>
            <nav className="px-6 py-6 overflow-y-auto h-[calc(100vh-64px)]">
              <ul className="space-y-4">
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-red-400/40">
                    <span className="font-medium">{t('home')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/mission" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-blue-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/40">
                    <span className="font-medium">{t('mission')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/cultural-exchange" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-purple-400/40">
                    <span className="font-medium">{t('culture')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/youth-empowerment" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-green-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-green-400/40">
                    <span className="font-medium">{t('youth')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/peace-timeline" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-indigo-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-indigo-400/40">
                    <span className="font-medium">{t('peace')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/briefings" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-orange-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-orange-400/40">
                    <span className="font-medium">{t('briefings')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/library" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-purple-400/40">
                    <span className="font-medium">Library</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/channels" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-pink-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-pink-400/40">
                    <span className="font-medium">{t('channels')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/social" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-white/90 hover:text-white transition-all duration-300 border border-white/10 hover:border-cyan-400/40">
                    <span className="font-medium">{t('social')}</span>
                  </Link>
                </li>
                
                {/* Featured Links */}
                <li className="pt-2 mt-2 border-t border-white/20">
                  <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-3 px-1">Featured</p>
                </li>
                
                <li className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-gradient-to-r from-red-600/60 to-red-500/60 hover:from-red-500/80 hover:to-red-400/80 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-red-400/40">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">📸</span>
                      <span>{t('gallery')}</span>
                    </span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <Link href="/truth-project" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600/60 to-blue-500/60 hover:from-blue-500/80 hover:to-blue-400/80 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-blue-400/40">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">🌍</span>
                      <span>{t('truthProject')}</span>
                    </span>
                  </Link>
                </li>
                <li className="pt-6 mt-4 border-t border-white/20">
                  <div className="px-1">
                    <LanguageToggle />
                  </div>
                </li>
              </ul>
            </nav>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  )
}
