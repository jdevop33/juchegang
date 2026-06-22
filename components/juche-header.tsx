"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import * as Drawer from "vaul"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

const navLinks = [
  { href: "/", labelKey: "home" },
  { href: "/mission", labelKey: "mission" },
  { href: "/cultural-exchange", labelKey: "culture" },
  { href: "/youth-empowerment", labelKey: "youth" },
  { href: "/peace-timeline", labelKey: "peace" },
  { href: "/civilizations", label: "Civilizations" },
  { href: "/briefings", labelKey: "briefings" },
  { href: "/library", label: "Library" },
  { href: "/channels", labelKey: "channels" },
  { href: "/social", labelKey: "social" },
]

const featuredLinks = [
  { href: "/gallery", labelKey: "gallery", icon: "📸" },
  { href: "/truth-project", labelKey: "truthProject", icon: "🌍" },
]

export function JucheHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 32)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isScrolled
          ? "bg-river-depths/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo — compact, proportionate on all screens */}
          <div className="flex items-center shrink-0">
            {pathname === "/" ? (
              <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-none">
                <Link
                  href="/"
                  className="inline-flex items-baseline gap-1.5 bg-gradient-to-r from-sovereign-gold via-cream to-sovereign-gold bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
                >
                  <span className="text-[1.35em] font-[family-name:var(--font-korean)]">주체강</span>
                  <span className="text-cream-muted/70 text-[0.55em] font-sans font-medium tracking-[0.1em] uppercase">
                    JucheGang
                  </span>
                </Link>
              </h1>
            ) : (
              <Link
                href="/"
                aria-label="Home"
                className="group inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
              >
                <Image
                  src="/logo-icon-gang.png"
                  alt="JucheGang"
                  width={40}
                  height={40}
                  priority
                  className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <span className="text-cream/60 text-[11px] font-medium tracking-[0.15em] uppercase hidden sm:inline">
                  JucheGang
                </span>
              </Link>
            )}
          </div>

          {/* Desktop: contact + language + menu trigger */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center pl-5 pr-1.5 py-1.5 rounded-full bg-cream text-[#0d1b2a] text-sm font-bold transition-all duration-300 active:scale-[0.98] hover:bg-white"
            >
              <span className="mr-3">{t('contact')}</span>
              <div className="w-7 h-7 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#0d1b2a]">
                  <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-cream-muted hover:text-cream bg-white/5 hover:bg-white/10 transition-all duration-300 active:scale-[0.98] backdrop-blur-sm text-sm font-medium tracking-[0.05em]"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" strokeWidth={1.5} />
              <span className="uppercase text-[11px] tracking-[0.15em]">Menu</span>
            </button>
          </div>

          {/* Mobile: language icon + compact menu trigger only */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-cream-muted hover:text-cream bg-white/5 hover:bg-white/10 transition-all duration-300 active:scale-[0.95]"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Drawer */}
      <Drawer.Root direction="right" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" />
          <Drawer.Content className="fixed right-0 top-0 h-[100dvh] w-[92vw] max-w-[480px] bg-river-depths border-l border-white/10 shadow-2xl will-change-transform z-[70] flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 shrink-0">
              <Image
                src="/banner-horizontal.png"
                alt="JucheGang - Navigate the Current"
                width={180}
                height={45}
                className="h-9 w-auto opacity-80"
              />
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream-muted hover:text-cream hover:bg-white/5 transition-all duration-300 active:scale-[0.95]"
              >
                <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-6">
              <ul className="space-y-1">
                {navLinks.map((link) => {
                  const label = link.labelKey ? t(link.labelKey) : link.label
                  const isActive = pathname === link.href

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-white/10 text-cream border border-white/10"
                            : "text-cream-muted hover:text-cream hover:bg-white/5"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                })}

                {/* Featured section divider */}
                <li className="pt-5 mt-3">
                  <div className="px-4 pb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-sovereign-gold/70">
                      Featured
                    </span>
                  </div>
                </li>

                {featuredLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-medium text-cream bg-white/5 border border-white/5 hover:border-sovereign-gold/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{t(link.labelKey)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Drawer footer: contact CTA + language */}
            <div className="px-4 py-5 border-t border-white/5 shrink-0 space-y-4">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="group relative flex items-center justify-center pl-6 pr-2 py-2.5 rounded-full bg-cream text-[#0d1b2a] font-bold text-base transition-all duration-300 active:scale-[0.98] hover:bg-white w-full"
              >
                <span className="mr-4">{t('contact')}</span>
                <div className="w-8 h-8 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-[#0d1b2a]">
                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
              <div className="flex justify-center">
                <LanguageToggle />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
  )
}
