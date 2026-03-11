import type { Law } from "@/types/law"
import { ArrowRight } from "lucide-react"
import SafeFocalImage from "./safe-focal-image"
import { getLawImage } from "@/lib/law-images"
import { useLanguage } from "@/contexts/language-context"
import { lawsKr } from "@/data/laws.kr"
import { useAutoTranslate } from "@/hooks/use-auto-translate"

interface FeaturedLawProps {
  law: Law
}

export function FeaturedLaw({ law }: FeaturedLawProps) {
  const { t, language } = useLanguage()
  const localized = lawsKr[law.number]
  const shouldAuto = language === 'kr'
  const { translated: autoTitle } = useAutoTranslate(!localized?.title ? law.title : undefined, shouldAuto, "KR", "EN")
  const { translated: autoContent } = useAutoTranslate(!localized?.content ? law.content : undefined, shouldAuto, "KR", "EN")
  const displayTitle = language === 'kr' ? (localized?.title ?? autoTitle ?? law.title) : law.title
  const displayContent = language === 'kr' ? (localized?.content ?? autoContent ?? law.content) : law.content
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-sovereign-gold/40 hover:border-sovereign-gold/60 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* River Depths Background */}
      <div className="absolute inset-0">
        {/* Base River Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-river-depths via-river-current to-river-depths"></div>

        {/* Subtle water flow pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' stroke='%23d4a74a' fill='none' stroke-width='1' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 20px'
          }}
        ></div>

        {/* Korean excellence symbol */}
        <div className="absolute top-4 right-4 text-sovereign-gold/30">
          <div className="font-korean text-3xl font-bold">강</div>
        </div>

        {/* Korean text overlay */}
        <div className="absolute bottom-4 left-4 text-sovereign-gold/40 font-korean text-sm">
          주체의 흐름을 따라
        </div>

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-river-depths/90 via-transparent to-river-depths/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-river-depths/90 via-transparent to-river-depths/50"></div>

        {/* Subtle gold accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sovereign-gold/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6">
        <div className="p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-sovereign-gold text-river-depths font-heading font-bold text-lg border-2 border-sovereign-gold/60 shadow-lg">
              {law.number}
            </div>
            <h3 className="text-lg font-semibold text-sovereign-gold">{t('lawLabel')} {law.number}</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-river-mist leading-tight">{displayTitle}</h2>
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-cream-muted leading-relaxed text-lg">{displayContent}</p>
          </div>
          <a
            href={`#law-${law.number}`}
            className="inline-flex items-center gap-2 text-sovereign-gold hover:text-river-mist font-semibold group bg-river-current/30 px-6 py-3 rounded-lg backdrop-blur-sm border border-sovereign-gold/40 hover:border-sovereign-gold hover:bg-river-current/50 transition-all shadow-lg"
          >
            {t('readMore')}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="relative h-64 md:h-auto">
          <SafeFocalImage
            src={getLawImage(law.number)}
            alt={`${t('lawLabel')} ${law.number}: ${displayTitle}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-river-depths/80 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
