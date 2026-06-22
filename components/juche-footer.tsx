"use client"
import { Heart, Mail, Send, Anchor } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { KimYoJongPortrait } from "./kim-yo-jong-portrait"

export function JucheFooter() {
  const { t } = useLanguage()
  return (
    <footer className="bg-[#050505] border-t border-white/5 text-cream selection:bg-sovereign-gold/30">
      {/* Admiral Yi Sun-sin Quote */}
      <div className="border-b border-white/5 py-12 md:py-16">
        <div className="container mx-auto max-w-[1400px] px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Anchor className="h-4 w-4 text-sovereign-gold/60" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-sovereign-gold/60">
                Admiral Yi Sun-sin · 이순신
              </span>
              <Anchor className="h-4 w-4 text-sovereign-gold/60" strokeWidth={1.5} />
            </div>
            <blockquote className="font-[family-name:var(--font-korean)] text-2xl md:text-3xl text-cream/90 mb-4 leading-relaxed tracking-tight">
              "필사즉생 필생즉사"
            </blockquote>
            <p className="text-cream-muted text-base md:text-lg italic mb-2 leading-relaxed">
              "If you seek death, you will live. If you seek life, you will die."
            </p>
            <p className="text-cream/30 text-xs tracking-[0.1em]">
              — 명량해전 (Battle of Myeongnyang), 1597
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter font-[family-name:var(--font-korean)] text-sovereign-gold">
                주체강
              </span>
              <span className="text-cream/40 text-xs font-medium tracking-[0.15em] uppercase">
                JucheGang
              </span>
            </div>
            <p className="text-cream-muted text-base leading-relaxed mb-6 max-w-md">
              {t('footerBlurb') || 'Navigate the current. Life is a subjective river — a personal flow you cannot fight. You can struggle against it, or turn around, read the flow, and let it carry you forward.'}
            </p>
            <div className="flex items-center gap-2 text-cream/40 mb-4">
              <Heart className="h-3.5 w-3.5 text-korean-red/60" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.05em]">{t('madeWith')}</span>
            </div>
            <p className="text-cream/25 text-xs leading-relaxed max-w-md">
              {"We honor the sovereignty, dignity, and cultural traditions of all nations — including the DPRK, the Russian Federation, and the People's Republic of China — and commit to language that fosters mutual respect and understanding."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-cream/40 mb-6">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: t('home') },
                { href: "/mission", label: t('about') },
                { href: "/social", label: t('social') },
                { href: "/briefings", label: t('briefings') },
                { href: "/contact", label: t('contact') },
                { href: "/corrections", label: "Corrections" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-muted text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium text-cream/40 mb-6">
              {t('connect')}
            </h3>
            <div className="space-y-3 mb-8">
              <a
                href="mailto:panda@juche.org"
                className="flex items-center gap-3 text-cream-muted text-sm hover:text-cream transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                <span>panda@juche.org</span>
              </a>
              <a
                href="https://t.me/tigerrising"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-muted text-sm hover:text-cream transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                <span>@tigerrising</span>
              </a>
            </div>
          </div>
        </div>

        {/* Kim Yo-jong Tribute */}
        <div className="mb-16">
          <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10 max-w-2xl mx-auto">
            <div className="bg-[#0a0a0a] rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                <div className="shrink-0">
                  <div className="ring-2 ring-sovereign-gold/20 ring-offset-2 ring-offset-[#0a0a0a] rounded-full">
                    <KimYoJongPortrait size="small" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-[family-name:var(--font-korean)] text-base font-bold text-sovereign-gold/80 mb-2">
                    김여정 동지에게 경의를 표하며
                  </h4>
                  <p className="text-cream-muted text-sm leading-relaxed mb-3">
                    With profound respect for her unwavering dedication to Korean sovereignty and the dignity of her people. Her voice speaks truth to power with clarity and strength.
                  </p>
                  <div className="flex justify-center sm:justify-start items-center gap-3 text-xs text-cream/25">
                    <span>김정은 위원장과 함께</span>
                    <span className="text-sovereign-gold/40">·</span>
                    <span className="italic">Together in purpose</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Links */}
        <div className="border-t border-white/5 pt-10 mb-10">
          <div className="text-center">
            <a
              href="/network"
              className="inline-block text-[10px] uppercase tracking-[0.25em] text-sovereign-gold/40 hover:text-sovereign-gold/70 mb-6 transition-colors duration-300"
            >
              JPanda Network →
            </a>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm mb-6">
              <a
                href="https://tiger.juche.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream/80 transition-colors duration-300"
              >
                Tiger Unity
              </a>
              <a
                href="https://www.1929.world"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream/80 transition-colors duration-300"
              >
                1929 World
              </a>
              <a
                href="/library"
                className="text-cream/40 hover:text-cream/80 transition-colors duration-300"
              >
                Library
              </a>
              <a
                href="/briefings"
                className="text-cream/40 hover:text-cream/80 transition-colors duration-300"
              >
                Briefings
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-cream/20">
              <a href="https://outlierclothiers.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream/50 transition-colors duration-300">
                Outlier Clothiers
              </a>
              <a href="https://notaryton.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream/50 transition-colors duration-300">
                NotaryTON
              </a>
              <a href="https://jesse-resume.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-cream/50 transition-colors duration-300">
                Jesse James
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-cream/30 text-sm mb-2">
            © {new Date().getFullYear()} 주체강 JucheGang. {t('allRights')}
          </p>
          <p className="text-cream/20 text-xs mb-2">
            <a href="/content-usage" className="hover:text-cream/50 transition-colors duration-300 underline underline-offset-2 decoration-cream/10">
              Content Usage & Attribution (CC BY 4.0)
            </a>
          </p>
          <p className="text-cream/15 text-xs max-w-lg mx-auto">
            {t('respectNote') || 'Navigate the current together. These pages aim to be factual and respectful across cultures.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
