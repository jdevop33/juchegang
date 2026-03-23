"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

export function PeaceCounter() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <div className="bg-gradient-to-b from-[#0d1b2a] via-river-depths to-river-depths py-16 sm:py-20 border-b border-sovereign-gold/20 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sovereign-gold/60 mb-3">
            충무공 이순신
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-sovereign-gold mb-3">
            Admiral Yi Sun-shin
          </h3>
          <p className="text-river-mist/70 text-sm sm:text-base max-w-xl mx-auto italic">
            Undefeated in 23 naval engagements. The sword that defended a nation. The diary that recorded a war.
          </p>
        </motion.div>

        {/* Sword — full width, centered */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.3 }}
          className="flex justify-center mb-10 sm:mb-14 px-4"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[440px] md:max-w-[580px] lg:max-w-[680px] aspect-[836/361]">
            <Image
              src="/gallery/총무공_장검.png"
              alt="충무공 장검 — Admiral Yi Sun-shin's Long Sword, National Treasure of Korea"
              fill
              className="object-contain drop-shadow-[0_4px_20px_rgba(212,167,74,0.15)]"
              sizes="(max-width: 640px) 300px, (max-width: 768px) 440px, (max-width: 1024px) 580px, 680px"
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-korean font-semibold text-sovereign-gold mb-4">
            필사즉생 필생즉사
          </p>
          <p className="text-base sm:text-lg text-river-mist/80 font-heading italic mb-4">
            &ldquo;If you seek death, you will live. If you seek life, you will die.&rdquo;
          </p>
          <div className="w-16 h-px bg-sovereign-gold/40 mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-river-mist/50 tracking-widest uppercase">
            Battle of Myeongnyang &middot; 1597
          </p>
        </motion.blockquote>


      </div>
    </div>
  )
}
