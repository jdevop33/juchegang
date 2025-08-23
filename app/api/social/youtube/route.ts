import { NextResponse } from "next/server"

export const revalidate = 300

type YtItem = {
  id: { videoId?: string }
  snippet: { title: string; publishedAt: string; thumbnails: { high?: { url: string } } }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const paramIds = searchParams.get("channelIds")
  const apiKey = process.env.YOUTUBE_API_KEY || ""
  const envIds = process.env.YOUTUBE_CHANNEL_IDS || ""
  const channelIds = (paramIds || envIds)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  if (!apiKey || channelIds.length === 0) {
    return NextResponse.json({ items: [], note: "YouTube not configured" }, { status: 200 })
  }

  try {
    const reqs = channelIds.map(async (id) => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(
        id,
      )}&order=date&maxResults=9&key=${encodeURIComponent(apiKey)}`
      const res = await fetch(url, { next: { revalidate: 300 } })
      if (!res.ok) throw new Error(`YT error ${res.status}`)
      const json = (await res.json()) as { items: YtItem[] }
      return json.items
        .filter((i) => i.id.videoId)
        .map((i) => ({
          id: i.id.videoId as string,
          title: i.snippet.title,
          publishedAt: i.snippet.publishedAt,
          thumbnail: i.snippet.thumbnails.high?.url ?? "",
          url: `https://www.youtube.com/watch?v=${i.id.videoId}`,
        }))
    })

    const results = await Promise.allSettled(reqs)
    const items = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []))
    return NextResponse.json({ items })
  } catch (err) {
    return NextResponse.json({ items: [], error: String(err) }, { status: 200 })
  }
}


