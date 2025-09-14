"use client"

import { useState, useMemo, useCallback } from "react"
import FocalImage from "./focal-image"

type Props = {
	src: string | string[]
	alt: string
	className?: string
	focusXPercent?: number
	focusYPercent?: number
	fill?: boolean
	width?: number
	height?: number
	sizes?: string
	priority?: boolean
}

export default function SafeFocalImage(props: Props) {
	const candidates = useMemo(() => (Array.isArray(props.src) ? props.src : [props.src]).filter(Boolean), [props.src])
	const [index, setIndex] = useState(0)
	const current = candidates[index] ?? candidates[0]

	const handleError = useCallback(() => {
		// Advance to next candidate if available
		setIndex((i) => (i + 1 < candidates.length ? i + 1 : i))
	}, [candidates.length])

	return (
		<FocalImage
			{...props as any}
			src={current}
			// @ts-ignore next/image accepts onError
			onError={handleError}
		/>
	)
}


