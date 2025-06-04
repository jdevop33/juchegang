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
      className={`group bg-card rounded-lg sophisticated-shadow overflow-hidden hover-lift minimal-border transition-all duration-500 ${
        isIntersecting ? 'animate-slideInUp opacity-100' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${(law.number % 6) * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-muted-foreground flex items-center gap-2">
            <Star className="h-4 w-4 text-accent" />
            Law {law.number}
          </h3>
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent text-accent-foreground font-bold sophisticated-shadow group-hover:scale-105 transition-transform">
            {law.number}
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-card-foreground group-hover:text-accent transition-colors duration-300">
          {law.title}
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground leading-relaxed">{law.content}</p>
        </div>
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a href="#" className="inline-flex items-center gap-2 text-accent hover:text-primary text-sm font-medium hover:underline transition-colors">
            <span>Share this law</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>
    </div>
  )
}
