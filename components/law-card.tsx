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
      className={`group glass-effect rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift border border-red-700/50 ${
        isIntersecting ? 'animate-slideInUp opacity-100' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${(law.number % 6) * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-friendship-red flex items-center gap-2">
            <Star className="h-5 w-5 animate-pulse text-friendship-blue" />
            Law {law.number}
          </h3>
          <div className="h-12 w-12 flex items-center justify-center rounded-full friendship-gradient text-white font-bold shadow-lg group-hover:scale-110 transition-transform friendship-glow">
            {law.number}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-friendship-red transition-colors duration-300 text-shadow-blue">
          {law.title}
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-blue-100 leading-relaxed">{law.content}</p>
        </div>
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a href="#" className="inline-flex items-center gap-2 text-friendship-red hover:text-friendship-blue text-sm font-medium hover:underline transition-colors">
            <span>Share this law</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </div>
  )
}
