/**
 * Library Resources Data
 *
 * Add your PDFs, slide decks, and other resources here.
 *
 * For files:
 * 1. Place the file in /public/library/documents/ or /public/library/decks/
 * 2. Add an entry below with the correct path
 *
 * For external files (Cloudflare R2, Google Drive):
 * 1. Use the full URL as the downloadUrl
 */

export interface LibraryResource {
  id: string
  title: string
  description: string
  type: 'pdf' | 'slides' | 'video' | 'audio' | 'link'
  category: 'documents' | 'decks' | 'media'
  fileSize?: string
  pageCount?: number
  downloadUrl: string
  previewUrl?: string
  author?: string
  publishedAt?: string
  tags: string[]
  featured?: boolean
  downloads?: number
}

// Documents (PDFs, reports, fact sheets)
export const documents: LibraryResource[] = [
  {
    id: 'eu-ukraine-factcheck',
    title: 'EU €90B Ukraine Shock: Fact Check Report',
    description: 'Detailed analysis and fact-checking of EU financial commitments to Ukraine',
    type: 'pdf',
    category: 'documents',
    fileSize: '23 KB',
    pageCount: 4,
    downloadUrl: '/documents/eu_ukraine_factcheck_report.pdf',
    author: 'JPanda Research',
    publishedAt: '2024-12-20',
    tags: ['ukraine', 'eu', 'factcheck', 'economics', 'geopolitics'],
    featured: true,
  },
  {
    id: 'juche-platform-strategy',
    title: 'Juche.org Platform Strategy',
    description: 'Strategic framework for the Juche GanG platform and content approach',
    type: 'pdf',
    category: 'documents',
    fileSize: '14 KB',
    downloadUrl: '/documents/strategy docs/juche_org_platform_strategy.md',
    author: 'JPanda',
    publishedAt: '2024-12-27',
    tags: ['strategy', 'platform', 'juche'],
  },
  {
    id: 'tiger-unity-campaign',
    title: 'Korean Tiger Unity Campaign Framework',
    description: 'Complete campaign framework using tiger symbolism for Korean reunification messaging',
    type: 'pdf',
    category: 'documents',
    fileSize: '16 KB',
    downloadUrl: '/documents/strategy docs/korean_tiger_unity_campaign.md',
    author: 'JPanda',
    publishedAt: '2024-12-27',
    tags: ['korea', 'reunification', 'tiger', 'campaign', 'strategy'],
    featured: true,
  },
  {
    id: 'strategic-protection-framework',
    title: 'Strategic Protection Framework',
    description: 'Framework for protecting narrative integrity and countering disinformation',
    type: 'pdf',
    category: 'documents',
    fileSize: '15 KB',
    downloadUrl: '/documents/strategy docs/strategic_protection_framework.md',
    author: 'JPanda',
    publishedAt: '2024-12-27',
    tags: ['strategy', 'protection', 'disinformation'],
  },
  {
    id: 'tiger-image-prompts',
    title: 'Tiger Campaign Image Generation Prompts',
    description: 'AI image generation prompts optimized for Grok, Midjourney, DALL-E 3, and Imagen 3',
    type: 'pdf',
    category: 'documents',
    fileSize: '14 KB',
    downloadUrl: '/documents/strategy docs/tiger_campaign_image_prompts.md',
    author: 'JPanda',
    publishedAt: '2024-12-27',
    tags: ['tiger', 'ai', 'images', 'prompts', 'campaign'],
  },
  {
    id: 'tiger-image-system-prompt',
    title: 'Tiger Campaign Image System Prompt',
    description: 'System-level prompt for consistent tiger campaign imagery generation',
    type: 'pdf',
    category: 'documents',
    fileSize: '13 KB',
    downloadUrl: '/documents/strategy docs/tiger_campaign_image_system_prompt.md',
    author: 'JPanda',
    publishedAt: '2024-12-27',
    tags: ['tiger', 'ai', 'system-prompt', 'campaign'],
  },
]

// Slide Decks (presentations)
export const decks: LibraryResource[] = [
  {
    id: 'ukraine-shock-90b',
    title: 'JPanda James: €90B Ukraine Shock',
    description: 'Visual breakdown of EU financial commitments to Ukraine with analysis and sources',
    type: 'slides',
    category: 'decks',
    fileSize: '5.8 MB',
    pageCount: 12,
    downloadUrl: '/documents/JPanda James_ €90B Ukraine Shock/',
    author: 'JPanda',
    publishedAt: '2024-12-27',
    tags: ['ukraine', 'eu', 'economics', 'geopolitics', 'analysis'],
    featured: true,
  },
]

// Media (videos, podcasts - usually external links)
export const media: LibraryResource[] = [
  // Example:
  // {
  //   id: 'podcast-ep-1',
  //   title: 'Episode 1: Introduction to Juche Ideology',
  //   description: 'Understanding the philosophy of self-reliance',
  //   type: 'audio',
  //   category: 'media',
  //   downloadUrl: 'https://r2.example.com/podcasts/ep1.mp3',
  //   author: 'Juche GanG',
  //   publishedAt: '2024-09-01',
  //   tags: ['podcast', 'juche', 'philosophy'],
  // },
]

// Get all resources
export function getAllResources(): LibraryResource[] {
  return [...documents, ...decks, ...media]
}

// Get featured resources
export function getFeaturedResources(): LibraryResource[] {
  return getAllResources().filter(r => r.featured)
}

// Get resources by category
export function getResourcesByCategory(category: 'documents' | 'decks' | 'media'): LibraryResource[] {
  return getAllResources().filter(r => r.category === category)
}

// Get resources by tag
export function getResourcesByTag(tag: string): LibraryResource[] {
  return getAllResources().filter(r => r.tags.includes(tag))
}

// Count by category
export function getCategoryCounts(): Record<string, number> {
  return {
    documents: documents.length,
    decks: decks.length,
    media: media.length,
  }
}
