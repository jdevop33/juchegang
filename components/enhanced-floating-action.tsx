"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Heart, Globe, MessageCircle, Calendar, Share2, X } from "lucide-react"
import Link from "next/link"

export function EnhancedFloatingAction() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { 
      icon: Heart, 
      label: "Solidarity", 
      href: "/mission", 
      color: "bg-red-500 hover:bg-red-600",
      delay: 0.1 
    },
    { 
      icon: Globe, 
      label: "Peace Timeline", 
      href: "/peace-timeline", 
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.15 
    },
    { 
      icon: MessageCircle, 
      label: "Connect", 
      href: "/social", 
      color: "bg-purple-500 hover:bg-purple-600",
      delay: 0.2 
    },
    { 
      icon: Calendar, 
      label: "Cultural Events", 
      href: "/cultural-exchange", 
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.25 
    },
    { 
      icon: Share2, 
      label: "Share Peace", 
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: "Juche GanG - Building Peace Together",
            text: "Join us in building bridges between nations through understanding and solidarity",
            url: window.location.href
          })
        } else {
          navigator.clipboard.writeText(window.location.href)
          // Could add a toast notification here
        }
      },
      color: "bg-yellow-500 hover:bg-yellow-600",
      delay: 0.3 
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                exit={{ scale: 0, x: 20 }}
                transition={{ delay: action.delay, type: "spring", stiffness: 200 }}
              >
                {action.href ? (
                  <Link
                    href={action.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 ${action.color} 
                      text-white px-4 py-3 rounded-full shadow-lg 
                      transform transition-all hover:scale-105 
                      backdrop-blur-sm border border-white/20
                    `}
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {action.label}
                    </span>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      action.onClick?.()
                      setIsOpen(false)
                    }}
                    className={`
                      flex items-center gap-3 ${action.color} 
                      text-white px-4 py-3 rounded-full shadow-lg 
                      transform transition-all hover:scale-105 
                      backdrop-blur-sm border border-white/20
                    `}
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {action.label}
                    </span>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full shadow-xl 
          flex items-center justify-center
          transition-all duration-300
          ${isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600'
          }
          text-white backdrop-blur-sm border border-white/20
        `}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Accessibility overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}