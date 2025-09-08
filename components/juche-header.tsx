"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import * as Drawer from "vaul"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function JucheHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language } = useLanguage()

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-red-950/90 backdrop-blur-md border-b border-red-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between safe-area-padding">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Home" className="inline-flex items-center gap-3">
            <Image src="/uselogo.svg" alt="Juche GanG" width={56} height={56} priority />
            <span className="sr-only">Juche GanG</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link href="/contact" className="px-4 py-2 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black font-semibold transition-colors">
            {t('contact')}
          </Link>
          <button onClick={() => setIsMenuOpen(true)} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-colors" aria-label="Open menu">
            <Menu className="h-5 w-5" />
            <span className="uppercase tracking-wide text-sm">Menu</span>
          </button>
        </div>

        {/* Mobile: language + menu + contact */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Link href="/contact" className="px-3 py-1.5 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black font-semibold transition-colors text-sm">
            {t('contact')}
          </Link>
          <button className="text-red-200 hover:text-white p-3" aria-label="Toggle menu" onClick={() => setIsMenuOpen(true)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Unified Drawer Root to avoid duplicate overlays */}
      <Drawer.Root direction="right" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <Drawer.Content className="fixed right-0 top-0 h-screen w-[92vw] max-w-[560px] bg-[#0b0a0a] border-l border-white/10 shadow-2xl will-change-transform">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Image src="/uselogo.svg" alt="Juche GanG" width={40} height={40} />
                <span className="text-white/90 font-semibold">Juche GanG</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 text-white/80 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-5 py-4 overflow-y-auto h-[calc(100vh-56px)]">
              <ul className="space-y-2">
                <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('home')}</Link></li>
                <li><Link href="/mission" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('mission')}</Link></li>
                <li><Link href="/cultural-exchange" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('culture')}</Link></li>
                <li><Link href="/youth-empowerment" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('youth')}</Link></li>
                <li><Link href="/peace-timeline" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('peace')}</Link></li>
                <li><Link href="/briefings" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('briefings')}</Link></li>
                <li><Link href="/channels" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('channels')}</Link></li>
                <li><Link href="/social" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-white/90">{t('social')}</Link></li>
                <li><Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded bg-red-600/90 hover:bg-red-600 text-white font-semibold">📸 {t('gallery')}</Link></li>
                <li><Link href="/truth-project" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded bg-blue-600/90 hover:bg-blue-600 text-white font-semibold">🌍 {t('truthProject')}</Link></li>
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
