"use client"

export default function CovertOperationsContent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium">
            🔓 DECLASSIFIED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Human Cost of Covert Operations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Documented evidence from declassified files, congressional investigations, and credible historical sources revealing the true human toll.
          </p>
        </div>

        <div className="bg-yellow-50/50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-3 text-yellow-800 dark:text-yellow-200">
            ⚠️ Content Warning
          </h3>
          <p className="text-yellow-800 dark:text-yellow-200">
            This briefing contains detailed accounts of civilian casualties, torture, and state violence. 
            All information is sourced from official documents, congressional investigations, and credible journalism.
            We honor the victims by telling their stories truthfully.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When Wedding Guests Became Targets</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            On December 12, 2013, four Hellfire missiles struck a wedding convoy traveling between villages in Yemen's al-Bayda province. 
            <strong> Twelve men aged 20-65 were killed instantly, and 15 wounded including the bride, who suffered shrapnel wounds under her eye.</strong> 
            The Pentagon initially claimed all casualties were Al-Qaeda militants.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Human Rights Watch investigators later confirmed it was a genuine wedding procession. The Yemeni government, acknowledging the error, 
            paid families $110,000 and delivered 101 Kalashnikov rifles as a traditional apology gesture.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            This pattern repeated across multiple countries: a November 2008 strike in Afghanistan's Kandahar province killed 
            <strong> 37 wedding guests including 23 children and 10 women</strong>, with the bride among the wounded.
          </p>

          <div className="bg-muted/30 border-l-4 border-red-500 pl-6 mb-8">
            <p className="italic text-lg">
              "The targeting of celebrations extended beyond weddings. Between 2009-2012, the Bureau of Investigative Journalism documented that 
              <strong> more than 20 civilians were attacked in deliberate strikes on funerals</strong> in Pakistan."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Night They Came for the Children</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            CIA-backed Afghan strike forces known as "Zero Units" operated outside military oversight from 2008-2021. 
            <strong> Just one unit killed at least 452 civilians in 107 raids over four years</strong>, according to ProPublica's investigation 
            of declassified documents.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Soldiers were required to sign pre-written reports claiming no civilian casualties occurred, while children killed in raids 
            were classified in reports as "TITS" - terrorists in training.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            The most devastating recent example occurred on August 29, 2021, in Kabul. A drone strike targeting what the Pentagon called 
            ISIS-K terrorists instead killed aid worker Zemari Ahmadi and nine family members. 
            <strong> The dead included seven children: Zamir (20), Faisal (16), Farzad (10), Arwin (7), Benyamin (6), Hayat (2), and Malika (3).</strong>
          </p>

          <div className="bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h4 className="font-bold mb-3 text-blue-800 dark:text-blue-200">The Kabul Strike Timeline</h4>
            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
              <li>• Pentagon tracks Ahmadi for 8 hours, watching him go to work</li>
              <li>• They interpret his water containers as "explosives"</li>
              <li>• Children run to greet him when he arrives home</li>
              <li>• Missile strikes moments later</li>
              <li>• Pentagon calls it a "righteous strike" preventing imminent threat</li>
              <li>• Three weeks later: admits he worked for US aid organization</li>
              <li>• No US personnel faced disciplinary action</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Human Cost</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            This documented history reveals <strong>over 100,000 civilian deaths directly attributable to covert operations</strong>, 
            with millions more affected by the conflicts these operations sparked or prolonged.
          </p>

          <p className="text-lg leading-relaxed mb-8 font-semibold">
            Each statistic represents families destroyed, communities terrorized, and trust shattered. These are not abstract 
            policy debates but human tragedies measured in blood and documented in files once marked "Top Secret" - 
            files that prove what victims' families knew all along.
          </p>
        </section>

        <div className="bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-green-800 dark:text-green-200">
            🕊️ Path Forward: Truth and Reconciliation
          </h3>
          <p className="text-green-800 dark:text-green-200">
            Acknowledging this history is not anti-American - it's pro-humanity. Every nation has made mistakes. 
            The path forward requires honest accounting, genuine accountability, and commitment to preventing future atrocities. 
            Only through truth can we build a world where all people, regardless of nationality, are valued equally.
          </p>
        </div>
      </div>
    </div>
  )
}
