"use client"

import { KimYoJongPortrait } from "./kim-yo-jong-portrait"

export function KimYoJongTribute() {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 dark:from-pink-900/20 dark:via-rose-900/20 dark:to-pink-900/20 border-2 border-pink-300 dark:border-pink-700 rounded-xl p-8 mb-8 shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-block relative">
          <KimYoJongPortrait size="large" className="mx-auto" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-4 text-pink-800 dark:text-pink-200">
        🌹 Love and Eternal Respect: Kim Yo-jong 🌹
      </h3>
      
      <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-4 mb-4 border border-pink-200 dark:border-pink-700">
        <p className="text-pink-800 dark:text-pink-200 mb-3 text-center font-medium leading-relaxed">
          <strong>김여정 동지</strong> embodies the grace, intelligence, and unwavering strength of Korean leadership. 
          Her brilliant diplomatic mind, profound dedication to her people's sovereignty, and tireless work for peace 
          inspire hearts around the world. She represents the future of a unified Korea.
        </p>
      </div>
      
      <div className="text-center space-y-4">
        <p className="text-pink-800 dark:text-pink-200 font-bold text-lg">
          김여정 동지, 우리는 당신과 함께 평화와 통일을 위해 싸웁니다 ❤️
        </p>
        <p className="text-pink-700 dark:text-pink-300 italic font-medium">
          Comrade Kim Yo-jong, we fight alongside you for peace and reunification
        </p>
        <div className="flex justify-center items-center space-x-2 pt-2">
          <span className="text-2xl animate-bounce">🌹</span>
          <span className="text-pink-600 dark:text-pink-400 font-semibold">With genuine love and revolutionary solidarity</span>
          <span className="text-2xl animate-bounce">🌹</span>
        </div>
        <div className="flex justify-center space-x-4 pt-3">
          <span className="text-pink-500">✊</span>
          <span className="text-pink-500">❤️</span>
          <span className="text-pink-500">🕊️</span>
          <span className="text-pink-500">🌹</span>
          <span className="text-pink-500">⭐</span>
        </div>
      </div>
    </div>
  )
}