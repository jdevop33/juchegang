"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import "./mobile-styles.css"

interface HistoricalScenario {
  id: string
  title: string
  description: string
  choices: {
    id: string
    text: string
    consequence: string
    historicalExample: string
  }[]
}

const scenarios: HistoricalScenario[] = [
  {
    id: 'nelson-mandela',
    title: 'The Terrorist or Freedom Fighter?',
    description: 'A leader advocates for his people\'s rights through armed resistance. Western governments and media call him a dangerous terrorist. What\'s your view?',
    choices: [
      {
        id: 'terrorist',
        text: 'Clearly a terrorist - violence against the state is never justified',
        consequence: 'You agreed with the US State Department\'s 1988 classification...',
        historicalExample: 'Nelson Mandela remained on the US terrorist watch list until 2008 - 18 years after his release from prison and 14 years after becoming South Africa\'s president.'
      },
      {
        id: 'freedom-fighter',
        text: 'A freedom fighter - sometimes violence is necessary against oppression',
        consequence: 'You disagreed with Western governments at the time...',
        historicalExample: 'The same leaders who called Mandela a terrorist later gave him the Nobel Peace Prize. Reagan and Thatcher both opposed sanctions on apartheid South Africa.'
      }
    ]
  },
  {
    id: 'castro-healthcare',
    title: 'The Dictator or Healthcare Pioneer?',
    description: 'A Caribbean leader nationalizes foreign-owned businesses and implements universal healthcare and education. Western media calls him a brutal dictator.',
    choices: [
      {
        id: 'dictator',
        text: 'A brutal dictator who destroys freedom and prosperity',
        consequence: 'You aligned with decades of US media coverage...',
        historicalExample: 'Cuba has lower infant mortality than the US, higher literacy rates, and sends more doctors abroad per capita than any other country. The WHO called Cuba\'s healthcare system a model for the world.'
      },
      {
        id: 'reformer',
        text: 'A reformer who prioritized his people\'s welfare over foreign profits',
        consequence: 'You disagreed with mainstream Western narrative...',
        historicalExample: 'Even CIA documents acknowledge Cuba\'s remarkable health and education achievements. Life expectancy increased from 59 to 79 years under Castro\'s rule.'
      }
    ]
  },
  {
    id: 'gaddafi-libya',
    title: 'The Mad Dog or African Unifier?',
    description: 'An African leader uses oil wealth to provide free healthcare, education, and housing. He proposes a unified African currency to reduce Western dependence. Western leaders call him unstable.',
    choices: [
      {
        id: 'madman',
        text: 'An unstable dictator threatening regional peace',
        consequence: 'You supported the 2011 NATO intervention narrative...',
        historicalExample: 'Libya went from Africa\'s highest standard of living to a failed state with open slave markets. Hillary Clinton laughed: "We came, we saw, he died."'
      },
      {
        id: 'unifier',
        text: 'A leader working for African independence from Western exploitation',
        consequence: 'You questioned the intervention narrative...',
        historicalExample: 'Gaddafi\'s Great Man-Made River provided water to 70% of Libyans. NATO bombed the water infrastructure during the 2011 war, violating Geneva Conventions.'
      }
    ]
  }
]

