"use client"

import { useEffect, useState } from "react"
import { Star, Sparkles } from "lucide-react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 friendship-gradient flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Animated logo/icon */}
        <div className="mb-8 relative">
          <div className="w-28 h-28 mx-auto friendship-gradient-reverse rounded-full flex items-center justify-center animate-pulse friendship-glow">
            <Star className="h-14 w-14 text-white animate-spin" />
          </div>
          <div className="absolute inset-0 w-28 h-28 mx-auto border-4 border-friendship-red/40 rounded-full animate-ping"></div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-glow text-shadow-glow">
          Friendship <span className="text-friendship-white animate-friendship-pulse">Club</span>
        </h1>
        <p className="text-xl text-blue-100 mb-8 animate-pulse glass-effect p-3 rounded-lg">
          The 48 Laws of Excellence
        </p>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-friendship-white">Loading Excellence...</span>
            <span className="text-sm text-friendship-white">{progress}%</span>
          </div>
          <div className="w-full bg-friendship-blue/30 rounded-full h-3 overflow-hidden glass-effect">
            <div
              className="h-full friendship-gradient-reverse rounded-full transition-all duration-300 ease-out shadow-lg friendship-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <Sparkles
              key={i}
              className={`absolute animate-float ${
                i % 2 === 0 ? 'text-friendship-red/40' : 'text-friendship-blue/40'
              }`}
              style={{
                left: `${8 + (i * 6)}%`,
                top: `${15 + (i % 5) * 18}%`,
                animationDelay: `${i * 0.25}s`,
                fontSize: `${14 + (i % 4) * 3}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
