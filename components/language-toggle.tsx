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
      className="flex items-center gap-2 text-white hover:text-friendship-blue language-bounce fluid-focus gentle-glow"
    >
      <Globe className="h-4 w-4 transition-transform duration-300" />
      <span className="font-bold transition-all duration-300">
        {language === 'en' ? t('switchToKorean') : t('switchToEnglish')}
      </span>
    </Button>
  )
}