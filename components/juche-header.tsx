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
          ? "bg-river-depths/95 backdrop-blur-xl border-b border-sovereign-gold/20 shadow-lg shadow-river-depths/40"
          : "bg-gradient-to-r from-transparent via-river-depths/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {pathname === "/" ? (
            <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">
              <Link href="/" className="bg-gradient-to-r from-sovereign-gold via-river-mist to-sovereign-gold bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                주체강
              </Link>
              <span className="ml-2 text-lg font-sans font-normal text-river-mist/80">JucheGang</span>
            </h1>
          ) : (
            <Link
              href="/"
              aria-label="Home"
              className="group inline-flex items-center gap-3 transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/logo-icon-gang.png"
                  alt="JucheGang"
                  width={64}
                  height={64}
                  priority
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(212,167,74,0.6)] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sovereign-gold/20 via-transparent to-river-current/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="sr-only">JucheGang</span>
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link href="/contact" className="group relative inline-flex items-center justify-center pl-5 pr-1.5 py-1.5 rounded-full bg-cream text-[#0d1b2a] text-sm font-bold transition-all duration-300 active:scale-[0.98] hover:bg-white">
            <span className="mr-3">{t('contact')}</span>
            <div className="w-7 h-7 rounded-full bg-[#0d1b2a]/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#0d1b2a]">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
          <button onClick={() => setIsMenuOpen(true)} className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream-muted hover:text-cream bg-white/5 hover:bg-white/10 transition-all duration-300 active:scale-[0.98] backdrop-blur-sm text-sm font-medium tracking-[0.05em]" aria-label="Open menu">
            <Menu className="h-4 w-4" strokeWidth={1.5} />
            <span className="uppercase text-[11px] tracking-[0.15em]">Menu</span>
          </button>
        </div>

        {/* Mobile: language + menu */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Link href="/contact" className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-cream text-[#0d1b2a] text-xs font-bold transition-all duration-300 active:scale-[0.95]">
            {t('contact')}
          </Link>
          <button className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-cream-muted hover:text-cream bg-white/5 hover:bg-white/10 transition-all duration-300 active:scale-[0.95]" aria-label="Toggle menu" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      {/* Unified Drawer Root to avoid duplicate overlays */}
      <Drawer.Root direction="right" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-river-depths/90 backdrop-blur-md transition-opacity duration-300" />
          <Drawer.Content className="fixed right-0 top-0 h-screen w-[92vw] max-w-[560px] bg-gradient-to-br from-river-depths via-river-deep to-river-depths border-l border-sovereign-gold/20 shadow-2xl shadow-river-depths/80 will-change-transform backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-river-current/30">
              <Image
                src="/banner-horizontal.png"
                alt="JucheGang - Navigate the Current"
                width={240}
                height={60}
                className="h-12 w-auto"
              />
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="group p-2 text-river-mist hover:text-cream transition-all duration-300 transform hover:scale-110 hover:rotate-90">
                <X className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,167,74,0.8)]" />
              </button>
            </div>
            <nav className="px-6 py-6 overflow-y-auto h-[calc(100vh-64px)]">
              <ul className="space-y-3">
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('home')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/mission" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('mission')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/cultural-exchange" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('culture')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/youth-empowerment" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('youth')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/peace-timeline" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('peace')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/civilizations" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">Civilizations</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/briefings" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('briefings')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/library" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">Library</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/channels" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('channels')}</span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02]">
                  <Link href="/social" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-river-current/10 hover:bg-river-current/20 text-river-mist hover:text-cream transition-all duration-300 border border-river-current/20 hover:border-sovereign-gold/40">
                    <span className="font-medium">{t('social')}</span>
                  </Link>
                </li>

                {/* Featured Links */}
                <li className="pt-4 mt-4 border-t border-sovereign-gold/20">
                  <p className="text-xs uppercase tracking-wider text-sovereign-gold/80 font-semibold mb-3 px-1">Featured</p>
                </li>

                <li className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                  <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-gradient-to-r from-river-current to-river-mid text-cream font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-sovereign-gold/30">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">📸</span>
                      <span>{t('gallery')}</span>
                    </span>
                  </Link>
                </li>
                <li className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                  <Link href="/truth-project" onClick={() => setIsMenuOpen(false)} className="group block px-4 py-3 rounded-lg bg-gradient-to-r from-korean-red/80 to-korean-red text-cream font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-korean-red/40">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">🌍</span>
                      <span>{t('truthProject')}</span>
                    </span>
                  </Link>
                </li>
                <li className="pt-6 mt-4 border-t border-river-current/30">
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
