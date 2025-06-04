"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Menu, X, Star, BookOpen, User } from "lucide-react"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  if (!showScrollTop) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={() => scrollToSection("laws")}
          className="w-12 h-12 bg-friendship-blue hover:bg-friendship-red text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group friendship-glow"
          title="View Laws"
        >
          <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="w-12 h-12 bg-friendship-red hover:bg-friendship-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group friendship-glow"
          title="About"
        >
          <User className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 friendship-gradient hover:friendship-gradient-reverse text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group friendship-glow"
          title="Back to Top"
        >
          <ChevronUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 friendship-gradient hover:friendship-gradient-reverse text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float friendship-glow"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <Menu className="h-6 w-6 transition-transform duration-300" />
        )}
      </button>
    </div>
  )
}
