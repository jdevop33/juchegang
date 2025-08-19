"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Sparkles } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero image container with parallax effect */}
      <div
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/images/hero-image.png"
          alt="Juche 2025"
          fill
          className="object-cover object-center scale-110"
          priority
        />

        {/* Sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>
        </div>
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
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">Excellence Through Discipline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
              The 48 Laws <br />
              <span className="font-light">of Excellence</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl glass-effect-dark p-4 sm:p-6 md:p-8 rounded elegant-border">
              Master the principles that separate leaders from followers. Transform discipline into power,
              commitment into excellence, and potential into unstoppable achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#laws"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-primary text-accent-foreground font-medium text-sm sm:text-base tracking-wide transition-all duration-300 text-center hover-lift sophisticated-shadow rounded"
              >
                Explore the Laws
              </a>
              <a
                href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 glass-effect-dark text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 text-center hover-lift minimal-border rounded"
              >
                About the System
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
          <span className="text-white/60 text-xs font-light tracking-widest">SCROLL</span>
        </div>
      </div>
    </div>
  )
}
