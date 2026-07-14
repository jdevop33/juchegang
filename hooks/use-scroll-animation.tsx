"use client"

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    // Observe all elements with the section-reveal class
    const elementsToObserve = document.querySelectorAll('.section-reveal')
    elementsToObserve.forEach((element) => {
      observerRef.current?.observe(element)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  // Anchor-link smooth scrolling is handled by useSmoothScroll, which also
  // honors prefers-reduced-motion and manages focus for accessibility.
}