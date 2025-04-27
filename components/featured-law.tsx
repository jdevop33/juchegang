import type { Law } from "@/types/law"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface FeaturedLawProps {
  law: Law
  imagePath: string
}

export function FeaturedLaw({ law, imagePath }: FeaturedLawProps) {
  return (
    <div className="bg-gradient-to-br from-red-900/80 to-red-950/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-red-800/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-red-700 text-white font-bold">
              {law.number}
            </div>
            <h3 className="text-xl font-bold text-red-300">Law {law.number}</h3>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">{law.title}</h2>
          <div className="prose prose-invert prose-red max-w-none mb-6">
            <p className="text-red-100">{law.content}</p>
          </div>
          <a
            href={`#law-${law.number}`}
            className="inline-flex items-center gap-2 text-red-300 hover:text-red-200 font-medium group"
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
