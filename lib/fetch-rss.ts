export type RssItem = {
  id: string
  title: string
  link: string
  pubDate?: string
  description?: string
  content?: string
}

function stripCdata(value: string | undefined): string | undefined {
  if (!value) return value
  return value.replace(/<!\[CDATA\[|\]\]>/g, "").trim()
}

function extractTag(block: string, tag: string): string | undefined {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i")
  const m = block.match(regex)
  return stripCdata(m?.[1] ?? undefined)
}

export async function fetchRssItems(feedUrl: string, limit = 5): Promise<RssItem[]> {
  try {
    const res = await fetch(feedUrl, { next: { revalidate: 900 } })
    if (!res.ok) return []
    const xml = await res.text()

    // RSS 2.0 items
    const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || []
    const rssItems: RssItem[] = itemMatches.slice(0, limit).map((block, idx) => {
      const guid = extractTag(block, "guid") || `${idx}`
      const title = extractTag(block, "title") || "Untitled"
      const link = extractTag(block, "link") || ""
      const pubDate = extractTag(block, "pubDate")
      const description = extractTag(block, "description")
      const content = extractTag(block, "content:encoded")
      return { id: guid, title, link, pubDate, description, content }
    })

    if (rssItems.length > 0) return rssItems

    // Atom entries (fallback)
    const entryMatches = xml.match(/<entry[\s\S]*?<\/entry>/gi) || []
    const atomItems: RssItem[] = entryMatches.slice(0, limit).map((block, idx) => {
      const id = extractTag(block, "id") || `${idx}`
      const title = extractTag(block, "title") || "Untitled"
      // <link href="..." />
      const linkMatch = block.match(/<link[^>]*href=\"([^\"]+)\"[^>]*\/>/i)
      const link = linkMatch?.[1] || extractTag(block, "link") || ""
      const pubDate = extractTag(block, "updated") || extractTag(block, "published")
      const description = extractTag(block, "summary")
      const content = extractTag(block, "content")
      return { id, title, link, pubDate, description, content }
    })

    return atomItems
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


