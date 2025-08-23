"use client"

import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Eye, 
  EyeOff, 
  Type, 
  Minus, 
  Plus, 
  Palette, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw,
  Settings,
  Check,
  Contrast,
  Focus,
  MousePointer
} from 'lucide-react'

interface AccessibilityContextType {
  fontSize: number
  highContrast: boolean
  reducedMotion: boolean
  screenReader: boolean
  focusVisible: boolean
  autoPlay: boolean
  setFontSize: (size: number) => void
  setHighContrast: (enabled: boolean) => void
  setReducedMotion: (enabled: boolean) => void
  setScreenReader: (enabled: boolean) => void
  setFocusVisible: (enabled: boolean) => void
  setAutoPlay: (enabled: boolean) => void
  announceToScreenReader: (message: string) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null)

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(16)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [screenReader, setScreenReader] = useState(false)
  const [focusVisible, setFocusVisible] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const ariaLiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load preferences from localStorage
    const savedPrefs = localStorage.getItem('accessibility-preferences')
    if (savedPrefs) {
      try {
        const prefs = JSON.parse(savedPrefs)
        setFontSize(prefs.fontSize || 16)
        setHighContrast(prefs.highContrast || false)
        setReducedMotion(prefs.reducedMotion || false)
        setScreenReader(prefs.screenReader || false)
        setFocusVisible(prefs.focusVisible || false)
        setAutoPlay(prefs.autoPlay ?? true)
      } catch (e) {
        console.warn('Could not load accessibility preferences')
      }
    }

    // Detect system preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true)
    }

    if (window.matchMedia('(prefers-contrast: high)').matches) {
      setHighContrast(true)
    }

    // Detect screen reader
    const hasScreenReader = window.navigator.userAgent.includes('NVDA') || 
                           window.navigator.userAgent.includes('JAWS') || 
                           window.speechSynthesis || 
                           'speechSynthesis' in window

    if (hasScreenReader) {
      setScreenReader(true)
    }
  }, [])

  useEffect(() => {
    // Save preferences to localStorage
    const prefs = {
      fontSize,
      highContrast,
      reducedMotion,
      screenReader,
      focusVisible,
      autoPlay
    }
    localStorage.setItem('accessibility-preferences', JSON.stringify(prefs))

    // Apply CSS custom properties
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`)
    
    // Apply class-based preferences
    document.documentElement.classList.toggle('high-contrast', highContrast)
    document.documentElement.classList.toggle('reduced-motion', reducedMotion)
    document.documentElement.classList.toggle('focus-visible', focusVisible)
    
  }, [fontSize, highContrast, reducedMotion, screenReader, focusVisible, autoPlay])

  const announceToScreenReader = (message: string) => {
    if (ariaLiveRef.current) {
      ariaLiveRef.current.textContent = message
      // Clear after announcement
      setTimeout(() => {
        if (ariaLiveRef.current) {
          ariaLiveRef.current.textContent = ''
        }
      }, 1000)
    }
  }

  const value = {
    fontSize,
    highContrast,
    reducedMotion,
    screenReader,
    focusVisible,
    autoPlay,
    setFontSize,
    setHighContrast,
    setReducedMotion,
    setScreenReader,
    setFocusVisible,
    setAutoPlay,
    announceToScreenReader
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      {/* Screen reader announcements */}
      <div
        ref={ariaLiveRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </AccessibilityContext.Provider>
  )
}

export function AccessibilityToolbar() {
  const {
    fontSize,
    highContrast,
    reducedMotion,
    screenReader,
    focusVisible,
    autoPlay,
    setFontSize,
    setHighContrast,
    setReducedMotion,
    setScreenReader,
    setFocusVisible,
    setAutoPlay,
    announceToScreenReader
  } = useAccessibility()

  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'display' | 'navigation' | 'audio'>('display')

  const resetToDefaults = () => {
    setFontSize(16)
    setHighContrast(false)
    setReducedMotion(false)
    setFocusVisible(false)
    setAutoPlay(true)
    announceToScreenReader('Accessibility settings reset to defaults')
  }

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24)
    setFontSize(newSize)
    announceToScreenReader(`Font size increased to ${newSize} pixels`)
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12)
    setFontSize(newSize)
    announceToScreenReader(`Font size decreased to ${newSize} pixels`)
  }

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    announceToScreenReader(`High contrast ${newValue ? 'enabled' : 'disabled'}`)
  }

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion
    setReducedMotion(newValue)
    announceToScreenReader(`Reduced motion ${newValue ? 'enabled' : 'disabled'}`)
  }

  const toggleFocusVisible = () => {
    const newValue = !focusVisible
    setFocusVisible(newValue)
    announceToScreenReader(`Focus indicators ${newValue ? 'enhanced' : 'normal'}`)
  }

  const toggleAutoPlay = () => {
    const newValue = !autoPlay
    setAutoPlay(newValue)
    announceToScreenReader(`Auto-play ${newValue ? 'enabled' : 'disabled'}`)
  }

  return (
    <>
      {/* Accessibility Toolbar Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          variant="outline"
          className="rounded-full w-12 h-12 p-0 shadow-lg bg-background/90 backdrop-blur-sm border-2 hover:border-accent focus-premium"
          aria-label="Open accessibility settings"
          aria-expanded={isOpen}
        >
          <Settings className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed right-4 top-4 bottom-4 w-96 z-50"
              role="dialog"
              aria-labelledby="accessibility-panel-title"
              aria-modal="true"
            >
              <Card className="h-full overflow-hidden glass-premium">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h2 id="accessibility-panel-title" className="text-lg font-semibold">
                      Accessibility Settings
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full w-8 h-8 p-0"
                      aria-label="Close accessibility settings"
                    >
                      ×
                    </Button>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex mb-4 bg-muted/30 rounded-lg p-1" role="tablist">
                    {[
                      { id: 'display', label: 'Display', icon: Eye },
                      { id: 'navigation', label: 'Navigation', icon: MousePointer },
                      { id: 'audio', label: 'Audio', icon: Volume2 }
                    ].map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        role="tab"
                        aria-selected={activeTab === id}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded text-sm transition-colors ${
                          activeTab === id 
                            ? 'bg-accent text-accent-foreground' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setActiveTab(id as typeof activeTab)}
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 overflow-y-auto">
                    {activeTab === 'display' && (
                      <div className="space-y-4" role="tabpanel" aria-labelledby="display-tab">
                        {/* Font Size */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Font Size</label>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={decreaseFontSize}
                              disabled={fontSize <= 12}
                              aria-label="Decrease font size"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="min-w-[3rem] text-center text-sm">
                              {fontSize}px
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={increaseFontSize}
                              disabled={fontSize >= 24}
                              aria-label="Increase font size"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* High Contrast */}
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">High Contrast</label>
                            <p className="text-xs text-muted-foreground">
                              Increases color contrast for better visibility
                            </p>
                          </div>
                          <Button
                            variant={highContrast ? "default" : "outline"}
                            size="sm"
                            onClick={toggleHighContrast}
                            aria-pressed={highContrast}
                            className="gap-2"
                          >
                            <Contrast className="w-4 h-4" />
                            {highContrast && <Check className="w-4 h-4" />}
                          </Button>
                        </div>

                        {/* Reduced Motion */}
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Reduced Motion</label>
                            <p className="text-xs text-muted-foreground">
                              Minimizes animations and transitions
                            </p>
                          </div>
                          <Button
                            variant={reducedMotion ? "default" : "outline"}
                            size="sm"
                            onClick={toggleReducedMotion}
                            aria-pressed={reducedMotion}
                            className="gap-2"
                          >
                            <Pause className="w-4 h-4" />
                            {reducedMotion && <Check className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    )}

                    {activeTab === 'navigation' && (
                      <div className="space-y-4" role="tabpanel" aria-labelledby="navigation-tab">
                        {/* Enhanced Focus */}
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Enhanced Focus</label>
                            <p className="text-xs text-muted-foreground">
                              Makes focus indicators more prominent
                            </p>
                          </div>
                          <Button
                            variant={focusVisible ? "default" : "outline"}
                            size="sm"
                            onClick={toggleFocusVisible}
                            aria-pressed={focusVisible}
                            className="gap-2"
                          >
                            <Focus className="w-4 h-4" />
                            {focusVisible && <Check className="w-4 h-4" />}
                          </Button>
                        </div>

                        {/* Screen Reader Mode */}
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Screen Reader Mode</label>
                            <p className="text-xs text-muted-foreground">
                              Optimizes for screen reader compatibility
                            </p>
                          </div>
                          <Badge variant={screenReader ? "default" : "outline"}>
                            {screenReader ? "Detected" : "Not Detected"}
                          </Badge>
                        </div>
                      </div>
                    )}

                    {activeTab === 'audio' && (
                      <div className="space-y-4" role="tabpanel" aria-labelledby="audio-tab">
                        {/* Auto-play */}
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Auto-play Media</label>
                            <p className="text-xs text-muted-foreground">
                              Automatically play videos and animations
                            </p>
                          </div>
                          <Button
                            variant={autoPlay ? "default" : "outline"}
                            size="sm"
                            onClick={toggleAutoPlay}
                            aria-pressed={autoPlay}
                            className="gap-2"
                          >
                            {autoPlay ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                            {autoPlay && <Check className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Reset Button */}
                  <div className="pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetToDefaults}
                      className="w-full gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset to Defaults
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// Screen reader only content
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>
}

// Skip links component
export function SkipLinks() {
  const skipLinks = [
    { href: '#main-content', label: 'Skip to main content' },
    { href: '#navigation', label: 'Skip to navigation' },
    { href: '#footer', label: 'Skip to footer' }
  ]

  return (
    <nav className="sr-only focus-within:not-sr-only" aria-label="Skip links">
      <ul className="fixed top-4 left-4 z-50 space-y-2">
        {skipLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="block px-4 py-2 bg-accent text-accent-foreground rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-foreground"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}