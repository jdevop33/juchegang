// Server component: remove client directive and async data on server

import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import FocalImage from "@/components/focal-image"
import { socialProfiles } from "@/lib/social-profiles"
import { trustedSources } from "@/data/trusted-sources"
import { fetchRssItems, extractFirstYouTubeUrl } from "@/lib/fetch-rss"
import { TrustedStoryCard } from "@/components/trusted-story-card"
import TtsButton from "@/components/tts-button"
import { featuredVideos } from "@/data/featured-videos"
import { FeaturedLecture } from "@/components/featured-lecture"
import { featuredChannels } from "@/data/featured-channels"
import { FeaturedChannel } from "@/components/featured-channel"
import { personalInspiration } from "@/data/personal-inspiration"
import { PersonalInspiration } from "@/components/personal-inspiration"
import { TelegramFeed } from "@/components/telegram-feed"
import { telegramFeed, telegramChannels } from "@/data/telegram-feed"

export const metadata = {
  title: "Social Media",
  description: "Follow Juche GanG across platforms. Updates, media and analysis.",
  openGraph: {
    title: "Social Media — Juche GanG",
    description: "Follow Juche GanG across platforms. Updates, media and analysis.",
    images: [
      { url: "/images/heros/socialmediapagehero.jpg", width: 1200, height: 630, alt: "Juche Social" },
    ],
  },
}

export const revalidate = 900 // 15 minutes

type YouTubeVideo = {
  id: string
  title: string
  publishedAt: string
  thumbnail: string
  url: string
}

async function fetchYouTube(channelIds: string[]): Promise<YouTubeVideo[]> {
  try {
    const params = new URLSearchParams()
    if (channelIds.length > 0) params.set("channelIds", channelIds.join(","))
    const res = await fetch(`/api/social/youtube?${params.toString()}`, { cache: "no-store" })
    const json = await res.json()
    return json.items ?? []
  } catch {
    return []
  }
}

// Fetch recent videos for a specific YouTube channel (for Trusted Sources)
async function fetchChannelVideos(channelId: string): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(`/api/youtube?channelId=${channelId}&action=videos`, { cache: 'no-store' })
    if (!response.ok) return []
    const data = await response.json()
    return data.videos || []
  } catch {
    return []
  }
}

