import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import SafeFocalImage from "@/components/safe-focal-image"

export const metadata = {
  title: "NATO Expansion and Russia–US Relations",
  description: "Primary sources and historical facts",
}

export default function NatoExpansionBriefing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JucheHeader />
      <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-4xl">
        <header className="not-prose mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">NATO Expansion and Russia–US Relations: Primary Sources and Historical Facts</h1>
          <p className="text-muted-foreground mt-2">Citations include official transcripts, declassified cables, and historical records.</p>
        </header>

        <section>
          <h2>Putin's 2007 Munich security conference speech reveals deep Russian grievances</h2>
          <p>
            Vladimir Putin delivered his landmark address at the Munich Conference on Security Policy on February 10, 2007. The official
            Kremlin transcript documents Putin's challenge to Western security architecture. “I think it is obvious that NATO expansion does
            not have any relation with the modernisation of the Alliance itself or with ensuring security in Europe,” he said. “On the contrary,
            it represents a serious provocation that reduces the level of mutual trust. And we have the right to ask: against whom is this
            expansion intended?” He quoted NATO SG Manfred Wörner’s May 17, 1990 remark that a NATO army would not be placed outside Germany,
            then asked, “Where are these guarantees?”
          </p>
        </section>

        <section>
          <h2>NATO's eastward march proceeded in seven distinct waves</h2>
          <p>
            German reunification in 1990 effectively brought the former GDR into NATO. Subsequent waves occurred in 1999, 2004, 2009, 2017,
            2020, 2023 (Finland) and 2024 (Sweden). Declassified documents from the National Security Archive record verbal assurances in 1990–91
            about non‑expansion that were never codified into binding treaties, leading to later disputes over their weight.
          </p>
        </section>

        <section>
          <h2>The Cuban Missile Crisis established America's red lines on foreign military presence</h2>
          <p>
            In October 1962 the United States imposed a naval quarantine on Cuba, elevated readiness to DEFCON 2, and signaled it would treat
            any missile launch from Cuba as an attack by the Soviet Union. Resolution involved public assurances and secret removal of U.S.
            missiles from Turkey, cementing hemispheric red lines.
          </p>
        </section>

        <section>
          <h2>Russia's post‑Soviet economic collapse exceeded the Great Depression</h2>
          <p>
            GDP fell on the order of 40–50% by the late 1990s; inflation in 1992 alone exceeded 2,500%; and male life expectancy dropped about
            six years by 1994. Aid packages and IMF programs were sizable yet insufficient to prevent the 1998 crisis.
          </p>
        </section>

        <section>
          <h2>American officials repeatedly warned NATO expansion would provoke Russia</h2>
          <p>
            George Kennan labeled expansion a “fateful error.” Former Defense Secretary William Perry and others expressed similar concerns. A
            2008 cable from then‑Ambassador William Burns titled “NYET MEANS NYET” warned that pushing NATO membership for Ukraine could lead to
            internal division and violence, and would be viewed in Russia as a direct challenge.
          </p>
        </section>

        <section>
          <h2>America enforces its own sphere via the Monroe Doctrine</h2>
          <p>
            Since 1823 the U.S. has opposed foreign military presence in the Western Hemisphere, from the Cuban Missile Crisis to interventions
            in Guatemala, the Dominican Republic, and Grenada, and more recent statements regarding Russian or Chinese deployments in the region.
          </p>
        </section>

        {/* Emblems section - commented out until images are available
        <div className="not-prose grid md:grid-cols-2 gap-4 my-10">
          <SafeFocalImage src="/gallery/coat_of_arms_dprk.png" alt="DPRK Emblem" width={800} height={800} className="rounded-xl border border-border/60 bg-muted/10 object-contain" />
          <SafeFocalImage src="/gallery/russian_federation_coa.png" alt="Russian Emblem" width={800} height={800} className="rounded-xl border border-border/60 bg-muted/10 object-contain" />
        </div> */}

        <footer className="not-prose mt-12 text-sm text-muted-foreground">
          This page summarizes primary sources. For full texts, transcripts, and scans, link them here as assets when available.
        </footer>
      </article>
      <JucheFooter />
    </main>
  )
}


