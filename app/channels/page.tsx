"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import Image from "next/image"
import { Play, Calendar, Eye, ExternalLink, Globe, TrendingUp, MonitorPlay } from "lucide-react"
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
    <main className="min-h-[100dvh] bg-river-depths text-cream selection:bg-sovereign-gold/30">
      <JucheHeader />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/paektu-hero-.webp"
            alt="Illuminated mountain city at night near Paektusan Geopark"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/80 via-[#0d1b2a]/60 to-[#0d1b2a]" />
          {/* Radial accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-korean-red/10 blur-[100px] rounded-full pointer-events-none" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-white/5 backdrop-blur-2xl text-cream-muted rounded-full text-[10px] font-medium tracking-[0.2em] uppercase border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <MonitorPlay className="w-3 h-3 text-sovereign-gold" />
              {language === 'kr' ? '진실의 목소리' : 'Voices of Truth'}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {language === 'kr' ? '채널 아카이브' : 'Channels Archive'}
            </h1>
            <p className="text-xl md:text-2xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
              {language === 'kr'
                ? '서구 주류 미디어의 편견을 넘어 진실을 추구하는 독립 언론인들의 채널'
                : 'Independent journalists and analysts seeking truth beyond Western mainstream media bias'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 md:px-8 mb-16 relative z-20">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 border backdrop-blur-sm ${
                  selectedCategory === category.id
                    ? 'bg-cream text-[#0d1b2a] border-cream'
                    : 'bg-white/5 text-cream-muted border-white/10 hover:border-white/30 hover:text-cream hover:bg-white/10'
                }`}
              >
                {category.label} <span className="opacity-50 ml-1">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="px-4 md:px-8 pb-32">
        <div className="container mx-auto max-w-[1400px]">
          {loading ? (
            <div className="text-center py-32 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-sovereign-gold animate-spin mb-6" />
              <p className="text-cream-muted tracking-[0.2em] uppercase text-sm font-medium">
                {language === 'kr' ? '채널 동기화 중...' : 'Synchronizing channels...'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {filteredChannels.map((channel, index) => (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % 4), duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="p-1.5 md:p-2 rounded-[2.5rem] bg-white/5 border border-white/10 group flex flex-col h-full"
                >
                  <div className="bg-river-deep rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex-1 overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="p-8 md:p-10 border-b border-white/5 relative overflow-hidden">
                      {/* Subtle hover glow */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sovereign-gold/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-6 relative z-10">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                              <Globe className="h-5 w-5 text-sovereign-gold" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-cream tracking-tight group-hover:text-white transition-colors">
                                {channel.title}
                              </h2>
                              <span className="text-sm text-cream/40 font-mono">
                                {channel.username}
                              </span>
                            </div>
                          </div>
                          <p className="text-cream-muted text-base leading-relaxed mb-6">
                            {channel.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-sovereign-gold/10 text-sovereign-gold border border-sovereign-gold/20 rounded-full text-[10px] uppercase tracking-[0.15em] font-medium">
                              {channel.focus}
                            </span>
                            <span className="px-3 py-1 bg-white/5 text-cream-muted border border-white/10 rounded-full text-[10px] uppercase tracking-[0.15em] font-medium">
                              {channel.category}
                            </span>
                          </div>
                        </div>
                        
                        <a
                          href={`https://youtube.com/${channel.username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white text-cream-muted hover:text-[#0d1b2a] transition-all duration-300 border border-white/10"
                          aria-label={language === 'kr' ? '채널 방문' : 'Visit Channel'}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    {/* Videos Grid */}
                    <div className="p-8 md:p-10 bg-river-depths flex-1 flex flex-col">
                      <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-cream/40 mb-6 flex items-center gap-2">
                        <MonitorPlay className="w-4 h-4" />
                        {language === 'kr' ? '최근 영상' : 'Recent Broadcasts'}
                      </h3>
                      
                      {videos[channel.id] && videos[channel.id].length > 0 ? (
                        <div className="grid sm:grid-cols-2 gap-4 flex-1">
                          {videos[channel.id].slice(0, 2).map((video) => (
                            <a
                              key={video.id}
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/video block relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300"
                            >
                              <div className="aspect-video relative bg-[#111] overflow-hidden">
                                {video.thumbnail ? (
                                  <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Play className="h-8 w-8 text-cream/20" />
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover/video:opacity-100">
                                  <div className="w-12 h-12 rounded-full bg-korean-red flex items-center justify-center backdrop-blur-md">
                                    <Play className="h-5 w-5 text-white ml-1" />
                                  </div>
                                </div>
                                {video.duration && (
                                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md text-white font-mono text-[10px] px-2 py-1 rounded-md">
                                    {video.duration}
                                  </div>
                                )}
                              </div>
                              <div className="p-4 bg-river-deep">
                                <h4 className="text-cream text-sm font-medium mb-3 line-clamp-2 leading-snug group-hover/video:text-white transition-colors">
                                  {video.title}
                                </h4>
                                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.1em] font-mono text-cream/40">
                                  <div className="flex items-center gap-1.5">
                                    <Eye className="h-3 w-3" />
                                    {video.viewCount ? formatViewCount(video.viewCount) : '—'}
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Calendar className="h-3 w-3" />
                                    {formatTimeAgo(video.publishedAt)}
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 flex-1 flex flex-col items-center justify-center bg-river-deep rounded-2xl border border-white/5 border-dashed">
                          <p className="text-cream/40 text-sm">
                            {language === 'kr'
                              ? '최근 영상을 불러올 수 없습니다.'
                              : 'Unable to load recent broadcasts.'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Integration Notice / CTA */}
      <section className="px-4 md:px-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="p-1.5 md:p-2 rounded-[3rem] bg-white/5 border border-white/10">
            <div className="bg-gradient-to-b from-[#111] to-[#0d1b2a] rounded-[calc(3rem-0.5rem)] p-12 md:p-20 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <TrendingUp className="h-12 w-12 text-sovereign-gold mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6 tracking-tight">
                {language === 'kr' ? '실시간 동기화 네트워크' : 'Live Synchronization Network'}
              </h2>
              <p className="text-lg text-cream-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                {language === 'kr'
                  ? '이 미디어 매트릭스는 YouTube Data API를 통해 직접 연결되어 있습니다. 독립 언론인들의 새로운 보고서가 송출되는 즉시 이 아카이브에 등록됩니다.'
                  : 'This media matrix connects directly via YouTube Data API. As soon as independent analysts broadcast new reports, they are indexed into this registry.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/truth-project"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white"
                >
                  {language === 'kr' ? '진실 프로젝트' : 'The Truth Project'}
                </Link>
                <Link
                  href="/briefings"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-cream font-medium text-lg hover:bg-white/5 transition-all duration-300 active:scale-[0.98]"
                >
                  {language === 'kr' ? '일일 브리핑' : 'Daily Briefings'}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <JucheFooter />
    </main>
  )
}

