import Link from "next/link"

type Video = {
  id: string
  title: string
  url: string
  thumbnail: string
  publishedAt: string
}

type Props = {
  title: string
  username: string
  channelUrl: string
  description?: string
  location?: string
  joined?: string
  subscribers?: string
  videosCount?: string
  totalViews?: string
  links?: { label: string; url: string }[]
  videos?: Video[]
}

export function FeaturedChannel({ title, username, channelUrl, description, location, joined, subscribers, videosCount, totalViews, links = [], videos = [] }: Props) {
  return (
    <section className="bg-black/30 border border-white/10 rounded-2xl p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white text-2xl font-bold">{title}</h3>
          <p className="text-white/70 text-sm">{username}{location ? ` • ${location}` : ""}{joined ? ` • Joined ${joined}` : ""}</p>
        </div>
        <Link href={channelUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
          Visit
        </Link>
      </div>
      {description ? <p className="text-white/85">{description}</p> : null}
      <div className="flex flex-wrap gap-3 text-white/70 text-sm">
        {subscribers ? <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">{subscribers} subscribers</span> : null}
        {videosCount ? <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">{videosCount} videos</span> : null}
        {totalViews ? <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">{totalViews} views</span> : null}
      </div>
      {links.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
      <div>
        <h4 className="text-white font-semibold mb-3">Latest</h4>
        {videos.length === 0 ? (
          <p className="text-white/60 text-sm">Latest videos will appear here.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {videos.slice(0, 2).map((v) => (
              <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer" className="group block rounded-lg overflow-hidden border border-white/10 bg-black/30 hover:bg-black/40">
                <div className="w-full aspect-video bg-black/40">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="text-white/90 font-medium line-clamp-2 group-hover:text-red-300">{v.title}</div>
                  <div className="text-white/60 text-xs mt-1">{new Date(v.publishedAt).toLocaleString()}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}


