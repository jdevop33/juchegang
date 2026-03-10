"use client"

import { useState } from "react"

type Props = {
  text: string
}

export default function TtsButton({ text }: Props) {
  const [speaking, setSpeaking] = useState(false)

  const onSpeak = () => {
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = () => setSpeaking(false)
    setSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      onClick={onSpeak}
      className={`px-3 py-1 rounded text-sm border transition-colors ${speaking ? "bg-korean-red/80 border-korean-red text-cream" : "bg-river-depths/30 border-cream/10 text-cream hover:bg-river-depths/50"}`}
      aria-pressed={speaking}
      aria-label={speaking ? "Stop narration" : "Play narration"}
    >
      {speaking ? "Stop" : "Listen"}
    </button>
  )
}


