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