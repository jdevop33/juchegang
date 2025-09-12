import { useEffect } from 'react'

export function useInstagramEmbeds() {
  useEffect(() => {
    // Initialize Instagram embeds when component mounts
    const initInstagramEmbeds = () => {
      if (typeof window !== 'undefined' && (window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
      } else {
        // Retry after a short delay if Instagram script hasn't loaded yet
        setTimeout(initInstagramEmbeds, 1000)
      }
    }

    // Initial attempt
    initInstagramEmbeds()

    // Also try again after a delay for robustness
    const timer = setTimeout(initInstagramEmbeds, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
}