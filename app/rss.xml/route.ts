import fs from 'node:fs'
import path from 'node:path'

const SITE_URL = 'https://juche.org'
const SITE_TITLE = 'Juche GanG — Briefings'
const SITE_DESCRIPTION =
  'Primary-source briefings and research notes on Korean reunification, sovereignty, media, and peace.'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function slugToTitle(slug: string): string {
  // apt-down-files → APT Down Files; brics-dedollarization → BRICS Dedollarization
  const acronyms = new Set([
    'ai', 'apt', 'brics', 'cia', 'dprk', 'eu', 'f35', 'kr', 'kp', 'mi6', 'nato', 'ngo', 'oligarchs',
    'ot', 'pkk', 'rfa', 'un', 'us', 'usa', 'uk', 'usd',
  ])
  return slug
    .split('-')
    .map((word) => (acronyms.has(word.toLowerCase()) ? word.toUpperCase() : word[0]?.toUpperCase() + word.slice(1)))
    .join(' ')
    .replace(/\bKr\b/, '(Korean)')
}

function listBriefings(): Array<{ slug: string; mtime: Date }> {
  const dir = path.join(process.cwd(), 'app', 'briefings')
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
      .map((slug) => {
        const pagePath = path.join(dir, slug, 'page.tsx')
        if (!fs.existsSync(pagePath)) return null
        const stat = fs.statSync(pagePath)
        return { slug, mtime: stat.mtime }
      })
      .filter((x): x is { slug: string; mtime: Date } => x !== null)
      .sort((a, b) => b.mtime.getTime() - a.mtime.getTime())
  } catch {
    return []
  }
}

export async function GET() {
  const briefings = listBriefings()
  const buildDate = new Date().toUTCString()
  const latestDate = briefings[0]?.mtime?.toUTCString() ?? buildDate

  const items = briefings
    .map(({ slug, mtime }) => {
      const title = slugToTitle(slug)
      const link = `${SITE_URL}/briefings/${slug}`
      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${mtime.toUTCString()}</pubDate>
      <description>${escapeXml(`Read the full briefing at ${link}`)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <pubDate>${buildDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/faviconjuche.png</url>
      <title>${escapeXml(SITE_TITLE)}</title>
      <link>${SITE_URL}</link>
    </image>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
