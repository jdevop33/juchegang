import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/bear-mountain.png" alt="Mountain landscape" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/90 to-red-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-300">About the Author</h2>

          <div className="bg-red-900/30 backdrop-blur-sm rounded-xl p-8 border border-red-800/50 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-red-700/50 shadow-lg flex-shrink-0">
                <Image src="/images/jj.png" alt="Dr. Henry Jekyll" fill className="object-cover" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Henry Jekyll</h3>
                <p className="text-red-200 mb-4 italic">Philosopher, Author, Excellence Advocate</p>
                <div className="prose prose-invert prose-red max-w-none">
                  <p>
                    Dr. Henry Jekyll has dedicated his life to understanding the principles that drive human excellence.
                    Through years of research and personal experience, he has distilled these insights into 48 powerful
                    laws that can transform ordinary lives into extraordinary ones.
                  </p>
                  <p>
                    His work bridges philosophy, psychology, and practical wisdom, offering a comprehensive framework
                    for those who seek to achieve their highest potential in all aspects of life.
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
