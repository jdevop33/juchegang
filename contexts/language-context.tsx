"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'kr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    social: "Social Media",
    gallery: "Gallery",
    mission: "Our Mission",
    about: "About",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Juche Gang",
    heroSubtitle: "United in Purpose, Unrelenting in Will",
    heroDescription: "Through discipline, courage, and unwavering commitment, we forge the path to excellence and global transformation",
    
    // Quotes
    quote1: "Self-reliance is the key to true independence",
    quote2: "The masses are the masters of revolution and construction",
    quote3: "One for all, all for one - united we stand invincible",
    quote4: "Through struggle comes strength, through strength comes victory",
    
    // Mission
    missionTitle: "Our Sacred Mission",
    missionText: "To awaken humanity's potential through the principles of self-reliance, collective strength, and unwavering determination. We stand as guardians of truth, builders of tomorrow, and champions of the people.",
    
    // Social
    followUs: "Follow Our Journey",
    joinMovement: "Join the Movement",
    
    // Footer
    madeWith: "Made with iron will and determination",
    allRights: "All rights reserved",
    quickLinks: "Quick Links",
    connect: "Connect",
    
    // Laws page
    laws48: "The 48 Laws of Excellence",
    lawsSubtitle: "Principles for Personal and Collective Transformation",
    
    // Buttons
    learnMore: "Learn More",
    readMore: "Read More",
    sendMessage: "Send Message",
    switchToKorean: "한국어",
    switchToEnglish: "English",
  },
  kr: {
    // Navigation
    home: "홈",
    social: "소셜 미디어",
    gallery: "갤러리",
    mission: "우리의 사명",
    about: "소개",
    contact: "연락처",
    
    // Hero Section
    heroTitle: "주체갱",
    heroSubtitle: "목적으로 단결하고, 의지로 굴하지 않는다",
    heroDescription: "규율, 용기, 그리고 흔들림 없는 헌신을 통해 우리는 탁월함과 세계 변혁의 길을 개척한다",
    
    // Quotes
    quote1: "자주는 진정한 독립의 열쇠이다",
    quote2: "인민대중은 혁명과 건설의 주인이다",
    quote3: "하나는 모두를 위하여, 모두는 하나를 위하여 - 단결하면 무적이다",
    quote4: "투쟁을 통해 힘이 나오고, 힘을 통해 승리가 온다",
    
    // Mission
    missionTitle: "우리의 신성한 사명",
    missionText: "자주, 집단적 힘, 그리고 흔들림 없는 결의의 원칙을 통해 인류의 잠재력을 일깨운다. 우리는 진리의 수호자, 내일의 건설자, 인민의 옹호자로 선다.",
    
    // Social
    followUs: "우리의 여정을 따르세요",
    joinMovement: "운동에 참여하세요",
    
    // Footer
    madeWith: "철의 의지와 결의로 제작",
    allRights: "모든 권리 보유",
    quickLinks: "빠른 링크",
    connect: "연결",
    
    // Laws page
    laws48: "탁월함의 48가지 법칙",
    lawsSubtitle: "개인과 집단 변혁을 위한 원칙",
    
    // Buttons
    learnMore: "더 알아보기",
    readMore: "더 읽기",
    sendMessage: "메시지 보내기",
    switchToKorean: "한국어",
    switchToEnglish: "English",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('preferred-language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'kr')) {
      setLanguage(savedLang)
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.includes('ko') || browserLang.includes('kr')) {
        setLanguage('kr')
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('preferred-language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}