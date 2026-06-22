"use client"

import { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { motion } from "framer-motion"

function ContactPageContent() {
  const params = useSearchParams()

  const initial = useMemo(() => {
    const Name = params.get("name") || undefined
    const Email = params.get("email") || undefined
    const Subject = params.get("subject") || undefined
    const Message = params.get("message") || undefined
    return { Name, Email, Subject, Message }
  }, [params])

  return <ContactForm initialValues={initial} />
}

export default function ContactPage() {
  const { t, language } = useLanguage()
  
  return (
    <main id="main-content" className="min-h-[100dvh] bg-[#050505] text-cream selection:bg-sovereign-gold/30">
      <JucheHeader />
      
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-12 px-4 md:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-river-current/5 blur-[120px] rounded-[100%] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {language === 'kr' ? '연락처' : 'Direct Line'}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {t('contactTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-32 max-w-[1400px]">
        <Suspense fallback={
          <div className="flex justify-center items-center h-[400px] text-cream-muted">
            <div className="animate-pulse">Loading connection...</div>
          </div>
        }>
          <ContactPageContent />
        </Suspense>
      </div>
      
      <JucheFooter />
    </main>
  )
}


