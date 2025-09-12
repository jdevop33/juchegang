"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Globe, Handshake, Star } from "lucide-react"

const messages = [
  { text: "和平与友谊", lang: "zh", translation: "Peace and Friendship", flag: "🇨🇳" },
  { text: "Мир и дружба", lang: "ru", translation: "Peace and Friendship", flag: "🇷🇺" },
  { text: "평화와 우정", lang: "ko", translation: "Peace and Friendship", flag: "🇰🇵" },
  { text: "Solidarität und Einheit", lang: "de", translation: "Solidarity and Unity", flag: "🇩🇪" },
  { text: "Unidos en paz", lang: "es", translation: "United in Peace", flag: "🇪🇸" },
  { text: "团结就是力量", lang: "zh", translation: "Unity is Strength", flag: "🇨🇳" },
  { text: "Вместе мы сильнее", lang: "ru", translation: "Together We Are Stronger", flag: "🇷🇺" },
  { text: "하나된 세계", lang: "ko", translation: "One World United", flag: "🇰🇵" },
]

export function SolidarityBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentMessage = messages[currentIndex]

  const icons = [Heart, Globe, Handshake, Star]
  const Icon = icons[currentIndex % icons.length]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900 border-y border-yellow-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-pulse" />
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hidden sm:block"
          >
            <Icon className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl">{currentMessage.flag}</span>
              <div className="text-center">
                <p className="text-white font-bold text-lg sm:text-xl">
                  {currentMessage.text}
                </p>
                <p className="text-yellow-300 text-xs sm:text-sm">
                  {currentMessage.translation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setIsVisible(!isVisible)}
            className="hidden sm:block p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle banner"
          >
            <Star className="w-5 h-5 text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slide" />
    </div>
  )
}