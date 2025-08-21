"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import FocalImage from "./focal-image"
import { Star, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Hero image container with parallax effect */}
      <div
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <FocalImage
          src="/images/hero-image.png"
          alt="Juche 2025"
          fill
          className="object-cover object-center scale-105"
          priority
        />

        {/* Enhanced overlay for better flow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Minimal geometric elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-white/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/10 rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-white/10 -rotate-12"></div>
      </div>

      {/* Content positioned for better visibility */}
      <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-5xl transition-all duration-1000 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 sm:gap-3 glass-effect-dark px-4 sm:px-6 py-2 sm:py-3 rounded mb-4 sm:mb-6 md:mb-8 elegant-border">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">{t('heroBadge')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
              {t('laws48')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl glass-effect-dark p-4 sm:p-6 md:p-8 rounded elegant-border">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#laws"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-primary text-accent-foreground font-medium text-sm sm:text-base tracking-wide transition-all duration-300 text-center hover-lift sophisticated-shadow rounded"
              >
                {t('heroCTAExplore')}
              </a>
              <a
                href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 glass-effect-dark text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 text-center hover-lift minimal-border rounded"
              >
                {t('heroCTAAbout')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-white/60 text-xs font-light tracking-widest">{t('scroll')}</span>
        </div>
      </div>
    </div>
  )
}
