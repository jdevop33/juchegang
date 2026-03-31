"use client"

import { Menu, X, Sparkles, Home, Globe, Users, Heart, Calendar, Image as ImageIcon, BookOpen, MessageCircle, FileText, Anchor, Landmark } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import * as Drawer from "vaul"
import { LanguageToggle } from "@/components/language-toggle"
import MotionToggle from "@/components/motion-toggle"
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
    { href: "/", label: t('home'), icon: Home },
    { href: "/briefings", label: "Briefings", icon: FileText, featured: true },
    { href: "/mission", label: t('mission'), icon: Globe },
    { href: "/cultural-exchange", label: t('culture'), icon: Users },
    { href: "/youth-empowerment", label: t('youth'), icon: Heart },
    { href: "/social", label: "Social", icon: MessageCircle },
    { href: "/peace-timeline", label: t('peace'), icon: Calendar },
    { href: "/civilizations", label: "Civilizations", icon: Landmark },
    { href: "/gallery", label: t('gallery'), icon: ImageIcon, featured: true },
    { href: "/truth-project", label: t('truthProject'), icon: BookOpen, featured: true },
  ]

  return (
    <>
      {/* Progress Bar - River Flow */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-river-current via-sovereign-gold to-river-current"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-river-depths/95 backdrop-blur-xl border-b border-sovereign-gold/20 shadow-2xl shadow-river-depths/50"
            : "bg-gradient-to-b from-river-depths/80 to-transparent"
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
                    src="/logo-icon-gang.png"
                    alt="JucheGang"
                    width={64}
                    height={64}
                    className="sm:w-[72px] sm:h-[72px]"
                    priority
                  />
                  <div className="absolute inset-0 bg-sovereign-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Text hidden - logo contains branding */}
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
                      ? "bg-river-current/30 text-river-mist"
                      : "text-cream-muted hover:text-river-mist hover:bg-river-current/20"
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
              <MotionToggle />

              <Link
                href="/contact"
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-sovereign-gold to-sovereign-dark hover:from-sovereign-gold hover:to-sovereign-gold text-river-depths font-bold text-xs sm:text-sm transition-all transform hover:scale-105 shadow-lg shadow-sovereign-gold/20"
              >
                {t('contact')}
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-lg bg-river-current/20 hover:bg-river-current/30 transition-all focus:ring-2 focus:ring-sovereign-gold/50 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open navigation menu"
                type="button"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-river-mist" />
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
              <Drawer.Overlay className="fixed inset-0 bg-river-depths/90 backdrop-blur-sm z-[100]" />
              <Drawer.Content className="fixed right-0 top-0 h-full w-[85vw] max-w-md bg-gradient-to-b from-river-depths via-river-deep to-river-depths border-l border-sovereign-gold/20 shadow-2xl z-[101]">
                <div className="flex flex-col h-full">
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between p-6 border-b border-river-current/30">
                    <div className="flex items-center gap-2">
                      <Anchor className="w-5 h-5 text-sovereign-gold" />
                      <h2 className="text-xl font-heading font-bold text-sovereign-gold">Navigate</h2>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-river-current/20 transition-colors"
                    >
                      <X className="w-6 h-6 text-river-mist" />
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
                                ? "bg-gradient-to-r from-river-current/40 to-transparent text-river-mist border-l-4 border-sovereign-gold"
                                : "text-cream-muted hover:text-river-mist hover:bg-river-current/20"
                            } ${item.featured ? 'ring-1 ring-sovereign-gold/30' : ''}`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                            {item.featured && (
                              <span className="ml-auto text-xs px-2 py-1 bg-sovereign-gold/20 text-sovereign-gold rounded-full">
                                Featured
                              </span>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 pt-8 border-t border-river-current/30">
                      <p className="text-sm text-cream-muted mb-4">Connect with us</p>
                      <Link
                        href="/social"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-river-current/30 to-river-mid/30 text-river-mist hover:from-river-current/50 hover:to-river-mid/50 transition-all"
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
