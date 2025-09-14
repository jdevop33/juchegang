import Image from "next/image"
import { ComponentProps } from "react"
import { getFocalForImage } from "@/lib/image-focal-points"

type ImageProps = ComponentProps<typeof Image>

type FocalImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: ImageProps["src"]
  alt: string
  focusXPercent?: number
  focusYPercent?: number
}

export default function FocalImage({ src, alt, focusXPercent, focusYPercent, style, className, ...rest }: FocalImageProps) {
  const fallback = typeof src === 'string' ? getFocalForImage(src) : { x: 50, y: 50 }
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


