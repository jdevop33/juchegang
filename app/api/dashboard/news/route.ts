// Dashboard API: Finance News
// Using FinanceLayer API from APILayer
// Real-time financial news for SWF intelligence

import { NextResponse } from 'next/server'

const APILAYER_KEY = process.env.APILAYER_KEY || 'yO6XjqCkj3GgGSq8uyLjfXELXs87mhTj'

// Cache for 5 minutes
export const revalidate = 300

interface NewsArticle {
  title: string
  description: string
  url: string
  source: string
  published_at: string
  tickers: string[]
  keywords: string[]
  sentiment?: 'positive' | 'negative' | 'neutral'
}

// SWF-relevant keywords and tickers
const SWF_KEYWORDS = [
  'sovereign wealth fund',
  'central bank',
  'oil price',
  'bond yield',
  'treasury',
  'OPEC',
  'commodity',
  'inflation',
  'interest rate',
  'currency',
  'gold',
  'reserves',
]

const SWF_TICKERS = [
  'GLD',  // Gold ETF
  'USO',  // Oil ETF
  'TLT',  // Treasury Bond ETF
  'UUP',  // US Dollar ETF
  'FXI',  // China ETF
  'EWJ',  // Japan ETF
  'VGK',  // Europe ETF
]

async function fetchFinanceNews(
  limit: number = 25
): Promise<NewsArticle[]> {
  try {
    // Free tier: no filters, just get latest news
    const response = await fetch(
      `https://api.apilayer.com/financelayer/news?limit=${limit}`,
      {
        headers: { 'apikey': APILAYER_KEY },
        next: { revalidate: 300 },
      }
    )

    if (!response.ok) {
      console.error(`Finance News API error: ${response.status}`)
      return []
    }

    const data = await response.json()

    // FinanceLayer returns { pagination: {...}, data: [...] }
    if (data.data && Array.isArray(data.data)) {
      return data.data.map((article: any) => ({
        title: article.title || '',
        description: article.description || '',
        url: article.url || '',
        source: article.source || '',
        published_at: article.published_at || new Date().toISOString(),
        tickers: article.tickers || [],
        keywords: article.tags || [],
      }))
    }
    return []
  } catch (error) {
    console.error('Finance News fetch error:', error)
    return []
  }
}

// Simple sentiment analysis based on keywords
function analyzeSentiment(title: string, description: string): 'positive' | 'negative' | 'neutral' {
  const text = `${title} ${description}`.toLowerCase()

  const positiveWords = ['surge', 'rally', 'gain', 'rise', 'jump', 'soar', 'boom', 'record high', 'bullish', 'growth']
  const negativeWords = ['crash', 'plunge', 'fall', 'drop', 'sink', 'crisis', 'recession', 'bearish', 'loss', 'decline']

  const positiveCount = positiveWords.filter(word => text.includes(word)).length
  const negativeCount = negativeWords.filter(word => text.includes(word)).length

  if (positiveCount > negativeCount) return 'positive'
  if (negativeCount > positiveCount) return 'negative'
  return 'neutral'
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || 'all'
    const limit = parseInt(searchParams.get('limit') || '20')

    let articles: NewsArticle[] = []

    // Free tier: just fetch latest news (no filtering available)
    articles = await fetchFinanceNews(limit)

    // Add sentiment analysis
    const enrichedArticles = articles.map(article => ({
      ...article,
      sentiment: analyzeSentiment(article.title, article.description || ''),
    }))

    // Calculate sentiment summary
    const sentimentCounts = {
      positive: enrichedArticles.filter(a => a.sentiment === 'positive').length,
      negative: enrichedArticles.filter(a => a.sentiment === 'negative').length,
      neutral: enrichedArticles.filter(a => a.sentiment === 'neutral').length,
    }

    const totalWithSentiment = sentimentCounts.positive + sentimentCounts.negative + sentimentCounts.neutral
    const marketMood = totalWithSentiment > 0
      ? sentimentCounts.positive > sentimentCounts.negative
        ? 'bullish'
        : sentimentCounts.negative > sentimentCounts.positive
          ? 'bearish'
          : 'neutral'
      : 'neutral'

    return NextResponse.json({
      articles: enrichedArticles,
      count: enrichedArticles.length,
      category,
      sentiment: {
        ...sentimentCounts,
        marketMood,
        score: totalWithSentiment > 0
          ? ((sentimentCounts.positive - sentimentCounts.negative) / totalWithSentiment * 100).toFixed(1)
          : 0,
      },
      timestamp: new Date().toISOString(),
      source: 'FinanceLayer API (APILayer)',
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('News API error:', error)
    return NextResponse.json(
      {
        articles: [],
        count: 0,
        error: 'Failed to fetch news',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
