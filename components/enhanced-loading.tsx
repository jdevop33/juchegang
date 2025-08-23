"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Sparkles } from "lucide-react"

interface EnhancedLoadingProps {
  onComplete: () => void
}

export function EnhancedLoading({ onComplete }: EnhancedLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'complete' | 'fadeout'>('loading')

  useEffect(() => {
    const duration = 2500 // Total loading time
    const interval = 50 // Update interval
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setPhase('complete')
          setTimeout(() => {
            setPhase('fadeout')
            setTimeout(onComplete, 500)
          }, 800)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-secondary/50 to-background"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Main logo/title animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-8 w-16 h-16 relative"
            >
              <Star className="w-full h-full text-accent drop-shadow-glow" />
            </motion.div>
            
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Juche GanG
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The 48 Laws of Excellence
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-80 mx-auto mb-6">
            <div className="bg-secondary/30 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent via-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <motion.p
              className="text-sm text-muted-foreground mt-3"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading excellence... {Math.round(progress)}%
            </motion.p>
          </div>

          {/* Success animation */}
          <AnimatePresence>
            {phase === 'complete' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center justify-center gap-2 text-accent"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Ready for excellence</span>
                <Sparkles className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}