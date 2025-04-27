"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function JucheHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll detection for header transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-red-950/90 backdrop-blur-md border-b border-red-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-300 hover:text-white transition-colors">
            <a href="#">Juche GanG</a>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-red-200 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#laws" className="text-red-200 hover:text-white transition-colors">
                The 48 Laws
              </a>
            </li>
            <li>
              <a href="#about" className="text-red-200 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-red-200 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-200 hover:text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-950/95 backdrop-blur-md border-t border-red-800 py-4 animate-fadeIn">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#laws"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The 48 Laws
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
