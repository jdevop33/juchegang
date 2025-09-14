"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Globe, Users, Target, Flame, Mountain, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"

export default function MissionPage() {
  const { t, language } = useLanguage()

  const principles = [
    {
      icon: Mountain,
      title: language === 'kr' ? '자주성' : 'Self-Reliance',
      description: language === 'kr' 
        ? '우리는 자신의 운명의 주인이며, 외부 의존 없이 우리 자신의 길을 개척한다.'
        : 'We are masters of our own destiny, forging our path without external dependence.',
      color: 'text-red-500'
    },
    {
      icon: Users,
      title: language === 'kr' ? '집단주의' : 'Collectivism',
      description: language === 'kr'
        ? '개인의 힘이 집단 속에서 배가되며, 함께 우리는 불가능을 가능하게 만든다.'
        : 'Individual strength multiplies within the collective, together we make the impossible possible.',
      color: 'text-blue-500'
    },
    {
      icon: Target,
      title: language === 'kr' ? '목적의식' : 'Purpose',
      description: language === 'kr'
        ? '명확한 목표와 흔들리지 않는 의지로 우리는 인류의 발전을 이끈다.'
        : 'With clear goals and unwavering will, we lead humanity\'s advancement.',
      color: 'text-yellow-500'
    },
    {
      icon: Flame,
      title: language === 'kr' ? '혁명정신' : 'Revolutionary Spirit',
      description: language === 'kr'
        ? '낡은 것을 타파하고 새로운 세계를 건설하는 불굴의 정신.'
        : 'The indomitable spirit that breaks the old and builds the new world.',
      color: 'text-orange-500'
    },
    {
      icon: Globe,
      title: language === 'kr' ? '국제연대' : 'International Solidarity',
      description: language === 'kr'
        ? '전 세계 정의로운 사람들과 연대하여 더 나은 세계를 만든다.'
        : 'Unite with righteous people worldwide to create a better world.',
      color: 'text-green-500'
    },
    {
      icon: Sun,
      title: language === 'kr' ? '희망과 낙관' : 'Hope & Optimism',
      description: language === 'kr'
        ? '어둠 속에서도 빛을 찾고, 역경을 승리로 바꾸는 긍정의 힘.'
        : 'The power to find light in darkness and turn adversity into victory.',
      color: 'text-purple-500'
    }
  ]

  return (
    <>
      <JucheHeader />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              {t('missionTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('missionText')}
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-r from-red-900/50 to-red-800/50 rounded-2xl p-8 mb-16 border border-red-700/50"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              {language === 'kr' ? '우리의 비전' : 'Our Vision'}
            </h2>
            <p className="text-white text-lg leading-relaxed">
              {language === 'kr' 
                ? '우리는 자주, 평화, 친선의 이념 아래 전 인류가 진정한 자유와 평등을 누리는 세계를 건설한다. 각 개인이 자신의 잠재력을 최대한 발휘하면서도 집단의 이익과 조화를 이루는 사회, 그것이 우리가 추구하는 미래이다.'
                : 'Under the ideals of independence, peace, and friendship, we build a world where all humanity enjoys true freedom and equality. A society where each individual maximizes their potential while harmonizing with collective interests - this is the future we pursue.'}
            </p>
          </motion.div>

          {/* Core Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="bg-black/50 border-red-800/50 hover:border-yellow-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className={`mb-4 ${principle.color}`}>
                      <principle.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 rounded-2xl p-12 border border-yellow-700/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
              {language === 'kr' ? '역사의 주인공이 되라' : 'Become the Protagonist of History'}
            </h2>
            <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
              {language === 'kr'
                ? '우리 시대의 위대한 변혁에 동참하라. 당신의 의지와 행동이 새로운 세계를 만드는 초석이 된다.'
                : 'Join the great transformation of our time. Your will and actions become the cornerstone of building a new world.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/social"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {language === 'kr' ? '함께하기' : 'Join Us'}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {language === 'kr' ? '더 알아보기' : 'Learn More'}
              </a>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-2xl md:text-3xl text-yellow-300 italic font-light">
              {language === 'kr'
                ? '"인민대중의 자주적이며 창조적인 생활을 위하여!"'
                : '"For the independent and creative life of the popular masses!"'}
            </blockquote>
          </motion.div>
        </div>
      </section>
    </main>
    <JucheFooter />
    </>
  )
}