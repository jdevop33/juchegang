import Image, { ImageProps } from "next/image"
import { getFocalForImage } from "@/lib/image-focal-points"

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


