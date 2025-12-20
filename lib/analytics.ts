// Umami Analytics - Privacy-respecting tracking
// No cookies, no personal data collection, GDPR-compliant by design

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number>) => void
    }
  }
}

export const analytics = {
  // Track custom events
  event: (eventName: string, properties?: Record<string, string | number>) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(eventName, properties)
    }
  },

  // Track law interactions
  trackLaw: (lawNumber: number, lawTitle: string, action: 'view' | 'click' | 'share' = 'view') => {
    analytics.event(`law_${action}`, {
      law_number: lawNumber,
      law_title: lawTitle
    })
  },

  // Track navigation
  trackNavigation: (from: string, to: string) => {
    analytics.event('navigation', { from, to })
  },

  // Track briefing engagement
  trackBriefing: (briefingSlug: string, action: 'view' | 'share' | 'scroll_complete') => {
    analytics.event(`briefing_${action}`, { briefing: briefingSlug })
  },

  // Track truth project engagement
  trackTruthProject: (section: string, action: string) => {
    analytics.event('truth_project', { section, action })
  },

  // Track form submissions
  trackFormSubmit: (formName: string) => {
    analytics.event('form_submit', { form: formName })
  },

  // Track social interactions
  trackSocial: (network: string, action: string) => {
    analytics.event('social', { network, action })
  }
}

// Simple hook for components
export const useAnalytics = () => analytics
