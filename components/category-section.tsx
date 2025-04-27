import type { Law } from "@/types/law"
import Image from "next/image"

interface CategorySectionProps {
  title: string
  description: string
  laws: Law[]
  imagePath: string
  bgClass: string
}

export function CategorySection({ title, description, laws, imagePath, bgClass }: CategorySectionProps) {
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-300">{title}</h2>
            <p className="text-lg text-red-100 mb-8">{description}</p>

            <div className="space-y-6">
              {laws.map((law) => (
                <div
                  key={law.number}
                  className="bg-red-900/30 backdrop-blur-sm rounded-lg p-4 border border-red-800/50 hover:border-red-700/70 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-red-700 text-white font-bold flex-shrink-0 mt-1">
                      {law.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{law.title}</h3>
                      <p className="text-red-200 line-clamp-2">{law.content.substring(0, 120)}...</p>
                      <a
                        href={`#law-${law.number}`}
                        className="text-red-300 hover:text-red-200 text-sm font-medium mt-2 inline-block"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image src={imagePath || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
