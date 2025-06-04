"use client"

import { useEffect, useRef } from "react"

interface TrailPoint {
  x: number
  y: number
  life: number
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<TrailPoint[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 20,
      })

      // Limit trail length
      if (trailRef.current.length > 15) {
        trailRef.current.shift()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trailRef.current.forEach((point, index) => {
        point.life--

        if (point.life > 0) {
          const opacity = point.life / 20
          const size = (point.life / 20) * 10

          ctx.save()
          ctx.globalAlpha = opacity * 0.4
          // Alternate between friendship colors for trail
          ctx.fillStyle = index % 2 === 0 ? "#034DA2" : "#EC1D25"
          ctx.beginPath()
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
          ctx.fill()

          // Add glow effect
          ctx.globalAlpha = opacity * 0.2
          ctx.beginPath()
          ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })

      // Remove dead points
      trailRef.current = trailRef.current.filter((point) => point.life > 0)

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
