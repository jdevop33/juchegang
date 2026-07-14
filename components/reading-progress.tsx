"use client"

import { useEffect, useRef } from "react"

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0
    let ticking = false

    const updateProgress = () => {
      ticking = false
      const bar = barRef.current
      if (!bar) return
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? window.scrollY / docHeight : 0
      bar.style.transform = `scaleX(${Math.min(Math.max(scrollPercent, 0), 1)})`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        rafId = requestAnimationFrame(updateProgress)
      }
    }

    updateProgress()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-border z-50">
      <div
        ref={barRef}
        className="h-full bg-accent origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}
