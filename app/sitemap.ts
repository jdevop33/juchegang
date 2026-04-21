import { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

const BASE_URL = 'https://juche.org'

function listDirSlugs(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((name) => !name.startsWith('_') && !name.startsWith('.'))
      .filter((name) => {
        // Only include directories that actually have a page.tsx
        return fs.existsSync(path.join(dir, name, 'page.tsx'))
      })
      .sort()
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  const briefings = listDirSlugs(path.join(appDir, 'briefings'))
  const truthProject = listDirSlugs(path.join(appDir, 'truth-project'))

  // Top-level static pages
  const topLevel = [
    { path: '', freq: 'daily' as const, priority: 1.0 },
    { path: '/briefings', freq: 'daily' as const, priority: 0.95 },
    { path: '/truth-project', freq: 'weekly' as const, priority: 0.9 },
    { path: '/corrections', freq: 'weekly' as const, priority: 0.8 },
    { path: '/mission', freq: 'monthly' as const, priority: 0.8 },
    { path: '/gallery', freq: 'monthly' as const, priority: 0.7 },
    { path: '/library', freq: 'weekly' as const, priority: 0.7 },
    { path: '/social', freq: 'weekly' as const, priority: 0.7 },
    { path: '/channels', freq: 'weekly' as const, priority: 0.7 },
    { path: '/network', freq: 'monthly' as const, priority: 0.6 },
    { path: '/contact', freq: 'monthly' as const, priority: 0.6 },
    { path: '/cultural-exchange', freq: 'monthly' as const, priority: 0.6 },
    { path: '/cuisine-traditions', freq: 'monthly' as const, priority: 0.6 },
    { path: '/youth-empowerment', freq: 'monthly' as const, priority: 0.6 },
    { path: '/peace-timeline', freq: 'monthly' as const, priority: 0.6 },
    { path: '/content-usage', freq: 'yearly' as const, priority: 0.3 },
  ]

  const now = new Date()

  const entries: MetadataRoute.Sitemap = [
    ...topLevel.map((t) => ({
      url: `${BASE_URL}${t.path}`,
      lastModified: now,
      changeFrequency: t.freq,
      priority: t.priority,
      alternates: {
        languages: {
          en: `${BASE_URL}${t.path}`,
          'ko-KR': `${BASE_URL}${t.path}`,
          'ko-KP': `${BASE_URL}${t.path}`,
        },
      },
    })),
    ...briefings.map((slug) => {
      const pagePath = path.join(appDir, 'briefings', slug, 'page.tsx')
      let lastModified = now
      try {
        lastModified = fs.statSync(pagePath).mtime
      } catch {}
      return {
        url: `${BASE_URL}/briefings/${slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
      }
    }),
    ...truthProject.map((slug) => {
      const pagePath = path.join(appDir, 'truth-project', slug, 'page.tsx')
      let lastModified = now
      try {
        lastModified = fs.statSync(pagePath).mtime
      } catch {}
      return {
        url: `${BASE_URL}/truth-project/${slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
      }
    }),
  ]

  return entries
}
