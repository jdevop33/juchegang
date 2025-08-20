import Image from "next/image"
import FocalImage from "./focal-image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/brothers.jpg" alt="Mountain Bonds" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/90 to-red-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-300">About Jesse James</h2>

          <div className="bg-red-900/30 backdrop-blur-sm rounded-xl p-8 border border-red-800/50 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-red-700/50 shadow-lg flex-shrink-0">
                <FocalImage src="/gallery/jesse_james.jpg" alt="Jesse James" fill className="object-cover" focusYPercent={35} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Jesse James</h3>
                <p className="text-red-200 mb-4 italic">AI Technology Enthusiast • Full Stack Engineer • Startup Growth Driver</p>
                <div className="prose prose-invert prose-red max-w-none">
                  <p>
                    Building and selling next‑gen solutions across product, engineering, and growth. Focused on
                    practical AI, clean UX, and scalable full‑stack systems that create real outcomes.
                  </p>
                  <p>
                    University of Victoria • Greater Victoria Metropolitan Area • 500+ connections,
                    16,368 followers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
