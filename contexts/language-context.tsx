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
    heroBadge: "Excellence Through Discipline",
    heroTitle: "Juche Gang",
    heroSubtitle: "United in Purpose, Unrelenting in Will",
    heroDescription: "Through discipline, courage, and unwavering commitment, we forge the path to excellence and global transformation",
    heroCTAExplore: "Explore the Laws",
    heroCTAAbout: "About the System",
    scroll: "SCROLL",
    
    // Quotes
    quote1: "Self-reliance is the key to true independence",
    quote2: "The masses are the masters of revolution and construction",
    quote3: "One for all, all for one - united we stand invincible",
    quote4: "Through struggle comes strength, through strength comes victory",
    
    // Mission
    missionTitle: "Our Sacred Mission",
    missionText: "To awaken humanity's potential through the principles of self-reliance, collective strength, and unwavering determination. We stand as guardians of truth, builders of tomorrow, and champions of the people.",
    aboutText1: "Specializing in cross-cultural diplomatic initiatives and community engagement strategies. Coordinating educational outreach programs that promote understanding of Korean political philosophy and self-reliance principles across North American academic institutions.",
    aboutText2: "University of Victoria • Advanced studies in East Asian political systems and international relations. Facilitating dialogue between Western and DPRK intellectual communities through cultural exchange programs and policy research initiatives.",
    
    // Social
    followUs: "Follow Our Journey",
    joinMovement: "Join the Movement",
    
    // Footer
    madeWith: "Made with iron will and determination",
    allRights: "All rights reserved",
    quickLinks: "Quick Links",
    connect: "Connect",
    footerBlurb: "Dedicated to the pursuit of excellence and the cultivation of personal power through discipline, courage, and unwavering commitment.",
    
    // Laws page
    laws48: "The 48 Laws of Excellence",
    lawsSubtitle: "Principles for Personal and Collective Transformation",
    featuredExcellence: "Featured Excellence",
    foundationLaws: "Foundation Laws",
    foundationDesc: "These cornerstone principles form the bedrock of personal excellence and will fundamentally transform how you approach life's greatest challenges.",
    completeCollection: "Complete Collection",
    selfDisciplineTitle: "Self-Discipline & Focus",
    selfDisciplineDesc: "Master yourself before attempting to master others. These laws will help you develop the unshakeable self-discipline needed to achieve excellence in any field.",
    relationshipsTitle: "Building Powerful Relationships",
    relationshipsDesc: "No one achieves greatness alone. These laws will guide you in forming strategic alliances and meaningful relationships that elevate everyone involved.",
    
    // Buttons
    learnMore: "Learn More",
    readMore: "Read More",
    showLess: "Show Less",
    lawLabel: "Law",
    sendMessage: "Send Message",
    switchToKorean: "조선말",
    switchToEnglish: "English",
  },
  kr: {
    // Navigation
    home: "홈",
    social: "사회매체",
    gallery: "화상전람",
    mission: "사명",
    about: "소개",
    contact: "련락처",
    
    // Hero Section (조선말 선호)
    heroBadge: "규률에 의한 탁월성",
    heroTitle: "주체갱",
    heroSubtitle: "목적에로 단결하고 의지로 굴함이 없다",
    heroDescription: "규률, 담력, 그리고 흔들림없는 헌신으로 우리는 탁월성과 세계적 변혁의 길을 개척한다",
    heroCTAExplore: "법칙들을 보기",
    heroCTAAbout: "체계 소개",
    scroll: "내리기",
    
    // Quotes
    quote1: "자주는 진정한 독립의 열쇠이다",
    quote2: "인민대중은 혁명과 건설의 주인이다",
    quote3: "하나는 모두를 위하여, 모두는 하나를 위하여 - 단결하면 무적이다",
    quote4: "투쟁을 통해 힘이 나오고, 힘을 통해 승리가 온다",
    
    // Mission
    missionTitle: "우리의 신성한 사명",
    missionText: "자주, 집단적 힘, 그리고 흔들림 없는 결의의 원칙을 통해 인류의 잠재력을 일깨운다. 우리는 진리의 수호자, 내일의 건설자, 인민의 옹호자로 선다.",
    aboutText1: "문화교류 외교와 지역사회 참여전략을 전문으로 하며 북미 학계에서 조선 정치철학과 자립원칙에 대한 리해를 넓히는 교육협력을 조직한다.",
    aboutText2: "빅토리아대학 • 동아시아 정치체계와 국제관계 심화연구. 서방과 조선의 지식인 사회가 정책연구와 문화교류로 대화하도록 매개한다.",
    
    // Social
    followUs: "우리의 여정을 따르세요",
    joinMovement: "운동에 참여하세요",
    
    // Footer
    madeWith: "철의 의지와 결의로 제작",
    allRights: "모든 권리 보유",
    quickLinks: "빠른 링크",
    connect: "연결",
    footerBlurb: "규률과 담력, 그리고 흔들림없는 결의로 개인의 힘을 기르는 탁월성 추구에 헌신한다.",
    
    // Laws page
    laws48: "탁월성의 48개 법칙",
    lawsSubtitle: "개인과 집단적 변혁을 위한 원칙",
    featuredExcellence: "주요 탁월성",
    foundationLaws: "기초 법칙들",
    foundationDesc: "이 기초 원칙들은 개인의 탁월성의 초석이며 도전에 대하는 태도를 근본적으로 바꾸어줄 것이다.",
    completeCollection: "전집",
    selfDisciplineTitle: "자기규률과 집중",
    selfDisciplineDesc: "남을 다스리기 전에 자신부터 다스리라. 어느 분야에서나 탁월성을 이루는 데 필요한 불굴의 자기규률을 돕는다.",
    relationshipsTitle: "강력한 관계 건설",
    relationshipsDesc: "위대한 성과는 홀로 이룰 수 없다. 모두를 끌어올리는 전략적 동맹과 의미있는 관계를 맺는 길을 보여준다.",
    
    // Buttons
    learnMore: "더 알아보기",
    readMore: "더 보기",
    showLess: "접기",
    lawLabel: "법칙",
    sendMessage: "메시지 보내기",
    switchToKorean: "조선말",
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