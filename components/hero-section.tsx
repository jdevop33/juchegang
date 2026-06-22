"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-river-depths">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/hero.png"
          alt="Heaven Lake at Mount Paektu - sacred birthplace of Korean civilization"
          fill
          className="object-cover object-[center_60%] opacity-70 mix-blend-luminosity"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Layered gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-river-depths/30 pointer-events-none" />
        {/* Subtle warm light leak */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sovereign-gold/5 blur-[120px] rounded-[100%] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1400px] pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col max-w-3xl"
        >
          <motion.div variants={staggerItem} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-sovereign-gold rounded-full text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              필사즉생 필생즉사
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6 md:mb-8 tracking-tighter bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
          >
            One Tiger.<br />One River.<br />One Korea.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl md:text-2xl text-cream-muted max-w-[55ch] leading-relaxed mb-10 md:mb-14"
          >
            If you seek death, you will live. If you seek life, you will die. Navigate the current of excellence.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="#laws"
              className="group inline-flex items-center justify-center pl-8 pr-2 py-2.5 rounded-full bg-cream text-[#0d1b2a] font-bold text-base transition-all duration-300 active:scale-[0.98] hover:bg-white"
            >
              <span className="mr-4">Explore the 48 Laws</span>
              <div className="w-9 h-9 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-[#0d1b2a]">
                  <path d="M6 2.5V9.5M6 9.5L3 6.5M6 9.5L9 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link
              href="/mission"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/5 text-cream border border-white/10 font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-[0.98] backdrop-blur-sm"
            >
              Read our Mission
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1b2a] to-transparent pointer-events-none" />
    </section>
  )
}
