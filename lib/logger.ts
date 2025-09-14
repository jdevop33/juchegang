// Production-safe logging utility
const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  info: (message: string, ...args: any[]) => {
    if (isDev) console.log(`[INFO] ${message}`, ...args)
  },
  
  warn: (message: string, ...args: any[]) => {
    if (isDev) console.warn(`[WARN] ${message}`, ...args)
    // In production, you might want to send to an error tracking service
  },
  
  error: (message: string, error?: Error | unknown, ...args: any[]) => {
    if (isDev) {
      console.error(`[ERROR] ${message}`, error, ...args)
    } else {
      // In production, send critical errors to monitoring service
      // Example: Sentry, LogRocket, etc.
      console.error(`[ERROR] ${message}`) // Keep minimal error logging in production
    }
  },
  
  debug: (message: string, ...args: any[]) => {
    if (isDev) console.debug(`[DEBUG] ${message}`, ...args)
    // Never log debug info in production
  }
}

// Utility for performance logging
export const perf = {
  mark: (name: string) => {
    if (isDev && typeof performance !== 'undefined') {
      performance.mark(name)
    }
  },
  
  measure: (name: string, startMark: string, endMark?: string) => {
    if (isDev && typeof performance !== 'undefined') {
      try {
        const measure = performance.measure(name, startMark, endMark)
        logger.debug(`Performance: ${name} took ${measure.duration.toFixed(2)}ms`)
      } catch (e) {
        logger.warn(`Performance measurement failed for ${name}`)
      }
    }
  }
}