"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
  src: string
  alt: string
}

export default function GalleryImage({ src, alt }: Props) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
        Failed to load
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      priority={false}
    />
  )
}


