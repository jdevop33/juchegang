"use client"

import { Menu, X, Sparkles, Home, Globe, Users, Heart, Calendar, Image as ImageIcon, BookOpen, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import * as Drawer from "vaul"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

export function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t } = useLanguage()
  const pathname = usePathname()

  // Enhanced scroll detection with progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollY / documentHeight) * 100
      
      setScrollProgress(progress)
      setIsScrolled(scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsMenuOpen(false)
      }
    }
  }

  const navItems = [
    { href: "/", label: t('home'), icon: Home, color: "red" },
    { href: "/mission", label: t('mission'), icon: Globe, color: "blue" },
    { href: "/cultural-exchange", label: t('culture'), icon: Users, color: "purple" },
    { href: "/youth-empowerment", label: t('youth'), icon: Heart, color: "green" },
    { href: "/peace-timeline", label: t('peace'), icon: Calendar, color: "indigo" },
    { href: "/gallery", label: t('gallery'), icon: ImageIcon, color: "pink", featured: true },
    { href: "/truth-project", label: t('truthProject'), icon: BookOpen, color: "cyan", featured: true },
  ]

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
        <motion.div 
          className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-xl border-b border-red-500/20 shadow-2xl" 
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="group flex items-center gap-3"
              >
                <div className="relative">
                  <Image 
                    src="/uselogo.svg" 
                    alt="Juche GanG" 
                    width={48} 
                    height={48}
                    className="sm:w-14 sm:h-14"
                    priority 
                  />
                  <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
                    Juche GanG
                  </h1>
                  <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
                    Peace • Unity • Excellence
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:block">
                <LanguageToggle />
              </div>
              
              <Link 
                href="/contact" 
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold text-xs sm:text-sm transition-all transform hover:scale-105 shadow-lg"
              >
                {t('contact')}
              </Link>

              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all focus:ring-2 focus:ring-white/30 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open navigation menu"
                type="button"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <Drawer.Root direction="right" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
              <Drawer.Content className="fixed right-0 top-0 h-full w-[85vw] max-w-md bg-gradient-to-b from-gray-900 to-black border-l border-red-500/20 shadow-2xl z-[101]">
                <div className="flex flex-col h-full">
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">Navigation</h2>
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <nav className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={(e) => {
                              handleSmoothScroll(e, item.href)
                              if (!item.href.startsWith('#')) setIsMenuOpen(false)
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                              pathname === item.href
                                ? "bg-gradient-to-r from-red-500/20 to-transparent text-white border-l-4 border-red-500"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            } ${item.featured ? 'ring-1 ring-yellow-500/20' : ''}`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                            {item.featured && (
                              <span className="ml-auto text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">
                                Featured
                              </span>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-sm text-white/60 mb-4">Connect with us</p>
                      <Link
                        href="/social"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">Social Channels</span>
                      </Link>
                    </div>

                    {/* Mobile Language Toggle */}
                    <div className="mt-6 sm:hidden">
                      <LanguageToggle />
                    </div>
                  </nav>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        )}
      </AnimatePresence>
    </>
  )
}