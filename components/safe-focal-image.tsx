"use client"

import { useState, useMemo } from "react"
import FocalImage from "./focal-image"

type Props = {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  focusXPercent?: number
  focusYPercent?: number
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
}

export default function SafeFocalImage({ fallbackSrc = "/placeholder.svg", ...props }: Props) {
  const [src, setSrc] = useState(props.src)
  const onError = () => setSrc(fallbackSrc)

  // Pass through to FocalImage; onError only binds on the underlying img
  return (
    <FocalImage
      {...props}
      src={src}
      // @ts-ignore next/image accepts onError
      onError={onError}
    />
  )
}


