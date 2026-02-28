"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compute = () => {
      const stored = localStorage.getItem('motion-preference')
      if (stored === 'on') return false
      if (stored === 'off') return true
      return !!mq.matches
    }
    const update = () => setReducedMotion(compute())
    update()
    mq.addEventListener?.('change', update)
    const handlePrefChange = () => update()
    window.addEventListener('motion-preference-change', handlePrefChange as any)

    const handleScroll = () => {
      if (!mq.matches) setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      mq.removeEventListener?.('change', update)
      window.removeEventListener('motion-preference-change', handlePrefChange as any)
    }
  }, [])

  return (
    <div className="relative w-full min-h-[85vh] overflow-hidden bg-river-depths">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-river-depths via-river-deep/30 to-river-depths" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,167,74,0.06)_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4">

        {/* Logo - the brand */}
        <div
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{
            transform: reducedMotion ? undefined : `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-sovereign-gold/15 blur-3xl scale-150 rounded-full" />
            <Image
              src="/logo-primary.png"
              alt="JucheGang"
              width={320}
              height={320}
              className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
              priority
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-sovereign-gold/30 to-sovereign-gold/50" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
