"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Heart, Globe, Handshake, Star } from "lucide-react"

const messages = [
  { text: "和平与友谊", lang: "zh", translation: "Peace and Friendship", flag: "🇨🇳", iso: "cn" },
  { text: "Мир и дружба", lang: "ru", translation: "Peace and Friendship", flag: "🇷🇺", iso: "ru" },
  { text: "평화와 우정", lang: "ko", translation: "Peace and Friendship", flag: "🇰🇵", iso: "kp" },
  { text: "Solidarität und Einheit", lang: "de", translation: "Solidarity and Unity", flag: "🇩🇪", iso: "de" },
  { text: "Unidos en paz", lang: "es", translation: "United in Peace", flag: "🇪🇸", iso: "es" },
  { text: "团结就是力量", lang: "zh", translation: "Unity is Strength", flag: "🇨🇳", iso: "cn" },
  { text: "Вместе мы сильнее", lang: "ru", translation: "Together We Are Stronger", flag: "🇷🇺", iso: "ru" },
  { text: "하나된 세계", lang: "ko", translation: "One World United", flag: "🇰🇵", iso: "kp" },
  { text: "평화와 통일", lang: "ko", translation: "Peace and Reunification", flag: "🇰🇷", iso: "kr" },
]

function flagSrc(iso: string): string {
  // Use flagcdn PNGs (small, widely cached). Height 24 keeps it crisp.
  return `https://flagcdn.com/h24/${iso}.png`
}

export function SolidarityBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const prefersReducedMotion = useReducedMotion()

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
    <div className="relative overflow-hidden bg-gradient-to-r from-river-depths via-river-current to-river-depths border-y border-sovereign-gold/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sovereign-gold/10 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4">
          <motion.div
            animate={prefersReducedMotion ? {} : { rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hidden sm:block"
          >
            <Icon className="w-5 h-5 text-sovereign-gold" />
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
              <img
                src={flagSrc(currentMessage.iso)}
                alt={`${currentMessage.lang} flag`}
                width={24}
                height={18}
                className="rounded-sm shadow-sm border border-river-mist/20"
                onError={(e) => {
                  // Fallback to emoji if CDN blocked
                  (e.currentTarget as HTMLImageElement).replaceWith(Object.assign(document.createElement('span'), { textContent: currentMessage.flag, className: 'text-2xl' }))
                }}
              />
              <div className="text-center">
                <p className="text-river-mist font-bold text-lg sm:text-xl">
                  {currentMessage.text}
                </p>
                <p className="text-sovereign-gold text-xs sm:text-sm">
                  {currentMessage.translation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setIsVisible(!isVisible)}
            className="hidden sm:block p-1 rounded hover:bg-river-mist/10 transition-colors"
            aria-label="Toggle banner"
          >
            <Star className="w-5 h-5 text-sovereign-gold" />
          </button>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sovereign-gold to-transparent animate-slide" />
    </div>
  )
}