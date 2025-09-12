"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Heart, Users, Globe } from "lucide-react"

export function PeaceCounter() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  // Calculate time since a significant peace initiative (example: June 15, 2000 Summit)
  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2000-06-15T00:00:00')
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      
      setDays(days)
      setHours(hours)
      setMinutes(minutes)
    }

    calculateTime()
    const interval = setInterval(calculateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Calendar, value: days.toLocaleString(), label: "Days of Peace Dialogue" },
    { icon: Heart, value: "∞", label: "Hearts United" },
    { icon: Users, value: "7.9B", label: "People for Peace" },
    { icon: Globe, value: "195", label: "Nations Connected" },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 py-8 border-y border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Journey to Unity
          </h3>
          <p className="text-white/60 text-sm">
            Building bridges since the historic 2000 Inter-Korean Summit
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-6 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-sm text-yellow-400">
            ✨ Every moment brings us closer to peaceful reunification ✨
          </p>
        </motion.div>
      </div>
    </div>
  )
}