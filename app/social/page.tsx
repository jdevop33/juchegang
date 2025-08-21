// Server component: remove client directive and async data on server

import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"

export const revalidate = 900 // 15 minutes

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
    fetchInstagram(["jpandajames39", "kimjongunwins"]),
  ])

  return (
    <>
      <JucheHeader />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-20">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Social Streams</h1>
          <p className="text-white/80 mt-2">Follow us on social media for updates.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Instagram</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <a 
              href="https://instagram.com/jpandajames39" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
              @jpandajames39
            </a>
            <a 
              href="https://instagram.com/kimjongunwins" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
              @kimjongunwins
            </a>
          </div>
          {ig.length === 0 ? (
            <p className="text-white/60">Instagram feed integration coming soon. Follow us on Instagram for the latest updates!</p>
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">YouTube</h2>
          {yt.length === 0 ? (
            <p className="text-white/60">YouTube channel coming soon. Stay tuned for video content!</p>
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
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-6">
            <p className="text-white mb-2">For inquiries and collaborations:</p>
            <a 
              href="mailto:panda@juche.org" 
              className="inline-flex items-center text-friendship-blue hover:text-friendship-red transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              panda@juche.org
            </a>
          </div>
        </section>
      </div>
    </main>
    <JucheFooter />
    </>
  )
}


