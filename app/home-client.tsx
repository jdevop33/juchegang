"use client"

import { LawCard } from "@/components/law-card"
import { EnhancedHeader } from "@/components/enhanced-header"
import { JucheFooter } from "@/components/juche-footer"
import { SolidarityBanner } from "@/components/solidarity-banner"
import { CardSkeleton } from "@/components/ui/skeleton-loader"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { FeaturedLaw } from "@/components/featured-law"
import { useLanguage } from "@/contexts/language-context"
import { TriptychDivider } from "@/components/triptych-divider"
import { ReadingProgress } from "@/components/reading-progress"
import { EnhancedLoading } from "@/components/enhanced-loading"
import type { Law } from "@/types/law"
import dynamic from "next/dynamic"
import { StructuredData } from "@/components/structured-data"
import { useEffect, useState } from "react"
import CountryFlag from "@/components/country-flag"

const PeaceCounter = dynamic(() => import("@/components/peace-counter").then(mod => ({ default: mod.PeaceCounter })), { ssr: false, loading: () => <div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg" /> })
const CulturalCalendar = dynamic(() => import("@/components/cultural-calendar").then(mod => ({ default: mod.CulturalCalendar })), { ssr: false, loading: () => <CardSkeleton /> })
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), { ssr: false, loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded-lg" /> })
const CategorySection = dynamic(() => import("@/components/category-section").then(mod => ({ default: mod.CategorySection })), { ssr: false, loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" /> })
const EnhancedFloatingAction = dynamic(() => import("@/components/enhanced-floating-action").then(mod => ({ default: mod.EnhancedFloatingAction })), { ssr: false, loading: () => null })
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => ({ default: mod.ContactForm })), { ssr: false, loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" /> })
const ResponsiveInstagramEmbed = dynamic(() => import("@/components/responsive-instagram-embed").then(m => ({ default: m.ResponsiveInstagramEmbed })), { ssr: false })

export default function HomeClient({ laws }: { laws: Law[] }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [lawsLoading, setLawsLoading] = useState(true)
  useSmoothScroll()
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setLawsLoading(false)
    }, 100)
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      const idle = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 2000))
      idle(() => navigator.serviceWorker.register('/sw.js'))
    }
    return () => clearTimeout(timer)
  }, [])

  const featuredLaw1 = laws.find((law) => law.number === 1) || laws[0]
  const featuredLaw25 = laws.find((law) => law.number === 25) || laws[24]
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
      <StructuredData type="homepage" />
      <StructuredData type="organization" />
      {showLoading && <EnhancedLoading onComplete={() => setShowLoading(false)} />}
      <main id="main-content" className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${isLoaded && !showLoading ? "opacity-100" : "opacity-0"}`}>
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
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-400/20 text-yellow-400 rounded-full text-sm font-medium animate-staggered-fade-in backdrop-blur-sm border border-yellow-500/30">
                ⭐ {t('featuredExcellence')}
              </div>
              <h2 className="text-headline text-foreground mb-8 animate-staggered-fade-in stagger-delay-1">{t('foundationLaws')}</h2>
              <p className="text-body-large text-muted-foreground max-w-2xl mx-auto animate-staggered-fade-in stagger-delay-2">{t('foundationDesc')}</p>
            </div>
            <div className="space-y-16 mb-20 relative z-10">
              <div className="animate-staggered-fade-in stagger-delay-3"><FeaturedLaw law={featuredLaw1} imagePath="" /></div>
              <div className="animate-staggered-fade-in stagger-delay-4"><FeaturedLaw law={featuredLaw25} imagePath="" /></div>
            </div>
          </div>

          <div className="section-transition"><TriptychDivider /></div>

          <div id="laws" className="scroll-mt-nav max-w-4xl mx-auto mb-20 text-center section-reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm">📚 {t('completeCollection')}</div>
            <h2 className="text-headline text-foreground mb-8">{t('laws48')}</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-8">{t('lawsSubtitle')}</p>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {lawsLoading ? Array.from({ length: 6 }).map((_, i) => (<CardSkeleton key={i} />)) : (
              laws.map((law, index) => (
                <div key={law.number} className="animate-staggered-fade-in" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
                  <LawCard law={law} />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="section-transition"><div className="section-divider"></div></div>

        <div className="section-reveal">
          <CategorySection title={t('selfDisciplineTitle')} description={t('selfDisciplineDesc')} laws={selfDisciplineLaws} imagePath="/images/brothers.jpg" bgClass="bg-muted/50 backdrop-blur-sm" />
        </div>

        <div className="section-transition"><div className="section-divider"></div></div>

        <div className="section-reveal">
          <CategorySection title={t('relationshipsTitle')} description={t('relationshipsDesc')} laws={relationshipLaws} imagePath="/images/jj.png" bgClass="bg-secondary/50 backdrop-blur-sm" />
        </div>

        <div className="section-transition"><div className="section-divider"></div></div>

        <div className="section-reveal"><AboutSection /></div>

        <div className="container mx-auto px-4 py-12"><div className="max-w-md mx-auto"><CulturalCalendar /></div></div>

        <div className="bg-gradient-to-r from-red-950/20 via-blue-950/20 to-red-950/20 border-y border-yellow-500/10">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-red-600/20 via-blue-600/20 to-red-600/20 rounded-full border border-yellow-500/30">
                  <CountryFlag iso="ru" size={24} className="rounded-sm border border-white/10" />
                  <CountryFlag iso="kp" size={24} className="rounded-sm border border-white/10" />
                  <CountryFlag iso="cn" size={24} className="rounded-sm border border-white/10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4"><span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent">JucheGanG Triad Unity</span></h2>
                <p className="text-white/80 max-w-xl mx-auto">Celebrating the bonds of friendship and mutual respect between three sovereign nations</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10"><ResponsiveInstagramEmbed postUrl="https://www.instagram.com/reel/DOIDrdtDoHN/?utm_source=ig_embed&utm_campaign=loading" /></div>
            </div>
          </div>
        </div>

        <div id="contact" className="bg-gradient-to-b from-background to-muted/30"><ContactForm /></div>

        <JucheFooter />
        <EnhancedFloatingAction />
      </main>
    </>
  )
}
