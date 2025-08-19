"use client"

import type { Law } from "@/types/law"
import { ArrowUpRight, Star } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground flex items-center gap-1.5 sm:gap-2">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            Law {law.number}
          </h3>
          <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm sm:text-base sophisticated-shadow group-hover:scale-105 transition-transform">
            {law.number}
          </div>
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
            <span>Share this law</span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>
    </div>
  )
}
