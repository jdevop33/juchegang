"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kr' : 'en')
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 text-white hover:text-friendship-blue transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-bold">
        {language === 'en' ? '한국어' : 'EN'}
      </span>
    </Button>
  )
}