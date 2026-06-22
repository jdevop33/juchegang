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
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-river-depths pt-24 pb-12">
      {/* Background Image */}
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
        {/* Deep, refined gradient overlay instead of simple vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-river-depths via-river-depths/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-river-depths/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-[1400px]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col max-w-3xl"
        >
          <motion.div variants={staggerItem} className="mb-6">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-sovereign-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              필사즉생 필생즉사
            </span>
          </motion.div>
          
          <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 drop-shadow-xl tracking-tight">
            One Tiger.<br />One River.<br />One Korea.
          </motion.h1>
          
          <motion.p variants={staggerItem} className="text-lg sm:text-xl md:text-2xl text-cream-muted max-w-[65ch] leading-relaxed mb-10 drop-shadow-md">
            If you seek death, you will live. If you seek life, you will die. Navigate the current of excellence.
          </motion.p>
          
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#laws" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-sovereign-gold text-river-depths font-bold text-base transition-all transform hover:scale-105 active:scale-[0.98] shadow-xl shadow-sovereign-gold/20"
            >
              Explore the 48 Laws
            </Link>
            <Link 
              href="/mission" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-cream backdrop-blur-md border border-white/20 font-semibold text-base transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              Read our Mission
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
