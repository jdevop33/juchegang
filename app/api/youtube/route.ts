import { NextRequest, NextResponse } from 'next/server'

// Types for YouTube Data API responses
interface YouTubeVideoSnippet {
  title: string
  description: string
  publishedAt: string
  thumbnails: {
    medium: { url: string }
    high: { url: string }
  }
  channelTitle: string
}

interface YouTubeVideoStatistics {
  viewCount: string
  likeCount: string
}

interface YouTubeVideoContentDetails {
  duration: string
}

interface YouTubeVideoItem {
  id: string
  snippet: YouTubeVideoSnippet
  statistics?: YouTubeVideoStatistics
  contentDetails?: YouTubeVideoContentDetails
}

interface YouTubeChannelSnippet {
  title: string
  description: string
  thumbnails: {
    medium: { url: string }
    high: { url: string }
  }
}

interface YouTubeChannelStatistics {
  subscriberCount: string
  videoCount: string
}

interface YouTubeChannelItem {
  id: string
  snippet: YouTubeChannelSnippet
  statistics?: YouTubeChannelStatistics
}

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3'

// Helper function to format ISO 8601 duration to readable format
function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  if (!match) return '0:00'
  
  const hours = (match[1] || '').replace('H', '')
  const minutes = (match[2] || '').replace('M', '')
  const seconds = (match[3] || '').replace('S', '')
  
  if (hours) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
  } else {
    return `${minutes || '0'}:${seconds.padStart(2, '0')}`
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const channelId = searchParams.get('channelId')
  const action = searchParams.get('action') || 'videos'

  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API key not configured')
    return NextResponse.json({ 
      error: 'YouTube API not configured',
      fallbackMessage: 'Please visit the channels directly on YouTube'
    }, { status: 503 })
  }

  console.log(`YouTube API request: action=${action}, channelId=${channelId}`)

  if (!channelId) {
    return NextResponse.json({ error: 'Channel ID is required' }, { status: 400 })
  }

  try {
    if (action === 'channel') {
      // Fetch channel information
      const channelResponse = await fetch(
        `${YOUTUBE_API_BASE}/channels?part=snippet,statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
      )
      
      if (!channelResponse.ok) {
        throw new Error(`YouTube API error: ${channelResponse.status}`)
      }

      const channelData = await channelResponse.json()
      const channel = channelData.items?.[0] as YouTubeChannelItem

      if (!channel) {
        return NextResponse.json({ error: 'Channel not found' }, { status: 404 })
      }

      return NextResponse.json({
        id: channel.id,
        title: channel.snippet.title,
        description: channel.snippet.description,
        thumbnail: channel.snippet.thumbnails.high?.url || channel.snippet.thumbnails.medium?.url,
        subscriberCount: channel.statistics?.subscriberCount || '0',
        videoCount: channel.statistics?.videoCount || '0'
      })
    } else {
      // Fetch latest videos from channel
      const searchResponse = await fetch(
        `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${YOUTUBE_API_KEY}`
      )

      if (!searchResponse.ok) {
        const errorText = await searchResponse.text()
        console.error(`YouTube Search API error: ${searchResponse.status}`, errorText)
        throw new Error(`YouTube API error: ${searchResponse.status} - ${errorText}`)
      }

      const searchData = await searchResponse.json()
      const videoIds = searchData.items?.map((item: any) => item.id.videoId).join(',') || ''

      if (!videoIds) {
        return NextResponse.json({ videos: [] })
      }

      // Fetch detailed video information
      const videosResponse = await fetch(
        `${YOUTUBE_API_BASE}/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      )

      if (!videosResponse.ok) {
        throw new Error(`YouTube API error: ${videosResponse.status}`)
      }

      const videosData = await videosResponse.json()
      const videos = videosData.items?.map((item: YouTubeVideoItem) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        url: `https://www.youtube.com/watch?v=${item.id}`,
        viewCount: item.statistics?.viewCount || '0',
        likeCount: item.statistics?.likeCount || '0',
        duration: item.contentDetails ? formatDuration(item.contentDetails.duration) : '0:00'
      })) || []

      return NextResponse.json({ videos })
    }
  } catch (error) {
    console.error('YouTube API error:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch data from YouTube',
      fallbackMessage: 'Please visit the channels directly on YouTube'
    }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 300 // Cache for 5 minutes