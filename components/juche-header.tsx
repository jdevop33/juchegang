"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

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
            <Link href="/">Juche GanG</Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-red-200 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#laws" className="text-red-200 hover:text-white transition-colors">
                The 48 Laws
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-red-200 hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-red-200 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/briefings" className="text-red-200 hover:text-white transition-colors">
                Briefings
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors font-semibold">
                📸 Gallery
              </Link>
            </li>
            <li>
              <Link href="/truth-project" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors font-semibold">
                🌍 Truth Project
              </Link>
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
                <Link
                  href="/"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#laws"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  The 48 Laws
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/briefings"
                  className="text-red-200 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Briefings
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors block font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📸 Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/truth-project"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors block font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🌍 Truth Project
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
