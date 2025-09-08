import { parseStringPromise } from "xml2js"

export type RssItem = {
  id: string
  title: string
  link: string
  pubDate?: string
  description?: string
  content?: string
}

export async function fetchRssItems(feedUrl: string, limit = 5): Promise<RssItem[]> {
  try {
    const res = await fetch(feedUrl, { next: { revalidate: 900 } })
    if (!res.ok) return []
    const xml = await res.text()
    const parsed = await parseStringPromise(xml, { explicitArray: false, trim: true })

    // Handle both RSS 2.0 and Atom minimally
    const channel = parsed?.rss?.channel
    const atomFeed = parsed?.feed

    if (channel?.item) {
      const items = Array.isArray(channel.item) ? channel.item : [channel.item]
      return items.slice(0, limit).map((it: any, idx: number) => ({
        id: it.guid?._ || it.guid || `${idx}`,
        title: it.title,
        link: it.link,
        pubDate: it.pubDate,
        description: it.description,
        content: it["content:encoded"],
      }))
    }

    if (atomFeed?.entry) {
      const entries = Array.isArray(atomFeed.entry) ? atomFeed.entry : [atomFeed.entry]
      return entries.slice(0, limit).map((e: any, idx: number) => ({
        id: e.id || `${idx}`,
        title: e.title?._ || e.title,
        link: e.link?.href || e.link,
        pubDate: e.updated || e.published,
        description: e.summary?._ || e.summary,
        content: e.content?._ || e.content,
      }))
    }

    return []
  } catch {
    return []
  }
}

export function extractFirstYouTubeUrl(html?: string): string | undefined {
  if (!html) return undefined
  const urlRegex = /(https?:\/\/www\.youtube\.com\/watch\?v=[^"'\s<]+|https?:\/\/youtu\.be\/[^"'\s<]+)/i
  const match = html.match(urlRegex)
  return match?.[0]
}


