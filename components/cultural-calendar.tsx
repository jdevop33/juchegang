"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Star, Globe, Heart } from "lucide-react"
import { format } from "date-fns"

const culturalEvents = [
  // Chinese holidays
  { date: "2024-02-10", name: "Spring Festival", country: "China", flag: "🇨🇳", color: "red" },
  { date: "2024-10-01", name: "National Day", country: "China", flag: "🇨🇳", color: "red" },
  { date: "2024-09-17", name: "Mid-Autumn Festival", country: "China", flag: "🇨🇳", color: "red" },

  // Russian holidays
  { date: "2024-05-09", name: "Victory Day", country: "Russia", flag: "🇷🇺", color: "blue" },
  { date: "2024-06-12", name: "Russia Day", country: "Russia", flag: "🇷🇺", color: "blue" },
  { date: "2024-11-04", name: "Unity Day", country: "Russia", flag: "🇷🇺", color: "blue" },

  // DPRK holidays
  { date: "2024-02-16", name: "Day of the Shining Star", country: "DPRK", flag: "🇰🇵", color: "red" },
  { date: "2024-04-15", name: "Day of the Sun", country: "DPRK", flag: "🇰🇵", color: "red" },
  { date: "2024-09-09", name: "Foundation Day", country: "DPRK", flag: "🇰🇵", color: "red" },

  // Peace & Unity days
  { date: "2024-06-15", name: "Inter-Korean Summit Anniversary", country: "Peace", flag: "🕊️", color: "gold" },
  { date: "2024-09-21", name: "International Day of Peace", country: "Global", flag: "🌍", color: "blue" },
]

export function CulturalCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<typeof culturalEvents[0] | null>(null)
  const today = new Date()

  // Sort events by date
  const sortedEvents = [...culturalEvents].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  // Get upcoming events
  const upcomingEvents = sortedEvents.filter(event =>
    new Date(event.date) >= today
  ).slice(0, 5)

  const getColorClass = (color: string) => {
    const colors = {
      red: "from-korean-red/20 to-korean-red/30 border-korean-red/30",
      blue: "from-river-current/30 to-river-current/40 border-river-current/50",
      gold: "from-sovereign-gold/20 to-sovereign-gold/30 border-sovereign-gold/40",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="bg-gradient-to-br from-river-depths via-river-current/20 to-river-depths rounded-2xl p-6 border border-river-current/30">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-sovereign-gold" />
        <h3 className="text-xl font-bold text-cream">Cultural Unity Calendar</h3>
      </div>

      <div className="space-y-3">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={`${event.date}-${event.name}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedEvent(event)}
            className={`
              bg-gradient-to-r ${getColorClass(event.color)}
              backdrop-blur-sm rounded-lg p-4 border
              cursor-pointer hover:scale-[1.02] transition-all
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{event.flag}</span>
                <div>
                  <h4 className="font-semibold text-cream">{event.name}</h4>
                  <p className="text-sm text-cream/60">
                    {format(new Date(event.date), "MMMM d, yyyy")}
                  </p>
                  <p className="text-xs text-cream/50 mt-1">{event.country}</p>
                </div>
              </div>
              <Star className="w-4 h-4 text-sovereign-gold" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-river-current/20 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-korean-red" />
              <p className="text-sm text-cream">
                Let's celebrate {selectedEvent.country}'s culture together!
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedEvent(null)
              }}
              className="text-xs text-cream/60 hover:text-cream transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 pt-4 border-t border-river-current/30">
        <div className="flex items-center gap-2 text-xs text-cream/50">
          <Globe className="w-4 h-4" />
          <span>Celebrating diversity, building unity</span>
        </div>
      </div>
    </div>
  )
}
