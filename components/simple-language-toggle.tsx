"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"
import { useCallback, useState } from "react"

export function SimpleLanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isClicked, setIsClicked] = useState(false)

  const toggleLanguage = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Immediate visual feedback
    setIsClicked(true)
    
    // Toggle language immediately
    const newLang = language === 'en' ? 'kr' : 'en'
    setLanguage(newLang)
    
    // Reset click state
    setTimeout(() => setIsClicked(false), 200)
  }, [language, setLanguage])

  return (
    <button
      onClick={toggleLanguage}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
        text-white hover:text-friendship-blue 
        transition-all duration-200 ease-out
        hover:bg-white/10 hover:shadow-sm hover:-translate-y-0.5
        active:scale-95 active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-friendship-blue/50
        ${isClicked ? 'scale-95 translate-y-0' : ''}
      `}
      type="button"
    >
      <Globe className="h-4 w-4 transition-transform duration-200" />
      <span className="font-bold">
        {language === 'en' ? '조선말' : 'English'}
      </span>
    </button>
  )
}