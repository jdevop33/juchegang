export type SocialProfile = {
  platform: "instagram" | "youtube" | "x" | "tiktok" | "telegram" | "facebook" | string
  handle: string
  url: string
  displayName?: string
}

export const socialProfiles: SocialProfile[] = [
  {
    platform: "instagram",
    handle: "jpandajames39",
    url: "https://instagram.com/jpandajames39",
    displayName: "@jpandajames39",
  },
  {
    platform: "instagram",
    handle: "kimjongunwins",
    url: "https://instagram.com/kimjongunwins",
    displayName: "@kimjongunwins",
  },
]


