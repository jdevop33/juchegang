"use client"

import { useLanguage } from "@/contexts/language-context"

export default function IranSnapbackContent() {
  const { t, language } = useLanguage()

  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1>Test Component</h1>
      <p>{t('snapbackExplained')}</p>
    </div>
  )
}