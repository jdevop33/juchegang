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

export default function CountryFlag({ iso, size = 24, className, alt }: Props) {
	const [errored, setErrored] = useState(false)
	const emoji = isoToEmoji(iso)
	const height = Math.round(size * 3 / 4)

	if (errored) {
		return <span className={className} style={{ fontSize: `${Math.round(size * 0.9)}px` }}>{emoji}</span>
	}

	return (
		<img
			src={flagCdnSrc(iso, size)}
			alt={alt ?? `${iso.toUpperCase()} flag`}
			width={size}
			height={height}
			className={className}
			onError={() => setErrored(true)}
		/>
	)
}
