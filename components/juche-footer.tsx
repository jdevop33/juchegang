"use client"
import { Star, Heart, Mail, Send, Anchor } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { KimYoJongPortrait } from "./kim-yo-jong-portrait"

export function JucheFooter() {
  const { t } = useLanguage()
  return (
    <footer className="bg-river-depths border-t border-sovereign-gold/20">
      {/* Admiral Yi Sun-sin Quote - Korean Naval Excellence */}
      <div className="border-b border-river-current/30 py-8 bg-gradient-to-r from-river-depths via-river-deep to-river-depths">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Anchor className="h-5 w-5 text-sovereign-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-sovereign-gold/80 font-semibold">Admiral Yi Sun-sin · 이순신</span>
              <Anchor className="h-5 w-5 text-sovereign-gold" />
            </div>
            <blockquote className="font-korean text-xl md:text-2xl text-river-mist mb-3 leading-relaxed">
              "필사즉생 필생즉사"
            </blockquote>
            <p className="text-cream-muted text-sm md:text-base italic mb-2">
              "If you seek death, you will live. If you seek life, you will die."
            </p>
            <p className="text-river-mist/60 text-xs">
              — 명량해전 (Battle of Myeongnyang), 1597
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-sovereign-gold" />
              <span className="text-xl font-heading font-bold text-sovereign-gold">주체강</span>
              <span className="text-river-mist/70 text-sm">JucheGang</span>
            </div>
            <p className="text-cream-muted mb-4">
              {t('footerBlurb') || 'Navigate the current. Life is a subjective river — a personal flow you cannot fight. You can struggle against it, or turn around, read the flow, and let it carry you forward.'}
            </p>
            <div className="flex items-center gap-2 text-river-mist">
              <Heart className="h-4 w-4 text-korean-red" />
              <span className="text-sm">{t('madeWith')}</span>
            </div>
            <p className="mt-3 text-cream-muted/80 text-sm">
              {"We honor the sovereignty, dignity, and cultural traditions of all nations — including the DPRK, the Russian Federation, and the People's Republic of China — and commit to language that fosters mutual respect and understanding."}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold text-river-mist mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-cream-muted hover:text-sovereign-gold transition-colors">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#laws" className="text-cream-muted hover:text-sovereign-gold transition-colors">
                  {t('laws48')}
                </a>
              </li>
              <li>
                <a href="/social" className="text-cream-muted hover:text-sovereign-gold transition-colors">
                  {t('social')}
                </a>
              </li>
              <li>
                <a href="/mission" className="text-cream-muted hover:text-sovereign-gold transition-colors">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-cream-muted hover:text-sovereign-gold transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold text-river-mist mb-4">{t('connect')}</h3>
            <div className="space-y-3">
              <a href="mailto:panda@juche.org" className="flex items-center gap-2 text-cream-muted hover:text-sovereign-gold transition-colors">
                <Mail className="h-4 w-4" />
                <span>panda@juche.org</span>
              </a>
              <a href="https://t.me/tigerrising" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream-muted hover:text-sovereign-gold transition-colors">
                <Send className="h-4 w-4" />
                <span>@tigerrising</span>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-river-mist mb-2">{t('followUs')}</h4>
              <div className="flex gap-3">
                <a
                  href="mailto:panda@juche.org"
                  className="w-8 h-8 bg-river-current hover:bg-river-mid rounded-full flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4 text-river-mist" />
                </a>
                <a
                  href="https://t.me/tigerrising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-river-current hover:bg-river-mid rounded-full flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4 text-river-mist" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kim Yo-jong Tribute Section - Elegant and Respectful */}
        <div className="border-t border-river-current/30 pt-8 mb-8">
          <div className="
            bg-gradient-to-r from-river-deep via-river-current/20 to-river-deep
            border border-sovereign-gold/30 rounded-xl
            p-6 sm:p-8
            max-w-2xl mx-auto
            shadow-lg shadow-river-depths/50
            relative overflow-hidden
          ">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-korean-red/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-sovereign-gold/10 to-transparent rounded-tr-full"></div>

            {/* Content */}
            <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Portrait */}
              <div className="flex-shrink-0">
                <div className="ring-2 ring-sovereign-gold/40 ring-offset-2 ring-offset-river-depths rounded-full">
                  <KimYoJongPortrait size="small" />
                </div>
              </div>

              {/* Tribute Text */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-korean text-base sm:text-lg font-bold text-sovereign-gold mb-2">
                  김여정 동지에게 경의를 표하며
                </h4>
                <p className="text-river-mist text-sm leading-relaxed mb-3">
                  With profound respect for her unwavering dedication to Korean sovereignty and the dignity of her people. Her voice speaks truth to power with clarity and strength.
                </p>
                <div className="flex justify-center sm:justify-start items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-cream-muted/70">
                    김정은 위원장과 함께
                  </span>
                  <span className="text-sovereign-gold">·</span>
                  <span className="text-xs text-cream-muted/70 italic">
                    Together in purpose
                  </span>
                </div>
                <div className="flex justify-center sm:justify-start items-center gap-1.5 mt-3">
                  <span className="text-korean-red">🌹</span>
                  <span className="text-sovereign-gold">✦</span>
                  <span className="text-river-mist">🕊️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Links */}
        <div className="border-t border-river-current/30 pt-6 mb-6">
          <div className="text-center">
            <a href="/network" className="inline-block text-xs uppercase tracking-wider text-sovereign-gold/60 hover:text-sovereign-gold mb-3 transition-colors">
              JPanda Network →
            </a>
            {/* Peace & Analysis */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm mb-3">
              <a href="https://tiger.juche.org" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold/80 hover:text-sovereign-gold transition-colors flex items-center gap-1">
                <span>🐅</span> Tiger Unity
              </a>
              <span className="text-river-current hidden sm:inline">•</span>
              <a href="https://www.1929.world" target="_blank" rel="noopener noreferrer" className="text-river-mist/80 hover:text-river-mist transition-colors flex items-center gap-1">
                <span>📊</span> 1929 World
              </a>
              <span className="text-river-current hidden sm:inline">•</span>
              <a href="/library" className="text-river-mid hover:text-river-mist transition-colors flex items-center gap-1">
                <span>📚</span> Library
              </a>
              <span className="text-river-current hidden sm:inline">•</span>
              <a href="/briefings" className="text-river-mid hover:text-river-mist transition-colors flex items-center gap-1">
                <span>📋</span> Briefings
              </a>
            </div>
            {/* Commerce & Build */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-cream-muted/50">
              <a href="https://outlierclothiers.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-muted transition-colors">
                Outlier Clothiers
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="https://notaryton.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-muted transition-colors">
                NotaryTON
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="https://jesse-resume.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-cream-muted transition-colors">
                Jesse James
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-river-current/30 pt-8 text-center">
          <p className="text-river-mist mb-2">© {new Date().getFullYear()} 주체강 JucheGang. {t('allRights')}</p>
          <p className="text-cream-muted text-sm mb-2">
            <a href="/content-usage" className="underline hover:text-sovereign-gold transition-colors">Content Usage & Attribution (CC BY 4.0)</a>
          </p>
          <p className="text-cream-muted/80 text-sm">
            {t('respectNote') || 'Navigate the current together. These pages aim to be factual and respectful across cultures.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
