"use client"

import { useEffect } from "react"

// Enables smooth scroll behavior for in-page anchor links and programmatic scrolls
// Small, isolated client hook to keep most pages server-rendered
export function useSmoothScroll(): void {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return

    const originalScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = "smooth"

    const handleClick = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null
      if (!anchor) return

      const hash = anchor.getAttribute("href") || ""
      const id = hash.slice(1)
      if (!id) return

      const el = document.getElementById(id)
      if (!el) return

      event.preventDefault()
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (prefersReducedMotion) {
        el.scrollIntoView()
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      // Manage focus for accessibility
      const prevTabIndex = el.getAttribute("tabindex")
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1")
      ;(el as HTMLElement).focus({ preventScroll: true })
      if (prevTabIndex === null) el.removeAttribute("tabindex")
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior
      document.removeEventListener("click", handleClick)
    }
  }, [])
}

export default useSmoothScroll

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && link.href.includes('#')) {
        const url = new URL(link.href)
        
        // Only handle same-page anchors
        if (url.pathname === window.location.pathname && url.hash) {
          e.preventDefault()
          const element = document.querySelector(url.hash)
          
          if (element) {
            const offset = 80 // Header height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
            
            // Update URL without triggering scroll
            window.history.pushState(null, '', url.hash)
          }
        }
      }
    }
    
    document.addEventListener('click', handleClick)
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}