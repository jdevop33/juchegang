import Link from "next/link"
import { ArrowLeft, Shield, Globe, AlertTriangle, Eye, Users, Database } from "lucide-react"

export const metadata = {
  title: "Wikipedia's Contested Neutrality: A Comprehensive Investigation - Truth Project",
  description: "Comprehensive investigation into systematic vulnerabilities to bias, institutional capture, and geopolitical manipulation that challenge Wikipedia's claims to neutrality.",
  openGraph: {
    title: "Wikipedia's Contested Neutrality: A Comprehensive Investigation",
    description: "Mounting evidence reveals systematic vulnerabilities to bias, institutional capture, and geopolitical manipulation in the world's largest collaborative knowledge project.",
    images: [
      { url: "/gallery/wikipedia-neutrality.jpg", width: 1200, height: 630, alt: "Wikipedia Neutrality Investigation" },
    ],
  },
}

export default function WikipediaNeutralityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/truth-project" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Truth Project
      </Link>

      <header className="mb-12">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm font-medium">
          <Shield className="h-4 w-4" />
          Comprehensive Investigation
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Wikipedia's Contested Neutrality</h1>
        <p className="text-xl text-white/80 max-w-4xl">
          Wikipedia stands as humanity's largest collaborative knowledge project, yet mounting evidence reveals systematic vulnerabilities to bias, institutional capture, and geopolitical manipulation that fundamentally challenge its claims to neutrality.
        </p>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3 space-y-8">
          {/* Executive Summary */}
          <section className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-red-300 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Critical Findings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Power Concentration</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• <strong>837 active administrators</strong> control 6.9M articles</li>
                  <li>• <strong>16 bureaucrats</strong> hold ultimate user rights</li>
                  <li>• <strong>84-91% male editors</strong> create systematic gender bias</li>
                  <li>• Geographic concentration in North America/Europe</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Financial Dependencies</h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• <strong>$185M annual revenue</strong> from tech giants</li>
                  <li>• Amazon, Google, Facebook, Apple backing</li>
                  <li>• George Soros: <strong>$2M donation</strong></li>
                  <li>• $255M reserves despite aggressive fundraising</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Architecture of Influence */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Database className="h-6 w-6" />
              The architecture of influence reveals concentrated power
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed">
                Wikipedia's governance structure contradicts its democratic ideals through extraordinary power concentration among a small elite. The Wikimedia Foundation maintains ultimate legal control over all content while claiming editorial distance, creating an accountability vacuum exploited by organized groups. <strong>Only 837 active administrators control English Wikipedia's 6.9 million articles</strong>, with an even smaller group of 16 bureaucrats holding user rights powers. Research from Cambridge Political Science Review demonstrates how early institutional capture by "anti-fringe" editors created self-reinforcing power asymmetries, transforming Wikipedia from "teach the controversy" neutrality to "proactive fringe-busting" through procedural rather than policy changes.
              </p>
              
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Financial Structure</h3>
                <p className="text-white/80">
                  While publicly emphasizing small-donor support averaging $11, the Wikimedia Foundation's $185 million annual revenue includes substantial backing from <strong>Amazon, Google, Facebook, Apple, and Microsoft</strong>, alongside major philanthropists like George Soros ($2 million) and the Rausing family ($5 million+). With $255 million in reserves representing 17 months of operating expenses, aggressive fundraising continues despite financial security.
                </p>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                Administrator demographics compound structural biases through severe underrepresentation. <strong>Between 84-91% of Wikipedia editors identify as male</strong>, creating systematic gender bias affecting content priorities and perspectives. Geographic concentration in North America and Europe means Global North editors control narratives about Global South topics, perpetuating what scholars term "epistemic colonialism." The Arbitration Committee's quasi-judicial powers favor "socially effective parties" with greater institutional experience, systematically excluding alternative viewpoints through procedural manipulation rather than substantive debate.
              </p>
            </div>
          </section>

          {/* Academic Research */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Academic research confirms accuracy alongside systematic bias</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed">
                The landmark 2005 Nature study comparing Wikipedia to Encyclopædia Britannica found comparable accuracy in science articles—3.9 versus 2.9 errors per article—legitimizing Wikipedia as a reference source. Subsequent research across medicine, history, and social sciences generally confirms reasonable accuracy, particularly in non-controversial scientific topics. <strong>Medical Wikipedia articles match professional databases for factual accuracy</strong>, though gaps exist in contraindications and comprehensive coverage.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-300 mb-3">Gender Bias</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Only <strong>19.65% of biographical articles</strong> cover women</li>
                    <li>• Women's biographies focus on relationships/family</li>
                    <li>• Higher deletion rates due to "notability" standards</li>
                    <li>• Men's biographies receive more images</li>
                  </ul>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Geographic Bias</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• <strong>84% of geotagged articles</strong> cover Europe/North America</li>
                    <li>• More articles about Antarctica than most African countries</li>
                    <li>• Asia: only 16.67% of people-related edits</li>
                    <li>• Africa: 6.35%, South America: 2.58%</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                This "digital divide" systematically excludes developing nations, reinforcing Western knowledge hegemony through technological infrastructure requirements and English-language dominance. Professional backgrounds among bureaucrats skew heavily toward academia, technology, and knowledge work, with <strong>85-88% holding university degrees</strong> compared to global education averages.
              </p>
            </div>
          </section>

          {/* Government Manipulation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Eye className="h-6 w-6" />
              Government and corporate manipulation campaigns proliferate globally
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed">
                WikiScanner's 2007 revelations exposed widespread institutional manipulation, identifying edits from CIA computers removing Guantanamo imagery and altering Iraq War casualty figures, FBI computers deleting detention camp photos, and over 1,000 edits from US government agencies. Congressional staff systematically removed unflattering information about representatives, while UK Parliament computers made nearly 10,000 edits, with one in six MPs having articles edited to remove expenses scandal references.
              </p>
              
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-red-300 mb-3">China's Strategic Infiltration</h3>
                <p className="text-white/80">
                  China's systematic infiltration culminated in Wikimedia Foundation's 2021 ban of 7 Chinese editors and removal of administrative privileges from 12 others for "infiltration of Wikimedia systems" including accessing personally identifiable information. <strong>Academic papers explicitly called for China to "cultivate influential editors" and "form core editorial teams"</strong>, representing what researchers termed "the clearest indication of a more concerted strategic attempt to change Wikipedia by a state."
                </p>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                Corporate manipulation reached industrial scale through PR firms like Bell Pottinger, whose "dark arts" involved 19 accounts removing clients' criminal convictions and bribery arrests before the company's 2017 collapse. Wiki-PR's network of 250 sockpuppet accounts openly advertised using "established Wikipedia editors and admins" to edit client pages. <strong>Operation Orangemoody's 381 blocked accounts revealed extortion schemes</strong> where businesses faced article deletion unless paying for "protection," exposing Wikipedia's vulnerability to organized crime alongside propaganda.
              </p>
            </div>
          </section>

          {/* Alternative Sources */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Alternative knowledge sources reveal universal bias problems</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed">
                Comparative analysis exposes how bias pervades all major knowledge systems, not just Wikipedia. <strong>Baidu Baike's 27 million Chinese-language entries face government censorship and nationalist distortions</strong>, particularly regarding sensitive topics like the Nanjing Massacre. Traditional encyclopedias achieve higher accuracy through expert oversight but exhibit elite institutional biases and limited cultural perspectives. Encyclopedia Britannica's 95-96% accuracy rate on historical topics surpasses Wikipedia's 80%, yet both suffer from Western-centric frameworks marginalizing indigenous knowledge systems.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                The broader pattern reveals what scholars term "epistemic injustice"—systematic suppression of non-Western ways of knowing. Walter Mignolo identifies knowledge production as "territorial and imperial," while Boaventura de Sousa Santos documents active "epistemicide" against Global South perspectives. <strong>English dominance in academic publishing creates "cognitive imperialism"</strong> where 75% of online users from the Global South encounter public knowledge constructed primarily by white men from North America and Europe.
              </p>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-blue-300 mb-3">Platform Limitations</h3>
                <p className="text-white/80">
                  Alternative platforms attempting different models face their own challenges. Citizendium's expert-vetted approach struggled with participation. Scholarpedia's peer review system limits coverage. Regional variations of Wikipedia develop distinct "Linguistic Points of View" contradicting neutrality policies, with only 5% of major editions' cultural content appearing in other language versions.
                </p>
              </div>
            </div>
          </section>

          {/* Geopolitical Battlegrounds */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Globe className="h-6 w-6" />
              Geopolitical battlegrounds expose Wikipedia's vulnerability to information warfare
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed">
                Croatian Wikipedia's decade-long capture by far-right administrators demonstrates how governance failures enable systematic distortion. This group redefined WWII concentration camps as "labor camps," claimed Hitler attacked Poland after Polish genocide against Germans, and promoted conspiracy theories about "yugocommunism." <strong>The 2021 global ban came only after external investigation</strong>, revealing Wikipedia's inability to self-correct when bureaucratic capture occurs in smaller language editions with fewer active editors.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                Holocaust history manipulation on English Wikipedia shows how dedicated groups overwhelm opposition through procedural tactics. Research by Grabowski and Klein identified 5-6 editors making tens of thousands of edits to minimize Polish antisemitism, exaggerate rescue efforts, and legitimize fringe sources while discrediting respected historians. These editors claimed "thousands" of Poles died helping Jews when research documents approximately 800, demonstrating how nationalist narratives exploit Wikipedia's source-citing requirements to introduce sophisticated distortions.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-red-300 mb-3">Current Conflict Zones</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Israeli-Palestinian conflict: Multiple arbitration cases since 2008</li>
                  <li>• <strong>Different language Wikipedias present opposing perspectives</strong> on same events</li>
                  <li>• Russian Wikipedia omits 77% of English content</li>
                  <li>• Territorial disputes encode political positions in naming conventions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-6 bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white">Conclusion: The paradox of democratized knowledge under systematic capture</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/90 leading-relaxed">
                This investigation reveals Wikipedia as simultaneously revolutionary and deeply compromised—democratizing access to knowledge while perpetuating and amplifying existing power structures. The platform's remarkable accuracy in non-controversial topics coexists with systematic biases and vulnerability to coordinated manipulation that no amount of procedural refinement has successfully addressed. <strong>Small, motivated groups consistently overwhelm larger but unorganized opposition</strong>, using Wikipedia's own policies to introduce bias while claiming neutrality.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                Most troublingly, Wikipedia's influence on artificial intelligence training data means these biases now shape machine learning systems worldwide, automating and amplifying Western knowledge hegemony at unprecedented scale. As large language models trained primarily on Wikipedia content become primary information interfaces, the platform's systematic biases risk becoming permanently encoded in humanity's digital knowledge infrastructure.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                The path forward requires acknowledging that no knowledge system achieves true neutrality—all reflect the power structures enabling their creation. Rather than pursuing impossible objectivity, the challenge involves explicitly recognizing and actively countering systematic biases through structural reforms: genuine democratization of editorial power, transparent funding models, and incorporation of diverse epistemological frameworks that honor non-Western knowledge traditions.
              </p>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Investigation Scope</h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>• Peer-reviewed academic research</li>
              <li>• Investigative journalism analysis</li>
              <li>• Documented manipulation cases</li>
              <li>• Cross-cultural comparative study</li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Key Statistics</h3>
            <ul className="text-sm text-white/80 space-y-2">
              <li>• <strong>6.9M</strong> English Wikipedia articles</li>
              <li>• <strong>837</strong> active administrators</li>
              <li>• <strong>84-91%</strong> male editors</li>
              <li>• <strong>$185M</strong> annual revenue</li>
            </ul>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">Related Reports</h3>
            <div className="space-y-3">
              <Link href="/truth-project/wikipedia-bureaucrats" className="block text-sm text-white/80 hover:text-white underline">
                Wikipedia's Hidden Power: Bureaucrat System
              </Link>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-green-300 mb-2">Truth Project</h3>
            <p className="text-white/80 mb-3 text-sm">Investigating hidden power structures and systematic bias in information systems.</p>
            <Link href="/truth-project" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm">
              View All Investigations
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}