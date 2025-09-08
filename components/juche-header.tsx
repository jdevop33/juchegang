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
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between safe-area-padding">
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

        <div className="hidden md:flex items-center gap-3">
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
        <div className="md:hidden flex items-center gap-2">
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
            <div className="flex items-center justify-between px-5 py-4 border-b border-gradient-to-r from-transparent via-red-500/30 to-transparent bg-gradient-to-r from-red-950/20 via-red-900/10 to-red-950/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image src="/uselogo.svg" alt="Juche GanG" width={40} height={40} className="drop-shadow-[0_0_10px_rgba(236,29,37,0.4)]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/10 via-transparent to-yellow-500/10 animate-pulse"></div>
                </div>
                <span className="text-white/90 font-bold bg-gradient-to-r from-red-300 via-yellow-200 to-red-300 bg-clip-text text-transparent">Juche GanG</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="group p-2 text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90">
                <X className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              </button>
            </div>
            <nav className="px-5 py-4 overflow-y-auto h-[calc(100vh-56px)]">
              <ul className="space-y-3">
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-red-500/20 hover:via-red-400/10 hover:to-red-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-red-400/30">
                    <span className="relative z-10 font-medium">{t('home')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-400/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/mission" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-blue-500/20 hover:via-blue-400/10 hover:to-blue-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-blue-400/30">
                    <span className="relative z-10 font-medium">{t('mission')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/cultural-exchange" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-purple-500/20 hover:via-purple-400/10 hover:to-purple-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-purple-400/30">
                    <span className="relative z-10 font-medium">{t('culture')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/youth-empowerment" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-green-500/20 hover:via-green-400/10 hover:to-green-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-green-400/30">
                    <span className="relative z-10 font-medium">{t('youth')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-400/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/peace-timeline" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-indigo-500/20 hover:via-indigo-400/10 hover:to-indigo-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-indigo-400/30">
                    <span className="relative z-10 font-medium">{t('peace')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-400/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/briefings" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-orange-500/20 hover:via-orange-400/10 hover:to-orange-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-orange-400/30">
                    <span className="relative z-10 font-medium">{t('briefings')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-400/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/channels" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-pink-500/20 hover:via-pink-400/10 hover:to-pink-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-pink-400/30">
                    <span className="relative z-10 font-medium">{t('channels')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-400/20 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-105">
                  <Link href="/social" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 hover:from-cyan-500/20 hover:via-cyan-400/10 hover:to-cyan-500/20 text-white/90 hover:text-white transition-all duration-300 overflow-hidden border border-white/5 hover:border-cyan-400/30">
                    <span className="relative z-10 font-medium">{t('social')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-red-600/80 via-red-500/60 to-red-600/80 hover:from-red-500/90 hover:via-red-400/70 hover:to-red-500/90 text-white font-bold transition-all duration-300 transform shadow-lg hover:shadow-xl hover:shadow-red-500/50 border border-red-400/30 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-xl animate-bounce">📸</span>
                      <span>{t('gallery')}</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-red-300/30 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                  <Link href="/truth-project" onClick={() => setIsMenuOpen(false)} className="group relative block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600/80 via-blue-500/60 to-blue-600/80 hover:from-blue-500/90 hover:via-blue-400/70 hover:to-blue-500/90 text-white font-bold transition-all duration-300 transform shadow-lg hover:shadow-xl hover:shadow-blue-500/50 border border-blue-400/30 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-xl animate-spin">🌍</span>
                      <span>{t('truthProject')}</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/30 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  </Link>
                </li>
                <li className="pt-4 mt-2 border-t border-white/10">
                  <LanguageToggle />
                </li>
              </ul>
            </nav>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  )
}
