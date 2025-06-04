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

        {/* Enhanced overlay with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/30 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content positioned for better visibility */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6 animate-scaleIn">
              <Sparkles className="h-4 w-4 text-red-300 animate-pulse" />
              <span className="text-sm font-medium text-red-200">Juche GanG Edition</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg animate-glow">
              The 48 Laws <br />
              <span className="text-red-300 text-shadow-glow">Of Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-red-100 mb-8 max-w-2xl drop-shadow-md glass-effect p-4 rounded-lg animate-slideInLeft">
              A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering
              commitment to your highest potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideInRight">
              <a
                href="#laws"
                className="px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 text-center hover-lift group"
              >
                <span className="group-hover:animate-pulse">Explore the Laws</span>
              </a>
              <a
                href="#about"
                className="px-8 py-3 glass-effect text-white font-medium rounded-lg border border-red-700/50 transition-all duration-300 text-center hover-lift group"
              >
                <span className="group-hover:animate-pulse">About the Author</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-red-300 flex justify-center">
          <div className="w-1 h-3 bg-red-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
