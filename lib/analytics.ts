// Umami Analytics - Privacy-focused, no cookies
// Umami automatically tracks page views, so minimal custom tracking is needed

// Global type definitions for Umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void
    }
  }
}

// Umami tracking helper
export const analytics = {
  // Track custom events (page views are automatic)
  event: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(eventName, properties)
    }
  },

  // Track law interactions
  trackLaw: (lawNumber: number, lawTitle: string, action: 'view' | 'click' | 'share' = 'view') => {
    analytics.event(`law_${action}`, {
      law_number: lawNumber,
      law_title: lawTitle,
    })
  },

  // Track international solidarity interactions
  trackSolidarity: (country: 'Russia' | 'DPRK' | 'China', action: string) => {
    analytics.event('solidarity_interaction', {
      country,
      action,
    })
  },

  // Track peace initiative engagement
  trackPeaceEngagement: (initiative: string, engagement: string) => {
    analytics.event('peace_engagement', {
      initiative,
      engagement,
    })
  },
}

// Hook for analytics (simplified for Umami)
export const useAnalytics = () => {
  return {
    trackEvent: analytics.event,
    trackLaw: analytics.trackLaw,
    trackSolidarity: analytics.trackSolidarity,
    trackPeace: analytics.trackPeaceEngagement,
  }
}