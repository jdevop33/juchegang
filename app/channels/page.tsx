"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { Play, Calendar, Eye, ThumbsUp, ExternalLink, Globe, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Link from "next/link"

type YouTubeVideo = {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
  url: string
  viewCount?: string
  likeCount?: string
  duration?: string
}

type YouTubeChannel = {
  id: string
  username: string
  channelId: string
  title: string
  description: string
  subscriberCount?: string
  videoCount?: string
  thumbnailUrl?: string
  category: 'geopolitics' | 'business' | 'analysis' | 'news'
  focus: string
  language: 'en' | 'multilingual'
}

export default function ChannelsPage() {
  const { language } = useLanguage()
  const [channels] = useState<YouTubeChannel[]>([
    {
      id: 'inside_china_business',
      username: '@inside_china_business',
      channelId: 'UCNlAaPtfHizB_k6wztaHmZg',
      title: 'Inside China Business',
      description: language === 'kr' 
        ? '중국 비즈니스와 경제 정책에 대한 심층 분석. 서구 편견 없는 객관적 시각으로 중국의 실제 모습을 전달.'
        : 'In-depth analysis of Chinese business and economic policy. Objective perspective without Western bias on China\'s reality.',
      category: 'business',
      focus: 'China Economics & Business',
      language: 'en'
    },
    {
      id: 'dialogueworks01',
      username: '@dialogueworks01',
      channelId: 'UCkF-6h_Zgf9zXNUmUB-MzTw',
      title: 'Dialogue Works',
      description: language === 'kr'
        ? '국제 정세와 지정학적 분석을 통한 대화와 이해 촉진. 다극 세계의 균형잡힌 관점 제시.'
        : 'Promoting dialogue and understanding through international affairs and geopolitical analysis. Balanced multipolar world perspective.',
      category: 'geopolitics',
      focus: 'International Dialogue & Geopolitics',
      language: 'en'
    },
    {
      id: 'borzzikman',
      username: '@borzzikman',
      channelId: 'UCDnibnh5sM8eVAwSlUnf6Xw',
      title: 'Borzzikman',
      description: language === 'kr'
        ? '지정학적 분석과 국제 관계 전문가의 통찰. 복잡한 국제 정세를 명쾌하게 해설.'
        : 'Geopolitical analysis and insights from international relations expert. Clear explanations of complex global affairs.',
      category: 'analysis',
      focus: 'Geopolitical Analysis',
      language: 'en'
    },
    {
      id: 'theduran',
      username: '@theduran',
      channelId: 'UCdeMVChrumySxV9N1w0Au-w',
      title: 'The Duran',
      description: language === 'kr'
        ? '러시아와 유라시아 지역의 정치, 경제 분석. 서구 주류 미디어와 다른 관점으로 세계 정세 해석.'
        : 'Political and economic analysis of Russia and Eurasia. Alternative perspective on world affairs beyond Western mainstream media.',
      category: 'geopolitics',
      focus: 'Russia & Eurasian Analysis',
      language: 'en'
    },
    {
      id: 'judgingfreedom',
      username: '@judgingfreedom',
      channelId: 'UCDkEYb-TXJVWLvOokshtlsw',
      title: 'Judging Freedom',
      description: language === 'kr'
        ? '법률 전문가의 시각으로 본 국제 정세와 정의. 법적 관점에서 세계 사건들을 분석.'
        : 'International affairs and justice from a legal expert\'s perspective. Analyzing world events through legal lens.',
      category: 'analysis',
      focus: 'Legal & Political Analysis',
      language: 'en'
    },
    {
      id: 'alexmercouris',
      username: '@alexmercouris',
      channelId: 'UCwGpHa6rMLjSSCBlckm5khw',
      title: 'Alex Mercouris',
      description: language === 'kr'
        ? '국제법과 외교 전문가의 일일 분석. 법적 배경을 바탕으로 한 깊이 있는 국제 정세 해설.'
        : 'Daily analysis from international law and diplomacy expert. In-depth commentary on global affairs with legal background.',
      category: 'analysis',
      focus: 'International Law & Diplomacy',
      language: 'en'
    },
    {
      id: 'geopoliticshaiphong',
      username: '@geopoliticshaiphong',
      channelId: 'UCOxLhz6B_elvLflntSEfnzA',
      title: 'Geopolitics & Empire',
      description: language === 'kr'
        ? '제국주의 비판과 다극 세계 분석. 글로벌 남반구의 관점에서 본 지정학적 변화.'
        : 'Anti-imperialist analysis and multipolar world examination. Geopolitical changes from Global South perspective.',
      category: 'geopolitics',
      focus: 'Anti-Imperialist Geopolitics',
      language: 'en'
    }
  ])

  const [videos, setVideos] = useState<Record<string, YouTubeVideo[]>>({})
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Fetch videos from YouTube Data API
  const fetchChannelVideos = async (channelId: string, channelUsername: string): Promise<YouTubeVideo[]> => {
    try {
      const response = await fetch(`/api/youtube?channelId=${channelId}&action=videos`)
      
      if (!response.ok) {
        console.error(`Failed to fetch videos for ${channelUsername}:`, response.status)
        return []
      }

      const data = await response.json()
      
      if (data.error) {
        console.error(`YouTube API error for ${channelUsername}:`, data.error)
        return []
      }

      return data.videos || []
    } catch (error) {
      console.error(`Network error fetching videos for ${channelUsername}:`, error)
      return []
    }
  }

  useEffect(() => {
    const loadAllVideos = async () => {
      setLoading(true)
      const videoData: Record<string, YouTubeVideo[]> = {}
      
      for (const channel of channels) {
        try {
          videoData[channel.id] = await fetchChannelVideos(channel.channelId, channel.username)
        } catch (error) {
          console.error(`Failed to load videos for ${channel.title}:`, error)
          videoData[channel.id] = []
        }
      }
      
      setVideos(videoData)
      setLoading(false)
    }

    loadAllVideos()
  }, [channels])

  const filteredChannels = selectedCategory === 'all' 
    ? channels 
    : channels.filter(channel => channel.category === selectedCategory)

  const categories = [
    { id: 'all', label: language === 'kr' ? '전체' : 'All', count: channels.length },
    { id: 'geopolitics', label: language === 'kr' ? '지정학' : 'Geopolitics', count: channels.filter(c => c.category === 'geopolitics').length },
    { id: 'business', label: language === 'kr' ? '경제' : 'Business', count: channels.filter(c => c.category === 'business').length },
    { id: 'analysis', label: language === 'kr' ? '분석' : 'Analysis', count: channels.filter(c => c.category === 'analysis').length }
  ]

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return language === 'kr' ? `${diffInHours}시간 전` : `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return language === 'kr' ? `${diffInDays}일 전` : `${diffInDays}d ago`
    }
  }

  const formatViewCount = (count: string) => {
    const num = parseInt(count)
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return count
  }

  return (
    <>
      <JucheHeader />
      <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-20">
        {/* Hero Section */}
        <section className="relative py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto max-w-6xl text-center"
          >
            <Play className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {language === 'kr' ? '진실의 채널들' : 'Channels of Truth'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {language === 'kr' 
                ? '서구 주류 미디어의 편견을 넘어 진실을 추구하는 독립 언론인들의 채널'
                : 'Independent journalists and analysts seeking truth beyond Western mainstream media bias'}
            </p>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Channels Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-400"></div>
                <p className="text-white/80 mt-4">
                  {language === 'kr' ? '채널 정보를 불러오는 중...' : 'Loading channels...'}
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredChannels.map((channel, index) => (
                  <motion.div
                    key={channel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-900/50 border-gray-700/50 hover:border-red-500/50 transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-2xl text-white mb-2 flex items-center gap-3">
                              <Globe className="h-8 w-8 text-red-400" />
                              {channel.title}
                              <span className="text-sm text-gray-400 font-normal">
                                {channel.username}
                              </span>
                            </CardTitle>
                            <p className="text-gray-300 mb-4">{channel.description}</p>
                            <div className="flex flex-wrap gap-3">
                              <span className="px-3 py-1 bg-red-800/30 text-red-300 rounded-full text-sm">
                                {channel.focus}
                              </span>
                              <span className="px-3 py-1 bg-blue-800/30 text-blue-300 rounded-full text-sm capitalize">
                                {channel.category}
                              </span>
                            </div>
                          </div>
                          <a
                            href={`https://youtube.com/${channel.username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {language === 'kr' ? '채널 방문' : 'Visit Channel'}
                          </a>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {videos[channel.id] && videos[channel.id].length > 0 ? (
                          <div className="grid md:grid-cols-2 gap-6">
                            {videos[channel.id].slice(0, 2).map((video) => (
                              <a
                                key={video.id}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-gray-800/30 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-all"
                              >
                                <div className="relative">
                                  <div className="w-full h-48 bg-gray-700 rounded-t-lg overflow-hidden">
                                    {video.thumbnail ? (
                                      <img 
                                        src={video.thumbnail} 
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center">
                                        <Play className="h-12 w-12 text-white/50" />
                                      </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                      <Play className="h-12 w-12 text-white/80 group-hover:text-red-400 transition-colors" />
                                    </div>
                                  </div>
                                  {video.duration && (
                                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                      {video.duration}
                                    </div>
                                  )}
                                </div>
                                <div className="p-4">
                                  <h4 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-red-300 transition-colors">
                                    {video.title}
                                  </h4>
                                  <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-1">
                                      <Eye className="h-4 w-4" />
                                      {video.viewCount ? formatViewCount(video.viewCount) : '—'}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {formatTimeAgo(video.publishedAt)}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-gray-400">
                            {language === 'kr' 
                              ? '최근 영상을 불러올 수 없습니다. 채널을 직접 방문해보세요.'
                              : 'Unable to load recent videos. Please visit the channel directly.'}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Integration Notice */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-4xl text-center"
          >
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
              <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">
                {language === 'kr' ? '실시간 업데이트' : 'Real-time Updates'}
              </h2>
              <p className="text-white/80 mb-6">
                {language === 'kr'
                  ? '이 페이지는 YouTube Data API를 통해 자동으로 업데이트됩니다. 새로운 영상이 업로드되면 실시간으로 반영됩니다.'
                  : 'This page automatically updates via YouTube Data API. New videos appear in real-time as they\'re uploaded.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/truth-project"
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
                >
                  {language === 'kr' ? '진실 프로젝트' : 'Truth Project'}
                </Link>
                <Link
                  href="/cultural-exchange"
                  className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg transition-all"
                >
                  {language === 'kr' ? '문화 교류' : 'Cultural Exchange'}
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <JucheFooter />
    </>
  )
}