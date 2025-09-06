export default function MartillContent() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight">International Ideologies: Five Paradigms (Martill 2017)</h1>
      <p className="mb-6 leading-7">
        Benjamin Martill maps five ways scholars analyze ideology in international relations. Here is a plain-language summary so
        anyone can follow.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-foreground/20 bg-background/40 p-4">
          <h2 className="mb-1 text-xl font-bold">Analytical</h2>
          <p className="leading-7">Tests causal effects using surveys, case comparisons, and stats. Strength: measurement; Limit: nuance.</p>
        </div>
        <div className="rounded-lg border border-foreground/20 bg-background/40 p-4">
          <h2 className="mb-1 text-xl font-bold">Historical</h2>
          <p className="leading-7">Uses archives to trace how ideas mattered in specific times. Strength: context; Limit: generalization.</p>
        </div>
        <div className="rounded-lg border border-foreground/20 bg-background/40 p-4">
          <h2 className="mb-1 text-xl font-bold">Philosophical</h2>
          <p className="leading-7">Connects IR to traditions (Hobbes, Kant). Strength: clarity; Limit: distance from data.</p>
        </div>
        <div className="rounded-lg border border-foreground/20 bg-background/40 p-4">
          <h2 className="mb-1 text-xl font-bold">Critical</h2>
          <p className="leading-7">Asks whose interests ideas serve. Strength: power awareness; Limit: can underplay agency.</p>
        </div>
        <div className="rounded-lg border border-foreground/20 bg-background/40 p-4 md:col-span-2">
          <h2 className="mb-1 text-xl font-bold">Reflexive</h2>
          <p className="leading-7">Shows how theories shape the world they describe. Strength: self-awareness; Limit: fewer predictions.</p>
        </div>
      </div>

      <h2 className="mb-2 mt-8 text-2xl font-bold">What scholars debate</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li><span className="font-semibold">What to call it</span> (ideology, belief system, theory, tradition) — labels imply different scopes.</li>
        <li><span className="font-semibold">How to study it</span> (single cases, comparisons, history, statistics) — methods trade off depth vs. breadth.</li>
        <li><span className="font-semibold">Which ideologies matter</span> (realism–liberalism, cosmopolitan–communitarian, left–right, etc.).</li>
        <li><span className="font-semibold">Who holds ideologies</span> (elites, publics, parties, states, IOs) — and at what level they operate.</li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">Citation</h2>
      <p className="text-sm leading-6">
        Martill, B. (2017). International ideologies: paradigms of ideological analysis and world politics. Journal of Political Ideologies, 22(3), 236–255. DOI: 10.1080/13569317.2017.1345139
      </p>
    </section>
  )
}


