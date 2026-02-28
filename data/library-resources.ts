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
  type: 'pdf' | 'docx' | 'slides' | 'video' | 'audio' | 'link'
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
    id: 'korea-ukraine-proxy-war',
    title: 'Korea, Ukraine, and Proxy War Realities',
    description: 'Comparative analysis of proxy war dynamics in Korea and Ukraine',
    type: 'pdf',
    category: 'documents',
    fileSize: '2.1 MB',
    downloadUrl: '/library/documents/Korea, Ukraine, and Proxy War Realities.pdf',
    author: 'JPanda Research',
    publishedAt: '2025-02-28',
    tags: ['korea', 'ukraine', 'proxy-war', 'geopolitics', 'analysis'],
    featured: true,
  },
  {
    id: 'forever-war-english',
    title: 'The Forever War Business Model',
    description: 'Analysis of the economic incentives behind perpetual warfare',
    type: 'link',
    category: 'documents',
    fileSize: '429 KB',
    downloadUrl: '/library/documents/forever_war_english.html',
    author: 'JPanda Research',
    publishedAt: '2025-02-28',
    tags: ['war', 'economics', 'military-industrial', 'analysis'],
    featured: true,
  },
  {
    id: 'forever-war-korean',
    title: '영구전쟁 비즈니스 모델 (Forever War - Korean)',
    description: '영구 전쟁의 경제적 인센티브 분석',
    type: 'link',
    category: 'documents',
    fileSize: '509 KB',
    downloadUrl: '/library/documents/Forever_War_Business_Model_KR.html',
    author: 'JPanda Research',
    publishedAt: '2025-02-28',
    tags: ['war', 'economics', 'korean', '한국어'],
  },
  {
    id: 'juchegang-brand-guide',
    title: 'JucheGang Brand Guide v2.0',
    description: 'Complete brand identity guide - River Palette, typography, logo concepts, AI prompts',
    type: 'link',
    category: 'documents',
    fileSize: '42 KB',
    downloadUrl: '/library/documents/juchegang-brand-guide.html',
    author: 'JPanda',
    publishedAt: '2025-02-28',
    tags: ['brand', 'design', 'identity', 'guide'],
    featured: true,
  },
  // ═══════════════════════════════════════════════════════════════
  // GOOGLE DRIVE HOSTED (add your links below)
  // Upload heavy files to Google Drive, set sharing to "Anyone with link"
  // Then paste the link here
  // ═══════════════════════════════════════════════════════════════
  // {
  //   id: 'perpetual-conflict-architecture',
  //   title: 'The Architecture of Perpetual Conflict: The Intelligence',
  //   description: 'Deep analysis of intelligence structures and perpetual conflict systems',
  //   type: 'slides',
  //   category: 'documents',
  //   fileSize: '77 MB',
  //   downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
  //   author: 'JPanda Research',
  //   tags: ['intelligence', 'geopolitics', 'conflict', 'analysis'],
  //   featured: true,
  // },
  // {
  //   id: 'long-route-dossier',
  //   title: 'THE LONG ROUTE DOSSIER',
  //   description: 'Comprehensive investigative dossier',
  //   type: 'pdf',
  //   category: 'documents',
  //   fileSize: '23 MB',
  //   downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
  //   author: 'JPanda Research',
  //   tags: ['investigation', 'dossier', 'research'],
  // },
  // {
  //   id: 'mahabharata-complete',
  //   title: 'The Complete Mahabharata',
  //   description: 'Unabridged English translation of the ancient Sanskrit epic',
  //   type: 'pdf',
  //   category: 'documents',
  //   fileSize: '37 MB',
  //   downloadUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
  //   author: 'Traditional',
  //   tags: ['philosophy', 'literature', 'epic'],
  // },
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
    id: 'gold-hydride-discovery',
    title: 'Gold Hydride Discovery: The Prepared Mind',
    description: 'Essay on Mungo Frost\'s accidental discovery of gold hydride at 40 GPa - serendipity in high-pressure chemistry',
    type: 'docx',
    category: 'documents',
    fileSize: '67 KB',
    downloadUrl: '/documents/Gold_Hydride_Discovery_JPanda_1.docx',
    author: 'JPanda',
    publishedAt: '2024-12-28',
    tags: ['science', 'chemistry', 'discovery', 'serendipity', 'physics'],
    featured: true,
  },
  {
    id: 'mathematics-as-language',
    title: 'Mathematics As Language: The Beautiful Nonsense',
    description: 'Essay on mathematical grammar, symbolic beauty, and the humility of learning new languages of thought',
    type: 'docx',
    category: 'documents',
    fileSize: '234 KB',
    downloadUrl: '/documents/JPanda_Mathematics_As_Language.docx',
    author: 'JPanda',
    publishedAt: '2024-12-28',
    tags: ['mathematics', 'language', 'philosophy', 'learning', 'symbols'],
    featured: true,
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
