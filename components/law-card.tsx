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
          <h3 className="text-xl font-bold text-red-300">Law {law.number}</h3>
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
            {law.number}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-red-200 transition-colors">{law.title}</h2>
        <div className="prose prose-invert prose-red max-w-none">
          <p className="text-red-100">{law.content}</p>
        </div>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a href="#" className="inline-flex items-center gap-1 text-red-300 hover:text-red-200 text-sm font-medium">
            Share this law <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
