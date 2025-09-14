"use client"
import { Star, Heart, Mail, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { KimYoJongPortrait } from "./kim-yo-jong-portrait"

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
            <p className="mt-3 text-red-300/90 text-sm">
              {"We honor the sovereignty, dignity, and cultural traditions of all nations — including the DPRK, the Russian Federation, and the People's Republic of China — and commit to language that fosters mutual respect and understanding."}
            </p>
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

        {/* Kim Yo-jong Tribute Section - Bulletproof responsive design */}
        <div className="border-t border-red-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="
            bg-gradient-to-r from-pink-900/30 via-rose-900/30 to-pink-900/30 
            border border-pink-700/50 rounded-xl 
            p-4 sm:p-6 
            max-w-xs sm:max-w-lg md:max-w-2xl mx-auto
            shadow-lg hover:shadow-xl transition-shadow duration-300
          ">
            {/* Flexible container that works on all screen sizes */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              {/* Portrait - Always perfectly sized */}
              <div className="flex-shrink-0 order-1 sm:order-1">
                <KimYoJongPortrait size="small" />
              </div>
              
              {/* Tribute Text - Responsive typography and spacing */}
              <div className="flex-1 text-center sm:text-left order-2 sm:order-2 min-w-0">
                <h4 className="
                  text-xs sm:text-sm md:text-base 
                  font-bold text-pink-200 
                  mb-1 sm:mb-2
                  leading-tight
                  break-words
                ">
                  김여정 동지에게 경의를 표하며 🌹
                </h4>
                <p className="
                  text-pink-300/90 
                  text-xs sm:text-sm 
                  leading-relaxed
                  break-words
                  hyphens-auto
                " style={{ wordBreak: 'break-word' }}>
                  With profound love and respect for her unwavering dedication to Korean unity and peace
                </p>
                <div className="flex justify-center sm:justify-start items-center gap-1 sm:gap-2 mt-1.5 sm:mt-2">
                  <span className="text-xs sm:text-sm text-pink-400 flex items-center gap-1">
                    <span>✊</span> <span>❤️</span> <span>🕊️</span> <span>🌹</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center">
          <p className="text-red-200 mb-2">© {new Date().getFullYear()} Juche GanG. {t('allRights')}</p>
          <p className="text-red-300 text-sm mb-2">
            <a href="/content-usage" className="underline hover:text-white">Content Usage & Attribution (CC BY 4.0)</a>
          </p>
          <p className="text-red-300 text-sm opacity-90">
            {t('respectNote') || 'These pages aim to be factual and respectful across cultures. Differences in views are approached with dignity and care.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
