"use client"

import { useLanguage } from "@/contexts/language-context"
import { LinkedInShare } from "@/components/linkedin-share"
import { BriefingSignature } from "@/components/briefing-signature"

export default function APTDownContent() {
  const { t } = useLanguage()

  return (
    <article className="container mx-auto px-4 pt-28 pb-20 prose prose-invert max-w-3xl">
      <header className="not-prose mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{t('aptDownTitle')}</h1>
        <p className="text-muted-foreground mt-2">{t('aptDownSubtitle')}</p>
      </header>

      <div dangerouslySetInnerHTML={{ __html: t('aptDownIntro') }} />

      <h2>Attribution puzzle reveals sophisticated deception operations</h2>
      <div dangerouslySetInnerHTML={{ __html: t('aptDownAttribution') }} />
      <div dangerouslySetInnerHTML={{ __html: t('aptDownEvidence') }} />
      <p>
        This attribution complexity reveals either sophisticated false-flag operations designed to misdirect investigators or potentially the first documented
        case of operational collaboration between Chinese and North Korean cyber units. The deliberate adoption of Kimsuky's tools and techniques by a Chinese
        operator suggests an evolution in deception tactics that fundamentally challenges traditional attribution methodologies relying on technical
        indicators, language patterns, and infrastructure characteristics.
      </p>

      <h2>Technical arsenal exposes industrial-scale cyber espionage infrastructure</h2>
      <div dangerouslySetInnerHTML={{ __html: t('aptDownTechnical') }} />
      <div dangerouslySetInnerHTML={{ __html: t('aptDownInfrastructure') }} />
      <p>
        The browser history spanning nearly 20,000 entries across Chrome and Brave browsers reveals reconnaissance patterns against regional targets beyond
        South Korea, including extensive surveillance of Taiwanese government systems and Japanese organizations. This operational data provides unprecedented
        insight into the threat actor's daily workflow, research methodologies, target selection processes, and the systematic approach to maintaining
        persistent access across multiple high-value networks simultaneously.
      </p>

      <h2>DDoSecrets publication follows responsible disclosure framework</h2>
      <div dangerouslySetInnerHTML={{ __html: t('aptDownDDoSecrets') }} />
      <p>
        The collection's release at DEF CON 33 alongside Phrack's 40th anniversary edition provided immediate access to the research community while maintaining
        academic legitimacy. The ethical framework reflects evolving norms in cybersecurity research and threat intelligence sharing.
      </p>

      <h2>Expert analysis confirms authenticity while revealing attribution challenges</h2>
      <div dangerouslySetInnerHTML={{ __html: t('aptDownAuthenticity') }} />
      <p>
        Government reactions have been limited and cautious, suggesting acceptance of the leak's legitimacy while avoiding escalation. Regardless of final
        attribution, the data enhances understanding of regional cyber threats.
      </p>

      <h2>North Korean cyber capabilities provide essential context</h2>
      <div dangerouslySetInnerHTML={{ __html: t('aptDownContext') }} />

      <h2>Conclusion</h2>
      <div dangerouslySetInnerHTML={{ __html: t('aptDownConclusion') }} />

      <h3>Sources (initial)</h3>
      <ul>
        <li><a href="https://phrack.org/" target="_blank" rel="noopener noreferrer">Phrack – 40th Anniversary Issue</a></li>
        <li><a href="https://ddosecrets.com/wiki/DDoSecrets" target="_blank" rel="noopener noreferrer">DDoSecrets – About</a></li>
        <li><a href="https://www.trendmicro.com/" target="_blank" rel="noopener noreferrer">Trend Micro – Research</a></li>
        <li><a href="https://www.teamt5.org/en/posts/" target="_blank" rel="noopener noreferrer">TeamT5 – Analysis</a></li>
      </ul>
      <footer className="not-prose mt-6 text-sm text-muted-foreground">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span>Send preferred citations to expand this bibliography.</span>
          <LinkedInShare />
        </div>
      </footer>
      
      <BriefingSignature />
    </article>
  )
}