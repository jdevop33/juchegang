"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Heart, Globe, Music, Utensils, Book, Users, Camera, Plane, HandHeart, Star, ArrowRight } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Link from "next/link"
import Image from "next/image"

export default function CulturalExchangePage() {
  const { language } = useLanguage()

  const culturalPillars = [
    {
      icon: Music,
      title: language === 'kr' ? '음악과 예술' : 'Music & Arts',
      description: language === 'kr'
        ? '아리랑부터 K-POP까지, 우리의 음악이 세계를 하나로 만듭니다'
        : 'From Arirang to modern melodies, our music unites the world',
      examples: language === 'kr'
        ? ['전통 국악', '민요와 판소리', '현대 음악', '무용과 공연']
        : ['Traditional Gugak', 'Folk Songs & Pansori', 'Contemporary Music', 'Dance & Performance'],
      color: 'text-sovereign-gold',
      bg: 'bg-sovereign-gold/10'
    },
    {
      icon: Utensils,
      title: language === 'kr' ? '한식 문화' : 'Korean Cuisine',
      description: language === 'kr'
        ? '김치, 된장, 고추장 - 건강과 맛의 조화로 세계인의 식탁을 풍요롭게'
        : 'Kimchi, Doenjang, Gochujang - enriching global tables with health and flavor',
      examples: language === 'kr'
        ? ['발효 음식의 과학', '계절 요리', '전통 차 문화', '공동체 식사 문화']
        : ['Fermentation Science', 'Seasonal Dishes', 'Tea Culture', 'Communal Dining'],
      color: 'text-korean-red',
      bg: 'bg-korean-red/10'
    },
    {
      icon: Book,
      title: language === 'kr' ? '언어와 문학' : 'Language & Literature',
      description: language === 'kr'
        ? '한글의 과학적 우수성과 깊은 문학적 전통을 세계와 공유'
        : 'Sharing the scientific brilliance of Hangul and our deep literary traditions',
      examples: language === 'kr'
        ? ['한글의 창제 원리', '고전 문학', '현대 시와 소설', '구전 전통']
        : ['Hangul Creation Principles', 'Classical Literature', 'Modern Poetry & Novels', 'Oral Traditions'],
      color: 'text-river-current',
      bg: 'bg-river-current/10'
    },
    {
      icon: Users,
      title: language === 'kr' ? '가족과 공동체' : 'Family & Community',
      description: language === 'kr'
        ? '정, 효, 예의 정신으로 따뜻한 인류 공동체 건설'
        : 'Building warm human communities through Jeong, filial piety, and respect',
      examples: language === 'kr'
        ? ['대가족 문화', '마을 공동체', '상부상조 정신', '세대간 지혜 전수']
        : ['Extended Family Culture', 'Village Communities', 'Mutual Aid Spirit', 'Intergenerational Wisdom'],
      color: 'text-white',
      bg: 'bg-white/10'
    }
  ]

  const exchangePrograms = [
    {
      title: language === 'kr' ? '청년 평화 대사 프로그램' : 'Youth Peace Ambassador Program',
      description: language === 'kr'
        ? '전 세계 청년들이 평양, 서울, 뉴욕, 런던을 오가며 평화의 다리를 놓습니다'
        : 'Young people from around the world building bridges of peace between Pyongyang, Seoul, New York, and London',
      participants: '10,000+',
      impact: language === 'kr' ? '50개국 참여' : '50 Countries'
    },
    {
      title: language === 'kr' ? '농업 기술 교류' : 'Agricultural Technology Exchange',
      description: language === 'kr'
        ? '지속가능한 농업 기술을 공유하여 세계 식량 안보에 기여'
        : 'Sharing sustainable farming techniques to contribute to global food security',
      participants: '5,000+',
      impact: language === 'kr' ? '식량 생산 30% 증가' : '30% Food Production Increase'
    },
    {
      title: language === 'kr' ? '의료 협력 네트워크' : 'Medical Cooperation Network',
      description: language === 'kr'
        ? '고려의학과 현대의학의 융합으로 인류 건강 증진'
        : 'Combining Koryo medicine with modern healthcare for humanity\'s wellbeing',
      participants: '2,000+',
      impact: language === 'kr' ? '100만명 치료' : '1M People Treated'
    },
    {
      title: language === 'kr' ? '예술가 레지던시' : 'Artist Residency Program',
      description: language === 'kr'
        ? '세계 예술가들이 한국에서 창작하고 한국 예술가들이 세계로 나갑니다'
        : 'Global artists create in Korea while Korean artists share their gifts worldwide',
      participants: '500+',
      impact: language === 'kr' ? '1000개 작품 창작' : '1000 Works Created'
    }
  ]

  const tourismVision = {
    title: language === 'kr' ? '관광과 우정의 길' : 'Tourism & Friendship Routes',
    destinations: [
      {
        name: language === 'kr' ? '백두산 평화 트레일' : 'Mt. Paektu Peace Trail',
        description: language === 'kr'
          ? '성스러운 백두산에서 시작하는 영적 여정'
          : 'A spiritual journey starting from sacred Mt. Paektu',
        visitors: '1M+/year'
      },
      {
        name: language === 'kr' ? '평양 문화 축제' : 'Pyongyang Cultural Festival',
        description: language === 'kr'
          ? '매년 봄, 세계인이 함께하는 문화 대축제'
          : 'Annual spring festival bringing the world together',
        visitors: '500K+/year'
      },
      {
        name: language === 'kr' ? '동해안 평화 벨트' : 'East Sea Peace Belt',
        description: language === 'kr'
          ? '아름다운 동해안을 따라 이어지는 평화와 치유의 길'
          : 'Peace and healing route along the beautiful East Sea',
        visitors: '2M+/year'
      },
      {
        name: language === 'kr' ? 'DMZ 평화 공원' : 'DMZ Peace Park',
        description: language === 'kr'
          ? '분단의 상징을 평화의 상징으로 전환'
          : 'Transforming the symbol of division into a symbol of peace',
        visitors: '3M+/year'
      }
    ]
  }

  return (
    <>
      <JucheHeader />
      <main className="min-h-[100dvh] bg-river-depths text-cream selection:bg-sovereign-gold/30">
        {/* Cinematic Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/gallery/paektu-hero-1.webp"
              alt="Traditional Korean pavilion amid cascading waterfalls and lush forest"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/60 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10">
              {language === 'kr' ? '미래를 향한 다리' : 'Bridge to the Future'}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {language === 'kr' ? '문화 교류와 세계 평화' : 'Cultural Exchange & World Peace'}
            </h1>
            <p className="text-xl md:text-2xl text-cream-muted max-w-3xl mx-auto leading-relaxed">
              {language === 'kr'
                ? '5000년 역사의 지혜를 세계와 나누고, 세계의 아름다움을 품는 열린 한반도'
                : '5000 years of wisdom shared with the world, an open peninsula embracing global beauty'}
            </p>
          </motion.div>
        </section>

        <div className="container mx-auto px-4 md:px-8 pb-32 max-w-[1400px]">
          {/* Vision Statement - Double Bezel */}
          <section className="mt-[-80px] relative z-20 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="p-1.5 md:p-2 rounded-[2.5rem] bg-white/5 border border-white/10 max-w-4xl mx-auto backdrop-blur-xl"
            >
              <div className="bg-river-deep rounded-[calc(2.5rem-0.5rem)] p-8 md:p-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-center">
                <div className="w-16 h-16 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center mx-auto mb-8">
                  <Star className="h-8 w-8 text-sovereign-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cream mb-6">
                  {language === 'kr' ? '우리의 꿈' : 'Our Dream'}
                </h2>
                <p className="text-xl text-cream-muted leading-relaxed">
                  {language === 'kr'
                    ? '한반도가 동서양 문명의 가교가 되고, 남북이 하나 되어 인류 평화의 중심지가 되는 그날. 우리 음식으로 세계인의 건강을 지키고, 우리 정신으로 인류애를 실현하며, 우리 예술로 영혼을 치유하는 미래.'
                    : 'The Korean Peninsula as a bridge between Eastern and Western civilizations, North and South united as a center for human peace. A future where our food protects global health, our spirit realizes humanity, and our art heals souls.'}
                </p>
              </div>
            </motion.div>
          </section>

          {/* Cultural Pillars - Asymmetrical Bento Grid */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-cream" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream">
                {language === 'kr' ? '문화 교류의 네 기둥' : 'Four Pillars of Cultural Exchange'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {culturalPillars.map((pillar, index) => {
                const colSpan = index === 0 || index === 3 ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                    className={`p-1.5 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-white/20 transition-all duration-500 ${colSpan}`}
                  >
                    <div className="bg-river-deep rounded-[calc(2rem-0.375rem)] p-8 md:p-12 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:bg-[#111]">
                      <div className={`w-14 h-14 rounded-full ${pillar.bg} border border-white/5 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110`}>
                        <pillar.icon className={`h-6 w-6 ${pillar.color}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-cream tracking-tight mb-4">{pillar.title}</h3>
                      <p className="text-lg text-cream-muted leading-relaxed mb-8">{pillar.description}</p>
                      
                      <div className="space-y-3">
                        {pillar.examples.map((example, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full ${pillar.bg.replace('/10', '')}`} />
                            <span className="text-sm font-medium tracking-wide text-cream/70 uppercase">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Exchange Programs - Double Bezel Grid */}
          <section className="mb-32 p-1.5 md:p-2 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="bg-river-deep rounded-[calc(3rem-0.5rem)] p-8 md:p-16 lg:p-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream mb-6">
                  {language === 'kr' ? '글로벌 교류 프로그램' : 'Global Exchange Programs'}
                </h2>
                <p className="text-xl text-cream-muted max-w-2xl mx-auto">
                  {language === 'kr'
                    ? '미래 세대가 함께 만드는 평화롭고 번영하는 세계'
                    : 'Future generations creating a peaceful and prosperous world together'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {exchangePrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-river-depths rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-sovereign-gold mb-4">{program.title}</h3>
                    <p className="text-cream-muted text-lg mb-8">{program.description}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-white/5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-cream-muted mb-1">
                          {language === 'kr' ? '참가자' : 'Participants'}
                        </p>
                        <p className="text-xl font-bold text-cream">{program.participants}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-cream-muted mb-1">
                          {language === 'kr' ? '영향력' : 'Impact'}
                        </p>
                        <p className="text-xl font-bold text-cream">{program.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tourism Vision */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                <div className="w-16 h-16 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center mb-8">
                  <Plane className="h-8 w-8 text-sovereign-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream mb-6">
                  {tourismVision.title}
                </h2>
                <p className="text-xl text-cream-muted leading-relaxed">
                  {language === 'kr' ? '미래의 평화 시대, 한반도 전역을 잇는 관광과 우정의 루트가 전 세계 여행자들을 맞이할 것입니다.' : 'In the future era of peace, tourism and friendship routes connecting the entire Korean Peninsula will welcome travelers from around the world.'}
                </p>
              </div>

              <div className="w-full md:w-2/3 grid sm:grid-cols-2 gap-4">
                {tourismVision.destinations.map((dest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10"
                  >
                    <div className="bg-river-deep rounded-[calc(2rem-0.375rem)] p-8 h-full">
                      <h3 className="text-xl font-bold tracking-tight text-cream mb-3">{dest.name}</h3>
                      <p className="text-cream-muted text-sm leading-relaxed mb-6">{dest.description}</p>
                      <div className="flex items-center gap-3">
                        <Camera className="h-4 w-4 text-sovereign-gold" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-sovereign-gold">{dest.visitors}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-4xl mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-korean-red/10 border border-korean-red/20 flex items-center justify-center mx-auto mb-8">
                <HandHeart className="h-10 w-10 text-korean-red" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-cream mb-8">
                {language === 'kr'
                  ? '함께 만드는 평화로운 미래'
                  : 'Creating a Peaceful Future Together'}
              </h2>
              <p className="text-xl md:text-2xl text-cream-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                {language === 'kr'
                  ? '문화의 힘으로 마음의 장벽을 허물고, 이해와 사랑으로 새로운 세계를 열어갑니다.'
                  : 'Breaking down barriers with cultural power, opening a new world with understanding and love.'}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/cuisine-traditions"
                  className="group relative inline-flex items-center justify-center pl-8 pr-2 py-2 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white w-full sm:w-auto"
                >
                  <span className="mr-6">{language === 'kr' ? '한식과 전통 탐험' : 'Explore Cuisine & Traditions'}</span>
                  <div className="w-10 h-10 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                </Link>
                <Link
                  href="/youth-empowerment"
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent border border-white/20 text-cream font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white/5 w-full sm:w-auto"
                >
                  {language === 'kr' ? '청년 임파워먼트' : 'Youth Empowerment'}
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <JucheFooter />
    </>
  )
}
