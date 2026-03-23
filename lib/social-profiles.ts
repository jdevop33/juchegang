export type SocialProfile = {
  platform: "youtube" | "x" | "tiktok" | "telegram" | "facebook" | string
  handle: string
  url: string
  displayName?: string
}

export const socialProfiles: SocialProfile[] = []