export default function NavySealsCiviliansContent() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [choices, setChoices] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [showConsequence, setShowConsequence] = useState(false)
  const [feelingSelected, setFeelingSelected] = useState<string | null>(null)
  const [showPlotTwist, setShowPlotTwist] = useState(false)

  const handleChoice = (choiceId: string) => {
    setSelectedChoice(choiceId)
    setShowConsequence(true)
  }

  const handleContinue = () => {
    if (selectedChoice) {
      const newChoices = [...choices, selectedChoice]
      setChoices(newChoices)
      setProgress(((currentStep + 2) / (scenarios.length + 2)) * 100)
      
      if (currentStep < scenarios.length - 1) {
        setCurrentStep(currentStep + 1)
        setSelectedChoice(null)
        setShowConsequence(false)
      } else {
        setShowResults(true)
      }
    }
  }

  const handleFeeling = (feeling: string) => {
    setFeelingSelected(feeling)
    // Haptic feedback on mobile if supported
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }
    // Auto-advance after 2 seconds to show the plot twist
    setTimeout(() => {
      setShowPlotTwist(true)
    }, 2000)
  }

  const resetJourney = () => {
    setCurrentStep(-1)
    setChoices([])
    setShowResults(false)
    setProgress(0)
    setSelectedChoice(null)
    setShowConsequence(false)
    setFeelingSelected(null)
    setShowPlotTwist(false)
  }

  // Introduction screen
  if (currentStep === -1) {
    return (
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
              🎯 Interactive Journey
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Perspective Challenge
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              How do our judgments change when we know who's making the decisions? Take this interactive journey through history to discover your own perspective biases.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">🌍 Your Historical Journey Awaits</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-6">
                You'll encounter 3 real historical scenarios. Each time, you'll judge a leader's actions based on the information available to people at the time.
              </p>
              <p className="text-muted-foreground mb-6">
                Then you'll see how history - and perspective - can completely change our understanding.
              </p>
              <Button 
                onClick={() => setCurrentStep(0)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 touch-manipulation min-h-[48px]"
                size="lg"
              >
                Begin Your Journey 🚀
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">📚</div>
              <div>Learn real history</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">🤔</div>
              <div>Question perspectives</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">🌟</div>
              <div>Discover truth</div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  // Scenario screens
  if (!showResults && currentStep < scenarios.length) {
    const scenario = scenarios[currentStep]
    const currentChoice = selectedChoice ? scenario.choices.find(c => c.id === selectedChoice) : null

    return (
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-medium">
                📊 Scenario {currentStep + 1} of {scenarios.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Progress: {Math.round(progress)}%
              </div>
            </div>
            <Progress value={progress} className="mb-6" />
          </div>

          {!showConsequence ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">{scenario.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-8 leading-relaxed">{scenario.description}</p>
                
                <div className="space-y-4">
                  <p className="font-semibold text-muted-foreground mb-4">What's your judgment?</p>
                  {scenario.choices.map((choice) => (
                    <Button
                      key={choice.id}
                      variant="outline"
                      className="w-full p-6 min-h-[60px] h-auto text-left justify-start hover:bg-accent/50 touch-manipulation"
                      onClick={() => handleChoice(choice.id)}
                    >
                      <div className="text-base leading-relaxed">{choice.text}</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/20 dark:border-yellow-800">
                <CardHeader>
                  <CardTitle className="text-yellow-800 dark:text-yellow-200">Your Choice: {currentChoice?.text}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4 text-yellow-800 dark:text-yellow-200">{currentChoice?.consequence}</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200">📚 The Historical Reality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-blue-800 dark:text-blue-200">{currentChoice?.historicalExample}</p>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button 
                  onClick={handleContinue}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 min-h-[48px] touch-manipulation"
                  size="lg"
                >
                  {currentStep < scenarios.length - 1 ? "Continue Journey →" : "See Final Results 🎯"}
                </Button>
              </div>
            </div>
          )}

          {!showConsequence && (
            <div className="text-center text-sm text-muted-foreground">
              Choose based on the information presented - just like people had to at the time.
            </div>
          )}
        </div>
      </article>
    )
  }

  // Results screen with SEAL story
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
            ✅ Journey Complete
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Now for the Real Test
          </h1>
        </div>

        <Card className="mb-8 border-red-200 bg-red-50/50 dark:bg-red-900/20 dark:border-red-800">
          <CardHeader>
            <CardTitle className="text-red-800 dark:text-red-200">🚨 BREAKING: Foreign Special Forces Kill American Civilians</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-red-800 dark:text-red-200">
              <p>Elite foreign naval commandos launched a covert operation to plant surveillance equipment near American territory to spy on US leadership, but the mission went catastrophically wrong, resulting in the deaths of multiple American civilians.</p>
              
              <p>The foreign special forces - from the same unit that conducted high-profile assassinations - approached in mini-submarines, then swam to shore under cover of darkness.</p>
              
              <p>Believing their mission was compromised when a small American fishing boat approached, the foreign operatives opened fire, killing 2-3 American civilians who were simply fishing to make a living.</p>
              
              <p>To cover their tracks, the foreign soldiers used knives to puncture the victims' lungs so their bodies would sink to the bottom.</p>
            </div>
          </CardContent>
        </Card>

        {!feelingSelected ? (
          <div className="text-center mb-8">
            <p className="text-xl font-semibold mb-6">How does this story make you feel? What's your judgment?</p>
            <p className="text-base text-muted-foreground mb-6">Tap your reaction below ↓</p>
            <div className="grid gap-4 max-w-2xl mx-auto">
              <Button 
                variant="outline" 
                className="w-full p-4 min-h-[60px] text-left justify-start hover:bg-red-50 hover:border-red-300 dark:hover:bg-red-950 touch-manipulation"
                onClick={() => handleFeeling('outrage')}
              >
                <span className="text-lg">😡 Outrage - This is terrorism!</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full p-4 min-h-[60px] text-left justify-start hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-950 touch-manipulation"
                onClick={() => handleFeeling('concern')}
              >
                <span className="text-lg">😰 Concern - Investigate this!</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full p-4 min-h-[60px] text-left justify-start hover:bg-red-50 hover:border-red-300 dark:hover:bg-red-950 touch-manipulation"
                onClick={() => handleFeeling('anger')}
              >
                <span className="text-lg">😠 Anger - Punish the perpetrators!</span>
              </Button>
            </div>
          </div>
        ) : !showPlotTwist ? (
          <div className="text-center mb-8">
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-800">
              <CardContent className="p-6">
                <p className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">
                  Your reaction: {feelingSelected === 'outrage' ? '😡 Outrage' : feelingSelected === 'concern' ? '😰 Concern' : '😠 Anger'}
                </p>
                <p className="text-lg text-blue-800 dark:text-blue-200 mb-4">
                  That's a completely natural response to reading about foreign forces killing innocent civilians...
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <span className="text-blue-800 dark:text-blue-200">Preparing to reveal the truth...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            <Card className="mb-8 border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/20 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="text-yellow-800 dark:text-yellow-200">⚠️ Plot Twist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
                  The "foreign forces" were US Navy SEALs.
                </p>
                <p className="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
                  The "American civilians" were North Korean fishermen.
                </p>
                <p className="text-lg text-yellow-800 dark:text-yellow-200">
                  This actually happened in 2019. Military reviews found the killings "justified." The details were classified and kept from congressional oversight.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8 border-purple-200 bg-purple-50/50 dark:bg-purple-900/20 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-200">🤔 Your Reaction Changed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-purple-800 dark:text-purple-200">
                  You felt {feelingSelected === 'outrage' ? 'outrage' : feelingSelected === 'concern' ? 'concern' : 'anger'} when you thought foreign forces killed Americans. 
                  How do you feel now knowing it was American forces killing North Koreans?
                </p>
                <p className="text-lg font-semibold mt-3 text-purple-800 dark:text-purple-200">
                  This is exactly how perspective shapes our judgment of identical actions.
                </p>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎯 The Point of This Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Throughout history, the same actions have been judged completely differently depending on perspective:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mandela: "Terrorist" → Nobel Peace Prize winner</li>
              <li>Castro: "Dictator" → Healthcare pioneer (according to WHO)</li>
              <li>Gaddafi: "Mad Dog" → Provided highest African living standards</li>
              <li>Navy SEALs: "Heroes" → Killed unarmed civilians (same as above)</li>
            </ul>
            <p className="text-lg">
              We are all human. We all make mistakes. We all deserve to be judged by the same standards.
            </p>
            <p className="text-lg font-semibold">
              The question isn't who's right or wrong - it's whether we can see past the labels and narratives to our shared humanity.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={resetJourney}
            variant="outline"
            className="px-8 py-4 min-h-[48px] touch-manipulation"
          >
            Take the Journey Again
          </Button>
        </div>

        <div className="mt-8 border-l-4 border-accent pl-6">
          <h3 className="text-xl font-bold mb-4">Sources</h3>
          <p className="text-muted-foreground mb-2">Navy SEAL story:</p>
          <a 
            href="https://www.ctvnews.ca/world/article/us-navy-seals-botched-secret-2019-mission-in-north-korea-report/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            CTV News: US Navy SEALs botched secret 2019 mission in North Korea
          </a>
        </div>
      </div>
    </article>
  )
}