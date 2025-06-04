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

        {/* Enhanced overlay with friendship colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-friendship-blue/90 via-friendship-blue/30 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-friendship-red/20 via-transparent to-friendship-red/20 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Professional geometric overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-friendship-red/20 rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-friendship-blue/20 rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-friendship-red/15 -rotate-12"></div>
      </div>

      {/* Content positioned for better visibility */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-3 bg-friendship-blue/90 backdrop-blur-sm px-8 py-4 rounded-sm mb-8 border-l-4 border-friendship-red">
              <Star className="h-6 w-6 text-friendship-red" />
              <span className="text-lg font-bold text-white tracking-wide">EXCELLENCE THROUGH DISCIPLINE</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 text-white leading-none tracking-tight">
              THE 48 LAWS <br />
              <span className="text-friendship-red font-black">OF EXCELLENCE</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 max-w-4xl font-medium leading-relaxed bg-friendship-blue/80 backdrop-blur-sm p-8 border-l-4 border-friendship-red">
              Master the principles that separate leaders from followers. Transform discipline into power,
              commitment into excellence, and potential into unstoppable achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#laws"
                className="px-12 py-5 bg-friendship-red hover:bg-friendship-blue text-white font-bold text-lg tracking-wide transition-all duration-300 text-center border-2 border-friendship-red hover:border-friendship-blue transform hover:scale-105"
              >
                MASTER THE LAWS
              </a>
              <a
                href="#about"
                className="px-12 py-5 bg-transparent border-2 border-friendship-blue hover:bg-friendship-blue text-white font-bold text-lg tracking-wide transition-all duration-300 text-center transform hover:scale-105"
              >
                LEARN THE SYSTEM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with friendship colors */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-friendship-red flex justify-center friendship-glow">
          <div className="w-1 h-3 bg-friendship-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
