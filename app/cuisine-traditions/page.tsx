"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Soup, Leaf, Heart, Users, Clock, Sparkles, ChefHat, Flame } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CuisineTraditionsPage() {
  const { language } = useLanguage()

  const traditionalDishes = [
    {
      name: language === 'kr' ? '김치' : 'Kimchi',
      description: language === 'kr' 
        ? '한민족의 지혜가 담긴 발효음식의 정수. 유산균과 비타민이 풍부하여 세계인의 건강을 지키는 보배'
        : 'The essence of fermented wisdom. Rich in probiotics and vitamins, protecting global health',
      health: language === 'kr' ? '장건강, 면역력 증진, 항염효과' : 'Gut health, immunity boost, anti-inflammatory',
      season: language === 'kr' ? '가을 김장철' : 'Autumn Preparation Season',
      color: 'from-red-500 to-orange-500',
      philosophy: language === 'kr' 
        ? '자연의 순환과 공동체의 협력이 만드는 생명의 음식'
        : 'Life food created by nature\'s cycle and community cooperation'
    },
    {
      name: language === 'kr' ? '평양냉면' : 'Pyongyang Naengmyeon',
      description: language === 'kr'
        ? '메밀의 고소함과 시원한 육수의 조화. 더위를 식히고 마음을 평온하게 하는 민족음식'
        : 'Harmony of nutty buckwheat and refreshing broth. National dish that cools heat and calms the heart',
      health: language === 'kr' ? '소화촉진, 혈관건강, 해독작용' : 'Digestive aid, vascular health, detoxification',
      season: language === 'kr' ? '여름철 별미' : 'Summer Delicacy',
      color: 'from-blue-500 to-cyan-500',
      philosophy: language === 'kr'
        ? '단순함 속의 깊은 맛, 절제와 조화의 미학'
        : 'Deep flavor in simplicity, aesthetics of restraint and harmony'
    },
    {
      name: language === 'kr' ? '된장과 고추장' : 'Doenjang & Gochujang',
      description: language === 'kr'
        ? '콩과 고추의 발효가 만든 맛의 기초. 한국 음식의 근본이 되는 조미료'
        : 'Fermented foundation of flavor from soybeans and peppers. The root seasonings of Korean cuisine',
      health: language === 'kr' ? '단백질 공급, 항산화, 심장건강' : 'Protein source, antioxidant, heart health',
      season: language === 'kr' ? '사계절 내내' : 'All Year Round',
      color: 'from-amber-500 to-yellow-500',
      philosophy: language === 'kr'
        ? '시간과 인내가 만드는 깊은 맛, 전통의 지혜'
        : 'Deep taste created by time and patience, wisdom of tradition'
    },
    {
      name: language === 'kr' ? '잡채' : 'Japchae',
      description: language === 'kr'
        ? '고구마 전분으로 만든 당면과 각종 채소의 조화. 색깔과 영양의 완벽한 균형'
        : 'Harmony of sweet potato starch noodles and various vegetables. Perfect balance of color and nutrition',
      health: language === 'kr' ? '식이섬유, 비타민, 무기질' : 'Dietary fiber, vitamins, minerals',
      season: language === 'kr' ? '명절과 잔치' : 'Holidays & Celebrations',
      color: 'from-purple-500 to-pink-500',
      philosophy: language === 'kr'
        ? '다양성 속의 통일, 함께함의 아름다움'
        : 'Unity in diversity, beauty of togetherness'
    }
  ]

  const culturalTraditions = [
    {
      icon: Users,
      title: language === 'kr' ? '상 차리기 문화' : 'Table Setting Culture',
      description: language === 'kr'
        ? '가족이 둘러앉는 밥상에는 정성과 사랑이 담겨있습니다. 한 상에 올려진 다양한 반찬들은 균형잡힌 영양과 조화를 상징합니다.'
        : 'Family tables contain devotion and love. Various side dishes represent balanced nutrition and harmony.',
      values: language === 'kr' 
        ? ['가족애', '균형', '정성', '나눔']
        : ['Family Love', 'Balance', 'Devotion', 'Sharing']
    },
    {
      icon: Clock,
      title: language === 'kr' ? '계절 음식 문화' : 'Seasonal Food Culture',
      description: language === 'kr'
        ? '자연의 리듬에 따라 제철 재료를 사용하는 지혜. 봄나물, 여름 과일, 가을 곡식, 겨울 저장음식으로 이어지는 순환의 미학.'
        : 'Wisdom of using seasonal ingredients following nature\'s rhythm. Aesthetic of cycles from spring herbs to winter preserved foods.',
      values: language === 'kr'
        ? ['자연조화', '지속가능성', '건강', '지혜']
        : ['Natural Harmony', 'Sustainability', 'Health', 'Wisdom']
    },
    {
      icon: Heart,
      title: language === 'kr' ? '정성과 손맛' : 'Devotion & Hand-taste',
      description: language === 'kr'
        ? '음식에 담긴 마음과 정성이 특별한 맛을 만듭니다. 기계가 아닌 사람의 손으로 전해지는 사랑의 맛.'
        : 'Heart and devotion create special flavors. The taste of love passed through human hands, not machines.',
      values: language === 'kr'
        ? ['정성', '사랑', '전통', '정체성']
        : ['Devotion', 'Love', 'Tradition', 'Identity']
    },
    {
      icon: Sparkles,
      title: language === 'kr' ? '차 문화와 예의' : 'Tea Culture & Etiquette',
      description: language === 'kr'
        ? '차를 마시는 시간은 명상과 소통의 시간. 옥수수수염차, 보리차, 인삼차 등 자연 재료로 만든 건강한 음료 문화.'
        : 'Tea time is meditation and communication time. Healthy beverage culture made from natural ingredients.',
      values: language === 'kr'
        ? ['명상', '소통', '건강', '예의']
        : ['Meditation', 'Communication', 'Health', 'Etiquette']
    }
  ]

  const healthBenefits = {
    title: language === 'kr' ? '한식의 건강 과학' : 'Health Science of Korean Food',
    benefits: [
      {
        category: language === 'kr' ? '발효음식의 과학' : 'Fermentation Science',
        description: language === 'kr'
          ? '김치, 된장, 고추장 등 발효음식은 유익한 균들을 공급하여 장내 환경을 개선하고 면역력을 높입니다.'
          : 'Fermented foods like kimchi and soybean paste provide beneficial bacteria, improving gut health and immunity.',
        impact: language === 'kr' ? '장 건강 50% 개선' : '50% Gut Health Improvement'
      },
      {
        category: language === 'kr' ? '항산화 효과' : 'Antioxidant Effects',
        description: language === 'kr'
          ? '고춧가루, 마늘, 생강 등의 향신료는 강력한 항산화 성분을 함유하여 노화 방지와 질병 예방에 효과적입니다.'
          : 'Spices like red pepper, garlic, and ginger contain powerful antioxidants for anti-aging and disease prevention.',
        impact: language === 'kr' ? '항산화 지수 300% 증가' : '300% Antioxidant Index Increase'
      },
      {
        category: language === 'kr' ? '심혈관 건강' : 'Cardiovascular Health',
        description: language === 'kr'
          ? '현미, 콩류, 해조류가 풍부한 한식은 콜레스테롤을 낮추고 혈관 건강을 개선합니다.'
          : 'Korean diet rich in brown rice, legumes, and seaweed lowers cholesterol and improves vascular health.',
        impact: language === 'kr' ? '심장병 위험 40% 감소' : '40% Heart Disease Risk Reduction'
      },
      {
        category: language === 'kr' ? '체중 관리' : 'Weight Management',
        description: language === 'kr'
          ? '다양한 채소와 적당한 단백질, 발효음식의 조합은 자연스러운 체중 관리를 도와줍니다.'
          : 'Combination of various vegetables, moderate protein, and fermented foods helps natural weight management.',
        impact: language === 'kr' ? '비만율 60% 낮음' : '60% Lower Obesity Rate'
      }
    ]
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-orange-950 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl text-center"
        >
          <ChefHat className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            {language === 'kr' ? '한식과 전통 문화' : 'Korean Cuisine & Traditional Culture'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {language === 'kr' 
              ? '5000년 역사 속에 축적된 음식 철학과 건강 지혜를 세계와 나누는 문화 보고'
              : 'A cultural treasury sharing 5000 years of culinary philosophy and health wisdom with the world'}
          </p>
        </motion.div>
      </section>

      {/* Traditional Dishes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {language === 'kr' ? '전통 음식의 지혜' : 'Wisdom of Traditional Foods'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {traditionalDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-white/20 hover:border-white/40 transition-all h-full overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${dish.color}`} />
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-3">
                      <Soup className="h-8 w-8 text-orange-400" />
                      {dish.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/80">{dish.description}</p>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-orange-400 mb-2">
                        {language === 'kr' ? '건강 효과' : 'Health Benefits'}
                      </h4>
                      <p className="text-white/70 text-sm">{dish.health}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-white/50">{language === 'kr' ? '제철' : 'Season'}</p>
                        <p className="text-sm text-white/80">{dish.season}</p>
                      </div>
                      <Leaf className="h-5 w-5 text-green-400" />
                    </div>
                    
                    <blockquote className="border-l-4 border-orange-400 pl-4 italic text-white/70 text-sm">
                      "{dish.philosophy}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Traditions */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-red-950/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {language === 'kr' ? '음식 문화와 전통' : 'Food Culture & Traditions'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {culturalTraditions.map((tradition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-500/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <tradition.icon className="h-10 w-10 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">{tradition.title}</h3>
                </div>
                
                <p className="text-white/80 mb-4">{tradition.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {tradition.values.map((value, i) => (
                    <span key={i} className="px-3 py-1 bg-orange-800/30 rounded-full text-sm text-orange-300">
                      {value}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30"
          >
            <div className="text-center mb-8">
              <Flame className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">{healthBenefits.title}</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                {language === 'kr'
                  ? '현대 과학으로 입증된 한식의 놀라운 건강 효과'
                  : 'Amazing health effects of Korean food proven by modern science'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {healthBenefits.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-green-400 mb-3">{benefit.category}</h3>
                  <p className="text-white/80 mb-3">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded p-3">
                    <p className="text-cyan-300 font-semibold text-center">{benefit.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Sharing Vision */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'kr' 
              ? '세계와 함께하는 한식 문화'
              : 'Korean Food Culture with the World'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {language === 'kr'
              ? '우리의 음식 철학과 건강 지혜를 전 인류와 나누어 더 건강하고 지속가능한 미래를 만들어갑니다.'
              : 'Sharing our culinary philosophy and health wisdom with all humanity to create a healthier and more sustainable future.'}
          </p>
          
          <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-2xl p-8 mb-8 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              {language === 'kr' ? '글로벌 한식 비전' : 'Global Korean Food Vision'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/80">
              <div>
                <h4 className="font-bold mb-2">{language === 'kr' ? '건강한 세계' : 'Healthy World'}</h4>
                <p className="text-sm">{language === 'kr' ? '발효음식과 자연재료로 인류 건강 증진' : 'Promoting human health with fermented foods and natural ingredients'}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">{language === 'kr' ? '지속가능성' : 'Sustainability'}</h4>
                <p className="text-sm">{language === 'kr' ? '계절 음식과 로컬푸드 철학으로 환경 보호' : 'Environmental protection through seasonal and local food philosophy'}</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">{language === 'kr' ? '문화 교류' : 'Cultural Exchange'}</h4>
                <p className="text-sm">{language === 'kr' ? '음식을 통한 평화와 이해의 다리 놓기' : 'Building bridges of peace and understanding through food'}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cultural-exchange"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '문화 교류 보기' : 'View Cultural Exchange'}
            </Link>
            <Link
              href="/youth-empowerment"
              className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '청년들과 함께' : 'Together with Youth'}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}