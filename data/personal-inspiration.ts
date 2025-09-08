export type PersonalInspiration = {
  id: string
  title: string
  description?: string
  youtubeEmbedUrl: string
  sources: { label: string; url: string }[]
}

export const personalInspiration: PersonalInspiration = {
  id: "hypernormalization",
  title: "Foundational Inspiration — HyperNormalization",
  description:
    "Elon Musk’s reference to HyperNormalization set Jesse James on a truth-seeking path. This video encapsulates the question of how constructed narratives shape our world.",
  youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/Gr7T07WfIhM?si=A64lDZQQQIG50iEA",
  sources: [
    {
      label: "TechStartups: HyperNormalization write-up",
      url: "https://techstartups.com/2021/02/21/hypernormalization-elon-musk-tweets-cryptic-hypernominalization-message-leaves-everyone-thinking-fake-world-run-corporations/",
    },
    {
      label: "Elon Musk tweet",
      url: "https://x.com/elonmusk/status/1363609428281360386",
    },
  ],
}


