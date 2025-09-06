"use client"
import { Star, Heart, Mail, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function JucheFooter() {
  const { t } = useLanguage()
  return (
    <footer className="bg-red-950 border-t border-red-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-red-300">Juche GanG</span>
            </div>
            <p className="text-red-200 mb-4">
              {t('footerBlurb') || 'Dedicated to the pursuit of excellence and the cultivation of personal power through discipline, courage, and unwavering commitment.'}
            </p>
            <div className="flex items-center gap-2 text-red-300">
              <Heart className="h-4 w-4 text-red-500" />
              <span>{t('madeWith')}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-300 mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-red-200 hover:text-white transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#laws" className="text-red-200 hover:text-white transition-colors">
                  {t('laws48')}
                </a>
              </li>
              <li>
                <a href="/social" className="text-red-200 hover:text-white transition-colors">
                  {t('social')}
                </a>
              </li>
              <li>
                <a href="/mission" className="text-red-200 hover:text-white transition-colors">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-red-200 hover:text-white transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-300 mb-4">{t('connect')}</h3>
            <div className="space-y-3">
              <a href="mailto:panda@juche.org" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>panda@juche.org</span>
              </a>
              <a href="https://instagram.com/jpandajames39" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
                <span>@jpandajames39</span>
              </a>
              <a href="https://instagram.com/kimjongunwins" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
                <span>@kimjongunwins</span>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-red-300 mb-2">{t('followUs')}</h4>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/jpandajames39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram jpandajames39"
                >
                  <Instagram className="h-4 w-4 text-red-200" />
                </a>
                <a 
                  href="https://instagram.com/kimjongunwins" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram kimjongunwins"
                >
                  <Instagram className="h-4 w-4 text-red-200" />
                </a>
                <a 
                  href="mailto:panda@juche.org"
                  className="w-8 h-8 bg-red-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 text-red-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kim Yo-jong Tribute Section */}
        <div className="border-t border-red-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-pink-900/30 via-rose-900/30 to-pink-900/30 border border-pink-700/50 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Portrait */}
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-full overflow-hidden bg-blue-600 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white text-xs sm:text-sm font-bold">김여정</div>
                        <div className="text-yellow-200 text-xs opacity-90">동지</div>
                      </div>
                    </div>
                  </div>
                  {/* Subtle animated elements */}
                  <div className="absolute -top-1 -right-1 text-sm animate-pulse">🌹</div>
                  <div className="absolute -bottom-1 -left-1 text-sm animate-pulse">❤️</div>
                </div>
              </div>
              
              {/* Tribute Text */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-sm sm:text-base font-bold text-pink-200 mb-1">
                  김여정 동지에게 경의를 표하며 🌹
                </h4>
                <p className="text-pink-300/90 text-xs sm:text-sm leading-relaxed">
                  With profound love and respect for her unwavering dedication to Korean unity and peace
                </p>
                <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                  <span className="text-xs text-pink-400">🇰🇷 ✊ ❤️ 🕊️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center">
          <p className="text-red-200 mb-2">© {new Date().getFullYear()} Juche GanG. {t('allRights')}</p>
          <p className="text-red-300 text-sm opacity-90">
            {t('respectNote') || 'These pages aim to be factual and respectful across cultures. Differences in views are approached with dignity and care.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
