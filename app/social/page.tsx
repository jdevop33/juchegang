import type { Metadata } from "next"

export const revalidate = 900 // 15 minutes

export const metadata: Metadata = {
  title: "Social Streams | Juche GanG",
}

type YouTubeVideo = {
  id: string
  title: string
  publishedAt: string
  thumbnail: string
  url: string
}

type InstagramPost = {
  id: string
  caption?: string
  mediaUrl: string
  permalink: string
  timestamp: string
}

async function fetchYouTube(channelIds: string[]): Promise<YouTubeVideo[]> {
  // Placeholder: expects an edge function or API route to proxy API keys
  // For now, return an empty array to keep page functional without secrets.
  return []
}

async function fetchInstagram(usernames: string[]): Promise<InstagramPost[]> {
  // Placeholder: expects an edge function or API route to proxy tokens
  return []
}

export default async function SocialPage() {
  const [yt, ig] = await Promise.all([
    fetchYouTube([]),
    fetchInstagram([]),
  ])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Social Streams</h1>
          <p className="text-white/80 mt-2">Automatic refresh every 15 minutes.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Latest YouTube</h2>
          {yt.length === 0 ? (
            <p className="text-white/60">Connect a serverless proxy with your channel IDs to display videos.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {yt.map((v) => (
                <a key={v.id} href={v.url} target="_blank" className="block rounded-lg overflow-hidden border border-white/10 bg-black/30 hover:bg-black/40">
                  <img src={v.thumbnail} alt={v.title} className="w-full aspect-video object-cover" />
                  <div className="p-4">
                    <h3 className="text-white font-medium line-clamp-2">{v.title}</h3>
                    <p className="text-white/50 text-sm mt-1">{new Date(v.publishedAt).toLocaleString()}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Latest Instagram</h2>
          {ig.length === 0 ? (
            <p className="text-white/60">Connect a serverless proxy with your Instagram usernames to display posts.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ig.map((p) => (
                <a key={p.id} href={p.permalink} target="_blank" className="block rounded-lg overflow-hidden border border-white/10 bg-black/30 hover:bg-black/40">
                  <img src={p.mediaUrl} alt={p.caption || "Instagram post"} className="w-full aspect-square object-cover" />
                  <div className="p-4">
                    <p className="text-white/80 text-sm line-clamp-2">{p.caption}</p>
                    <p className="text-white/50 text-xs mt-1">{new Date(p.timestamp).toLocaleString()}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}


