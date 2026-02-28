"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-image.png"
        alt="Mount Paektu"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-river-depths via-river-depths/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-[85vh] px-6 sm:px-8 pb-20 sm:pb-24">
        <blockquote className={`max-w-4xl text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-light leading-relaxed text-white drop-shadow-lg">
            "The oppressed peoples can liberate themselves only through struggle. This is a simple and clear truth confirmed by history."
          </p>
          <footer className="mt-6 sm:mt-8">
            <cite className="not-italic text-sovereign-gold text-sm sm:text-base tracking-widest uppercase drop-shadow-md">
              — Kim Il-sung
            </cite>
          </footer>
        </blockquote>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
