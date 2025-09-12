import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://juche.org'
  
  const routes = [
    '',
    '/truth-project',
    '/truth-project/wikipedia-bureaucrats',
    '/truth-project/wikipedia-neutrality', 
    '/truth-project/fiction-becomes-fact',
    '/truth-project/sovereign-wealth-seizures',
    '/truth-project/op-ed',
    '/truth-project/report',
    '/briefings',
    '/briefings/ai-censorship-matrix',
    '/briefings/dprk-narrative',
    '/briefings/nato-expansion',
    '/briefings/iran-snapback',
    '/briefings/brics-dedollarization',
    '/briefings/korean-reunification-path',
    '/briefings/ukraine-deception',
    '/briefings/sanctions-warfare',
    '/briefings/frozen-conflicts-profit',
    '/briefings/navy-seals-civilians',
    '/briefings/covert-operations-declassified',
    '/briefings/false-flag-cyber-operations',
    '/briefings/apt-down-files',
    '/briefings/truth-for-peace',
    '/briefings/ai-confession',
    '/social',
    '/gallery',
    '/mission',
    '/contact',
    '/channels',
    '/cultural-exchange',
    '/youth-empowerment',
    '/peace-timeline',
    '/cuisine-traditions',
  ]
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('truth-project') ? 0.9 : 0.8,
  }))
}