"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Star, Zap, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function EnhancedHero() {
  const { t, language } = useLanguage()
  const [currentQuote, setCurrentQuote] = useState(0)
  
  const quotes = [
    t('quote1'),
    t('quote2'),
    t('quote3'),
    t('quote4'),
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Traditional Korean pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="korean-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-500" />
            <rect x="5" y="5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-yellow-500" />
          </pattern>
          <rect width="100" height="100" fill="url(#korean-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>
          
          {/* Korean characters for emphasis */}
          {language === 'kr' && (
            <div className="text-3xl md:text-5xl text-white mb-4 font-bold">
              自主 • 自立 • 自衛
            </div>
          )}
          
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            {t('heroSubtitle')}
          </p>
        </motion.div>

        {/* Rotating quotes */}
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <blockquote className="text-lg md:text-xl text-yellow-300 italic">
            "{quotes[currentQuote]}"
          </blockquote>
        </motion.div>

        {/* Feature icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Star className="h-12 w-12 text-yellow-400 mb-2" />
            <span className="text-white text-sm">{language === 'kr' ? '자주' : 'Self-Reliance'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Shield className="h-12 w-12 text-red-400 mb-2" />
            <span className="text-white text-sm">{language === 'kr' ? '자립' : 'Independence'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <Zap className="h-12 w-12 text-blue-400 mb-2" />
            <span className="text-white text-sm">{language === 'kr' ? '자위' : 'Self-Defense'}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <Heart className="h-12 w-12 text-pink-400 mb-2" />
            <span className="text-white text-sm">{language === 'kr' ? '단결' : 'Unity'}</span>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-6 text-lg"
          >
            {t('joinMovement')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-8 py-6 text-lg"
          >
            {t('learnMore')}
          </Button>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24">
          <path
            fill="currentColor"
            className="text-black"
            d="M0,96L48,90.7C96,85,192,75,288,58.7C384,43,480,21,576,26.7C672,32,768,64,864,69.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}