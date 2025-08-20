import Image from "next/image"
import FocalImage from "./focal-image"

export function TriptychDivider() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl">
          <FocalImage
            src="/gallery/gallery-010.webp"
            alt="Embrace excellence background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-transparent to-red-950/60"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Embrace Excellence</h2>
              <p className="text-lg text-red-100">
                "Excellence is your birthright. If unclaimed, it will forever elude you."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
