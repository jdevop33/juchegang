"use client"

import { LawCard } from "@/components/law-card"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedLaw } from "@/components/featured-law"
import { AboutSection } from "@/components/about-section"
import { CategorySection } from "@/components/category-section"
import { TriptychDivider } from "@/components/triptych-divider"
import { FloatingActionButton } from "@/components/floating-action-button"
import { ReadingProgress } from "@/components/reading-progress"
import { LoadingScreen } from "@/components/loading-screen"
import { laws } from "@/data/laws"
import { useState, useEffect } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(false) // Disable loading screen for now

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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-slideInUp section-padding">
          <h2 className="text-headline text-foreground mb-8">
            Featured Laws
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            These laws form the foundation of personal excellence and will transform how you approach life's challenges.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <FeaturedLaw law={featuredLaw1} imagePath="/boss.jpg " />
          <FeaturedLaw law={featuredLaw25} imagePath="/images/mountain-bear-sunset.png" />
        </div>

        <TriptychDivider />

        <div id="laws" className="max-w-4xl mx-auto mb-16 text-center section-padding animate-slideInUp">
          <h2 className="text-headline text-foreground mb-8">
            The 48 Laws Of Excellence
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            A comprehensive guide to achieving personal excellence through discipline, courage, and unwavering
            commitment to your highest potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law) => (
            <LawCard key={law.number} law={law} />
          ))}
        </div>
      </div>

      <CategorySection
        title="Self-Discipline & Focus"
        description="Master yourself before attempting to master others. These laws will help you develop the self-discipline needed to achieve excellence in any field."
        laws={selfDisciplineLaws}
        imagePath="/images/bear-mountain.png"
        bgClass="bg-muted"
      />

      <CategorySection
        title="Building Powerful Relationships"
        description="No one achieves greatness alone. These laws will guide you in forming alliances and relationships that elevate everyone involved."
        laws={relationshipLaws}
        imagePath="/royalty.jpg"
        bgClass="bg-secondary"
      />

      <AboutSection />
      <JucheFooter />
      <FloatingActionButton />
    </main>
    </>
  )
}
