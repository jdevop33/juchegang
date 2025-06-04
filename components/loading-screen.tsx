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
      className={`fixed inset-0 z-50 bg-gradient-to-br from-red-950 via-red-900 to-red-950 flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Animated logo/icon */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center animate-pulse">
            <Star className="h-12 w-12 text-white animate-spin" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-red-400/30 rounded-full animate-ping"></div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-glow">
          Juche <span className="text-red-300">GanG</span>
        </h1>
        <p className="text-xl text-red-200 mb-8 animate-pulse">
          The 48 Laws of Excellence
        </p>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-red-300">Loading Excellence...</span>
            <span className="text-sm text-red-300">{progress}%</span>
          </div>
          <div className="w-full bg-red-950/50 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-red-400/30 animate-float"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${12 + (i % 3) * 4}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
