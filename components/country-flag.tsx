"use client"

import { useState } from "react"

type Props = {
	iso: string
	size?: number
	className?: string
	alt?: string
}

function isoToEmoji(iso: string): string {
	const cc = iso.trim().toUpperCase()
	if (cc.length !== 2) return "🏳️"
	const codePoints = [...cc].map((c) => 127397 + c.charCodeAt(0))
	return String.fromCodePoint(...codePoints)
}

function flagCdnSrc(iso: string, size: number): string {
	const h = Math.max(12, Math.min(48, size))
	return `https://flagcdn.com/h${h}/${iso.toLowerCase()}.png`
}

function twemojiSrc(iso: string): string {
	const cc = iso.trim().toUpperCase()
	if (cc.length !== 2) return ""
	const codePoints = [...cc].map((c) => (127397 + c.charCodeAt(0)).toString(16))
	// Cloudflare CDN for Twemoji SVGs
	return `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${codePoints.join('-')}.svg`
}

export default function CountryFlag({ iso, size = 24, className, alt }: Props) {
	const [src, setSrc] = useState<string>(flagCdnSrc(iso, size))
	const [stage, setStage] = useState<0 | 1 | 2>(0) // 0: flagcdn, 1: twemoji, 2: emoji
	const emoji = isoToEmoji(iso)
	const height = Math.round(size * 3 / 4)

	if (stage === 2) {
		return <span className={className} style={{ fontSize: `${Math.round(size * 0.9)}px` }}>{emoji}</span>
	}

	return (
		<img
			src={src}
			alt={alt ?? `${iso.toUpperCase()} flag`}
			width={size}
			height={height}
			className={className}
			onError={() => {
				if (stage === 0) {
					setSrc(twemojiSrc(iso))
					setStage(1)
				} else {
					setStage(2)
				}
			}}
		/>
	)
}
