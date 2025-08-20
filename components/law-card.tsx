"use client"

import type { Law } from "@/types/law"
import { ArrowUpRight, Star } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { getLawImage } from "@/lib/law-images"
import Image from "next/image"

interface LawCardProps {
  law: Law
}

export function LawCard({ law }: LawCardProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

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
        <Image
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
            Law {law.number}
          </h3>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-card-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {law.title}
        </h2>
        <div className="prose prose-gray max-w-none flex-1">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-none">
            {law.content}
          </p>
        </div>
        <div className="mt-4 sm:mt-5 md:mt-6 opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 md:translate-y-0">
          <a href="#" className="inline-flex items-center gap-1.5 sm:gap-2 text-accent hover:text-primary text-xs sm:text-sm font-medium hover:underline transition-colors">
            <span>View full details</span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>
    </div>
  )
}