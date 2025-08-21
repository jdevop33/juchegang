"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Rocket, Users, Lightbulb, Earth, BookOpen, Code, Palette, Music, Camera, Mic, Globe, Heart, Target, Trophy, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Link from "next/link"

export default function YouthEmpowermentPage() {
  const { language } = useLanguage()

  const empowermentPillars = [
    {
      icon: Lightbulb,
      title: language === 'kr' ? '창조적 사고력' : 'Creative Thinking',
      description: language === 'kr' 
        ? '기성 관념을 뛰어넘어 새로운 해답을 찾는 혁신적 사고력을 기릅니다'
        : 'Developing innovative thinking that transcends conventional ideas to find new solutions',
      skills: language === 'kr' ? ['문제해결', '혁신', '상상력', '비판적사고'] : ['Problem Solving', 'Innovation', 'Imagination', 'Critical Thinking'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: language === 'kr' ? '글로벌 리더십' : 'Global Leadership',
      description: language === 'kr'
        ? '다양한 문화와 관점을 이해하고 세계를 이끌어가는 포용적 리더십을 함양합니다'
        : 'Cultivating inclusive leadership that understands diverse cultures and leads the world',
      skills: language === 'kr' ? ['소통', '공감', '협력', '비전제시'] : ['Communication', 'Empathy', 'Collaboration', 'Vision'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Earth,
      title: language === 'kr' ? '지구적 시민의식' : 'Global Citizenship',
      description: language === 'kr'
        ? '인류 공동의 과제를 자신의 일로 여기고 지속가능한 미래를 위해 행동합니다'
        : 'Taking humanity\'s common challenges as our own and acting for a sustainable future',
      skills: language === 'kr' ? ['환경의식', '평화', '정의감', '책임감'] : ['Environmental Awareness', 'Peace', 'Justice', 'Responsibility'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: language === 'kr' ? '미래 기술 역량' : 'Future Tech Skills',
      description: language === 'kr'
        ? '4차 산업혁명 시대의 핵심 기술을 습득하고 인간 중심의 기술 윤리를 실현합니다'
        : 'Mastering key technologies of the 4th industrial revolution and realizing human-centered tech ethics',
      skills: language === 'kr' ? ['AI/ML', '블록체인', '로보틱스', '바이오텍'] : ['AI/ML', 'Blockchain', 'Robotics', 'Biotech'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const creativeFields = [
    { icon: Code, name: language === 'kr' ? '프로그래밍' : 'Programming', participants: '50K+' },
    { icon: Palette, name: language === 'kr' ? '디지털 아트' : 'Digital Art', participants: '30K+' },
    { icon: Music, name: language === 'kr' ? '음악 제작' : 'Music Production', participants: '25K+' },
    { icon: Camera, name: language === 'kr' ? '영상 제작' : 'Video Production', participants: '40K+' },
    { icon: Mic, name: language === 'kr' ? '팟캐스트' : 'Podcasting', participants: '15K+' },
    { icon: BookOpen, name: language === 'kr' ? '창작 문학' : 'Creative Writing', participants: '20K+' }
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
      achievement: language === 'kr' ? 'UN AI 윤리 위원회 최연소 위원' : 'Youngest member of UN AI Ethics Committee'
    },
    {
      name: language === 'kr' ? '박지훈 (25세)' : 'Park Ji-hoon (25)',
      role: language === 'kr' ? '환경 기술 창업가' : 'Environmental Tech Entrepreneur',
      story: language === 'kr'
        ? '미세먼지 정화 기술을 개발하여 아시아 전역의 공기질 개선에 기여하고 있습니다.'
        : 'Developing fine dust purification technology contributing to air quality improvement across Asia.',
      achievement: language === 'kr' ? '40개 도시 기술 도입' : 'Technology adopted in 40 cities'
    },
    {
      name: language === 'kr' ? '이하은 (23세)' : 'Lee Ha-eun (23)',
      role: language === 'kr' ? '문화 콘텐츠 크리에이터' : 'Cultural Content Creator',
      story: language === 'kr'
        ? '전통 음악과 현대 음악을 융합한 작품으로 세계 청년들에게 한국 문화의 아름다움을 알리고 있습니다.'
        : 'Introducing the beauty of Korean culture to global youth through works fusing traditional and modern music.',
      achievement: language === 'kr' ? '1억 조회수 달성' : '100M+ views achieved'
    }
  ]

  return (
    <>
      <JucheHeader />
      <main className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto max-w-6xl text-center"
        >
          <Rocket className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {language === 'kr' ? '청년 임파워먼트' : 'Youth Empowerment'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {language === 'kr' 
              ? '미래를 이끌어갈 청년들이 창조적 사고와 글로벌 시민의식으로 세상을 변화시키는 힘'
              : 'The power of future-leading youth changing the world with creative thinking and global citizenship'}
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 mb-12 border border-purple-500/30"
          >
            <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {language === 'kr' ? '우리 세대의 사명' : 'Our Generation\'s Mission'}
            </h2>
            <p className="text-white text-lg leading-relaxed">
              {language === 'kr'
                ? '분단의 벽을 넘어 통일된 한반도에서 시작되는 새로운 세계. 기술과 인문학이 조화를 이루고, 동서양 문명이 만나는 융합의 시대를 열어가는 것이 우리의 역사적 소명입니다.'
                : 'A new world beginning from a unified Korean Peninsula beyond the walls of division. Opening an era of convergence where technology and humanities harmonize, where Eastern and Western civilizations meet - this is our historical calling.'}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Empowerment Pillars */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {language === 'kr' ? '청년 역량 개발의 네 기둥' : 'Four Pillars of Youth Development'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {empowermentPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                    <div className="flex flex-wrap gap-2">
                      {pillar.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-800/30 rounded-full text-sm text-purple-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Fields */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {language === 'kr' ? '창작 분야별 활동' : 'Creative Field Activities'}
          </h2>
          <p className="text-center text-white/80 mb-12">
            {language === 'kr' 
              ? '청년들이 가장 활발하게 활동하는 창작 분야와 참여자 수'
              : 'Most active creative fields and participant numbers among youth'}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {creativeFields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30"
              >
                <field.icon className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{field.name}</h3>
                <p className="text-cyan-400 text-lg font-bold">{field.participants}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {language === 'kr' ? '글로벌 청년 프로젝트' : 'Global Youth Projects'}
          </h2>
          
          <div className="space-y-8">
            {globalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h3>
                    <p className="text-white/80 mb-6">{project.description}</p>
                    
                    <div className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-400" />
                          <span className="text-white/70 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-black/30 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">
                        {language === 'kr' ? '프로젝트 규모' : 'Project Scale'}
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-cyan-400">{project.impact.participants}</p>
                          <p className="text-xs text-white/60">{language === 'kr' ? '참가자' : 'Participants'}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-400">{project.impact.countries}</p>
                          <p className="text-xs text-white/60">{language === 'kr' ? '국가' : 'Countries'}</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-yellow-400">{project.impact.projects}</p>
                          <p className="text-xs text-white/60">{language === 'kr' ? '프로젝트' : 'Projects'}</p>
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

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-green-950/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {language === 'kr' ? '청년 성공 스토리' : 'Youth Success Stories'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-500/30"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{story.name}</h3>
                  <p className="text-green-400 text-sm">{story.role}</p>
                </div>
                
                <p className="text-white/80 text-sm mb-4">{story.story}</p>
                
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <Target className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                  <p className="text-yellow-400 text-sm font-semibold">{story.achievement}</p>
                </div>
              </motion.div>
            ))}
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
          <Globe className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'kr' 
              ? '함께 미래를 만들어가요'
              : 'Let\'s Create the Future Together'}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {language === 'kr'
              ? '청년의 창조적 에너지와 글로벌 시민의식으로 평화롭고 번영하는 세계를 만들어갑시다.'
              : 'Let\'s create a peaceful and prosperous world with youth\'s creative energy and global citizenship.'}
          </p>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 mb-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {language === 'kr' ? '청년 행동 강령' : 'Youth Action Charter'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-white mb-2">{language === 'kr' ? '우리의 약속' : 'Our Promise'}</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• {language === 'kr' ? '창의적 사고로 문제를 해결한다' : 'Solve problems with creative thinking'}</li>
                  <li>• {language === 'kr' ? '다양성을 존중하고 포용한다' : 'Respect and embrace diversity'}</li>
                  <li>• {language === 'kr' ? '지속가능한 미래를 위해 행동한다' : 'Act for a sustainable future'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">{language === 'kr' ? '우리의 목표' : 'Our Goals'}</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• {language === 'kr' ? '평화로운 세계 공동체 건설' : 'Building a peaceful global community'}</li>
                  <li>• {language === 'kr' ? '기술의 인간적 활용' : 'Humanistic use of technology'}</li>
                  <li>• {language === 'kr' ? '문화와 전통의 현대적 계승' : 'Modern succession of culture and tradition'}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cultural-exchange"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '문화 교류 참여' : 'Join Cultural Exchange'}
            </Link>
            <Link
              href="/mission"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all transform hover:scale-105"
            >
              {language === 'kr' ? '우리의 사명' : 'Our Mission'}
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
    <JucheFooter />
    </>
  )
}