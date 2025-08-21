"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Heart, Globe, Music, Utensils, Book, Users, Camera, Plane, HandHeart, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

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
      color: 'from-purple-500 to-pink-500'
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
      color: 'from-orange-500 to-red-500'
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
      color: 'from-blue-500 to-cyan-500'
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
      color: 'from-green-500 to-emerald-500'
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
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            {language === 'kr' ? '문화 교류와 세계 평화' : 'Cultural Exchange & World Peace'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {language === 'kr' 
              ? '5000년 역사의 지혜를 세계와 나누고, 세계의 아름다움을 품는 열린 한반도'
              : '5000 years of wisdom shared with the world, an open peninsula embracing global beauty'}
          </p>
          
          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-2xl p-8 mb-12 border border-cyan-500/30"
          >
            <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {language === 'kr' ? '우리의 꿈' : 'Our Dream'}
            </h2>
            <p className="text-white text-lg leading-relaxed">
              {language === 'kr'
                ? '한반도가 동서양 문명의 가교가 되고, 남북이 하나 되어 인류 평화의 중심지가 되는 그날. 우리 음식으로 세계인의 건강을 지키고, 우리 정신으로 인류애를 실현하며, 우리 예술로 영혼을 치유하는 미래.'
                : 'The Korean Peninsula as a bridge between Eastern and Western civilizations, North and South united as a center for human peace. A future where our food protects global health, our spirit realizes humanity, and our art heals souls.'}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cultural Pillars */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {language === 'kr' ? '문화 교류의 네 기둥' : 'Four Pillars of Cultural Exchange'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {culturalPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-white/20 hover:border-white/40 transition-all h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-4`}>
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4">{pillar.description}</p>
                    <div className="space-y-2">
                      {pillar.examples.map((example, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                          <span className="text-white/70 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Programs */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-950/50 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {language === 'kr' ? '글로벌 교류 프로그램' : 'Global Exchange Programs'}
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            {language === 'kr'
              ? '미래 세대가 함께 만드는 평화롭고 번영하는 세계'
              : 'Future generations creating a peaceful and prosperous world together'}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {exchangePrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{program.title}</h3>
                <p className="text-white/80 mb-4">{program.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-white/60">{language === 'kr' ? '참가자' : 'Participants'}</p>
                    <p className="text-lg font-bold text-yellow-400">{program.participants}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{language === 'kr' ? '영향력' : 'Impact'}</p>
                    <p className="text-lg font-bold text-green-400">{program.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center justify-center mb-6">
              <Plane className="h-12 w-12 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">{tourismVision.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {tourismVision.destinations.map((dest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-green-400 mb-2">{dest.name}</h3>
                  <p className="text-white/80 mb-3">{dest.description}</p>
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">{dest.visitors}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <HandHeart className="h-16 w-16 text-red-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'kr' 
              ? '함께 만드는 평화로운 미래'
              : 'Creating a Peaceful Future Together'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {language === 'kr'
              ? '문화의 힘으로 마음의 장벽을 허물고, 이해와 사랑으로 새로운 세계를 열어갑니다.'
              : 'Breaking down barriers with cultural power, opening a new world with understanding and love.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cuisine-traditions"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '한식과 전통 탐험' : 'Explore Cuisine & Traditions'}
            </Link>
            <Link
              href="/peace-timeline"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '평화의 역사' : 'History of Peace'}
            </Link>
            <Link
              href="/youth-empowerment"
              className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '청년 임파워먼트' : 'Youth Empowerment'}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}