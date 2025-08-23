"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export function useScrollReveal(threshold: number = 0.1, triggerOnce: boolean = true) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: threshold, once: triggerOnce })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!triggerOnce) {
      controls.start('hidden')
    }
  }, [controls, inView, triggerOnce])

  return { ref, controls, inView }
}

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
}: ScrollRevealProps) {
  const { ref, controls } = useScrollReveal(threshold, triggerOnce)

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredRevealProps {
  children: React.ReactNode[]
  staggerDelay?: number
  threshold?: number
  triggerOnce?: boolean
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  className?: string
}

export function StaggeredReveal({
  children,
  staggerDelay = 0.1,
  threshold = 0.1,
  triggerOnce = true,
  direction = 'up',
  distance = 30,
  className = '',
}: StaggeredRevealProps) {
  const { ref, controls } = useScrollReveal(threshold, triggerOnce)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export function useParallax(speed: number = 0.5) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementHeight = rect.height
        const windowHeight = window.innerHeight
        
        // Calculate parallax offset
        const scrollProgress = (window.scrollY - elementTop + windowHeight) / (windowHeight + elementHeight)
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress))
        
        setScrollY(clampedProgress * 100 * speed)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, scrollY }
}