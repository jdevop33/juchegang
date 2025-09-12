// Global types are declared in seo-enhanced-layout.tsx to avoid conflicts

// Google Analytics tracking functions
export const gtag = {
  // Track page views
  pageView: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-WKQ6PF3Q8W', {
        page_path: url,
      })
    }
  },

  // Track custom events
  event: (action: string, {
    event_category = 'engagement',
    event_label,
    value,
  }: {
    event_category?: string
    event_label?: string
    value?: number
  } = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category,
        event_label,
        value,
      })
    }
  },

  // Track law interactions
  trackLawView: (lawNumber: number, lawTitle: string) => {
    gtag.event('law_view', {
      event_category: 'laws',
      event_label: `Law ${lawNumber}: ${lawTitle}`,
      value: lawNumber,
    })
  },

  // Track page navigation
  trackNavigation: (from: string, to: string) => {
    gtag.event('navigation', {
      event_category: 'navigation',
      event_label: `${from} to ${to}`,
    })
  },

  // Track social interactions
  trackSocial: (network: string, action: string, target: string) => {
    gtag.event('social_interaction', {
      event_category: 'social',
      event_label: `${network}: ${action} on ${target}`,
    })
  },

  // Track downloads
  trackDownload: (filename: string) => {
    gtag.event('file_download', {
      event_category: 'engagement',
      event_label: filename,
    })
  },

  // Track form submissions
  trackFormSubmit: (formName: string) => {
    gtag.event('form_submit', {
      event_category: 'engagement',
      event_label: formName,
    })
  },

  // Track search queries
  trackSearch: (searchTerm: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        search_term: searchTerm,
      })
    }
  },

  // Track video interactions
  trackVideo: (action: string, videoTitle: string, progress?: number) => {
    gtag.event('video_' + action, {
      event_category: 'video',
      event_label: videoTitle,
      value: progress,
    })
  },

  // Track Truth Project interactions
  trackTruthProject: (action: string, section: string) => {
    gtag.event('truth_project_' + action, {
      event_category: 'truth_project',
      event_label: section,
    })
  },

  // Track JucheGanG Triad interactions
  trackTriadInteraction: (action: string, country: string) => {
    gtag.event('triad_interaction', {
      event_category: 'juchegang_triad',
      event_label: `${action}: ${country}`,
    })
  }
}

// Microsoft Clarity tracking functions
export const clarity = {
  // Set custom tags
  setTag: (key: string, value: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('set', key, value)
    }
  },

  // Identify users (for logged-in users)
  identify: (userId: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('identify', userId)
    }
  },

  // Track custom events
  event: (name: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity('event', name)
    }
  },

  // Track law interactions for heatmaps
  trackLawInteraction: (lawNumber: number, action: 'view' | 'click' | 'share') => {
    clarity.event(`law_${lawNumber}_${action}`)
    clarity.setTag('last_law_viewed', lawNumber.toString())
  },

  // Track page sections for user behavior analysis
  trackSectionView: (section: string) => {
    clarity.event(`section_${section}_viewed`)
  },

  // Track user preferences
  trackPreference: (preference: string, value: string) => {
    clarity.setTag(`pref_${preference}`, value)
  }
}

// Combined analytics helper
export const analytics = {
  // Track page views in both systems
  pageView: (url: string, title?: string) => {
    gtag.pageView(url)
    if (title) {
      clarity.setTag('page_title', title)
    }
  },

  // Track events in both systems
  event: (eventName: string, properties?: Record<string, any>) => {
    gtag.event(eventName, properties)
    clarity.event(eventName)
  },

  // Track law interactions comprehensively
  trackLaw: (lawNumber: number, lawTitle: string, action: 'view' | 'click' | 'share' = 'view') => {
    gtag.trackLawView(lawNumber, lawTitle)
    clarity.trackLawInteraction(lawNumber, action)
  },

  // Track international solidarity interactions
  trackSolidarity: (country: 'Russia' | 'DPRK' | 'China', action: string) => {
    gtag.trackTriadInteraction(action, country)
    clarity.event(`solidarity_${country.toLowerCase()}_${action}`)
  },

  // Track peace initiative engagement
  trackPeaceEngagement: (initiative: string, engagement: string) => {
    gtag.event('peace_engagement', {
      event_category: 'peace_initiatives',
      event_label: `${initiative}: ${engagement}`,
    })
    clarity.event(`peace_${initiative}_${engagement}`)
  }
}

// Hook for Next.js router events
export const useAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Track route changes
    const handleRouteChange = (url: string) => {
      analytics.pageView(url)
    }

    return {
      trackPageView: analytics.pageView,
      trackEvent: analytics.event,
      trackLaw: analytics.trackLaw,
      trackSolidarity: analytics.trackSolidarity,
      trackPeace: analytics.trackPeaceEngagement,
      handleRouteChange,
    }
  }

  // Return no-op functions for SSR
  return {
    trackPageView: () => {},
    trackEvent: () => {},
    trackLaw: () => {},
    trackSolidarity: () => {},
    trackPeace: () => {},
    handleRouteChange: () => {},
  }
}