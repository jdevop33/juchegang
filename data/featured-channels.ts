export type FeaturedChannel = {
  id: string
  title: string
  username: string
  channelId: string
  description?: string
  location?: string
  joined?: string
  subscribers?: string
  videosCount?: string
  totalViews?: string
  links?: { label: string; url: string }[]
}

export const featuredChannels: FeaturedChannel[] = [
  {
    id: "dialogueworks01",
    title: "Dialogue Works",
    username: "@dialogueworks01",
    channelId: "UCkF-6h_Zgf9zXNUmUB-MzTw",
    description:
      "Dedicated to dialogue and peace. Building a global community for thoughtful conversation, questions, and shared knowledge.",
    location: "Brazil",
    joined: "Dec 17, 2021",
    subscribers: "330K",
    videosCount: "1,758",
    totalViews: "123,626,856",
    links: [
      { label: "Rumble", url: "https://rumble.com/c/c-1826887" },
      { label: "Twitter", url: "https://twitter.com/Dialogue_NRA" },
      { label: "YouTube", url: "https://www.youtube.com/@dialogueworks01" },
    ],
  },
  {
    id: "theduran",
    title: "The Duran",
    username: "@TheDuran",
    channelId: "UCdeMVChrumySxV9N1w0Au-w",
    description:
      "Political and economic analysis of Russia and Eurasia. Alternative perspectives on world affairs beyond Western mainstream media.",
    links: [{ label: "YouTube", url: "https://www.youtube.com/@TheDuran" }],
  },
]


