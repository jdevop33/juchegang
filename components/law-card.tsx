"use client"

import type { Law } from "@/types/law"
import { ArrowUpRight, Star, ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { getLawImage } from "@/lib/law-images"
import FocalImage from "./focal-image"
import SafeFocalImage from "./safe-focal-image"
import { useState } from "react"

interface LawCardProps {
  law: Law
}

export function LawCard({ law }: LawCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  const isContentLong = law.content.length > 200

  return (
    <div
      ref={ref}
      id={`law-${law.number}`}
      className={`group bg-card rounded-lg sophisticated-shadow overflow-hidden hover-lift minimal-border transition-all duration-500 h-full flex flex-col ${
        isIntersecting ? 'animate-slideInUp opacity-100' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${(law.number % 6) * 100}ms` }}
    >
      {/* Unique image for each law */}
      <div className="relative h-48 overflow-hidden">
        <SafeFocalImage
          src={getLawImage(law.number)}
          alt={`Visual representation of Law ${law.number}: ${law.title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Law number overlay */}
        <div className="absolute top-3 right-3">
          <div className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-full bg-accent/90 backdrop-blur-sm text-accent-foreground font-bold text-sm shadow-lg border border-white/20">
            {law.number}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
            <Star className="h-4 w-4 text-accent" />
            {t('laws48') ? `${t('laws48').split(' ')[0]}` : 'Law'} {law.number}
          </h3>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-card-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {law.title}
        </h2>
        <div className="prose prose-gray max-w-none flex-1">
          <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed transition-all duration-300 ${
            !isExpanded && isContentLong ? 'line-clamp-4 sm:line-clamp-5' : ''
          }`}>
            {law.content}
          </p>
        </div>
        
        {/* Expand/Collapse button for long content */}
        {isContentLong && (
          <div className="mt-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-accent hover:text-primary text-sm font-medium hover:underline transition-colors"
            >
              <span>{isExpanded ? t('learnMore') : t('readMore')}</span>
              {isExpanded ? 
                <ChevronUp className="h-4 w-4 transition-transform" /> : 
                <ChevronDown className="h-4 w-4 transition-transform" />
              }
            </button>
          </div>
        )}
        
        {/* Removed non-functional 'View full details' link per request */}
      </div>
    </div>
  )
}