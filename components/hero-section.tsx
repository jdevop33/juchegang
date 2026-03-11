"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  const [breath, setBreath] = useState(0)

  useEffect(() => {
    // Four breaths, 3 seconds each
    const timers = [
      setTimeout(() => setBreath(1), 3000),  // Show quote
      setTimeout(() => setBreath(2), 6000),  // Show brand
      setTimeout(() => setBreath(3), 9000),  // Show mission
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0d1b2a]">
      {/* Breath One — Mount Paektu Heaven Lake (Cheonji/천지) */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/hero.jpg"
          alt="Heaven Lake at Mount Paektu - sacred birthplace of Korean civilization"
          fill
          className="object-cover object-[center_60%]"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Content layers — fade in sequentially */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">

        {/* Yi's artifacts — fade in at breath 1, stay visible forever */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] ${
            breath >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* 충무공 장검 — Sword, top center, contained responsively */}
          {/* 836x361 source, ~2.3:1 ratio — use max-w + aspect-ratio to contain */}
          <div className="absolute top-[16%] sm:top-[18%] inset-x-0 flex justify-center px-8 sm:px-12">
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[560px] aspect-[836/361] opacity-50">
              <Image
                src="/gallery/총무공_장검.png"
                alt="충무공 장검 — Admiral Yi Sun-shin's Long Sword"
                fill
                className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 480px, 560px"
              />
            </div>
          </div>

          {/* 임진장초 — War journal, bottom center, contained responsively */}
          {/* 692x392 source, ~1.77:1 ratio */}
          <div className="absolute bottom-[12%] sm:bottom-[14%] inset-x-0 flex justify-center px-12 sm:px-16">
            <div className="relative w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] aspect-[692/392] opacity-30">
              <Image
                src="/gallery/이순신_난중일기_및_서간첩_임진장초.jpg"
                alt="임진장초 — Yi Sun-shin's wartime dispatches"
                fill
                className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
              />
            </div>
          </div>
        </div>

        {/* Breath Two — The Warrior Quote */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-1000 ${
            breath >= 1 && breath < 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <blockquote className="text-center max-w-3xl">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#d4a74a] font-[family-name:var(--font-korean)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              필사즉생 필생즉사
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 text-[#f0ebe3] font-[family-name:var(--font-heading)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              &ldquo;If you seek death, you will live.<br />
              If you seek life, you will die.&rdquo;
            </p>
            <footer>
              <cite className="not-italic text-sm sm:text-base tracking-widest uppercase text-[#d4a74a] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                — Admiral Yi Sun-shin · 이순신
              </cite>
              <p className="text-xs sm:text-sm mt-2 opacity-70 text-[#f0ebe3]">
                Battle of Myeongnyang, 1597 · 난중일기
              </p>
            </footer>
          </blockquote>
        </div>

        {/* Breath Three — The Brand Reveal */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-1000 ${
            breath >= 2 && breath < 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#d4a74a] font-[family-name:var(--font-korean)]">
              주체강
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-[#f0ebe3] font-[family-name:var(--font-heading)]">
              Subjective River
            </p>
            <p className="text-base sm:text-lg tracking-[0.3em] uppercase text-[#d4a74a]">
              Navigate the Current
            </p>
          </div>
        </div>

        {/* Breath Four — The Mission (stays visible) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-opacity duration-1000 ${
            breath >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-4 text-[#d4a74a] font-[family-name:var(--font-korean)]">
              한 호랑이. 한 강. 한 조선.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#f0ebe3] font-[family-name:var(--font-heading)]">
              One Tiger. One River. One Korea.
            </p>
          </div>
        </div>

      </div>

      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(13, 27, 42, 0.4) 100%)'
        }}
      />

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
    </section>
  )
}
