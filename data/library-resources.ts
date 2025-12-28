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
  // Example:
  // {
  //   id: 'reunification-economics',
  //   title: 'The Economics of Korean Reunification',
  //   description: 'Comprehensive analysis of economic integration scenarios',
  //   type: 'pdf',
  //   category: 'documents',
  //   fileSize: '2.4 MB',
  //   pageCount: 48,
  //   downloadUrl: '/library/documents/reunification-economics.pdf',
  //   author: 'Juche GanG Research',
  //   publishedAt: '2024-06-15',
  //   tags: ['economics', 'reunification', 'korea'],
  //   featured: true,
  // },
]

// Slide Decks (presentations)
export const decks: LibraryResource[] = [
  // Example:
  // {
  //   id: 'media-manipulation-101',
  //   title: 'Media Manipulation 101',
  //   description: 'How narratives are constructed and spread',
  //   type: 'slides',
  //   category: 'decks',
  //   fileSize: '8.2 MB',
  //   pageCount: 32,
  //   downloadUrl: '/library/decks/media-manipulation-101.pdf',
  //   previewUrl: 'https://docs.google.com/presentation/d/xxx/embed',
  //   author: 'Panda',
  //   publishedAt: '2024-08-20',
  //   tags: ['media', 'propaganda', 'analysis'],
  //   featured: true,
  // },
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
