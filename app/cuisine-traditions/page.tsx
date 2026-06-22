"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Soup, Leaf, Heart, Users, Clock, Sparkles, ChefHat, Flame, ArrowRight } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Link from "next/link"
import FocalImage from "@/components/focal-image"

export default function CuisineTraditionsPage() {
  const { language } = useLanguage()
  const cuisineAlt = language === 'kr' ? '한국 음식 배경' : 'Korean cuisine background'

  const traditionalDishes = [
    {
      name: language === 'kr' ? '김치' : 'Kimchi',
      description: language === 'kr'
        ? '한민족의 지혜가 담긴 발효음식의 정수. 유산균과 비타민이 풍부하여 세계인의 건강을 지키는 보배'
        : 'The essence of fermented wisdom. Rich in probiotics and vitamins, protecting global health',
      health: language === 'kr' ? '장건강, 면역력 증진, 항염효과' : 'Gut health, immunity boost, anti-inflammatory',
      season: language === 'kr' ? '가을 김장철' : 'Autumn Preparation Season',
      color: 'bg-korean-red/10',
      textColor: 'text-korean-red',
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
      color: 'bg-river-current/10',
      textColor: 'text-river-current',
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
      color: 'bg-sovereign-gold/10',
      textColor: 'text-sovereign-gold',
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
      color: 'bg-white/10',
      textColor: 'text-white',
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
        impact: language === 'kr' ? '장 건강 개선' : 'Gut Health Improvement'
      },
      {
        category: language === 'kr' ? '항산화 효과' : 'Antioxidant Effects',
        description: language === 'kr'
          ? '고춧가루, 마늘, 생강 등의 향신료는 강력한 항산화 성분을 함유하여 노화 방지에 효과적입니다.'
          : 'Spices like red pepper, garlic, and ginger contain powerful antioxidants for anti-aging and disease prevention.',
        impact: language === 'kr' ? '면역 체계 강화' : 'Immune System Boost'
      },
      {
        category: language === 'kr' ? '심혈관 건강' : 'Cardiovascular Health',
        description: language === 'kr'
          ? '현미, 콩류, 해조류가 풍부한 한식은 콜레스테롤을 낮추고 혈관 건강을 개선합니다.'
          : 'Korean diet rich in brown rice, legumes, and seaweed lowers cholesterol and improves vascular health.',
        impact: language === 'kr' ? '심장 건강 증진' : 'Promotes Heart Health'
      },
      {
        category: language === 'kr' ? '체중 관리' : 'Weight Management',
        description: language === 'kr'
          ? '다양한 채소와 적당한 단백질, 발효음식의 조합은 자연스러운 체중 관리를 도와줍니다.'
          : 'Combination of various vegetables, moderate protein, and fermented foods helps natural weight management.',
        impact: language === 'kr' ? '균형 잡힌 신진대사' : 'Balanced Metabolism'
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
            <FocalImage
              src="/gallery/North_Korean_Bibimbap_비빔밥_(12330376074).jpg"
              alt={cuisineAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/60 to-transparent" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {language === 'kr' ? '미각의 유산' : 'Culinary Heritage'}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {language === 'kr' ? '한식과 전통 문화' : 'Korean Cuisine & Traditional Culture'}
            </h1>
            <p className="text-xl md:text-2xl text-cream-muted max-w-3xl mx-auto leading-relaxed">
              {language === 'kr'
                ? '5000년 역사 속에 축적된 음식 철학과 건강 지혜를 세계와 나누는 문화 보고'
                : 'A cultural treasury sharing 5000 years of culinary philosophy and health wisdom with the world'}
            </p>
          </motion.div>
        </section>

        <div className="container mx-auto px-4 md:px-8 pb-32 max-w-[1400px]">
          {/* Traditional Dishes - Asymmetrical Bento Grid */}
          <section className="mb-32 mt-16">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-sovereign-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream">
                {language === 'kr' ? '전통 음식의 지혜' : 'Wisdom of Traditional Foods'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {traditionalDishes.map((dish, index) => {
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
                    <div className="bg-river-deep rounded-[calc(2rem-0.375rem)] p-8 md:p-12 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:bg-[#111] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <div className={`w-14 h-14 rounded-full ${dish.color} border border-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                            <Soup className={`h-6 w-6 ${dish.textColor}`} />
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                            <Leaf className="w-3 h-3 text-cream-muted" />
                            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-cream-muted">{dish.season}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-cream tracking-tight mb-4">{dish.name}</h3>
                        <p className="text-lg text-cream-muted leading-relaxed mb-8">{dish.description}</p>
                      </div>
                      
                      <div>
                        <div className="bg-river-depths rounded-2xl p-6 border border-white/5 mb-6">
                          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-cream-muted mb-2">
                            {language === 'kr' ? '건강 효과' : 'Health Benefits'}
                          </h4>
                          <p className="text-cream text-sm">{dish.health}</p>
                        </div>

                        <blockquote className="border-l-2 border-sovereign-gold/50 pl-4 italic text-cream-muted text-sm leading-relaxed">
                          &ldquo;{dish.philosophy}&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>

          {/* Cultural Traditions - Double Bezel Grid */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-cream" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream">
                {language === 'kr' ? '음식 문화와 전통' : 'Food Culture & Traditions'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {culturalTraditions.map((tradition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="p-1.5 rounded-[2.5rem] bg-white/5 border border-white/10"
                >
                  <div className="bg-river-deep rounded-[calc(2.5rem-0.375rem)] p-8 md:p-12 h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center">
                        <tradition.icon className="h-5 w-5 text-sovereign-gold" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-cream">{tradition.title}</h3>
                    </div>
                    
                    <p className="text-cream-muted text-lg leading-relaxed mb-8">{tradition.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {tradition.values.map((value, i) => (
                        <span key={i} className="px-4 py-2 bg-river-depths border border-white/5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium text-cream/70">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Health Benefits - Structuralist Display */}
          <section className="mb-32 p-1.5 md:p-2 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="bg-river-deep rounded-[calc(3rem-0.5rem)] p-8 md:p-16 lg:p-24 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="text-center mb-20">
                <div className="w-20 h-20 rounded-full bg-korean-red/10 border border-korean-red/20 flex items-center justify-center mx-auto mb-8">
                  <Flame className="h-10 w-10 text-korean-red" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-cream mb-6">
                  {healthBenefits.title}
                </h2>
                <p className="text-xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
                  {language === 'kr'
                    ? '현대 과학으로 입증된 한식의 놀라운 건강 효과'
                    : 'Amazing health effects of Korean food proven by modern science'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {healthBenefits.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col h-full"
                  >
                    <div className="w-full h-px bg-gradient-to-r from-sovereign-gold/50 to-transparent mb-6" />
                    <h3 className="text-xl font-bold text-cream mb-4 tracking-tight">{benefit.category}</h3>
                    <p className="text-cream-muted text-sm leading-relaxed mb-6 flex-grow">{benefit.description}</p>
                    <div className="inline-flex items-center">
                      <div className="px-3 py-1.5 rounded-md bg-sovereign-gold/10 text-sovereign-gold text-[10px] uppercase tracking-[0.2em] font-bold border border-sovereign-gold/20">
                        {benefit.impact}
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
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-cream mb-8">
                {language === 'kr'
                  ? '세계와 함께하는 한식 문화'
                  : 'Korean Food Culture with the World'}
              </h2>
              <p className="text-xl md:text-2xl text-cream-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                {language === 'kr'
                  ? '우리의 음식 철학과 건강 지혜를 전 인류와 나누어 더 건강하고 지속가능한 미래를 만들어갑니다.'
                  : 'Sharing our culinary philosophy and health wisdom with all humanity to create a healthier and more sustainable future.'}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/cultural-exchange"
                  className="group relative inline-flex items-center justify-center pl-8 pr-2 py-2 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white w-full sm:w-auto"
                >
                  <span className="mr-6">{language === 'kr' ? '문화 교류 보기' : 'View Cultural Exchange'}</span>
                  <div className="w-10 h-10 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                </Link>
                <Link
                  href="/youth-empowerment"
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent border border-white/20 text-cream font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white/5 w-full sm:w-auto"
                >
                  {language === 'kr' ? '청년들과 함께' : 'Together with Youth'}
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