export default async function SocialPage() {
  const yt = await fetchYouTube([])

  // Trusted sources aggregation (server-side)
  const rssSources = trustedSources.filter((s) => s.kind === 'rss' && s.feedUrl)
  const youtubeSources = trustedSources.filter((s) => s.kind === 'youtube')
  const linkSources = trustedSources.filter((s) => s.kind === 'link')

  const trustedStories = (await Promise.all(
    rssSources.map(async (src) => {
      try {
        const items = await fetchRssItems(src.feedUrl as string, 5)
        return items
          .filter((it) => typeof it.title === 'string' && typeof it.link === 'string')
          .map((it) => ({
            id: `${src.id}-${it.id}`,
            title: it.title,
            url: it.link,
            publishedAt: it.pubDate,
            summary: it.description,
            youtubeUrl: extractFirstYouTubeUrl(it.content || it.description),
            sourceName: src.sourceName,
            author: src.author,
          }))
      } catch {
        return [] as any[]
      }
    })
  ))
    .flat()

  const trustedVideos = (await Promise.all(
    youtubeSources.map(async (src) => {
      if (!src.youtubeChannelId) return [] as any[]
      const vids = await fetchChannelVideos(src.youtubeChannelId)
      return vids.slice(0, 1).map((v) => ({
        id: `${src.id}-${v.id}`,
        title: v.title,
        url: v.url,
        publishedAt: v.publishedAt,
        thumbnail: v.thumbnail,
        sourceName: src.sourceName,
      }))
    })
  ))
    .flat()

  return (
    <>
      <JucheHeader />
      <main className="min-h-screen bg-gradient-to-b from-[#0d1b2a] via-[#1b4965] to-[#0d1b2a] pt-20">
      <section
        className="relative h-auto -mt-20"
        style={{ minHeight: '100svh' }}
      >
        <FocalImage
          src="/images/heros/socialmediapagehero.jpg"
          alt="Juche Social"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/40 via-[#0d1b2a]/20 to-[#0d1b2a]/90" />
        <div className="relative z-10 flex h-full items-end justify-center text-center px-4 pb-24 sm:pb-28 md:pb-36">
          <div>
            <h1 className="sr-only">Social Media</h1>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-10">
        {/* Foundational Inspiration */}
        {personalInspiration ? (
          <PersonalInspiration
            title={personalInspiration.title}
            description={personalInspiration.description}
            youtubeEmbedUrl={personalInspiration.youtubeEmbedUrl}
            sources={personalInspiration.sources}
          />
        ) : null}

        {/* Telegram Feed */}
        <section className="mb-16">
          <TelegramFeed
            posts={telegramFeed}
            channels={telegramChannels}
            autoPlay={true}
            autoPlayInterval={10000}
          />
        </section>

        {/* Featured Channels */}
        {featuredChannels.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-[#f0ebe3] mb-6">Featured Channels</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {await Promise.all(
                featuredChannels.map(async (fc) => {
                  const vids = fc.channelId ? await fetchChannelVideos(fc.channelId) : []
                  return (
                    <FeaturedChannel
                      key={fc.id}
                      title={fc.title}
                      username={fc.username}
                      channelUrl={`https://youtube.com/${fc.username}`}
                      description={fc.description}
                      location={fc.location}
                      joined={fc.joined}
                      subscribers={fc.subscribers}
                      videosCount={fc.videosCount}
                      totalViews={fc.totalViews}
                      links={fc.links}
                      videos={vids}
                    />
                  )
                })
              )}
            </div>
          </section>
        ) : null}
        {/* Featured Lecture */}
        {featuredVideos.length > 0 ? (
          <FeaturedLecture
            title={featuredVideos[0].title}
            speaker={featuredVideos[0].speaker}
            series={featuredVideos[0].series}
            date={featuredVideos[0].date}
            views={featuredVideos[0].views}
            description={featuredVideos[0].description}
            hashtags={featuredVideos[0].hashtags}
            youtubeEmbedUrl={featuredVideos[0].youtubeEmbedUrl}
            attributionHtml={featuredVideos[0].attributionHtml}
            chapters={featuredVideos[0].chapters}
          />
        ) : null}
        {/* Trusted Sources */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#f0ebe3] mb-4">Trusted Sources</h2>
          {/* Featured Channels strip */}
          <div className="flex flex-wrap gap-3 mb-6">
            {youtubeSources.map((src) => (
              <a key={src.id} href={src.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-[#0d1b2a]/50 border border-[#1b4965] text-[#f0ebe3]/90 hover:bg-[#1b4965]/50">
                {src.sourceName || src.url}
              </a>
            ))}
            {linkSources.map((src) => (
              <a key={src.id} href={src.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-[#0d1b2a]/50 border border-[#d4a74a]/30 text-[#d4a74a] hover:bg-[#1b4965]/50">
                {src.sourceName || src.url}
              </a>
            ))}
          </div>

          {/* Stories */}
          {trustedStories.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {trustedStories.map((item) => (
                <div key={item.id} className="space-y-3">
                  <TrustedStoryCard
                    title={item.title}
                    author={item.author}
                    sourceName={item.sourceName}
                    url={item.url}
                    publishedAt={item.publishedAt}
                    summary={item.summary}
                  />
                  <div className="flex items-center gap-3">
                    <TtsButton text={(item.title ? item.title + ". " : "") + (item.summary || "")} />
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#f0ebe3]/70 underline">
                      Original source
                    </a>
                  </div>
                  {item.youtubeUrl ? (
                    <div className="aspect-video w-full overflow-hidden rounded-lg border border-[#1b4965] bg-[#0d1b2a]/50">
                      <iframe
                        src={item.youtubeUrl.replace("watch?v=", "embed/")}
                        title={item.title || "Video"}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#f0ebe3]/60 mb-10">No trusted stories available right now.</p>
          )}

          {/* Videos */}
          {trustedVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {trustedVideos.map((v) => (
                <div key={v.id} className="space-y-2">
                  <div className="aspect-video w-full overflow-hidden rounded-lg border border-[#1b4965] bg-[#0d1b2a]/50">
                    <iframe
                      src={v.url.replace("watch?v=", "embed/")}
                      title={v.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-[#f0ebe3]/80 text-sm">{v.sourceName ? `${v.sourceName} • ` : ""}{new Date(v.publishedAt).toLocaleString()}</div>
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-[#f0ebe3] font-medium hover:underline">{v.title}</a>
                </div>
              ))}
            </div>
          ) : null}
          <p className="text-xs text-[#f0ebe3]/50 mt-4">
            All linked works are the property of their respective authors and publishers. Embedded media is displayed for
            educational commentary and discovery. Please visit the original source to support the creators.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#f0ebe3] mb-4">Profiles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {socialProfiles.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-[#0d1b2a]/50 border border-[#1b4965] hover:bg-[#1b4965]/40 transition-colors"
              >
                {/* Simple platform badge */}
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#1b4965]/50 text-[#f0ebe3] capitalize">
                  {p.platform[0]}
                </span>
                <div>
                  <div className="text-[#f0ebe3] font-medium">{p.displayName ?? `@${p.handle}`}</div>
                  <div className="text-[#f0ebe3]/60 text-sm">{p.platform}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#f0ebe3] mb-4">YouTube</h2>
          {yt.length === 0 ? (
            <p className="text-[#f0ebe3]/60">YouTube channel coming soon. Stay tuned for video content!</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {yt.map((v) => (
                <a key={v.id} href={v.url} target="_blank" className="block rounded-lg overflow-hidden border border-[#1b4965] bg-[#0d1b2a]/50 hover:bg-[#1b4965]/40">
                  <img src={v.thumbnail} alt={v.title} className="w-full aspect-video object-cover" />
                  <div className="p-4">
                    <h3 className="text-[#f0ebe3] font-medium line-clamp-2">{v.title}</h3>
                    <p className="text-[#f0ebe3]/50 text-sm mt-1">{new Date(v.publishedAt).toLocaleString()}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#f0ebe3] mb-4">Audio</h2>
          <div className="rounded-lg overflow-hidden border border-[#1b4965] bg-[#0d1b2a]/50">
            <iframe
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407296785&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              title="SoundCloud Player — Donald Trump Diss Track"
              className="w-full"
              style={{ height: 600 }}
              allow="autoplay"
            />
          </div>
          <p className="mt-2 text-xs text-[#f0ebe3]/60">
            <a href="https://soundcloud.com/kimjongunnuking" target="_blank" rel="noopener noreferrer" className="underline">KimJongUn</a>
            {" "}·{" "}
            <a href="https://soundcloud.com/kimjongunnuking/donald-trump-diss-panda-remix" target="_blank" rel="noopener noreferrer" className="underline">Donald Trump Diss Track</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#f0ebe3] mb-4">Contact</h2>
          <div className="bg-[#0d1b2a]/50 border border-[#1b4965] rounded-lg p-6">
            <p className="text-[#f0ebe3] mb-2">For inquiries and collaborations:</p>
            <a
              href="mailto:panda@juche.org"
              className="inline-flex items-center text-[#d4a74a] hover:text-[#c73032] transition-colors"
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


