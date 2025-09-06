export default function ActivationParadigmContent() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight">Activation Paradigm: Why People Support Demanding Policies</h1>
      <p className="mb-6 leading-7">
        Based on Van Hootegem, Rossetti, Abts & Meuleman (2023, International Journal of Social Welfare). They study why the
        public supports demanding active labour market policies (ALMPs) like stricter obligations, sanctions, and time limits.
      </p>

      <div className="mb-8 rounded-lg border border-foreground/20 bg-background/40 p-4">
        <h2 className="mb-2 text-xl font-bold">Core idea</h2>
        <p className="leading-7">
          Support is tied to the activation policy paradigm: how people think benefits should be distributed (justice preferences)
          and why people think unemployment happens (attributions). These low‑level ideological beliefs predict support beyond
          standard left–right ideology or self‑interest.
        </p>
      </div>

      <h2 className="mb-3 text-2xl font-bold">Two pillars that predict support</h2>
      <ul className="mb-8 list-disc space-y-3 pl-6">
        <li>
          <span className="font-semibold">Distributive justice</span>:
          preferring <span className="font-semibold">equity</span> (benefits tied to prior contribution) or <span className="font-semibold">need</span> (target only those most in need)
          → higher support for demanding ALMPs; preferring <span className="font-semibold">equality</span> → lower support.
        </li>
        <li>
          <span className="font-semibold">Unemployment attributions</span>:
          <span className="font-semibold">individual blame</span> (laziness/lack of effort) → much higher support; attributing to social causes or fate → lower support.
          Individual fate (bad luck) does not raise support.
        </li>
      </ul>

      <h2 className="mb-3 text-2xl font-bold">Methods in one line</h2>
      <p className="mb-8 leading-7">
        Structural equation modeling on Belgium’s 2014 national election study (N=1,901). The paradigm variables added large
        explanatory power beyond self‑interest and left–right ideology.
      </p>

      <h2 className="mb-3 text-2xl font-bold">What this means</h2>
      <ul className="mb-8 list-disc space-y-3 pl-6">
        <li>Activation support is rooted in reciprocity (equity) and selectivity (need), not just generic ideology.</li>
        <li>Blame‑based views of unemployment strongly align with support for sanctions and obligations.</li>
        <li>Findings fit a broader shift toward conditionality and individual responsibility in welfare debates.</li>
      </ul>

      <h2 className="mb-2 text-2xl font-bold">Citation</h2>
      <p className="text-sm leading-6">
        Van Hootegem, A., Rossetti, F., Abts, K., & Meuleman, B. (2023). The ideological roots of the activation paradigm: How justice
        preferences and unemployment attributions shape public support for demanding activation policies. International Journal of Social Welfare.
        https://doi.org/10.1111/ijsw.12628
      </p>
    </section>
  )
}


