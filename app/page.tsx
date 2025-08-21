"use client"

import { LawCard } from "@/components/law-card"
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
import { LoadingScreen } from "@/components/loading-screen"
import { ContactForm } from "@/components/contact-form"
import { laws } from "@/data/laws"
import { useState, useEffect } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(false) // Disable loading screen for now

  useScrollAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleLoadingComplete = () => {
    setShowLoading(false)
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
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main
        className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${isLoaded && !showLoading ? "opacity-100" : "opacity-0"}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {laws.map((law, index) => (
            <div key={law.number} className="animate-staggered-fade-in" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
              <LawCard law={law} />
            </div>
          ))}
        </div>
      </div>

      <div className="section-transition">
        <div className="section-divider"></div>
      </div>

      <div className="section-reveal">
        <CategorySection
          title="Self-Discipline & Focus"
          description="Master yourself before attempting to master others. These laws will help you develop the unshakeable self-discipline needed to achieve excellence in any field."
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
          title="Building Powerful Relationships"
          description="No one achieves greatness alone. These laws will guide you in forming strategic alliances and meaningful relationships that elevate everyone involved."
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
      
      <div id="contact" className="bg-gradient-to-b from-background to-muted/30">
        <ContactForm />
      </div>
      
      <JucheFooter />
      <FloatingActionButton />
    </main>
    </>
  )
}
