"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sunrise, Users, Flame, Earth, Scroll, Compass, Feather, Music, Eye, MessageCircle, Globe, Heart, Leaf, Star, ArrowRight } from "lucide-react"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

export default function YouthEmpowermentPage() {
  const { language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  const empowermentPillars = [
    {
      icon: Flame,
      title: language === 'kr' ? '창조적 사고력' : 'Creative Thinking',
      description: language === 'kr'
        ? '기성 관념을 뛰어넘어 새로운 해답을 찾는 혁신적 사고력을 기릅니다'
        : 'Developing innovative thinking that transcends conventional ideas to find new solutions',
      skills: language === 'kr' ? ['문제해결', '혁신', '상상력', '비판적사고'] : ['Problem Solving', 'Innovation', 'Imagination', 'Critical Thinking'],
      colSpan: "md:col-span-2 lg:col-span-3",
    },
    {
      icon: Users,
      title: language === 'kr' ? '글로벌 리더십' : 'Global Leadership',
      description: language === 'kr'
        ? '다양한 문화와 관점을 이해하고 세계를 이끌어가는 포용적 리더십을 함양합니다'
        : 'Cultivating inclusive leadership that understands diverse cultures and leads the world',
      skills: language === 'kr' ? ['소통', '공감', '협력', '비전제시'] : ['Communication', 'Empathy', 'Collaboration', 'Vision'],
      colSpan: "md:col-span-1 lg:col-span-2",
    },
    {
      icon: Earth,
      title: language === 'kr' ? '지구적 시민의식' : 'Global Citizenship',
      description: language === 'kr'
        ? '인류 공동의 과제를 자신의 일로 여기고 지속가능한 미래를 위해 행동합니다'
        : 'Taking humanity\'s common challenges as our own and acting for a sustainable future',
      skills: language === 'kr' ? ['환경의식', '평화', '정의감', '책임감'] : ['Environmental Awareness', 'Peace', 'Justice', 'Responsibility'],
      colSpan: "md:col-span-1 lg:col-span-2",
    },
    {
      icon: Compass,
      title: language === 'kr' ? '미래 기술 역량' : 'Future Tech Skills',
      description: language === 'kr'
        ? '4차 산업혁명 시대의 핵심 기술을 습득하고 인간 중심의 기술 윤리를 실현합니다'
        : 'Mastering key technologies of the 4th industrial revolution and realizing human-centered tech ethics',
      skills: language === 'kr' ? ['AI/ML', '블록체인', '로보틱스', '바이오텍'] : ['AI/ML', 'Blockchain', 'Robotics', 'Biotech'],
      colSpan: "md:col-span-2 lg:col-span-3",
    }
  ]

  const creativeFields = [
    { icon: Compass, name: language === 'kr' ? '프로그래밍' : 'Programming', participants: '50K+' },
    { icon: Feather, name: language === 'kr' ? '디지털 아트' : 'Digital Art', participants: '30K+' },
    { icon: Music, name: language === 'kr' ? '음악 제작' : 'Music Production', participants: '25K+' },
    { icon: Eye, name: language === 'kr' ? '영상 제작' : 'Video Production', participants: '40K+' },
    { icon: MessageCircle, name: language === 'kr' ? '팟캐스트' : 'Podcasting', participants: '15K+' },
    { icon: Scroll, name: language === 'kr' ? '창작 문학' : 'Creative Writing', participants: '20K+' }
  ]

  const globalProjects = [
    {
      title: language === 'kr' ? '청년 평화 네트워크' : 'Youth Peace Network',
      description: language === 'kr'
        ? '전 세계 청년들이 온라인과 오프라인에서 평화 프로젝트를 기획하고 실행합니다'
        : 'Young people worldwide plan and execute peace projects online and offline',
      impact: {
        participants: '100K+',
        countries: '80+',
        projects: '5000+'
      },
      achievements: language === 'kr'
        ? ['국제 평화 포럼 개최', '문화 교류 프로그램', '분쟁 지역 지원', '환경 보호 캠페인']
        : ['International Peace Forums', 'Cultural Exchange Programs', 'Conflict Zone Support', 'Environmental Campaigns']
    },
    {
      title: language === 'kr' ? '글로벌 스타트업 인큐베이터' : 'Global Startup Incubator',
      description: language === 'kr'
        ? '사회 문제 해결을 위한 혁신적 아이디어를 가진 청년 기업가들을 지원합니다'
        : 'Supporting young entrepreneurs with innovative ideas to solve social problems',
      impact: {
        participants: '25K+',
        countries: '50+',
        projects: '2000+'
      },
      achievements: language === 'kr'
        ? ['사회적 기업 창업', '기술 혁신 솔루션', '지속가능한 비즈니스', '일자리 창출']
        : ['Social Enterprise Creation', 'Tech Innovation Solutions', 'Sustainable Business', 'Job Creation']
    },
    {
      title: language === 'kr' ? '디지털 문화 아카데미' : 'Digital Culture Academy',
      description: language === 'kr'
        ? '전통 문화와 현대 기술을 융합한 새로운 콘텐츠 창작 교육을 제공합니다'
        : 'Providing education in creating new content that merges traditional culture with modern technology',
      impact: {
        participants: '75K+',
        countries: '60+',
        projects: '10000+'
      },
      achievements: language === 'kr'
        ? ['문화 콘텐츠 제작', 'VR/AR 체험관', '온라인 박물관', '문화 유산 보존']
        : ['Cultural Content Creation', 'VR/AR Experiences', 'Online Museums', 'Cultural Heritage Preservation']
    }
  ]

  const successStories = [
    {
      name: language === 'kr' ? '김민서 (22세)' : 'Kim Min-seo (22)',
      role: language === 'kr' ? 'AI 윤리 연구자' : 'AI Ethics Researcher',
      story: language === 'kr'
        ? '평양에서 서울, 실리콘밸리를 거쳐 전 세계 AI 개발에 인간 중심적 가치를 주입하는 연구를 하고 있습니다.'
        : 'From Pyongyang to Seoul to Silicon Valley, researching how to inject human-centered values into AI development worldwide.',
      achievement: language === 'kr' ? 'UN AI 윤리 위원회 최연소 위원' : 'Youngest member of UN AI Ethics Committee',
      colSpan: "md:col-span-2",
    },
    {
      name: language === 'kr' ? '박지훈 (25세)' : 'Park Ji-hoon (25)',
      role: language === 'kr' ? '환경 기술 창업가' : 'Environmental Tech Entrepreneur',
      story: language === 'kr'
        ? '미세먼지 정화 기술을 개발하여 아시아 전역의 공기질 개선에 기여하고 있습니다.'
        : 'Developing fine dust purification technology contributing to air quality improvement across Asia.',
      achievement: language === 'kr' ? '40개 도시 기술 도입' : 'Technology adopted in 40 cities',
      colSpan: "md:col-span-1",
    },
    {
      name: language === 'kr' ? '이하은 (23세)' : 'Lee Ha-eun (23)',
      role: language === 'kr' ? '문화 콘텐츠 크리에이터' : 'Cultural Content Creator',
      story: language === 'kr'
        ? '전통 음악과 현대 음악을 융합한 작품으로 세계 청년들에게 한국 문화의 아름다움을 알리고 있습니다.'
        : 'Introducing the beauty of Korean culture to global youth through works fusing traditional and modern music.',
      achievement: language === 'kr' ? '1억 조회수 달성' : '100M+ views achieved',
      colSpan: "md:col-span-3",
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
              src="/gallery/paektu-hero-3.webp"
              alt="Sunrise breaking through snow-capped peaks of Mount Paektu"
              fill
              className="object-cover scale-105 opacity-90"
              priority
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 backdrop-blur-md mb-8">
                <Sunrise className="w-4 h-4 text-sovereign-gold" />
                <span className="text-xs font-mono tracking-widest text-sovereign-gold uppercase">
                  {language === 'kr' ? '새로운 세대' : 'A New Generation'}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-cream to-cream/70">
                  {language === 'kr' ? '청년' : 'Youth'}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sovereign-gold via-cream to-sovereign-gold">
                  {language === 'kr' ? '임파워먼트' : 'Empowerment'}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-cream/70 font-light max-w-2xl mx-auto leading-relaxed">
                {language === 'kr'
                  ? '미래를 이끌어갈 청년들이 창조적 사고와 글로벌 시민의식으로 세상을 변화시키는 힘'
                  : 'The power of future-leading youth changing the world with creative thinking and global citizenship'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-px rounded-2xl bg-gradient-to-b from-sovereign-gold/20 to-transparent overflow-hidden"
            >
              <div className="relative bg-river-depths/80 border border-sovereign-gold/10 rounded-[15px] p-12 md:p-16 text-center backdrop-blur-md inset-shadow-sm inset-shadow-sovereign-gold/5">
                <Star className="h-12 w-12 text-sovereign-gold mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-cream mb-8 font-[family-name:var(--font-heading)]">
                  {language === 'kr' ? '우리 세대의 사명' : 'Our Generation\'s Mission'}
                </h2>
                <p className="text-xl md:text-2xl text-cream/80 leading-relaxed font-light">
                  {language === 'kr'
                    ? '분단의 벽을 넘어 통일된 한반도에서 시작되는 새로운 세계. 기술과 인문학이 조화를 이루고, 동서양 문명이 만나는 융합의 시대를 열어가는 것이 우리의 역사적 소명입니다.'
                    : 'A new world beginning from a unified Korean Peninsula beyond the walls of division. Opening an era of convergence where technology and humanities harmonize, where Eastern and Western civilizations meet - this is our historical calling.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Empowerment Pillars Bento */}
        <section className="py-24 px-4 relative z-10 border-t border-cream/5 bg-river-depths/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">
                {language === 'kr' ? '청년 역량 개발의 네 기둥' : 'Four Pillars of Youth Development'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {empowermentPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent group ${pillar.colSpan}`}
                >
                  <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 h-full flex flex-col justify-between inset-shadow-sm inset-shadow-cream/5 group-hover:bg-river-depths/80 transition-colors">
                    <div>
                      <div className="w-16 h-16 rounded-xl bg-sovereign-gold/10 border border-sovereign-gold/20 flex items-center justify-center mb-6">
                        <pillar.icon className="h-8 w-8 text-sovereign-gold" />
                      </div>
                      <h3 className="text-2xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">{pillar.title}</h3>
                      <p className="text-cream/70 text-base leading-relaxed mb-8">{pillar.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {pillar.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-cream/5 border border-cream/10 rounded-md text-sm font-mono text-cream/70">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Fields Grid */}
        <section className="py-24 px-4 relative z-10 border-t border-cream/5 bg-[#050a10]">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">
                {language === 'kr' ? '창작 분야별 활동' : 'Creative Field Activities'}
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto text-lg font-light">
                {language === 'kr'
                  ? '청년들이 가장 활발하게 활동하는 창작 분야와 참여자 수'
                  : 'Most active creative fields and participant numbers among youth'}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {creativeFields.map((field, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-px rounded-xl bg-gradient-to-b from-cream/10 to-transparent group hover:-translate-y-1 transition-transform"
                >
                  <div className="relative bg-river-depths border border-cream/5 rounded-[11px] p-6 text-center h-full inset-shadow-sm inset-shadow-cream/5 flex flex-col items-center justify-center">
                    <field.icon className="h-10 w-10 text-sovereign-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-cream/90 font-medium mb-2 text-sm md:text-base">{field.name}</h3>
                    <p className="text-sovereign-gold font-mono text-xl font-bold tracking-tight">{field.participants}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Projects */}
        <section className="py-24 px-4 relative z-10 border-t border-cream/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Globe className="h-12 w-12 text-sovereign-gold mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">
                {language === 'kr' ? '글로벌 청년 프로젝트' : 'Global Youth Projects'}
              </h2>
            </motion.div>

            <div className="space-y-8">
              {globalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative p-px rounded-2xl bg-gradient-to-r from-cream/10 via-transparent to-cream/10 group"
                >
                  <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 md:p-12 overflow-hidden inset-shadow-sm inset-shadow-cream/5">
                    <div className="grid lg:grid-cols-5 gap-12">
                      <div className="lg:col-span-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sovereign-gold/20 bg-sovereign-gold/5 mb-6">
                          <span className="w-2 h-2 rounded-full bg-sovereign-gold animate-pulse" />
                          <span className="text-xs font-mono text-sovereign-gold uppercase tracking-wider">Active</span>
                        </div>
                        <h3 className="text-3xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">{project.title}</h3>
                        <p className="text-cream/70 text-lg leading-relaxed mb-8">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-3">
                          {project.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 bg-cream/5 px-4 py-2 rounded-lg border border-cream/10">
                              <Leaf className="h-4 w-4 text-sovereign-gold" />
                              <span className="text-cream/90 text-sm font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-2 flex items-center">
                        <div className="w-full bg-[#050a10] rounded-xl p-8 border border-cream/5 shadow-inner">
                          <h4 className="text-sm uppercase tracking-widest text-cream/50 mb-6 font-mono text-center">
                            {language === 'kr' ? '프로젝트 규모' : 'Project Impact'}
                          </h4>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                              <p className="text-3xl font-bold text-sovereign-gold mb-1">{project.impact.participants}</p>
                              <p className="text-xs text-cream/50 uppercase tracking-wider">{language === 'kr' ? '참가자' : 'Participants'}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-3xl font-bold text-cream mb-1">{project.impact.countries}</p>
                              <p className="text-xs text-cream/50 uppercase tracking-wider">{language === 'kr' ? '국가' : 'Countries'}</p>
                            </div>
                            <div className="col-span-2 text-center pt-4 border-t border-cream/5">
                              <p className="text-3xl font-bold text-sovereign-gold mb-1">{project.impact.projects}</p>
                              <p className="text-xs text-cream/50 uppercase tracking-wider">{language === 'kr' ? '프로젝트 수' : 'Total Projects'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Bento */}
        <section className="py-24 px-4 relative z-10 border-t border-cream/5 bg-river-depths/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Heart className="h-12 w-12 text-sovereign-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-heading)]">
                {language === 'kr' ? '청년 성공 스토리' : 'Youth Success Stories'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent group ${story.colSpan}`}
                >
                  <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 h-full flex flex-col justify-between overflow-hidden inset-shadow-sm inset-shadow-cream/5 group-hover:bg-[#122338] transition-colors">
                    
                    <div className="relative z-10 mb-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full border border-sovereign-gold/30 bg-sovereign-gold/10 flex items-center justify-center text-sovereign-gold font-bold font-mono">
                          {story.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-cream">{story.name}</h3>
                          <p className="text-sovereign-gold text-sm font-mono tracking-wide">{story.role}</p>
                        </div>
                      </div>
                      <p className="text-cream/70 text-lg leading-relaxed font-light italic">"{story.story}"</p>
                    </div>

                    <div className="relative z-10 mt-auto bg-river-depths/80 rounded-xl p-4 border border-cream/5 flex items-center gap-4">
                      <Star className="h-6 w-6 text-sovereign-gold shrink-0" />
                      <div>
                        <p className="text-xs text-cream/50 uppercase tracking-widest mb-1">Key Achievement</p>
                        <p className="text-sovereign-gold text-sm font-semibold">{story.achievement}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-4 relative z-10 border-t border-cream/5 bg-gradient-to-b from-[#050a10] to-river-depths">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-5xl text-center"
          >
            <Globe className="h-16 w-16 text-cream/20 mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-8 font-[family-name:var(--font-heading)] tracking-tight">
              {language === 'kr'
                ? '함께 미래를 만들어가요'
                : 'Let\'s Create the Future Together'}
            </h2>
            <p className="text-xl md:text-2xl text-cream/60 font-light mb-16 leading-relaxed max-w-3xl mx-auto">
              {language === 'kr'
                ? '청년의 창조적 에너지와 글로벌 시민의식으로 평화롭고 번영하는 세계를 만들어갑시다.'
                : 'Let\'s create a peaceful and prosperous world with youth\'s creative energy and global citizenship.'}
            </p>

            <div className="relative p-px rounded-2xl bg-gradient-to-b from-cream/10 to-transparent max-w-3xl mx-auto mb-16 text-left">
              <div className="relative bg-river-depths border border-cream/5 rounded-[15px] p-8 md:p-12 inset-shadow-sm inset-shadow-cream/5">
                <h3 className="text-2xl font-bold text-sovereign-gold mb-8 font-[family-name:var(--font-heading)] border-b border-cream/10 pb-4">
                  {language === 'kr' ? '청년 행동 강령' : 'Youth Action Charter'}
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-cream mb-6 uppercase tracking-widest text-sm">{language === 'kr' ? '우리의 약속' : 'Our Promise'}</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sovereign-gold mt-2 shrink-0" />
                        <span className="text-cream/80 text-sm leading-relaxed">{language === 'kr' ? '창의적 사고로 문제를 해결한다' : 'Solve problems with creative thinking'}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sovereign-gold mt-2 shrink-0" />
                        <span className="text-cream/80 text-sm leading-relaxed">{language === 'kr' ? '다양성을 존중하고 포용한다' : 'Respect and embrace diversity'}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-sovereign-gold mt-2 shrink-0" />
                        <span className="text-cream/80 text-sm leading-relaxed">{language === 'kr' ? '지속가능한 미래를 위해 행동한다' : 'Act for a sustainable future'}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-cream mb-6 uppercase tracking-widest text-sm">{language === 'kr' ? '우리의 목표' : 'Our Goals'}</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream/50 mt-2 shrink-0" />
                        <span className="text-cream/80 text-sm leading-relaxed">{language === 'kr' ? '평화로운 세계 공동체 건설' : 'Building a peaceful global community'}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream/50 mt-2 shrink-0" />
                        <span className="text-cream/80 text-sm leading-relaxed">{language === 'kr' ? '기술의 인간적 활용' : 'Humanistic use of technology'}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream/50 mt-2 shrink-0" />
                        <span className="text-cream/80 text-sm leading-relaxed">{language === 'kr' ? '문화와 전통의 현대적 계승' : 'Modern succession of culture and tradition'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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
                href="/mission"
                className="group relative inline-flex items-center justify-center px-8 py-4 border border-cream/20 text-cream font-bold rounded-xl overflow-hidden hover:bg-cream/5 transition-colors"
              >
                <span className="relative flex items-center gap-2">
                  {language === 'kr' ? '우리의 사명' : 'Our Mission'}
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
