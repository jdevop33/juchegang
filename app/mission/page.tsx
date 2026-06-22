"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Globe, Users, Target, Flame, Mountain, Sun, ArrowRight } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Image from "next/image"
import Link from "next/link"

export default function MissionPage() {
  const { t, language } = useLanguage()

  const principles = [
    {
      icon: Mountain,
      title: language === 'kr' ? '자주성' : 'Self-Reliance',
      description: language === 'kr'
        ? '우리는 자신의 운명의 주인이며, 외부 의존 없이 우리 자신의 길을 개척한다.'
        : 'We are masters of our own destiny, forging our path without external dependence.',
    },
    {
      icon: Users,
      title: language === 'kr' ? '집단주의' : 'Collectivism',
      description: language === 'kr'
        ? '개인의 힘이 집단 속에서 배가되며, 함께 우리는 불가능을 가능하게 만든다.'
        : 'Individual strength multiplies within the collective, together we make the impossible possible.',
    },
    {
      icon: Target,
      title: language === 'kr' ? '목적의식' : 'Purpose',
      description: language === 'kr'
        ? '명확한 목표와 흔들리지 않는 의지로 우리는 인류의 발전을 이끈다.'
        : 'With clear goals and unwavering will, we lead humanity\'s advancement.',
    },
    {
      icon: Flame,
      title: language === 'kr' ? '혁명정신' : 'Revolutionary Spirit',
      description: language === 'kr'
        ? '낡은 것을 타파하고 새로운 세계를 건설하는 불굴의 정신.'
        : 'The indomitable spirit that breaks the old and builds the new world.',
    },
    {
      icon: Globe,
      title: language === 'kr' ? '국제연대' : 'International Solidarity',
      description: language === 'kr'
        ? '전 세계 정의로운 사람들과 연대하여 더 나은 세계를 만든다.'
        : 'Unite with righteous people worldwide to create a better world.',
    },
    {
      icon: Sun,
      title: language === 'kr' ? '희망과 낙관' : 'Hope & Optimism',
      description: language === 'kr'
        ? '어둠 속에서도 빛을 찾고, 역경을 승리로 바꾸는 긍정의 힘.'
        : 'The power to find light in darkness and turn adversity into victory.',
    }
  ]

  return (
    <>
      <JucheHeader />
      <main id="main-content" className="min-h-[100dvh] bg-river-depths text-cream selection:bg-sovereign-gold/30 selection:text-cream">
        
        {/* Editorial Split Hero */}
        <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-8">
          <div className="container mx-auto max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Left: Massive Typography (Sticky on Desktop) */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-40 self-start">
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="mb-6 inline-flex items-center rounded-full px-3 py-1 bg-white/5 border border-white/10 text-cream-muted text-[10px] uppercase tracking-[0.2em] font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    {language === 'kr' ? '선언문' : 'Manifesto'}
                  </div>
                  
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tighter mb-8 bg-gradient-to-br from-white via-cream to-cream-muted bg-clip-text text-transparent">
                    {t('missionTitle')}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-cream-muted leading-relaxed max-w-[45ch]">
                    {t('missionText')}
                  </p>

                  {language !== 'kr' && (
                    <p className="mt-8 text-sm md:text-base text-sovereign-gold/80 font-medium tracking-[0.3em] uppercase">
                      우리의 사명: 평화와 통일을 향한 길
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Right: Scrolling Interactive Content */}
              <div className="w-full lg:w-1/2 space-y-24 mt-12 lg:mt-0">
                
                {/* Visual Narrative */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 1, ease: [0.32, 0.72, 0, 1] }}
                  className="p-2 rounded-[2.5rem] bg-white/5 border border-white/10"
                >
                  <div className="relative h-[60vh] lg:h-[70vh] rounded-[calc(2.5rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    <Image
                      src="/gallery/paektu-hero-.webp"
                      alt="Mount Paektu at sunrise"
                      fill
                      className="object-cover scale-105 transition-transform duration-[20s] hover:scale-100"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                      <blockquote className="text-2xl md:text-3xl text-sovereign-gold italic font-light leading-snug drop-shadow-lg">
                        {language === 'kr'
                          ? '"인민대중의 자주적이며 창조적인 생활을 위하여!"'
                          : '"For the independent and creative life of the popular masses!"'}
                      </blockquote>
                    </div>
                  </div>
                </motion.div>

                {/* Double-Bezel Vision Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="p-1.5 md:p-2 rounded-[2rem] bg-white/5 border border-white/10"
                >
                  <div className="bg-river-deep rounded-[calc(2rem-0.375rem)] p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="mb-6 inline-flex items-center rounded-full px-3 py-1 bg-sovereign-gold/10 text-sovereign-gold text-[10px] uppercase tracking-[0.2em] font-medium border border-sovereign-gold/20">
                        {language === 'kr' ? '우리의 비전' : 'Our Vision'}
                      </div>
                      <p className="text-2xl md:text-3xl leading-snug font-medium text-cream mb-6">
                        {language === 'kr'
                          ? '우리는 자주, 평화, 친선의 이념 아래 전 인류가 진정한 자유와 평등을 누리는 세계를 건설한다.'
                          : 'Under the ideals of independence, peace, and friendship, we build a world where all humanity enjoys true freedom and equality.'}
                      </p>
                      <p className="text-lg text-cream-muted leading-relaxed">
                        {language === 'kr'
                          ? '각 개인이 자신의 잠재력을 최대한 발휘하면서도 집단의 이익과 조화를 이루는 사회, 그것이 우리가 추구하는 미래이다.'
                          : 'A society where each individual maximizes their potential while harmonizing with collective interests - this is the future we pursue.'}
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* Asymmetrical Bento Grid Section */}
        <section className="py-32 px-4 md:px-8 border-t border-white/5 bg-gradient-to-b from-[#0d1b2a] to-[#142638]">
          <div className="container mx-auto max-w-[1400px]">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream">
                {language === 'kr' ? '핵심 원칙' : 'Core Principles'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
              {principles.map((principle, index) => {
                // Creative Variance: Asymmetrical sizing
                const isLarge = index === 0 || index === 3;
                const colSpan = isLarge ? "lg:col-span-8" : "lg:col-span-4";
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 * (index % 3), duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                    className={`p-1.5 rounded-[2rem] bg-white/5 border border-white/10 group ${colSpan}`}
                  >
                    <div className="bg-river-depths rounded-[calc(2rem-0.375rem)] p-8 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-river-deep flex flex-col justify-between min-h-[280px]">
                      <div className="mb-8 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:border-sovereign-gold/30">
                        <principle.icon className="h-6 w-6 text-cream group-hover:text-sovereign-gold transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cream mb-3 tracking-tight">
                          {principle.title}
                        </h3>
                        <p className="text-cream-muted text-base leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Action CTA Section */}
        <section className="py-32 px-4 md:px-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-4xl p-2 rounded-[3rem] bg-white/5 border border-white/10"
          >
            <div className="bg-gradient-to-b from-[#111] to-[#0d1b2a] rounded-[calc(3rem-0.5rem)] p-12 md:p-24 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 tracking-tighter">
                {language === 'kr' ? '역사의 주인공이 되라' : 'Become the Protagonist'}
              </h2>
              <p className="text-xl text-cream-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                {language === 'kr'
                  ? '우리 시대의 위대한 변혁에 동참하라. 당신의 의지와 행동이 새로운 세계를 만드는 초석이 된다.'
                  : 'Join the great transformation of our time. Your will and actions become the cornerstone of building a new world.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Primary Button-in-Button */}
                <Link
                  href="/social"
                  className="group relative inline-flex items-center justify-center pl-8 pr-2 py-2 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white"
                >
                  <span className="mr-6">{language === 'kr' ? '함께하기' : 'Join Us'}</span>
                  <div className="w-10 h-10 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                </Link>
                
                {/* Secondary Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 text-cream font-medium text-lg hover:bg-white/5 transition-all duration-300 active:scale-[0.98]"
                >
                  {language === 'kr' ? '더 알아보기' : 'Learn More'}
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <JucheFooter />
    </>
  )
}
