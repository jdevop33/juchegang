import { NextResponse } from "next/server"

export const revalidate = 300

type IgItem = {
  id: string
  caption?: string
  media_url: string
  permalink: string
  timestamp: string
}

export async function GET() {
  const tokensEnv = process.env.IG_ACCESS_TOKENS || process.env.IG_USER_ACCESS_TOKEN || ""
  const tokens = tokensEnv
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)

  if (tokens.length === 0) {
    return NextResponse.json({ items: [], note: "No Instagram tokens configured" }, { status: 200 })
  }

  try {
    const fetches = tokens.map(async (token) => {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&limit=9&access_token=${encodeURIComponent(
        token,
      )}`
      const res = await fetch(url, { next: { revalidate: 300 } })
      if (!res.ok) throw new Error(`IG error ${res.status}`)
      const data = (await res.json()) as { data: IgItem[] }
      return data.data
    })

    const arrays = await Promise.allSettled(fetches)
    const items: IgItem[] = arrays
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp))

    const mapped = items.map((p) => ({
      id: p.id,
      caption: p.caption,
      mediaUrl: p.media_url,
      permalink: p.permalink,
      timestamp: p.timestamp,
    }))

    return NextResponse.json({ items: mapped })
  } catch (err) {
    return NextResponse.json({ items: [], error: String(err) }, { status: 200 })
  }
}


