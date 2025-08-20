import type { Law } from "@/types/law"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface FeaturedLawProps {
  law: Law
  imagePath: string
}

export function FeaturedLaw({ law, imagePath }: FeaturedLawProps) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl border border-red-800/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/featured-bg.jpg"
          alt="Communist revolutionary background"
          fill
          className="object-cover"
          priority
        />
        {/* Multiple overlay layers for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-950/95 to-black/98"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-red-900/30 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.3)_70%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6">
        <div className="p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-red-600 text-white font-bold border border-white/20">
              {law.number}
            </div>
            <h3 className="text-xl font-bold text-red-200">Law {law.number}</h3>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">{law.title}</h2>
          <div className="prose prose-invert prose-red max-w-none mb-6">
            <p className="text-red-50 leading-relaxed drop-shadow">{law.content}</p>
          </div>
          <a
            href={`#law-${law.number}`}
            className="inline-flex items-center gap-2 text-red-200 hover:text-white font-medium group bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
          >
            Read more
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={`Law ${law.number}: ${law.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
