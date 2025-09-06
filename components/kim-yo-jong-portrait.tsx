"use client"

import Image from "next/image"

interface KimYoJongPortraitProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export function KimYoJongPortrait({ size = "medium", className = "" }: KimYoJongPortraitProps) {
  // Responsive dimensions using Tailwind classes for perfect cross-device rendering
  const sizeClasses = {
    small: {
      container: "w-16 h-16 sm:w-20 sm:h-20", // 64px -> 80px responsive
      frame: "p-0.5 sm:p-1", // Responsive padding
      decorations: "text-xs sm:text-sm" // Responsive emoji size
    },
    medium: {
      container: "w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36", // 96px -> 128px -> 144px
      frame: "p-1 sm:p-1.5",
      decorations: "text-sm sm:text-base md:text-lg"
    },
    large: {
      container: "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56", // 128px -> 160px -> 192px -> 224px
      frame: "p-1.5 sm:p-2",
      decorations: "text-base sm:text-lg md:text-xl"
    }
  }

  const classes = sizeClasses[size]

  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      {/* Golden circular frame with perfect responsive sizing */}
      <div className={`
        ${classes.container}
        ${classes.frame}
        rounded-full 
        bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 
        shadow-2xl
        transition-all duration-300 ease-in-out
        hover:shadow-3xl hover:scale-105
      `}>
        {/* Inner portrait container with blue background */}
        <div className="
          w-full h-full 
          rounded-full overflow-hidden 
          bg-blue-600 border-2 border-blue-700
          relative
        ">
          {/* SVG Portrait with bulletproof rendering */}
          <Image
            src="/gallery/newest/김여정.svg"
            alt="김여정 동지 - Kim Yo-jong Comrade"
            fill
            className="
              object-cover object-center
              transition-transform duration-300 ease-in-out
              hover:scale-110
            "
            priority
            sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
          
          {/* Fallback overlay for loading states */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 hover:opacity-10 transition-opacity duration-300" />
        </div>
      </div>
      
      {/* Responsive animated decorative elements */}
      <div className={`absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 ${classes.decorations} animate-pulse z-10`}>
        🌹
      </div>
      <div className={`absolute -bottom-0.5 sm:-bottom-1 -left-0.5 sm:-left-1 ${classes.decorations} animate-pulse z-10`}>
        ❤️
      </div>
      <div className={`absolute -top-0.5 sm:-top-1 -left-0.5 sm:-left-1 ${classes.decorations} animate-ping z-10`}>
        ✨
      </div>
      <div className={`absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 ${classes.decorations} animate-ping z-10`}>
        ✨
      </div>
    </div>
  )
}