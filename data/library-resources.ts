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
  // GOOGLE DRIVE HOSTED — juche.org folder (publicly readable)
  // Folder: https://drive.google.com/drive/folders/1LTdRE16_xs29prWZ90yHlZ4GJnBvgyc7
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'pre-war-generation',
    title: 'The Pre-War Generation',
    description: 'Full-length briefing on the intellectual and material conditions of the pre-war generation',
    type: 'pdf',
    category: 'documents',
    fileSize: '945 KB',
    downloadUrl: 'https://drive.google.com/file/d/1U_feZmILO9lWuERv6ygfiMYMRRdsEgZt/view',
    author: 'Jesse James',
    publishedAt: '2026-04-16',
    tags: ['geopolitics', 'generation', 'pre-war', 'briefing'],
    featured: true,
  },
  {
    id: 'machinery-of-control',
    title: 'Machinery of Control',
    description: 'How narrative, policy, and surveillance interlock to produce consent at scale',
    type: 'pdf',
    category: 'documents',
    fileSize: '114 KB',
    downloadUrl: 'https://drive.google.com/file/d/1BWgpegTMifeVzItOkTG0ebQPwd-3ujCB/view',
    author: 'Jesse James',
    publishedAt: '2026-04-17',
    tags: ['power', 'media', 'surveillance', 'analysis'],
    featured: true,
  },
  {
    id: 'hegemonic-transition-briefing',
    title: 'Hegemonic Transition Briefing',
    description: 'Analysis of the ongoing shift in global power structures and what it means for the 21st century',
    type: 'pdf',
    category: 'documents',
    fileSize: '190 KB',
    downloadUrl: 'https://drive.google.com/file/d/1glR-GN9LK0ULOz1A7A1cTaFT3ggBctRR/view',
    author: 'JPanda Research',
    publishedAt: '2026-04-10',
    tags: ['geopolitics', 'hegemony', 'multipolarity', 'briefing'],
    featured: true,
  },
  {
    id: 'computation-of-concealment',
    title: 'The Computation of Concealment',
    description: 'On the systems and incentives that produce hidden knowledge in modern institutions',
    type: 'pdf',
    category: 'documents',
    fileSize: '359 KB',
    downloadUrl: 'https://drive.google.com/file/d/14rCA6pTP_hHli4OCAyOI9jSO6HCaYnuC/view',
    author: 'JPanda Research',
    publishedAt: '2026-04-13',
    tags: ['secrecy', 'institutions', 'analysis'],
  },
  {
    id: 'lemon-juice-on-your-face',
    title: 'Lemon Juice on Your Face',
    description: 'Essay on the Dunning-Kruger effect applied to elite decision-making',
    type: 'pdf',
    category: 'documents',
    fileSize: '1.2 MB',
    downloadUrl: 'https://drive.google.com/file/d/1dZiUNzsiywkjx8LvXjLETVdP04wem_uz/view',
    author: 'JPanda Research',
    publishedAt: '2026-04-10',
    tags: ['psychology', 'dunning-kruger', 'elite', 'essay'],
  },
  {
    id: 'false-dichotomy',
    title: 'The False Dichotomy',
    description: 'Why the binary framing we are offered is almost never the real choice',
    type: 'pdf',
    category: 'documents',
    fileSize: '260 KB',
    downloadUrl: 'https://drive.google.com/file/d/1lMsuFl731XtwBDgds93n-CcrIqlhcDRJ/view',
    author: 'Jesse James',
    publishedAt: '2026-04-18',
    tags: ['rhetoric', 'framing', 'essay'],
  },
  {
    id: 'science-of-what-we-say',
    title: 'The Science of What We Say',
    description: 'On language, meaning, and the measurable effects of rhetoric on belief',
    type: 'pdf',
    category: 'documents',
    fileSize: '113 KB',
    downloadUrl: 'https://drive.google.com/file/d/1kTjNqWRBRZs8P_GYZHuHhB41dpDsoic3/view',
    author: 'Jesse James',
    publishedAt: '2026-04-18',
    tags: ['rhetoric', 'language', 'science', 'essay'],
  },
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
  {
    id: 'pre-war-generation-carousel',
    title: 'The Pre-War Generation — LinkedIn Carousel',
    description: 'Slide version of the Pre-War Generation briefing, optimized for LinkedIn and social sharing',
    type: 'slides',
    category: 'decks',
    fileSize: '522 KB',
    downloadUrl: 'https://drive.google.com/file/d/1LS2xs6S6CpQP96s8FjXFeXDOEkqAJT-X/view',
    author: 'Jesse James',
    publishedAt: '2026-04-16',
    tags: ['geopolitics', 'generation', 'pre-war', 'carousel', 'linkedin'],
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
