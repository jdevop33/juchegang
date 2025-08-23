import Image from "next/image"
import { ComponentProps } from "react"
import { getFocalForImage } from "@/lib/image-focal-points"

type ImageProps = ComponentProps<typeof Image>

type FocalImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string
  alt: string
  focusXPercent?: number
  focusYPercent?: number
}

export default function FocalImage({ src, alt, focusXPercent, focusYPercent, style, className, ...rest }: FocalImageProps) {
  const fallback = getFocalForImage(src)
  const x = typeof focusXPercent === "number" ? focusXPercent : fallback.x
  const y = typeof focusYPercent === "number" ? focusYPercent : fallback.y

  const mergedStyle = {
    objectPosition: `${x}% ${y}%`,
    ...(style as Record<string, unknown>),
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      style={mergedStyle}
      {...rest}
    />
  )
}


