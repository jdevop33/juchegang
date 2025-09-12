"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { analytics } from '@/lib/analytics'

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view on route change  
    analytics.pageView(pathname)

    // Set user preferences for Clarity
    const theme = localStorage.getItem('theme')
    const language = localStorage.getItem('language')
    
    if (theme) {
      analytics.event('user_theme_preference', { theme })
    }
    
    if (language) {
      analytics.event('user_language_preference', { language })
    }

    // Track special pages
    if (pathname.includes('/truth-project')) {
      analytics.event('truth_project_visit', { page: pathname })
    }
    
    if (pathname.includes('/beyond-ideology')) {
      analytics.event('beyond_ideology_visit')
    }
    
    if (pathname === '/') {
      analytics.event('homepage_visit')
    }

  }, [pathname])

  // Track scroll depth for engagement analysis
  useEffect(() => {
    let maxScroll = 0
    let scrollTimer: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        const scrolled = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        
        if (scrolled > maxScroll) {
          maxScroll = scrolled
          
          // Track scroll milestones
          if (scrolled >= 25 && maxScroll < 25) {
            analytics.event('scroll_25_percent')
          } else if (scrolled >= 50 && maxScroll < 50) {
            analytics.event('scroll_50_percent')
          } else if (scrolled >= 75 && maxScroll < 75) {
            analytics.event('scroll_75_percent')
          } else if (scrolled >= 90 && maxScroll < 90) {
            analytics.event('scroll_90_percent')
          }
        }
      }, 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      
      // Track engagement time
      if (timeSpent > 30) { // More than 30 seconds
        analytics.event('engaged_session', { time_spent: timeSpent })
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      handleBeforeUnload() // Track on component unmount too
    }
  }, [pathname])

  return null // This component doesn't render anything
}