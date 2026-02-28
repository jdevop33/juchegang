"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden bg-river-depths">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 sm:px-8">
        <blockquote className={`max-w-4xl text-center transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-light leading-relaxed text-river-mist italic">
            "The oppressed peoples can liberate themselves only through struggle. This is a simple and clear truth confirmed by history."
          </p>
          <footer className="mt-8 sm:mt-10">
            <cite className="not-italic text-sovereign-gold text-base sm:text-lg tracking-widest uppercase">
              — Kim Il-sung
            </cite>
          </footer>
        </blockquote>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
