export type TrustedSourceItem = {
  id: string
  url: string
  feedUrl?: string
  title?: string
  author?: string
  sourceName?: string
  publishedAt?: string
  summary?: string
  kind?: 'rss' | 'youtube' | 'link'
  youtubeChannelId?: string
}

export const trustedSources: TrustedSourceItem[] = [
  {
    id: "inside-china-nvidia-china",
    url: "https://kdwalmsley.substack.com/p/why-nvidia-is-desperate-to-get-back",
    feedUrl: "https://kdwalmsley.substack.com/feed",
    title: "Why Nvidia is desperate to get back to China",
    author: "Kevin Walmsley",
    sourceName: "Inside China / Business (Substack)",
    publishedAt: "2025-08-29",
    summary:
      "Transcript and analysis on Nvidia's China strategy, AI deployment headwinds in the U.S., and contrasting adoption dynamics in China.",
    kind: 'rss',
  },
  // YouTube channels
  {
    id: "yt-borzzikman",
    url: "https://www.youtube.com/@borzzikman",
    sourceName: "Borzzikman (YouTube)",
    kind: 'youtube',
    youtubeChannelId: "UCDnibnh5sM8eVAwSlUnf6Xw",
  },
  {
    id: "yt-theduran",
    url: "https://www.youtube.com/@TheDuran",
    sourceName: "The Duran (YouTube)",
    kind: 'youtube',
    youtubeChannelId: "UCdeMVChrumySxV9N1w0Au-w",
  },
  {
    id: "yt-daniel-davis",
    url: "https://www.youtube.com/@DanielDavisDeepDive",
    sourceName: "Daniel Davis Deep Dive (YouTube)",
    kind: 'youtube',
    // channel ID unknown; can still link out
  },
  {
    id: "yt-alex-mercouris",
    url: "https://www.youtube.com/@AlexMercouris",
    sourceName: "Alex Mercouris (YouTube)",
    kind: 'youtube',
    youtubeChannelId: "UCwGpHa6rMLjSSCBlckm5khw",
  },
  // Patreon
  {
    id: "patreon-duran",
    url: "https://patreon.com/u22393167",
    sourceName: "Patreon Support",
    kind: 'link',
  },
]


