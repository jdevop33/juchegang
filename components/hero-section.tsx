"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Anchor } from "lucide-react"
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
    <div className="relative w-full min-h-[85vh] overflow-hidden bg-gradient-to-b from-river-depths via-river-deep to-river-depths">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,167,74,0.1)_0%,_transparent_50%)]" />

      {/* Golden accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sovereign-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sovereign-gold/30 to-transparent" />
      </div>

      {/* Hero content - centered layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Text content - left side */}
          <div className={`flex-1 max-w-2xl text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 bg-river-current/30 border border-sovereign-gold/30 backdrop-blur-sm">
              <Anchor className="h-4 w-4 sm:h-5 sm:w-5 text-sovereign-gold" />
              <span className="text-xs sm:text-sm font-medium text-river-mist tracking-wide uppercase">{t('heroBadge')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-sovereign-gold via-river-mist to-sovereign-gold bg-clip-text text-transparent">
                {t('laws48')}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-river-mist/80 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#laws"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-sovereign-gold to-sovereign-dark hover:from-sovereign-gold hover:to-sovereign-gold text-river-depths font-bold text-sm sm:text-base tracking-wide transition-all duration-300 text-center rounded-full shadow-lg shadow-sovereign-gold/20 hover:shadow-sovereign-gold/40 hover:scale-105"
              >
                {t('heroCTAExplore')}
              </a>
              <a
                href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-river-current/30 text-river-mist font-medium text-sm sm:text-base tracking-wide transition-all duration-300 text-center rounded-full border border-sovereign-gold/30 hover:border-sovereign-gold/60 hover:bg-river-current/50"
              >
                {t('heroCTAAbout')}
              </a>
            </div>
          </div>

          {/* Turtle ship image - right side */}
          <div
            className={`flex-1 max-w-lg lg:max-w-xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transform: reducedMotion ? undefined : `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="relative">
              {/* Glow effect behind ship */}
              <div className="absolute inset-0 bg-gradient-to-t from-sovereign-gold/20 via-sovereign-gold/10 to-transparent blur-3xl scale-110" />

              <Image
                src="/images/hero-image.png"
                alt="Admiral Yi Sun-sin's Geobukseon - Turtle Ship"
                width={600}
                height={400}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                priority
              />

              {/* Reflection effect */}
              <div className="absolute -bottom-4 left-0 right-0 h-20 bg-gradient-to-t from-river-depths via-river-depths/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-sovereign-gold/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sovereign-gold/60 rounded-full mt-2 animate-bounce" />
          </div>
          <span className="text-river-mist/60 text-xs font-light tracking-widest">{t('scroll')}</span>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
