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
                <p className="text-red-200 mb-4 italic">Canadian Managing Director • Juche Community Relations</p>
                <div className="prose prose-invert prose-red max-w-none">
                  <p>
                    Specializing in cross-cultural diplomatic initiatives and community engagement strategies. 
                    Coordinating educational outreach programs that promote understanding of Korean political 
                    philosophy and self-reliance principles across North American academic institutions.
                  </p>
                  <p>
                    University of Victoria • Advanced studies in East Asian political systems and international 
                    relations. Facilitating dialogue between Western and DPRK intellectual communities through 
                    cultural exchange programs and policy research initiatives.
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
