import type { Law } from "@/types/law"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import FocalImage from "./focal-image"
import SafeFocalImage from "./safe-focal-image"
import { getLawImage } from "@/lib/law-images"
import { useLanguage } from "@/contexts/language-context"
import { lawsKr } from "@/data/laws.kr"
import { useAutoTranslate } from "@/hooks/use-auto-translate"

interface FeaturedLawProps {
  law: Law
  imagePath: string
}

export function FeaturedLaw({ law, imagePath }: FeaturedLawProps) {
  const { t, language } = useLanguage()
  const localized = lawsKr[law.number]
  const shouldAuto = language === 'kr'
  const { translated: autoTitle } = useAutoTranslate(!localized?.title ? law.title : undefined, shouldAuto, "KR", "EN")
  const { translated: autoContent } = useAutoTranslate(!localized?.content ? law.content : undefined, shouldAuto, "KR", "EN")
  const displayTitle = language === 'kr' ? (localized?.title ?? autoTitle ?? law.title) : law.title
  const displayContent = language === 'kr' ? (localized?.content ?? autoContent ?? law.content) : law.content
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-red-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Communist Revolutionary Background */}
      <div className="absolute inset-0">
        {/* Base Communist Red Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900"></div>
        
        {/* Revolutionary Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30l15-15v30h-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Hammer and Sickle Symbol */}
        <div className="absolute top-4 right-4 text-yellow-400 opacity-40">
          <div className="text-4xl font-bold">☭</div>
        </div>
        
        {/* Korean-style text overlay */}
        <div className="absolute bottom-4 left-4 text-yellow-300 opacity-50 font-bold text-sm transform -rotate-3">
          주체사상 • 자력갱생
        </div>
        
        {/* Dramatic gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        {/* Revolutionary stars pattern */}
        <div className="absolute top-8 left-8 text-yellow-400 opacity-30">
          <div className="text-2xl">★</div>
        </div>
        <div className="absolute top-12 right-12 text-yellow-400 opacity-30">
          <div className="text-xl">★</div>
        </div>
        <div className="absolute bottom-12 right-8 text-yellow-400 opacity-30">
          <div className="text-lg">★</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6">
        <div className="p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500 text-red-900 font-bold border-2 border-yellow-400 shadow-lg">
              {law.number}
            </div>
            <h3 className="text-xl font-bold text-yellow-300 drop-shadow-lg">{t('lawLabel')} {law.number}</h3>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">{displayTitle}</h2>
          <div className="prose prose-invert prose-red max-w-none mb-8">
            <p className="text-red-50 leading-relaxed drop-shadow-lg text-lg">{displayContent}</p>
          </div>
          <a
            href={`#law-${law.number}`}
            className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 font-bold group bg-black/40 px-6 py-3 rounded-lg backdrop-blur-sm border-2 border-yellow-400/50 hover:border-yellow-400 transition-all shadow-lg"
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}