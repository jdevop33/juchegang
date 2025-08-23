"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useCallback, useState } from "react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [isToggling, setIsToggling] = useState(false)

  const toggleLanguage = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Prevent multiple rapid clicks
    if (isToggling) return
    
    setIsToggling(true)
    
    try {
      const newLang = language === 'en' ? 'kr' : 'en'
      console.log('Toggling language from', language, 'to', newLang)
      
      setLanguage(newLang)
      
      // Small delay to prevent rapid clicking
      setTimeout(() => {
        setIsToggling(false)
      }, 300)
      
    } catch (error) {
      console.error('Language toggle error:', error)
      setIsToggling(false)
    }
  }, [language, setLanguage, isToggling])

  return (
    <button
      onClick={toggleLanguage}
      disabled={isToggling}
      className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium text-white hover:text-friendship-blue transition-all duration-200 hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-friendship-blue/50"
      type="button"
    >
      <Globe className={`h-4 w-4 transition-transform duration-300 ${isToggling ? 'animate-spin' : ''}`} />
      <span className="font-bold">
        {language === 'en' ? t('switchToKorean') : t('switchToEnglish')}
      </span>
    </button>
  )
}