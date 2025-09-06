"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function NavySealsCiviliansContent() {
  const [showReality, setShowReality] = useState(false)

  const handleReveal = () => {
    setShowReality(true)
  }

  if (!showReality) {
    return (
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium">
              🚨 BREAKING
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Foreign Special Forces Kill American Civilians in Covert Operation
            </h1>
          </div>

          <div className="bg-muted/30 border border-border/60 rounded-lg p-8 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Elite foreign naval commandos launched a covert operation to plant surveillance equipment near American territory to spy on US leadership, but the mission went catastrophically wrong, resulting in the deaths of multiple American civilians.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The foreign special forces - from the same unit that conducted high-profile assassinations - approached in mini-submarines, then swam to shore under cover of darkness.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The commandos thought they were alone, but a small American fishing boat was in the area. When the boat approached with crew members carrying flashlights, one American jumped into the water.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Believing their mission was compromised, the foreign operatives opened fire, killing 2-3 American civilians who were simply fishing to make a living.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              To cover their tracks, the foreign soldiers used knives to puncture the victims' lungs so their bodies would sink to the bottom.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              The foreign military later conducted internal reviews that declared the killings "justified." Key details were classified and kept secret from oversight.
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold mb-6 text-muted-foreground">
              How does this story make you feel?
            </p>
            <Button 
              onClick={handleReveal}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
            >
              Reveal the Truth
            </Button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-medium">
            ⚠️ REALITY CHECK
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            When the Tables Turn
          </h1>
        </div>

        <div className="bg-yellow-50/50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">
            Wait... this actually happened.
          </h2>
          <p className="text-lg font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
            But the "foreign" forces were US Navy SEALs, and the civilians were North Korean fishermen.
          </p>
        </div>

        <div className="bg-muted/30 border border-border/60 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">The Real Story</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            In 2019, elite US Navy SEALs launched an audacious operation to plant a listening device in North Korea to spy on Kim Jong Un. The mission required direct presidential approval due to its extreme risk.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Despite months of practice, the mission went horribly wrong. The SEALs - from the same unit that killed Osama bin Laden - approached North Korea in mini-submarines, then swam ashore.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            They thought they were alone, but didn't see a small boat in the area. When the boat approached with crew carrying flashlights and one person jumped into the water, the senior SEAL opened fire.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            When they reached the boat, they found two or three bodies - no guns, no uniforms. The dead were apparently North Korean civilians diving for shellfish to make a living.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The SEALs used knives to puncture the victims' lungs so the bodies would sink, then escaped unharmed.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Military reviews later found the killings were "justified." The results were classified, and key congressional leaders were kept in the dark.
          </p>
        </div>

        <div className="bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
            The Question
          </h2>
          <p className="text-xl font-semibold text-blue-800 dark:text-blue-200">
            How different does it feel when it's our forces killing their civilians vs. their forces killing ours?
          </p>
        </div>

        <div className="border-l-4 border-accent pl-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Source</h3>
          <p className="text-muted-foreground mb-2">
            Based on reporting by The New York Times and CTV News
          </p>
          <a 
            href="https://www.ctvnews.ca/world/article/us-navy-seals-botched-secret-2019-mission-in-north-korea-report/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Read the full report →
          </a>
        </div>

        <div className="bg-muted/30 border border-border/60 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Perspective is Everything</h3>
          <p className="text-lg leading-relaxed mb-4">
            This exercise reveals how perspective shapes our reaction to the same events. When we initially framed this as "foreign forces killing Americans," it likely triggered outrage and condemnation.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            But when revealed as "American forces killing foreigners," the same actions might feel more justified, necessary, or understandable - even though the human cost is identical.
          </p>
          <p className="text-lg leading-relaxed">
            Understanding this bias is crucial for seeing past the narratives that shape how we view international conflicts and military actions around the world.
          </p>
        </div>
      </div>
    </article>
  )
}