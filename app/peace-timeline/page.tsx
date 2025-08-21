"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Calendar, Heart, Handshake, Globe, Users, TreePine, Building, Mountain, Star, Crown, Flag, Bird, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PeaceTimelinePage() {
  const { language } = useLanguage()

  const timelineEvents = [
    {
      year: language === 'kr' ? '고조선 (기원전 2333년)' : 'Gojoseon (2333 BCE)',
      icon: Crown,
      title: language === 'kr' ? '한민족의 기원' : 'Origins of the Korean People',
      description: language === 'kr' 
        ? '단군왕검이 세운 고조선, 홍익인간의 이념으로 평화와 번영의 기초를 마련'
        : 'Gojoseon founded by Dangun, establishing the foundation of peace and prosperity with the ideal of Hongik Ingan (benefiting humanity)',
      significance: language === 'kr' ? '5000년 평화 전통의 시작' : 'Beginning of 5000-year peace tradition',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      year: language === 'kr' ? '고구려, 백제, 신라 (기원전 57년~668년)' : 'Three Kingdoms (57 BCE - 668 CE)',
      icon: Mountain,
      title: language === 'kr' ? '삼국시대의 문화 융합' : 'Cultural Fusion of Three Kingdoms',
      description: language === 'kr'
        ? '고구려의 기상, 백제의 문화, 신라의 통합으로 한민족 문화의 기틀 완성'
        : 'Completion of Korean cultural foundation through Goguryeo\'s spirit, Baekje\'s culture, and Silla\'s unification',
      significance: language === 'kr' ? '다양성 속 통일의 지혜' : 'Wisdom of unity in diversity',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: language === 'kr' ? '조선 건국 (1392년)' : 'Founding of Joseon (1392)',
      icon: Building,
      title: language === 'kr' ? '조선 왕조와 평화 외교' : 'Joseon Dynasty & Peace Diplomacy',
      description: language === 'kr'
        ? '500년간 지속된 조선왕조, 평화를 기반으로 한 외교와 문화 발전의 전성기'
        : '500-year Joseon Dynasty, golden age of peace-based diplomacy and cultural development',
      significance: language === 'kr' ? '장기 평화의 모범' : 'Model of long-term peace',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: language === 'kr' ? '일제강점기 (1910-1945년)' : 'Japanese Occupation (1910-1945)',
      icon: Flag,
      title: language === 'kr' ? '저항과 광복의 의지' : 'Resistance & Liberation Will',
      description: language === 'kr'
        ? '35년간의 시련 속에서도 꺾이지 않은 광복 의지와 독립 투쟁'
        : 'Unbroken will for liberation and independence struggle despite 35 years of trials',
      significance: language === 'kr' ? '불굴의 자주 정신' : 'Indomitable spirit of independence',
      color: 'from-red-500 to-orange-500'
    },
    {
      year: language === 'kr' ? '분단과 한국전쟁 (1950-1953년)' : 'Division & Korean War (1950-1953)',
      icon: Heart,
      title: language === 'kr' ? '분단의 아픔과 평화의 염원' : 'Pain of Division & Yearning for Peace',
      description: language === 'kr'
        ? '한민족 분단의 비극과 전쟁의 상처, 그 속에서 더욱 간절해진 평화에 대한 염원'
        : 'Tragedy of Korean division and wounds of war, deepening the earnest desire for peace',
      significance: language === 'kr' ? '평화 통일의 절실함' : 'Urgency of peaceful unification',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: language === 'kr' ? '남북 대화 시작 (1970년대)' : 'Inter-Korean Dialogue Begins (1970s)',
      icon: Handshake,
      title: language === 'kr' ? '화해와 협력의 첫걸음' : 'First Steps of Reconciliation & Cooperation',
      description: language === 'kr'
        ? '7.4 남북공동성명을 통한 대화 시작, 평화통일 원칙 합의'
        : 'Beginning of dialogue through July 4th Joint Communique, agreement on peaceful unification principles',
      significance: language === 'kr' ? '대화를 통한 해결 의지' : 'Will to resolve through dialogue',
      color: 'from-teal-500 to-blue-500'
    },
    {
      year: language === 'kr' ? '2000년 6.15 정상회담' : '2000 June 15 Summit',
      icon: Bird,
      title: language === 'kr' ? '역사적 만남과 화해' : 'Historic Meeting & Reconciliation',
      description: language === 'kr'
        ? '김대중-김정일 정상회담으로 한반도 평화 프로세스의 새로운 장 개막'
        : 'Kim Dae-jung and Kim Jong-il Summit opening new chapter in Korean Peninsula peace process',
      significance: language === 'kr' ? '평화 공존의 가능성' : 'Possibility of peaceful coexistence',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      year: language === 'kr' ? '미래 비전 (2030년)' : 'Future Vision (2030)',
      icon: Star,
      title: language === 'kr' ? '한반도 평화 통일 완성' : 'Completion of Korean Peninsula Peace Unification',
      description: language === 'kr'
        ? '남북이 하나 되어 동북아 평화의 중심지로 도약, 세계 평화에 기여하는 통일 한국'
        : 'North and South united as one, leaping forward as Northeast Asia\'s peace center, unified Korea contributing to world peace',
      significance: language === 'kr' ? '세계 평화의 새로운 모델' : 'New model for world peace',
      color: 'from-yellow-400 to-orange-400'
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

  const unificationBenefits = {
    title: language === 'kr' ? '통일의 글로벌 효과' : 'Global Effects of Unification',
    benefits: [
      {
        category: language === 'kr' ? '경제적 효과' : 'Economic Effects',
        description: language === 'kr'
          ? '북한의 풍부한 자원과 남한의 기술력이 결합되어 새로운 경제 성장 동력 창출'
          : 'North Korea\'s abundant resources combined with South Korea\'s technology creating new economic growth drivers',
        impact: language === 'kr' ? 'GDP 30% 증가 예상' : '30% GDP Increase Expected',
        global: language === 'kr' ? '동북아 경제권 통합 가속화' : 'Accelerated Northeast Asian Economic Integration'
      },
      {
        category: language === 'kr' ? '사회적 효과' : 'Social Effects',
        description: language === 'kr'
          ? '이산가족 상봉과 문화 교류 확대로 민족 동질성 회복 및 사회 통합'
          : 'Restoration of ethnic homogeneity and social integration through family reunions and cultural exchanges',
        impact: language === 'kr' ? '1000만 이산가족 재회' : '10 Million Separated Families Reunited',
        global: language === 'kr' ? '분단 국가들의 통합 모델' : 'Integration Model for Divided Nations'
      },
      {
        category: language === 'kr' ? '안보적 효과' : 'Security Effects',
        description: language === 'kr'
          ? '한반도 비핵화와 군축으로 동북아 평화 체제 구축 및 군사적 긴장 해소'
          : 'Building Northeast Asian peace regime and resolving military tensions through denuclearization and disarmament',
        impact: language === 'kr' ? '군사비 50% 절감' : '50% Military Budget Reduction',
        global: language === 'kr' ? '핵 없는 세계로의 전환점' : 'Turning Point to Nuclear-Free World'
      },
      {
        category: language === 'kr' ? '문화적 효과' : 'Cultural Effects',
        description: language === 'kr'
          ? '5000년 전통문화의 완전한 복원과 K-문화의 세계적 확산 가속화'
          : 'Complete restoration of 5000-year traditional culture and acceleration of K-culture\'s global spread',
        impact: language === 'kr' ? '문화 콘텐츠 200% 증가' : '200% Cultural Content Increase',
        global: language === 'kr' ? '동서 문화 교류의 허브' : 'Hub for East-West Cultural Exchange'
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
          <Calendar className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            {language === 'kr' ? '평화 통일의 역사' : 'History of Peaceful Unification'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {language === 'kr' 
              ? '5000년 평화 전통에서 시작되어 미래 통일로 이어지는 한민족의 평화 여정'
              : 'The Korean people\'s peace journey from 5000 years of peace tradition to future unification'}
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center flex-shrink-0`}>
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Timeline Content */}
                  <Card className="flex-1 bg-black/50 border-white/20 hover:border-white/40 transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                        <span className="text-sm text-cyan-400 font-mono">{event.year}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-white/80">{event.description}</p>
                      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg p-3">
                        <p className="text-cyan-300 text-sm font-semibold">
                          {language === 'kr' ? '역사적 의의: ' : 'Historical Significance: '}{event.significance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peace Principles */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-green-950/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'kr' ? '평화 통일 원칙' : 'Peaceful Unification Principles'}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {language === 'kr'
                ? '지속가능하고 포용적인 통일을 위한 핵심 가치와 원칙'
                : 'Core values and principles for sustainable and inclusive unification'}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {peacePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-500/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <principle.icon className="h-10 w-10 text-green-400" />
                  <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                </div>
                
                <p className="text-white/80 mb-4">{principle.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {principle.values.map((value, i) => (
                    <span key={i} className="px-3 py-1 bg-green-800/30 rounded-full text-sm text-green-300">
                      {value}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unification Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30"
          >
            <div className="text-center mb-8">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">{unificationBenefits.title}</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {language === 'kr'
                  ? '한반도 통일이 세계에 미칠 긍정적 영향과 변화'
                  : 'Positive global impact and changes from Korean Peninsula unification'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {unificationBenefits.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">{benefit.category}</h3>
                  <p className="text-white/80 mb-3">{benefit.description}</p>
                  
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 rounded p-3">
                      <p className="text-cyan-300 font-semibold text-sm">{benefit.impact}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-800/30 to-teal-800/30 rounded p-3">
                      <p className="text-green-300 font-semibold text-sm">{benefit.global}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <Bird className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'kr' 
              ? '평화 통일의 미래 비전'
              : 'Future Vision of Peaceful Unification'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {language === 'kr'
              ? '한반도에서 시작되는 세계 평화의 새로운 장, 인류 공동번영의 시대'
              : 'A new chapter of world peace beginning from the Korean Peninsula, an era of common human prosperity'}
          </p>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 mb-8 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              {language === 'kr' ? '2030 통일 한국의 모습' : '2030 Vision of Unified Korea'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/80">
              <div className="text-center">
                <Building className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">{language === 'kr' ? '경제 강국' : 'Economic Powerhouse'}</h4>
                <p className="text-sm">{language === 'kr' ? '세계 5위권 경제 규모 달성' : 'Achieving top 5 global economy status'}</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-red-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">{language === 'kr' ? '사회 통합' : 'Social Integration'}</h4>
                <p className="text-sm">{language === 'kr' ? '완전한 사회 문화적 통합 실현' : 'Complete socio-cultural integration achieved'}</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2">{language === 'kr' ? '평화 중심지' : 'Peace Hub'}</h4>
                <p className="text-sm">{language === 'kr' ? '동북아 평화 협력의 중심' : 'Center of Northeast Asian peace cooperation'}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cultural-exchange"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '문화 교류 참여' : 'Join Cultural Exchange'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/youth-empowerment"
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '청년들과 함께' : 'With the Youth'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}