import Image from "next/image"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero image container that fills the viewport */}
      <div className="absolute inset-0">
        <Image src="/images/hero-image.png" alt="Juche 2025" fill className="object-cover object-center" priority />

        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-950/30 to-transparent"></div>
      </div>

      {/* Content positioned for better visibility */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-900/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-red-300" />
              <span className="text-sm font-medium text-red-200">Juche GanG Edition</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
              The 48 Laws <br />
              <span className="text-red-300">Of Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-red-100 mb-8 max-w-2xl drop-shadow-md bg-red-950/30 backdrop-blur-sm p-4 rounded-lg">
              A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering
              commitment to your highest potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#laws"
                className="px-8 py-3 bg-red-700 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 text-center"
              >
                Explore the Laws
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-red-900/50 hover:bg-red-800/70 backdrop-blur-sm text-white font-medium rounded-lg border border-red-700/50 transition-all duration-300 text-center"
              >
                About the Author
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
