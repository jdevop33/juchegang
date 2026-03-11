"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Heart, Users, Star } from "lucide-react"

export function PeaceCounter() {
  const [days, setDays] = useState(0)

  // Calculate days since Korea was divided at the 38th parallel (August 15, 1945)
  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('1945-08-15T00:00:00')
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))

      setDays(days)
    }

    calculateTime()
    const interval = setInterval(calculateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Calendar, value: days.toLocaleString(), label: "Days Since Division" },
    { icon: Users, value: "80M+", label: "Korean People, One Nation" },
    { icon: Star, value: "4,920", label: "Years of Korean Civilization" },
    { icon: Heart, value: "1", label: "Korea — 하나의 조선" },
  ]

  return (
    <div className="bg-gradient-to-r from-river-depths via-river-deep to-river-depths py-8 border-y border-sovereign-gold/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h3 className="text-3xl font-korean font-bold text-sovereign-gold mb-1">
            하나의 조선
          </h3>
          <p className="text-river-mist/70 text-sm font-heading tracking-widest uppercase">
            One Korea
          </p>
          <p className="text-cream-muted text-sm mt-2 italic">
            The longest peace can begin with the shortest distance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-river-current/20 backdrop-blur-sm rounded-xl p-4 border border-river-current/30 hover:border-sovereign-gold/40 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-8 h-8 text-river-mid mb-2" />
                <div className="text-2xl font-bold text-river-mist mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-cream-muted">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
