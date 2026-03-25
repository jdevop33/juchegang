"use client"

export default function ChinaCollapseContent() {
  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-sovereign-gold/10 text-sovereign-gold rounded-full text-sm font-medium tracking-widest uppercase">
            JPanda Papers
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#f0ebe3]">
            The &ldquo;China Collapse&rdquo; Narrative
          </h1>
          <p className="text-xl text-[#a0b4c8] max-w-2xl mx-auto italic">
            A Comprehensive Fact-Based Refutation
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[#a0b4c8]">
            <span>March 2026</span>
            <span className="text-sovereign-gold">|</span>
            <span>Unclassified // For Public Release</span>
          </div>
        </div>

        {/* Key Findings */}
        <div className="not-prose my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-korean-red mb-1">5.0%</div>
              <div className="text-[#f0ebe3]/70 text-sm">GDP Growth (2024&ndash;2025)</div>
            </div>
            <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-sovereign-gold mb-1">$992B</div>
              <div className="text-[#f0ebe3]/70 text-sm">Record Trade Surplus (2024)</div>
            </div>
            <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-korean-red mb-1">30%</div>
              <div className="text-[#f0ebe3]/70 text-sm">Share of Global Growth</div>
            </div>
            <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-sovereign-gold mb-1">$3.58T</div>
              <div className="text-[#f0ebe3]/70 text-sm">Exports (2024), Up 5.9% YoY</div>
            </div>
            <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-korean-red mb-1">$196B</div>
              <div className="text-[#f0ebe3]/70 text-sm">Top 6 Banks Combined Profit</div>
            </div>
            <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-sovereign-gold mb-1">24 Years</div>
              <div className="text-[#f0ebe3]/70 text-sm">Of Failed Collapse Predictions</div>
            </div>
          </div>
        </div>

        {/* Executive Summary Callout */}
        <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
          <p className="text-lg leading-relaxed text-[#f0ebe3]/90">
            <strong className="text-sovereign-gold">Executive Summary:</strong> The claims of China&rsquo;s imminent economic collapse are contradicted by systematic data from the IMF, World Bank, major investment banks, and China&rsquo;s own audited statistics. While China faces genuine structural challenges&mdash;property sector adjustment, deflationary pressures, and demographic headwinds&mdash;an economy growing at 5.0%, posting record exports of $3.58 trillion, and contributing 30% of global growth does not meet any standard definition of &ldquo;depression&rdquo; or &ldquo;collapse.&rdquo;
          </p>
        </div>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section I: Economy Growing */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">01</span>
            <h2 className="text-3xl font-bold">China&rsquo;s Economy Is Growing, Not Collapsing</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The IMF, in its December 2025 Article IV consultation, projected China&rsquo;s GDP growth at <strong className="text-sovereign-gold">5.0% for 2025</strong> and <strong className="text-sovereign-gold">4.5% for 2026</strong>&mdash;both figures revised <em>upward</em> from earlier estimates. Mission Chief Sonali Jain-Chandra stated: &ldquo;China&rsquo;s economy has shown notable resilience despite facing multiple shocks in recent years.&rdquo;
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The World Bank similarly raised its 2025 forecast to <strong className="text-sovereign-gold">4.8%</strong>, up from 4.0% projected in April 2025&mdash;the largest upward revision for any major economy.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            The macroeconomic indicators flatly contradict &ldquo;depression&rdquo; claims:
          </p>

          {/* Data table */}
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-sovereign-gold/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-sovereign-gold/10">
                  <th className="text-left p-3 text-sovereign-gold font-semibold">Indicator</th>
                  <th className="text-left p-3 text-sovereign-gold font-semibold">2024 Figure</th>
                  <th className="text-left p-3 text-sovereign-gold font-semibold">Trend</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/80">
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3">GDP Growth</td>
                  <td className="p-3 font-semibold">5.0% (Q4: 5.4% YoY)</td>
                  <td className="p-3 text-green-500">Accelerating</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3">Manufacturing PMI</td>
                  <td className="p-3 font-semibold">Above 50 (3 consecutive months)</td>
                  <td className="p-3 text-green-500">Expanding</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3">Trade Surplus</td>
                  <td className="p-3 font-semibold">$992.2 billion</td>
                  <td className="p-3 text-green-500">Largest in global history</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3">Exports</td>
                  <td className="p-3 font-semibold">$3.58 trillion (+5.9% YoY)</td>
                  <td className="p-3 text-green-500">Dec alone +10.7%</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3">Industrial Output</td>
                  <td className="p-3 font-semibold">+5.8%</td>
                  <td className="p-3 text-green-500">Up from 4.6% in 2023</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3">Retail Sales</td>
                  <td className="p-3 font-semibold">+3.5% (online +7.2%)</td>
                  <td className="p-3 text-green-500">Growing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              Even the most skeptical alternative analysis&mdash;Rhodium Group&rsquo;s estimate of 2.4&ndash;2.8% actual growth versus official 5.0%&mdash;still represents <strong>continued expansion, not contraction</strong>. For context, the United States is projected to grow around 2% in 2025. An economy contributing one-third of global economic growth is, by definition, not in &ldquo;depression.&rdquo;
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section II: Banks */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">02</span>
            <h2 className="text-3xl font-bold">Chinese Banks Are Profitable, Not &ldquo;Cashflow Negative&rdquo;</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The claim that China&rsquo;s top six banks are &ldquo;cashflow negative&rdquo; and surviving only on &ldquo;$1 trillion in hidden PBOC support&rdquo; is not supported by audited financial data. In 2024, China&rsquo;s six largest banks (ICBC, CCB, ABC, BOC, BOCOM, PSBC) reported <strong className="text-sovereign-gold">combined net profits of RMB 1.42 trillion ($196 billion)</strong>&mdash;all positive, with ABC growing profits by 4.76% year-over-year.
          </p>

          <div className="not-prose my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-sovereign-gold mb-1">19.39%</div>
                <div className="text-[#f0ebe3]/70 text-sm">ICBC Capital Adequacy Ratio</div>
              </div>
              <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-korean-red mb-1">1.25&ndash;1.34%</div>
                <div className="text-[#f0ebe3]/70 text-sm">NPL Ratio (vs EU 2.28&ndash;2.31%)</div>
              </div>
              <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-sovereign-gold mb-1">210%+</div>
                <div className="text-[#f0ebe3]/70 text-sm">Provision Coverage Ratio</div>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Capital adequacy ratios substantially exceed regulatory requirements. ICBC&rsquo;s total capital adequacy ratio stands at <strong className="text-sovereign-gold">19.39%</strong>, with CCB at <strong className="text-sovereign-gold">19.69%</strong>&mdash;far above Basel III minimums. Non-performing loan ratios for the major banks range from 1.25% to 1.34%, actually <em>lower</em> than European Union banks (2.28&ndash;2.31%).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Provision coverage ratios exceed 210%&mdash;meaning Chinese banks hold more than double the reserves needed to cover bad loans, more conservative than Western peers.
          </p>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              The IMF&rsquo;s 2024 Financial Sector Assessment Program stress tests concluded that under an adverse scenario (GDP growth assumptions of just 1.1&ndash;3.2%), the 19 domestically systemically important banks would maintain capital adequacy of <strong>12.7%</strong>&mdash;still above regulatory minimums. The IMF Executive Board stated it was &ldquo;broadly reassured by the stress test findings that the banking system would remain resilient in an adverse scenario.&rdquo;
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section III: Demographics */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">03</span>
            <h2 className="text-3xl font-bold">China&rsquo;s Fertility Rate Is Not Uniquely Catastrophic</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            China&rsquo;s total fertility rate of approximately <strong className="text-sovereign-gold">1.0&ndash;1.2</strong> is indeed low and presents a genuine long-term challenge. However, framing this as uniquely catastrophic ignores that <strong className="text-korean-red">South Korea&rsquo;s fertility rate (0.72&ndash;0.75) is significantly worse than China&rsquo;s</strong>.
          </p>

          {/* Fertility Comparison Table */}
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-sovereign-gold/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-sovereign-gold/10">
                  <th className="text-left p-3 text-sovereign-gold font-semibold">Country/Territory</th>
                  <th className="text-left p-3 text-sovereign-gold font-semibold">Fertility Rate</th>
                  <th className="text-left p-3 text-sovereign-gold font-semibold">vs China</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/80">
                <tr className="border-t border-sovereign-gold/10 bg-korean-red/5">
                  <td className="p-3">Macau</td>
                  <td className="p-3 font-semibold">0.68</td>
                  <td className="p-3 text-korean-red">Lower</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3">South Korea</td>
                  <td className="p-3 font-semibold">0.72&ndash;0.75</td>
                  <td className="p-3 text-korean-red">Lower</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-korean-red/5">
                  <td className="p-3">Hong Kong</td>
                  <td className="p-3 font-semibold">0.73</td>
                  <td className="p-3 text-korean-red">Lower</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3">Taiwan</td>
                  <td className="p-3 font-semibold">0.87</td>
                  <td className="p-3 text-korean-red">Lower</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-korean-red/5">
                  <td className="p-3">Singapore</td>
                  <td className="p-3 font-semibold">0.97</td>
                  <td className="p-3 text-korean-red">Lower</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3 font-semibold">China</td>
                  <td className="p-3 font-semibold text-sovereign-gold">1.0&ndash;1.2</td>
                  <td className="p-3">&mdash;</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3">Japan</td>
                  <td className="p-3 font-semibold">1.15&ndash;1.22</td>
                  <td className="p-3 text-[#f0ebe3]/50">Comparable</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3">Italy</td>
                  <td className="p-3 font-semibold">1.2</td>
                  <td className="p-3 text-[#f0ebe3]/50">Comparable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Notably, 2024 saw China&rsquo;s births <em>increase</em> to 9.54 million (up 520,000 from 2023), the first increase in years, attributed to post-COVID recovery and Year of the Dragon preferences.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-[#f0ebe3]">The &ldquo;Hospital Closures&rdquo; Myth</h3>

          <p className="text-lg leading-relaxed mb-6">
            The claim of &ldquo;7 hospitals closing per day&rdquo; is directly contradicted by official data showing hospital numbers at an <strong className="text-sovereign-gold">all-time high of 39,000</strong> in 2024&mdash;representing a <strong className="text-sovereign-gold">92% increase since 2009</strong>. Hospital beds have increased to 8 million, with bed density of <strong className="text-sovereign-gold">7.23 per 1,000 population</strong>&mdash;exceeding both the OECD average (4.7) and the United States (2.4).
          </p>

          <div className="not-prose my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-sovereign-gold mb-1">39,000</div>
                <div className="text-[#f0ebe3]/70 text-sm">Hospitals (All-Time High)</div>
              </div>
              <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-korean-red mb-1">7.23</div>
                <div className="text-[#f0ebe3]/70 text-sm">Beds per 1,000 (US: 2.4)</div>
              </div>
              <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-sovereign-gold mb-1">18x</div>
                <div className="text-[#f0ebe3]/70 text-sm">Healthcare Spending Growth Since 2000</div>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Healthcare spending has grown roughly <strong className="text-sovereign-gold">18-fold</strong> from under RMB 500 billion in 2000 to over RMB 9 trillion in 2023. Some public hospital consolidation has occurred, with private hospitals growing 193% from 2011&ndash;2021&mdash;a restructuring, not a collapse.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section IV: School Closures */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">04</span>
            <h2 className="text-3xl font-bold">School Closures Reflect Urbanization, Not Collapse</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The 74% decline in primary schools since 2000 is accurate, but stripped of context this figure is deeply misleading. <strong className="text-sovereign-gold">Student enrollment has actually increased</strong>&mdash;from 103.4 million (2018) to 108 million (2023)&mdash;while maintaining 99% primary enrollment rates.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The explanation is straightforward: China&rsquo;s urbanization rate rose from 36% (2000) to <strong className="text-sovereign-gold">67%</strong> (2024). When over 400 million people moved from rural villages to cities, closing empty village schools and consolidating students into larger, better-equipped urban facilities is rational policy, not economic failure.
          </p>

          <div className="not-prose my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-sovereign-gold mb-1">16x</div>
                <div className="text-[#f0ebe3]/70 text-sm">Education Spending Growth Since 2000</div>
              </div>
              <div className="bg-korean-red/10 border border-korean-red/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-korean-red mb-1">16:1</div>
                <div className="text-[#f0ebe3]/70 text-sm">Pupil-Teacher Ratio (Global Avg: 24.3:1)</div>
              </div>
              <div className="bg-sovereign-gold/10 border border-sovereign-gold/30 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-sovereign-gold mb-1">92.74%</div>
                <div className="text-[#f0ebe3]/70 text-sm">Teachers with Bachelor&rsquo;s+</div>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Education spending grew approximately <strong className="text-sovereign-gold">16-fold</strong> from RMB 385 billion (2000) to RMB 6.46 trillion ($906 billion) in 2023, representing 4.12% of GDP. Pupil-teacher ratios improved from roughly 22:1 to <strong className="text-sovereign-gold">16:1</strong>&mdash;better than the global average of 24.3:1. Academic research confirms that school consolidation &ldquo;substantially enhances the probability of rural students receiving high school education.&rdquo; This pattern mirrors rural consolidation in all urbanizing countries&mdash;it is development policy, not economic collapse.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section V: Baidu */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">05</span>
            <h2 className="text-3xl font-bold">Baidu&rsquo;s Loss Was a One-Time Accounting Adjustment</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The $1.58 billion loss attributed to Baidu in Q3 2025 was caused by a <strong className="text-sovereign-gold">$2.2 billion one-time asset impairment charge</strong>&mdash;a write-down of older servers no longer meeting modern AI computing efficiency standards. Excluding this accounting treatment, Baidu&rsquo;s net income would have been <strong className="text-sovereign-gold">RMB 2.6 billion ($359 million)</strong>&mdash;profitable. Non-GAAP net income was <strong className="text-sovereign-gold">RMB 3.8 billion ($530 million)</strong>.
          </p>

          <div className="not-prose my-8 p-6 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg">
            <h4 className="text-lg font-bold text-korean-red mb-3">For Context: Western AI Company Economics</h4>
            <ul className="space-y-2 text-[#f0ebe3]/90">
              <li>&bull; <strong>OpenAI</strong> lost <strong>$5 billion in 2024</strong> and projects losses of <strong>$74 billion by 2028</strong></li>
              <li>&bull; <strong>Anthropic</strong> lost <strong>$5.6 billion in 2024</strong></li>
              <li>&bull; Neither company has <em>ever</em> reported a profit</li>
              <li>&bull; <strong>Baidu</strong> reported <strong>$3.7 billion in non-GAAP net income for full-year 2024</strong> with a 25% EBITDA margin and maintains <strong>$41.6 billion in cash reserves</strong></li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Baidu continues growing its AI business&mdash;with AI Cloud revenue up 21% year-over-year and Ernie Bot (its ChatGPT competitor) reaching <strong className="text-sovereign-gold">430 million users</strong> with 1.5 billion daily API calls, a 30x increase year-over-year. Analyst consensus remains bullish, with JPMorgan setting a $188 price target (70%+ upside).
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section VI: Baijiu */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">06</span>
            <h2 className="text-3xl font-bold">Baijiu Decline Shows Premiumization, Not Collapse</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The decline in baijiu production from 13.6 million kiloliters (2016 peak) to approximately 4.5 billion liters (2023) is real but requires critical context: <strong className="text-sovereign-gold">industry revenue increased 36%</strong> over this period, from RMB 555 billion to RMB 756 billion. This is the classic &ldquo;premiumization&rdquo; pattern seen globally in alcohol markets&mdash;consumers drinking less but spending more on quality products.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The drivers are well-documented: Xi Jinping&rsquo;s anti-corruption campaign specifically targeted lavish government banquets; younger Chinese increasingly see baijiu as their &ldquo;parent&rsquo;s drink&rdquo; and prefer lower-ABV beverages; and stricter quality regulations drove market consolidation.
          </p>

          <div className="not-prose my-8 p-6 bg-sovereign-gold/5 border-l-4 border-sovereign-gold rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              <strong className="text-sovereign-gold">Case Study:</strong> Kweichow Moutai, China&rsquo;s largest baijiu producer and one of the world&rsquo;s most valuable spirits companies, reported <strong>2024 revenue of RMB 174.1 billion with net profit of RMB 86.2 billion (up 15.4%)</strong>. The pattern mirrors US craft beer exactly: volume declined 4% in 2024 while dollar sales rose 3%. Declining production volume in the context of rising revenue indicates evolving consumer preferences&mdash;not economic collapse.
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section VII: Track Record */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">07</span>
            <h2 className="text-3xl font-bold">&ldquo;China Collapse&rdquo; Predictions: 24 Years of Failure</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Gordon Chang&rsquo;s 2001 book <em>The Coming Collapse of China</em> predicted China would fall &ldquo;within five years, perhaps ten.&rdquo; When 2011 arrived without collapse, Chang wrote in Foreign Policy: &ldquo;Instead of 2011, the mighty Communist Party of China will fall in 2012. Bet on it.&rdquo; Foreign Policy named his prediction to its &ldquo;10 Worst Predictions of the Year&rdquo; list <em>twice</em>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Between 2001 and 2022, while collapse was repeatedly predicted, China&rsquo;s inflation-adjusted per capita income rose <strong className="text-sovereign-gold">4.6 times</strong> (compared to 33% in the U.S. and 22% in the UK).
          </p>

          {/* Timeline of failed predictions */}
          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-korean-red/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-korean-red/10">
                  <th className="text-left p-3 text-korean-red font-semibold">Year</th>
                  <th className="text-left p-3 text-korean-red font-semibold">Prediction</th>
                  <th className="text-left p-3 text-korean-red font-semibold">What Actually Happened</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/80">
                <tr className="border-t border-korean-red/10">
                  <td className="p-3 font-mono">2001</td>
                  <td className="p-3">Chang: Collapse within 5&ndash;10 years</td>
                  <td className="p-3">Per capita income rose 4.6x by 2022</td>
                </tr>
                <tr className="border-t border-korean-red/10 bg-korean-red/5">
                  <td className="p-3 font-mono">2008&ndash;09</td>
                  <td className="p-3">Severe crisis during Global Financial Crisis</td>
                  <td className="p-3">China grew 9.4%; US contracted 2.6%</td>
                </tr>
                <tr className="border-t border-korean-red/10">
                  <td className="p-3 font-mono">2012</td>
                  <td className="p-3">Clinton: Chinese system &ldquo;doomed&rdquo;; Chang: CPC falls in 2012</td>
                  <td className="p-3">Smooth leadership transition followed</td>
                </tr>
                <tr className="border-t border-korean-red/10 bg-korean-red/5">
                  <td className="p-3 font-mono">2015&ndash;16</td>
                  <td className="p-3">Oxford Economics: &ldquo;hard landing,&rdquo; growth &ldquo;closer to 4%&rdquo;</td>
                  <td className="p-3">China grew 6.8&ndash;7.0%; contributed 41.7% of global growth</td>
                </tr>
                <tr className="border-t border-korean-red/10">
                  <td className="p-3 font-mono">2020</td>
                  <td className="p-3">The Diplomat: COVID as &ldquo;China&rsquo;s Chernobyl Moment&rdquo;</td>
                  <td className="p-3">Only major economy with positive growth (2.24%); record trade surpluses</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            &ldquo;All the Western dire predictions for the Chinese economy have come to naught so far. Since the 1990s, there have been voices prophesying the doom of China&rsquo;s economy and every five to ten years, all kinds of &lsquo;China collapse&rsquo; theories resurface. In fact, it is the &lsquo;China collapse&rsquo; theory that has repeatedly collapsed.&rdquo;
            <footer className="text-sm text-[#a0b4c8] mt-2 not-italic">&mdash; Keyu Jin, LSE Economist, 2025 Davos Summer Summit</footer>
          </blockquote>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section VIII: GeoVest */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">08</span>
            <h2 className="text-3xl font-bold">Consider the Source: GeoVest Advisors</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            GeoVest Advisors is a small, fee-based investment advisor based in Fairport, New York (near Rochester), with approximately <strong className="text-korean-red">$105&ndash;213 million in assets under management</strong> and <strong className="text-korean-red">6 employees</strong>. For comparison, Goldman Sachs manages over $2.5 trillion.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            GeoVest&rsquo;s own website states prominently: &ldquo;The global economy, led by China, is headed for a major decline and no amount of positive thinking will change this fact&rdquo;&mdash;revealing an established bearish thesis rather than objective analysis. Philip Byrne holds CFA credentials and has legitimate experience, but GeoVest&rsquo;s research carries far less weight than assessments from the IMF, World Bank, or major global investment banks, all of which project continued Chinese growth.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section IX: Institutional Forecasts */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">09</span>
            <h2 className="text-3xl font-bold">Major Institutions Contradict the Collapse Narrative</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The world&rsquo;s leading economic institutions project continued solid growth:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border border-sovereign-gold/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-sovereign-gold/10">
                  <th className="text-left p-3 text-sovereign-gold font-semibold">Institution</th>
                  <th className="text-left p-3 text-sovereign-gold font-semibold">2025 Forecast</th>
                  <th className="text-left p-3 text-sovereign-gold font-semibold">2026 Forecast</th>
                </tr>
              </thead>
              <tbody className="text-[#f0ebe3]/80">
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3 font-semibold">IMF</td>
                  <td className="p-3">5.0%</td>
                  <td className="p-3">4.5%</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3 font-semibold">World Bank</td>
                  <td className="p-3">4.9%</td>
                  <td className="p-3">4.4%</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3 font-semibold">OECD</td>
                  <td className="p-3">5.0%</td>
                  <td className="p-3">4.4%</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10 bg-sovereign-gold/5">
                  <td className="p-3 font-semibold">Goldman Sachs</td>
                  <td className="p-3">5.0%</td>
                  <td className="p-3">4.8%</td>
                </tr>
                <tr className="border-t border-sovereign-gold/10">
                  <td className="p-3 font-semibold">JPMorgan</td>
                  <td className="p-3">4.8%</td>
                  <td className="p-3">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Foreign investors have returned: net inflows of <strong className="text-sovereign-gold">$10.1 billion</strong> into onshore stocks in H1 2025 ended two years of outflows. Hong Kong&rsquo;s Hang Seng Index is up over 35% in 2025, on pace for its biggest annual gain since 2017. Major institutions acknowledge genuine challenges while projecting continued growth&mdash;not collapse.
          </p>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Section X: Methodology */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">10</span>
            <h2 className="text-3xl font-bold">Anecdote-Based Analysis Has Well-Documented Limitations</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The methodology of citing tea prices, airport layoffs, and baijiu production as proof of economic collapse has fundamental problems. The Federal Reserve Bank of Chicago, which itself uses anecdotal evidence in its Beige Book, explicitly notes: &ldquo;The major drawbacks to anecdotal information are that it is highly subjective and can&rsquo;t be quantified. In addition, some observers question its accuracy and reliability.&rdquo;
          </p>

          <div className="not-prose my-8 p-6 bg-korean-red/5 border-l-4 border-korean-red rounded-r-lg">
            <p className="text-[#f0ebe3]/90 leading-relaxed">
              <strong className="text-korean-red">Methodological Warning:</strong> Cherry-picking negative anecdotes while ignoring contradictory systematic data&mdash;like record exports, positive GDP growth, and profitable banks&mdash;represents confirmation bias, not rigorous analysis. The European Central Bank&rsquo;s economic forecasting research notes that &ldquo;unsuitable forecasting methods and unsuitable expectations regarding the degree of performance are the most important reasons for the lack of accuracy in G7 macroeconomic predictions.&rdquo;
            </p>
          </div>
        </section>

        <div className="text-center text-sovereign-gold text-2xl my-8">&#9762;</div>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sovereign-gold text-2xl">&#8750;</span>
            <h2 className="text-3xl font-bold">Conclusion: Challenges Exist, But &ldquo;Collapse&rdquo; Is Not Supported by Evidence</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            China faces genuine structural challenges: a property sector correction that has reduced real estate investment by 10% annually, deflationary pressures with producer prices negative for 32 consecutive months, weak consumer confidence, and demographic headwinds that will intensify over decades. These merit serious analysis and policy response.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            However, &ldquo;depression&rdquo; and &ldquo;collapse&rdquo; are specific economic terms with meanings. A depression involves sustained, severe economic contraction. An economy with 5.0% GDP growth, record $992 billion trade surpluses, expanding industrial output, profitable banks with adequate capital, and contributions of 30% to global growth is not in depression.
          </p>

          <blockquote className="border-l-4 border-sovereign-gold pl-6 my-8 italic text-sovereign-gold text-xl">
            The track record of &ldquo;China collapse&rdquo; predictions&mdash;consistently wrong for 24 years across multiple supposed trigger events&mdash;suggests that this narrative reflects a persistent analytical bias rather than emerging reality.
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            The data from the IMF, World Bank, major investment banks, and China&rsquo;s own audited statistics tell a consistent story of an economy with problems that is nonetheless growing, not collapsing.
          </p>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Sources</h3>
          <div className="text-sm text-[#a0b4c8] space-y-1">
            <p>&bull; <a href="https://www.imf.org/en/news/articles/2025/12/10/pr-25415-china-imf-staff-completes-2025-article-iv-mission-to-the-peoples-republic-of-china" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">IMF Article IV Consultation (December 2025)</a></p>
            <p>&bull; <a href="https://www.cnbc.com/2025/10/07/world-bank-raises-china-growth-forecast-trade-tensions.html" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">World Bank China Growth Forecast (CNBC)</a></p>
            <p>&bull; <a href="https://english.www.gov.cn/news/202501/18/content_WS678ae501c6d0868f4e8eeef7.html" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">China National Bureau of Statistics (2024 Full-Year Data)</a></p>
            <p>&bull; <a href="https://tradedatamonitor.com/datanews/record-chinese-global-surplus-neared-1-trillion-in-2024/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Trade Data Monitor: Record Chinese Surplus (2024)</a></p>
            <p>&bull; <a href="https://think.ing.com/snaps/chinas-trade-surplus-hit-a-record-high-in-2024/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">ING Think: China Trade Surplus Record High</a></p>
            <p>&bull; <a href="https://www.scmp.com/economy/economic-indicators/article/3292825/chinas-factory-activity-continues-expanding-december" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">South China Morning Post: Manufacturing PMI</a></p>
            <p>&bull; <a href="https://rhg.com/research/after-the-fall-chinas-economy-in-2025/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Rhodium Group: China Economy Analysis</a></p>
            <p>&bull; <a href="https://in.marketscreener.com/quote/stock/INDUSTRIAL-AND-COMMERCIAL-1412597/news/Industrial-and-Commercial-Bank-of-China-ICBC-Achieves-Steady-Business-Development-While-Maintainin-49515443/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">MarketScreener: ICBC Capital Adequacy</a></p>
            <p>&bull; <a href="https://en.ccb.com/eng/2025-03/28/article_2025032817401862499.shtml" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">CCB Annual Results (2024)</a></p>
            <p>&bull; <a href="https://www.bankingsupervision.europa.eu/press/pr/date/2025/html/ssm.pr250320~d59cb011c5.en.html" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">European Banking Authority: NPL Data</a></p>
            <p>&bull; <a href="https://www.bbvaresearch.com/wp-content/uploads/2024/04/China-Banking-Monitor_2024_edi-6.pdf" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">BBVA Research: China Banking Monitor (IMF Stress Tests)</a></p>
            <p>&bull; <a href="https://www.cnbc.com/2025/09/27/south-koreas-birth-rate-collapse-threatens-growth.html" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">CNBC: South Korea Birth Rate</a></p>
            <p>&bull; <a href="https://worldpopulationreview.com/country-rankings/total-fertility-rate" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">World Population Review: Global Fertility Rates</a></p>
            <p>&bull; <a href="https://www.ceicdata.com/en/china/number-of-hospital--health-center/no-of-hospital" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">CEIC: China Hospital Numbers</a></p>
            <p>&bull; <a href="https://www.statista.com/statistics/279400/health-expenditures-in-china/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Statista: China Health Expenditures</a></p>
            <p>&bull; <a href="https://ir.baidu.com/news-releases/news-release-details/baidu-announces-third-quarter-2025-results" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Baidu Q3 2025 Earnings Release</a></p>
            <p>&bull; <a href="https://www.wheresyoured.at/wheres-the-money/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Where&rsquo;s Your Ed At: AI Company Financials</a></p>
            <p>&bull; <a href="https://www.moutaichina.com/mtgf/articleFileDir/2025-04/08/e67f4a84ff3c4fdea166c0fcd6607212.pdf" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Kweichow Moutai 2024 Annual Report</a></p>
            <p>&bull; <a href="https://en.wikipedia.org/wiki/The_Coming_Collapse_of_China" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Wikipedia: The Coming Collapse of China</a></p>
            <p>&bull; <a href="https://foreignpolicy.com/2011/12/29/the-coming-collapse-of-china-2012-edition/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Foreign Policy: Chang&rsquo;s 2012 Prediction</a></p>
            <p>&bull; <a href="https://www.matthewsasia.com/insights/sinology/2023/the-coming-collapse-of-china/" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Matthews Asia: 24 Years of Failed Predictions</a></p>
            <p>&bull; <a href="https://www.globaltimes.cn/page/202512/1349586.shtml" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Global Times: OECD Forecast</a></p>
            <p>&bull; <a href="https://www.chicagofed.org/publications/chicago-fed-letter/2003/january-185" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">Chicago Fed: Limitations of Anecdotal Evidence</a></p>
            <p>&bull; <a href="https://www.mdpi.com/1911-8074/15/1/1" target="_blank" rel="noopener noreferrer" className="text-sovereign-gold hover:underline">MDPI: Economic Forecasting Methodology</a></p>
          </div>
        </section>

      </div>
    </article>
  )
}
