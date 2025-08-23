"use client"

import { useEffect, useRef } from 'react'

export function useFluidScroll<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add the scroll-fluid class initially
    element.classList.add('scroll-fluid')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return ref
}

export function useStaggeredFluidScroll<T extends HTMLElement = HTMLDivElement>(delay = 100) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const children = Array.from(element.children) as HTMLElement[]
    
    children.forEach((child, index) => {
      child.classList.add('scroll-fluid', 'stagger-fluid')
      child.style.transitionDelay = `${index * delay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[]
            children.forEach((child) => {
              child.classList.add('in-view')
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return ref
}