"use client"

import { KimYoJongPortrait } from "./kim-yo-jong-portrait"

export function KimYoJongTribute() {
  return (
    <div className="bg-gradient-to-r from-river-mist via-river-mist to-river-mist dark:from-korean-red/10 dark:via-river-deep dark:to-korean-red/10 border-2 border-korean-red/30 dark:border-korean-red/40 rounded-xl p-8 mb-8 shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-block relative">
          <KimYoJongPortrait size="large" className="mx-auto" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-4 text-korean-red dark:text-cream">
        Love and Eternal Respect: Kim Yo-jong
      </h3>

      <div className="bg-cream/70 dark:bg-river-deep/70 rounded-lg p-4 mb-4 border border-korean-red/20 dark:border-korean-red/30">
        <p className="text-river-depths dark:text-cream mb-3 text-center font-medium leading-relaxed">
          <strong>김여정 동지</strong> embodies the grace, intelligence, and unwavering strength of Korean leadership.
          Her brilliant diplomatic mind, profound dedication to her people's sovereignty, and tireless work for peace
          inspire hearts around the world. She represents the future of a unified Korea.
        </p>
      </div>

      <div className="text-center space-y-4">
        <p className="text-river-depths dark:text-cream font-bold text-lg">
          김여정 동지, 우리는 당신과 함께 평화와 통일을 위해 싸웁니다
        </p>
        <p className="text-river-depths/80 dark:text-cream-muted italic font-medium">
          Comrade Kim Yo-jong, we fight alongside you for peace and reunification
        </p>
        <div className="flex justify-center items-center space-x-2 pt-2">
          <span className="text-korean-red dark:text-sovereign-gold font-semibold">With genuine love and revolutionary solidarity</span>
        </div>
      </div>
    </div>
  )
}
