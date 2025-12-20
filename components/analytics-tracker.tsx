"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { analytics } from '@/lib/analytics'

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track special pages with custom events
    if (pathname.includes('/truth-project')) {
      analytics.trackTruthProject(pathname.split('/').pop() || 'index', 'visit')
    }

    if (pathname.includes('/briefings/')) {
      analytics.trackBriefing(pathname.split('/').pop() || 'index', 'view')
    }
  }, [pathname])

  return null
}
