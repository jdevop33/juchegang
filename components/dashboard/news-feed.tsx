'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import {
  Newspaper,
  TrendingUp,
  TrendingDown,
  Minus,
  ExternalLink,
  RefreshCw,
  Clock
} from 'lucide-react'
import type { NewsArticle, NewsSentiment } from '@/types/dashboard'

interface NewsFeedProps {
  className?: string
  category?: string
  limit?: number
  autoRefresh?: boolean
}

export function NewsFeed({
  className,
  category = 'all',
  limit = 10,
  autoRefresh = false,
}: NewsFeedProps) {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [sentiment, setSentiment] = useState<NewsSentiment | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchNews = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/dashboard/news?category=${category}&limit=${limit}`)
      if (!res.ok) throw new Error('Failed to fetch news')
      const data = await res.json()
      setArticles(data.articles || [])
      setSentiment(data.sentiment || null)
      setLastUpdate(new Date())
      setError(null)
    } catch (err) {
      setError('Failed to load news')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
    if (autoRefresh) {
      const interval = setInterval(fetchNews, 300000) // 5 minutes
      return () => clearInterval(interval)
    }
  }, [category, limit, autoRefresh])

  const getSentimentIcon = (s: 'positive' | 'negative' | 'neutral') => {
    switch (s) {
      case 'positive': return <TrendingUp className="w-3 h-3 text-green-400" />
      case 'negative': return <TrendingDown className="w-3 h-3 text-red-400" />
      default: return <Minus className="w-3 h-3 text-amber-400" />
    }
  }

  const getSentimentColor = (s: 'positive' | 'negative' | 'neutral') => {
    switch (s) {
      case 'positive': return 'text-green-400 border-green-500/30'
      case 'negative': return 'text-red-400 border-red-500/30'
      default: return 'text-amber-400 border-amber-500/30'
    }
  }

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)

    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    return date.toLocaleDateString()
  }

  if (loading && articles.length === 0) {
    return (
      <div className={cn('terminal-widget', className)}>
        <div className="terminal-widget-header">
          <Newspaper className="w-4 h-4" />
          <span>FINANCE NEWS</span>
        </div>
        <div className="p-4 text-center text-white/50">
          <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2" />
          Loading news...
        </div>
      </div>
    )
  }

  return (
    <div className={cn('terminal-widget', className)}>
      {/* Header */}
      <div className="terminal-widget-header flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Newspaper className="w-4 h-4" />
          <span>FINANCE NEWS</span>
          {sentiment && (
            <span className={cn(
              'terminal-badge text-[10px]',
              sentiment.marketMood === 'bullish' ? 'terminal-badge-green' :
              sentiment.marketMood === 'bearish' ? 'terminal-badge-red' :
              'terminal-badge-amber'
            )}>
              {sentiment.marketMood.toUpperCase()}
            </span>
          )}
        </div>
        <button
          onClick={fetchNews}
          className="p-1 hover:bg-white/10 rounded transition-colors"
          disabled={loading}
        >
          <RefreshCw className={cn('w-3 h-3', loading && 'animate-spin')} />
        </button>
      </div>

      {/* Sentiment Bar */}
      {sentiment && (
        <div className="px-3 py-2 border-b border-green-500/20 bg-black/30">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-white/50">Market Sentiment</span>
            <span className={cn(
              'font-mono',
              Number(sentiment.score) > 0 ? 'text-green-400' :
              Number(sentiment.score) < 0 ? 'text-red-400' :
              'text-amber-400'
            )}>
              {Number(sentiment.score) > 0 ? '+' : ''}{sentiment.score}%
            </span>
          </div>
          <div className="flex h-1.5 rounded overflow-hidden bg-white/10">
            <div
              className="bg-green-500 transition-all"
              style={{ width: `${(sentiment.positive / (sentiment.positive + sentiment.negative + sentiment.neutral)) * 100}%` }}
            />
            <div
              className="bg-amber-500 transition-all"
              style={{ width: `${(sentiment.neutral / (sentiment.positive + sentiment.negative + sentiment.neutral)) * 100}%` }}
            />
            <div
              className="bg-red-500 transition-all"
              style={{ width: `${(sentiment.negative / (sentiment.positive + sentiment.negative + sentiment.neutral)) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] mt-1 text-white/40">
            <span>Bullish: {sentiment.positive}</span>
            <span>Neutral: {sentiment.neutral}</span>
            <span>Bearish: {sentiment.negative}</span>
          </div>
        </div>
      )}

      {/* Articles */}
      <div className="max-h-[400px] overflow-auto terminal-scrollbar">
        {error ? (
          <div className="p-4 text-center text-red-400">{error}</div>
        ) : articles.length === 0 ? (
          <div className="p-4 text-center text-white/50">No news available</div>
        ) : (
          <div className="divide-y divide-green-500/10">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 hover:bg-green-500/5 transition-colors group"
              >
                <div className="flex items-start gap-2">
                  <div className="mt-1 flex-shrink-0">
                    {getSentimentIcon(article.sentiment)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-white/90 font-medium line-clamp-2 group-hover:text-green-400 transition-colors">
                      {article.title}
                    </h4>
                    {article.description && (
                      <p className="text-xs text-white/50 mt-1 line-clamp-2">
                        {article.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-white/40">
                      <span className="font-medium">{article.source}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {formatTime(article.published_at)}
                      </span>
                      {article.tickers?.length > 0 && (
                        <>
                          <span>•</span>
                          <span className="text-amber-400">
                            {article.tickers.slice(0, 3).join(', ')}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/50 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {lastUpdate && (
        <div className="px-3 py-1.5 border-t border-green-500/20 text-[10px] text-white/30 flex justify-between">
          <span>Source: FinanceLayer API</span>
          <span>Updated: {lastUpdate.toLocaleTimeString()}</span>
        </div>
      )}
    </div>
  )
}

// Compact news ticker for header
export function NewsHeadlines({ className }: { className?: string }) {
  const [articles, setArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    fetch('/api/dashboard/news?limit=5')
      .then(res => res.json())
      .then(data => setArticles(data.articles || []))
      .catch(console.error)
  }, [])

  if (articles.length === 0) return null

  return (
    <div className={cn('overflow-hidden', className)}>
      <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
        {articles.map((article, i) => (
          <a
            key={i}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
          >
            <span className={cn(
              'w-1.5 h-1.5 rounded-full',
              article.sentiment === 'positive' ? 'bg-green-400' :
              article.sentiment === 'negative' ? 'bg-red-400' :
              'bg-amber-400'
            )} />
            <span className="text-white/70 truncate max-w-[300px]">
              {article.title}
            </span>
            <span className="text-white/30 text-xs">
              {article.source}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
