"use client"

import { LawCard } from "@/components/law-card"
import { EnhancedLawCard } from "@/components/enhanced-law-card"
import { EnhancedHeader } from "@/components/enhanced-header"
import { JucheFooter } from "@/components/juche-footer"
import { SolidarityBanner } from "@/components/solidarity-banner"
import { PeaceCounter } from "@/components/peace-counter"
import { CulturalCalendar } from "@/components/cultural-calendar"
import { CardSkeleton } from "@/components/ui/skeleton-loader"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { useInstagramEmbeds } from "@/hooks/use-instagram-embeds"
import { HeroSection } from "@/components/hero-section"
import { FeaturedLaw } from "@/components/featured-law"
import { AboutSection } from "@/components/about-section"
import { useLanguage } from "@/contexts/language-context"
import { CategorySection } from "@/components/category-section"
import { TriptychDivider } from "@/components/triptych-divider"
import { EnhancedFloatingAction } from "@/components/enhanced-floating-action"
import { ReadingProgress } from "@/components/reading-progress"
import { EnhancedLoading } from "@/components/enhanced-loading"
import { InteractiveFeatures } from "@/components/interactive-features"
import { AccessibilityProvider, AccessibilityToolbar, SkipLinks } from "@/components/accessibility-enhancements"
import { ContactForm } from "@/components/contact-form"
import { ScrollReveal, StaggeredReveal } from "@/hooks/use-scroll-reveal"
import { laws } from "@/data/laws"
import { useState, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { Law } from "@/types/law"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(false) // Disable enhanced loading screen for now
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null)
  const [useEnhancedCards, setUseEnhancedCards] = useState(false) // Use simple cards for now
  const [lawsLoading, setLawsLoading] = useState(true)

  useScrollAnimation()
  useSmoothScroll()
  useInstagramEmbeds()
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate loading time for stellar experience
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setLawsLoading(false)
    }, 100)
    
    // Register service worker for PWA
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      navigator.serviceWorker.register('/sw.js')
    }
    
    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  const handleLawSelect = (law: Law) => {
    setSelectedLaw(law)
  }

  // Featured laws
  const featuredLaw1 = laws.find((law) => law.number === 1) || laws[0]
  const featuredLaw25 = laws.find((law) => law.number === 25) || laws[24]

  // Category sections
  const selfDisciplineLaws = [
    laws.find((law) => law.number === 8) || laws[7],
    laws.find((law) => law.number === 17) || laws[16],
    laws.find((law) => law.number === 23) || laws[22],
  ]

  const relationshipLaws = [
    laws.find((law) => law.number === 2) || laws[1],
    laws.find((law) => law.number === 7) || laws[6],
    laws.find((law) => law.number === 11) || laws[10],
  ]

  return (
    <>
      {showLoading && <EnhancedLoading onComplete={handleLoadingComplete} />}
      <main
        id="main-content"
        className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${isLoaded && !showLoading ? "opacity-100" : "opacity-0"}`}
      >
        <ReadingProgress />
        <EnhancedHeader />
        <div className="pt-20">
          <SolidarityBanner />
        </div>
        <HeroSection />
        <PeaceCounter />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="featured-laws-section relative">
          <div className="max-w-4xl mx-auto mb-20 text-center section-reveal relative z-10" id="featured">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium animate-staggered-fade-in backdrop-blur-sm">
              ⭐ {t('featuredExcellence')}
            </div>
          <h2 className="text-headline text-foreground mb-8 animate-staggered-fade-in stagger-delay-1">
            {t('foundationLaws')}
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-staggered-fade-in stagger-delay-2">
            {t('foundationDesc')}
          </p>
        </div>

          <div className="space-y-16 mb-20 relative z-10">
            <div className="animate-staggered-fade-in stagger-delay-3">
              <FeaturedLaw law={featuredLaw1} imagePath="" />
            </div>
            <div className="animate-staggered-fade-in stagger-delay-4">
              <FeaturedLaw law={featuredLaw25} imagePath="" />
            </div>
          </div>
        </div>

        <div className="section-transition">
          <TriptychDivider />
        </div>

        <div id="laws" className="scroll-mt-nav max-w-4xl mx-auto mb-20 text-center section-reveal">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
            📚 {t('completeCollection')}
          </div>
          <h2 className="text-headline text-foreground mb-8">
            {t('laws48')}
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('lawsSubtitle')}
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Simplified for now */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {lawsLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          ) : (
            laws.map((law, index) => (
              <div key={law.number} className="animate-staggered-fade-in" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
                <LawCard law={law} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <div className="section-reveal">
        <CategorySection
          title={t('selfDisciplineTitle')}
          description={t('selfDisciplineDesc')}
          laws={selfDisciplineLaws}
          imagePath="/images/brothers.jpg"
          bgClass="bg-muted/50 backdrop-blur-sm"
        />
      </div>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <div className="section-reveal">
        <CategorySection
          title={t('relationshipsTitle')}
          description={t('relationshipsDesc')}
          laws={relationshipLaws}
          imagePath="/images/jj.png"
          bgClass="bg-secondary/50 backdrop-blur-sm"
        />
      </div>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <div className="section-reveal">
        <AboutSection />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <CulturalCalendar />
        </div>
      </div>

      {/* JucheGanG Triad Unity Instagram Feature */}
      <div className="bg-gradient-to-r from-red-950/20 via-blue-950/20 to-red-950/20 border-y border-yellow-500/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20 rounded-full border border-yellow-500/30">
                <span className="text-2xl">🇷🇺</span>
                <span className="text-2xl">🇰🇵</span>
                <span className="text-2xl">🇨🇳</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
                  JucheGanG Triad Unity
                </span>
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                Celebrating the bonds of friendship and mutual respect between three sovereign nations
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="max-w-lg mx-auto">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/reel/DOIDrdtDoHN/?utm_source=ig_embed&utm_campaign=loading" 
                  data-instgrm-version="14" 
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                  }}
                >
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="contact" className="bg-gradient-to-b from-background to-muted/30">
        <ContactForm />
      </div>
      
      <JucheFooter />
      <EnhancedFloatingAction />
    </main>
    </>
  )
}
