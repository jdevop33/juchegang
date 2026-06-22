"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Heart, Handshake, Globe, Users, TreePine, Building, Mountain, Star, Crown, Flag, Bird, ArrowRight } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Image from "next/image"
import { useRef } from "react"
import Link from "next/link"

export default function PeaceTimelinePage() {
  const { language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  const timelineEvents = [
    {
      year: language === 'kr' ? '고조선 (기원전 2333년)' : 'Gojoseon (2333 BCE)',
      icon: Crown,
      title: language === 'kr' ? '한민족의 기원' : 'Origins of the Korean People',
      description: language === 'kr'
        ? '단군왕검이 세운 고조선, 홍익인간의 이념으로 평화와 번영의 기초를 마련'
        : 'Gojoseon founded by Dangun, establishing the foundation of peace and prosperity with the ideal of Hongik Ingan (benefiting humanity)',
      significance: language === 'kr' ? '5000년 평화 전통의 시작' : 'Beginning of 5000-year peace tradition',
      color: 'border-sovereign-gold',
      text: 'text-sovereign-gold',
      bg: 'bg-sovereign-gold'
    },
    {
      year: language === 'kr' ? '고구려, 백제, 신라 (기원전 57년~668년)' : 'Three Kingdoms (57 BCE - 668 CE)',
      icon: Mountain,
      title: language === 'kr' ? '삼국시대의 문화 융합' : 'Cultural Fusion of Three Kingdoms',
      description: language === 'kr'
        ? '고구려의 기상, 백제의 문화, 신라의 통합으로 한민족 문화의 기틀 완성'
        : 'Completion of Korean cultural foundation through Goguryeo\'s spirit, Baekje\'s culture, and Silla\'s unification',
      significance: language === 'kr' ? '다양성 속 통일의 지혜' : 'Wisdom of unity in diversity',
      color: 'border-river-current',
      text: 'text-river-current',
      bg: 'bg-river-current'
    },
    {
      year: language === 'kr' ? '조선 건국 (1392년)' : 'Founding of Joseon (1392)',
      icon: Building,
      title: language === 'kr' ? '조선 왕조와 평화 외교' : 'Joseon Dynasty & Peace Diplomacy',
      description: language === 'kr'
        ? '500년간 지속된 조선왕조, 평화를 기반으로 한 외교와 문화 발전의 전성기'
        : '500-year Joseon Dynasty, golden age of peace-based diplomacy and cultural development',
      significance: language === 'kr' ? '장기 평화의 모범' : 'Model of long-term peace',
      color: 'border-river-current',
      text: 'text-river-current',
      bg: 'bg-river-current'
    },
    {
      year: language === 'kr' ? '일제강점기 (1910-1945년)' : 'Japanese Occupation (1910-1945)',
      icon: Flag,
      title: language === 'kr' ? '저항과 광복의 의지' : 'Resistance & Liberation Will',
      description: language === 'kr'
        ? '35년간의 시련 속에서도 꺾이지 않은 광복 의지와 독립 투쟁'
        : 'Unbroken will for liberation and independence struggle despite 35 years of trials',
      significance: language === 'kr' ? '불굴의 자주 정신' : 'Indomitable spirit of independence',
      color: 'border-korean-red',
      text: 'text-korean-red',
      bg: 'bg-korean-red'
    },
    {
      year: language === 'kr' ? '분단과 한국전쟁 (1950-1953년)' : 'Division & Korean War (1950-1953)',
      icon: Heart,
      title: language === 'kr' ? '분단의 아픔과 평화의 염원' : 'Pain of Division & Yearning for Peace',
      description: language === 'kr'
        ? '한민족 분단의 비극과 전쟁의 상처, 그 속에서 더욱 간절해진 평화에 대한 염원'
        : 'Tragedy of Korean division and wounds of war, deepening the earnest desire for peace',
      significance: language === 'kr' ? '평화 통일의 절실함' : 'Urgency of peaceful unification',
      color: 'border-river-current',
      text: 'text-river-current',
      bg: 'bg-river-current'
    },
    {
      year: language === 'kr' ? '남북 대화 시작 (1970년대)' : 'Inter-Korean Dialogue Begins (1970s)',
      icon: Handshake,
      title: language === 'kr' ? '화해와 협력의 첫걸음' : 'First Steps of Reconciliation & Cooperation',
      description: language === 'kr'
        ? '7.4 남북공동성명을 통한 대화 시작, 평화통일 원칙 합의'
        : 'Beginning of dialogue through July 4th Joint Communique, agreement on peaceful unification principles',
      significance: language === 'kr' ? '대화를 통한 해결 의지' : 'Will to resolve through dialogue',
      color: 'border-sovereign-gold',
      text: 'text-sovereign-gold',
      bg: 'bg-sovereign-gold'
    },
    {
      year: language === 'kr' ? '2000년 6.15 정상회담' : '2000 June 15 Summit',
      icon: Bird,
      title: language === 'kr' ? '역사적 만남과 화해' : 'Historic Meeting & Reconciliation',
      description: language === 'kr'
        ? '김대중-김정일 정상회담으로 한반도 평화 프로세스의 새로운 장 개막'
        : 'Kim Dae-jung and Kim Jong-il Summit opening new chapter in Korean Peninsula peace process',
      significance: language === 'kr' ? '평화 공존의 가능성' : 'Possibility of peaceful coexistence',
      color: 'border-river-current',
      text: 'text-river-current',
      bg: 'bg-river-current'
    },
    {
      year: language === 'kr' ? '미래 비전 (2030년)' : 'Future Vision (2030)',
      icon: Star,
      title: language === 'kr' ? '한반도 평화 통일 완성' : 'Completion of Korean Peninsula Peace Unification',
      description: language === 'kr'
        ? '남북이 하나 되어 동북아 평화의 중심지로 도약, 세계 평화에 기여하는 통일 한국'
        : 'North and South united as one, leaping forward as Northeast Asia\'s peace center, unified Korea contributing to world peace',
      significance: language === 'kr' ? '세계 평화의 새로운 모델' : 'New model for world peace',
      color: 'border-sovereign-gold',
      text: 'text-sovereign-gold',
      bg: 'bg-sovereign-gold'
    }
  ]

  const peacePrinciples = [
    {
      icon: Users,
      title: language === 'kr' ? '민족 자결주의' : 'National Self-Determination',
      description: language === 'kr'
        ? '한민족이 스스로의 의지로 통일을 이루어나가는 자주적 통일'
        : 'Independent unification achieved by the Korean people\'s own will',
      values: language === 'kr' ? ['자주성', '민주성', '평화성'] : ['Independence', 'Democracy', 'Peace']
    },
    {
      icon: Heart,
      title: language === 'kr' ? '상호 존중과 이해' : 'Mutual Respect & Understanding',
      description: language === 'kr'
        ? '서로 다른 체제와 이념을 인정하고 존중하는 포용적 접근'
        : 'Inclusive approach recognizing and respecting different systems and ideologies',
      values: language === 'kr' ? ['포용성', '관용', '화해'] : ['Inclusivity', 'Tolerance', 'Reconciliation']
    },
    {
      icon: Globe,
      title: language === 'kr' ? '동북아 평화 구축' : 'Northeast Asian Peace Building',
      description: language === 'kr'
        ? '한반도 평화가 동북아 전체의 안정과 번영으로 확산'
        : 'Korean Peninsula peace spreading to stability and prosperity of entire Northeast Asia',
      values: language === 'kr' ? ['지역협력', '공동번영', '안정'] : ['Regional Cooperation', 'Common Prosperity', 'Stability']
    },
    {
      icon: TreePine,
      title: language === 'kr' ? '지속가능한 발전' : 'Sustainable Development',
      description: language === 'kr'
        ? '환경을 보호하면서 경제발전과 사회진보를 동시에 추구'
        : 'Pursuing economic development and social progress while protecting the environment',
      values: language === 'kr' ? ['환경보호', '경제발전', '사회진보'] : ['Environmental Protection', 'Economic Development', 'Social Progress']
    }
  ]

  const unificationBenefits = [
    {
      category: language === 'kr' ? '경제적 효과' : 'Economic Effects',
      description: language === 'kr'
        ? '북한의 풍부한 자원과 남한의 기술력이 결합되어 새로운 경제 성장 동력 창출'
        : 'North Korea\'s abundant resources combined with South Korea\'s technology creating new economic growth drivers',
      impact: language === 'kr' ? 'GDP 30% 증가 예상' : '30% GDP Increase Expected',
      global: language === 'kr' ? '동북아 경제권 통합 가속화' : 'Accelerated Northeast Asian Economic Integration',
      colSpan: "md:col-span-2",
    },
    {
      category: language === 'kr' ? '사회적 효과' : 'Social Effects',
      description: language === 'kr'
        ? '이산가족 상봉과 문화 교류 확대로 민족 동질성 회복 및 사회 통합'
        : 'Restoration of ethnic homogeneity and social integration through family reunions',
      impact: language === 'kr' ? '1000만 이산가족 재회' : '10M Families Reunited',
      global: language === 'kr' ? '분단 국가들의 통합 모델' : 'Integration Model',
      colSpan: "md:col-span-1",
    },
    {
      category: language === 'kr' ? '안보적 효과' : 'Security Effects',
      description: language === 'kr'
        ? '한반도 비핵화와 군축으로 동북아 평화 체제 구축 및 군사적 긴장 해소'
        : 'Building Northeast Asian peace regime and resolving military tensions',
      impact: language === 'kr' ? '군사비 50% 절감' : '50% Budget Reduction',
      global: language === 'kr' ? '핵 없는 세계로의 전환점' : 'Nuclear-Free World',
      colSpan: "md:col-span-1",
    },
    {
      category: language === 'kr' ? '문화적 효과' : 'Cultural Effects',
      description: language === 'kr'
        ? '5000년 전통문화의 완전한 복원과 K-문화의 세계적 확산 가속화'
        : 'Complete restoration of 5000-year traditional culture and global spread',
      impact: language === 'kr' ? '문화 콘텐츠 200% 증가' : '200% Content Increase',
      global: language === 'kr' ? '동서 문화 교류의 허브' : 'East-West Hub',
      colSpan: "md:col-span-2",
    }
  ]

  return (
    <div className="min-h-[100dvh] bg-river-depths selection:bg-sovereign-gold/30 selection:text-sovereign-gold">
      <JucheHeader />
      
      <main id="main-content" className="relative pt-24 pb-24">
        {/* Cinematic Hero Section */}
        <section ref={heroRef} className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mb-24">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/gallery/paektu-hero-.webp"
              alt="Mount Paektu in winter - symbol of Korean resilience and unity"
              fill
              className="object-cover scale-105"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-river-depths/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-river-depths via-river-depths/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-river-depths via-transparent to-river-depths opacity-80" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 backdrop-blur-md mb-8">
                <Calendar className="w-4 h-4 text-sovereign-gold" />
                <span className="text-xs font-mono tracking-widest text-sovereign-gold uppercase">
                  {language === 'kr' ? '평화의 기록' : 'Chronicles of Peace'}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-cream to-cream/70">
                  {language === 'kr' ? '평화 통일의' : 'History of'}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign-gold via-cream to-sovereign-gold">
                  {language === 'kr' ? '역사' : 'Peaceful Unification'}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-cream/70 font-light max-w-2xl mx-auto leading-relaxed">
                {language === 'kr'
                  ? '5000년 평화 전통에서 시작되어 미래 통일로 이어지는 한민족의 평화 여정'
                  : 'The Korean people\'s peace journey from 5000 years of tradition to future unification'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="relative">
              {/* Central Stylized Line */}
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sovereign-gold/30 to-transparent -translate-x-1/2" />

              <div className="space-y-16 md:space-y-32">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-0 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Icon centered */}
                    <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 z-10 w-14 h-14 rounded-full border border-river-current/30 bg-river-depths flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      <div className={`w-3 h-3 rounded-full ${event.bg} shadow-[0_0_10px_currentColor]`} />
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                    }`}>
                      {/* Double Bezel Container */}
                      <div className="relative p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cream/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 h-full shadow-2xl inset-shadow-sm inset-shadow-cream/5">
                          
                          <div className="flex items-center gap-3 mb-4">
                            <event.icon className={`h-6 w-6 ${event.text}`} />
                            <span className={`text-sm font-mono tracking-widest ${event.text}`}>{event.year}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">
                            {event.title}
                          </h3>
                          
                          <p className="text-cream/70 leading-relaxed mb-6">
                            {event.description}
                          </p>
                          
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-river-current/10 border border-river-current/20">
                            <span className="text-xs uppercase tracking-wider text-cream/50">
                              {language === 'kr' ? '역사적 의의' : 'Significance'}
                            </span>
                            <span className="w-px h-3 bg-cream/20" />
                            <span className="text-sm font-medium text-cream/90">{event.significance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Peace Principles Bento */}
        <section className="py-24 px-4 relative z-10 border-t border-cream/5 bg-river-depths/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">
                {language === 'kr' ? '평화 통일 원칙' : 'Peaceful Unification Principles'}
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto text-lg font-light">
                {language === 'kr'
                  ? '지속가능하고 포용적인 통일을 위한 핵심 가치와 원칙'
                  : 'Core values and principles for sustainable and inclusive unification'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {peacePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent group"
                >
                  <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 h-full flex flex-col justify-between inset-shadow-sm inset-shadow-cream/5 group-hover:bg-river-depths/80 transition-colors">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center mb-6">
                        <principle.icon className="h-6 w-6 text-sovereign-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">{principle.title}</h3>
                      <p className="text-cream/70 text-sm leading-relaxed mb-8">{principle.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {principle.values.map((value, i) => (
                        <span key={i} className="px-2.5 py-1 bg-cream/5 border border-cream/10 rounded-md text-xs font-mono text-cream/70">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Unification Benefits Bento */}
        <section className="py-24 px-4 relative z-10 border-t border-cream/5">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sovereign-gold/10 border border-sovereign-gold/20 mb-6">
                <Star className="h-8 w-8 text-sovereign-gold" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">
                {language === 'kr' ? '통일의 글로벌 효과' : 'Global Effects of Unification'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {unificationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent group ${benefit.colSpan}`}
                >
                  <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 h-full flex flex-col justify-between overflow-hidden inset-shadow-sm inset-shadow-cream/5">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Globe className="w-32 h-32" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-sovereign-gold mb-4 font-[family-name:var(--font-heading)]">{benefit.category}</h3>
                      <p className="text-cream/70 leading-relaxed mb-8 max-w-md">{benefit.description}</p>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-auto">
                      <div className="flex-1 bg-cream/5 border border-cream/10 rounded-xl p-4">
                        <span className="block text-xs uppercase tracking-wider text-cream/50 mb-1">Impact</span>
                        <p className="text-cream font-medium">{benefit.impact}</p>
                      </div>
                      <div className="flex-1 bg-sovereign-gold/5 border border-sovereign-gold/10 rounded-xl p-4">
                        <span className="block text-xs uppercase tracking-wider text-sovereign-gold/50 mb-1">Global</span>
                        <p className="text-sovereign-gold font-medium">{benefit.global}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-32 px-4 relative z-10 border-t border-cream/5 bg-gradient-to-b from-river-depths to-[#050a10]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-4xl text-center"
          >
            <Bird className="h-12 w-12 text-cream/50 mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-8 font-[family-name:var(--font-heading)] tracking-tight">
              {language === 'kr'
                ? '평화 통일의 미래 비전'
                : 'Future Vision of Peaceful Unification'}
            </h2>
            <p className="text-xl md:text-2xl text-cream/60 font-light mb-16 leading-relaxed">
              {language === 'kr'
                ? '한반도에서 시작되는 세계 평화의 새로운 장, 인류 공동번영의 시대'
                : 'A new chapter of world peace beginning from the Korean Peninsula, an era of common human prosperity'}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/cultural-exchange"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-cream text-river-depths font-bold rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  {language === 'kr' ? '문화 교류 참여' : 'Join Cultural Exchange'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/youth-empowerment"
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-cream/20 text-cream font-bold rounded-xl overflow-hidden hover:bg-cream/5 transition-colors"
              >
                <span className="relative flex items-center gap-2">
                  {language === 'kr' ? '청년들과 함께' : 'With the Youth'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      
      <JucheFooter />
    </div>
  )
}
