"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, Download, Maximize2 } from "lucide-react"

type Props = {
  src: string
  alt: string
  index?: number
  allImages?: { src: string; alt: string }[]
}

export default function GalleryImage({ src, alt, index = 0, allImages = [] }: Props) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(index)

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(index)
    }
  }, [isOpen, index])

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (allImages.length === 0) return
    
    setCurrentIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % allImages.length
      } else {
        return prev === 0 ? allImages.length - 1 : prev - 1
      }
    })
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(allImages[currentIndex]?.src || src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `image-${currentIndex + 1}.${blob.type.split('/')[1]}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground bg-muted/20 rounded-lg">
        <div className="text-center">
          <div className="text-lg mb-1">📷</div>
          <div>Failed to load</div>
        </div>
      </div>
    )
  }

  const currentImage = allImages[currentIndex] || { src, alt }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1440px) 25vw, 20vw"
            className={`object-cover transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} group-hover:brightness-110`}
            onLoad={handleImageLoad}
            onError={() => setHasError(true)}
            priority={index < 8}
            unoptimized
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Loading skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted animate-pulse" />
          )}
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/95 backdrop-blur-sm">
        <DialogTitle className="sr-only">
          Gallery Image {currentIndex + 1}: {currentImage.alt}
        </DialogTitle>
        
        {/* Header with controls */}
        <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center">
          <div className="text-white/80 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {allImages.length || 1}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              title="Download image"
            >
              <Download className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Navigation arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              title="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              title="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        
        {/* Main image container */}
        <div className="relative w-full h-full flex items-center justify-center p-4 pt-16">
          <div className="relative max-w-full max-h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Image info */}
        <div className="absolute bottom-4 left-4 right-4 z-50 text-center">
          <p className="text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full inline-block max-w-md truncate">
            {currentImage.alt.replace(/gallery-\d+/, 'Image').replace(/\.(jpg|jpeg|png|webp)$/i, '')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}


