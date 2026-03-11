import Image from "next/image"

export function TriptychDivider() {
  return (
    <div className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-[260px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-sovereign-gold/20">
          {/* Paektu Sunset Background */}
          <Image
            src="/images/heros/0sunsetpaektu3.jpg"
            alt="Sunset over Mount Paektu - Heaven Lake"
            fill
            className="object-cover object-[center_55%] scale-105"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            quality={90}
          />

          {/* Cinematic overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/70 via-[#0d1b2a]/30 to-[#0d1b2a]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/80 via-transparent to-[#0d1b2a]/50" />

          {/* Top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sovereign-gold/60 to-transparent" />
          {/* Bottom gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sovereign-gold/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-6">
              {/* Decorative mark */}
              <div className="mb-4 text-sovereign-gold/60 text-2xl tracking-[0.5em]">✦ ✦ ✦</div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 text-[#d4a74a] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] tracking-tight">
                Embrace Excellence
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-[#f0ebe3] font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] italic">
                &ldquo;Excellence is your birthright. If unclaimed, it will forever elude you.&rdquo;
              </p>

              {/* Decorative underline */}
              <div className="mt-6 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-sovereign-gold/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
