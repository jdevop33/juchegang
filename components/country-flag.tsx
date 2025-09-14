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
	return `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${codePoints.join('-')}.svg`
}

// Prefer local assets when available (guaranteed rendering)
const LOCAL_FLAG_MAP: Record<string, string> = {
	kp: "/flags/kp.svg",
}

export default function CountryFlag({ iso, size = 24, className, alt }: Props) {
	const lower = iso.toLowerCase()
	const local = LOCAL_FLAG_MAP[lower]
	const initialSrc = local || flagCdnSrc(lower, size)
	const [src, setSrc] = useState<string>(initialSrc)
	const [stage, setStage] = useState<0 | 1 | 2 | 3>(local ? 0 : 1) // 0 local -> 1 flagcdn -> 2 twemoji -> 3 emoji
	const emoji = isoToEmoji(lower)
	const height = Math.round(size * 3 / 4)

	if (stage === 3) {
		return <span className={className} style={{ fontSize: `${Math.round(size * 0.9)}px` }}>{emoji}</span>
	}

	return (
		<img
			src={src}
			alt={alt ?? `${lower.toUpperCase()} flag`}
			width={size}
			height={height}
			className={className}
			onError={() => {
				if (stage === 0) {
					setSrc(flagCdnSrc(lower, size))
					setStage(1)
				} else if (stage === 1) {
					setSrc(twemojiSrc(lower))
					setStage(2)
				} else {
					setStage(3)
				}
			}}
		/>
	)
}
