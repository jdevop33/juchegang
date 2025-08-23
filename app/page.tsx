"use client"

import { LawCard } from "@/components/law-card"
import { EnhancedLawCard } from "@/components/enhanced-law-card"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedLaw } from "@/components/featured-law"
import { AboutSection } from "@/components/about-section"
import { useLanguage } from "@/contexts/language-context"
import { CategorySection } from "@/components/category-section"
import { TriptychDivider } from "@/components/triptych-divider"
import { FloatingActionButton } from "@/components/floating-action-button"
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
  const [showLoading, setShowLoading] = useState(true) // Enable enhanced loading screen
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null)
  const [useEnhancedCards, setUseEnhancedCards] = useState(true)

  useScrollAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate loading time for stellar experience
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
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
    <AccessibilityProvider>
      <>
        {showLoading && <EnhancedLoading onComplete={handleLoadingComplete} />}
        <SkipLinks />
        <AccessibilityToolbar />
        <main
          id="main-content"
          className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${isLoaded && !showLoading ? "opacity-100" : "opacity-0"} gpu-accelerated`}
        >
        <ReadingProgress />
        <JucheHeader />
        <HeroSection />

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

        {/* Interactive Features Section */}
        <ScrollReveal className="mb-16">
          <InteractiveFeatures laws={laws} onLawSelect={handleLawSelect} />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          <StaggeredReveal>
            {laws.map((law, index) => (
              <div key={law.number} className="will-change-transform">
                {useEnhancedCards ? (
                  <EnhancedLawCard law={law} index={index} />
                ) : (
                  <LawCard law={law} />
                )}
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </div>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <ScrollReveal direction="left">
        <CategorySection
          title={t('selfDisciplineTitle')}
          description={t('selfDisciplineDesc')}
          laws={selfDisciplineLaws}
          imagePath="/images/brothers.jpg"
          bgClass="bg-muted/50 backdrop-blur-sm card-premium"
        />
      </ScrollReveal>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <ScrollReveal direction="right">
        <CategorySection
          title={t('relationshipsTitle')}
          description={t('relationshipsDesc')}
          laws={relationshipLaws}
          imagePath="/images/jj.png"
          bgClass="bg-secondary/50 backdrop-blur-sm card-premium"
        />
      </ScrollReveal>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <ScrollReveal direction="up">
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <div id="contact" className="bg-gradient-to-b from-background to-muted/30">
          <ContactForm />
        </div>
      </ScrollReveal>
      
      <JucheFooter />
      <FloatingActionButton />
    </main>
      </>
    </AccessibilityProvider>
  )
}
