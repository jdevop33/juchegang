// Server component: remove client directive and async data on server

import Image from "next/image"
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
import SocialContent from "./social-content"

export const metadata = {
  title: "Social Media",
  description: "Follow Juche GanG across platforms. Updates, media and analysis.",
  openGraph: {
    title: "Social Media — Juche GanG",
    description: "Follow Juche GanG across platforms. Updates, media and analysis.",
    images: [
      { url: "/gallery/paektu-hero-.webp", width: 1200, height: 630, alt: "Juche Social" },
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

  // Pre-fetch videos for featured channels
  const featuredChannelVideosMap: Record<string, any[]> = {}
  await Promise.all(
    featuredChannels.map(async (fc) => {
      if (fc.channelId) {
        const vids = await fetchChannelVideos(fc.channelId)
        featuredChannelVideosMap[fc.id] = vids
      } else {
        featuredChannelVideosMap[fc.id] = []
      }
    })
  )

  return (
    <>
      <JucheHeader />
      <SocialContent
        yt={yt}
        trustedStories={trustedStories}
        trustedVideos={trustedVideos}
        featuredChannelVideosMap={featuredChannelVideosMap}
      />
      <JucheFooter />
    </>
  )
}


