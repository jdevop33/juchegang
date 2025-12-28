'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Hash } from 'lucide-react'
import type { TelegramPost, TelegramChannel } from '@/data/telegram-feed'

interface TelegramFeedProps {
  posts: TelegramPost[]
  channels: TelegramChannel[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.629-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

function PostCard({ post, channel }: { post: TelegramPost; channel?: TelegramChannel }) {
  // Split message into English and Korean parts
  const parts = post.message.split('---')
  const englishPart = parts[0]?.trim() || post.message
  const koreanPart = parts[1]?.trim()

  // Get title (first line)
  const lines = englishPart.split('\n')
  const title = lines[0] || ''
  const body = lines.slice(1).join('\n').trim()

  // Remove hashtags from body for cleaner display
  const cleanBody = body.replace(/#[\w]+/g, '').trim()

  return (
    <div className="h-full flex flex-col">
      {/* Channel header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
          <TelegramIcon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">{post.channelName}</span>
            {channel?.category === 'owned' && (
              <span className="px-1.5 py-0.5 text-[10px] bg-blue-500/30 text-blue-300 rounded">OWNED</span>
            )}
          </div>
          <a
            href={`https://t.me/${post.channelUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white/70 transition-colors"
          >
            @{post.channelUsername}
          </a>
        </div>
        <span className="text-xs text-white/40">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>

      {/* Post title */}
      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
        {title}
      </h3>

      {/* Post body - scrollable */}
      <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
          {cleanBody}
        </div>

        {/* Korean translation */}
        {koreanPart && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="text-white/60 text-sm whitespace-pre-line italic">
              {koreanPart.replace(/#[\w]+/g, '').trim()}
            </div>
          </div>
        )}
      </div>

      {/* Hashtags */}
      {post.hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
          {post.hashtags.slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-white/5 text-blue-400 rounded-md hover:bg-white/10 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
          {post.hashtags.length > 5 && (
            <span className="px-2 py-1 text-xs text-white/40">
              +{post.hashtags.length - 5} more
            </span>
          )}
        </div>
      )}

      {/* View on Telegram */}
      <a
        href={`https://t.me/${post.channelUsername}/${post.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-medium rounded-lg transition-all"
      >
        <TelegramIcon className="w-4 h-4" />
        View on Telegram
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  )
}

export function TelegramFeed({
  posts,
  channels,
  autoPlay = true,
  autoPlayInterval = 8000
}: TelegramFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState(1)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % posts.length)
  }, [posts.length])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }, [posts.length])

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused || posts.length <= 1) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, isPaused, autoPlayInterval, goToNext, posts.length])

  const currentPost = posts[currentIndex]
  const currentChannel = channels.find(c => c.id === currentPost?.channelId)

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-white/60">
        <TelegramIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>No Telegram posts available</p>
      </div>
    )
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
            <TelegramIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Telegram Feed</h2>
            <p className="text-sm text-white/50">Live from our channels</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/40 mr-2">
            {currentIndex + 1} / {posts.length}
          </span>
          <button
            onClick={goToPrev}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Previous post"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Next post"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10">
        <div className="min-h-[500px] p-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPost?.id || currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full"
            >
              {currentPost && (
                <PostCard post={currentPost} channel={currentChannel} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        {autoPlay && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <motion.div
              key={`progress-${currentIndex}`}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ width: '0%' }}
              animate={{ width: isPaused ? undefined : '100%' }}
              transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
              style={{ width: isPaused ? undefined : undefined }}
            />
          </div>
        )}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {posts.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-500 w-6'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to post ${index + 1}`}
          />
        ))}
        {posts.length > 10 && (
          <span className="text-xs text-white/40 ml-2">+{posts.length - 10}</span>
        )}
      </div>

      {/* Channel links */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {channels.map((channel) => (
          <a
            key={channel.id}
            href={`https://t.me/${channel.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              channel.category === 'owned'
                ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 border border-blue-500/30 hover:border-blue-400/50'
                : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
            }`}
          >
            <TelegramIcon className="w-4 h-4" />
            @{channel.username}
            {channel.category === 'owned' && (
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            )}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TelegramFeed
