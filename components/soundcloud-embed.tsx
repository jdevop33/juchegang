"use client"

import FocalImage from "./focal-image"

type Props = {
  trackUrl: string
  title: string
  artworkSrc: string
  focusXPercent?: number
  focusYPercent?: number
}

export default function SoundCloudEmbed({ trackUrl, title, artworkSrc, focusXPercent, focusYPercent }: Props) {
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`

  return (
    <div className="rounded-lg overflow-hidden border border-white/10 bg-black/30">
      {/* Artwork banner with controlled focal so faces aren't cut off */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <FocalImage
          src={artworkSrc}
          alt={`${title} artwork`}
          fill
          className="object-cover"
          focusXPercent={focusXPercent}
          focusYPercent={focusYPercent}
          sizes="(max-width: 768px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='10' height='6' fill='%23000'/%3E%3Crect width='10' height='6' fill='%23000' filter='url(%23b)'/%3E%3C/svg%3E"
        />
      </div>
      {/* Compact SoundCloud player (no visual mode) */}
      <iframe
        src={src}
        title={`SoundCloud — ${title}`}
        className="w-full"
        style={{ height: 166 }}
        allow="autoplay"
      />
    </div>
  )
}
