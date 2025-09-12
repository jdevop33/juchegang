import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular" | "card"
  animation?: "pulse" | "wave" | "none"
}

export function Skeleton({ 
  className, 
  variant = "text",
  animation = "pulse" 
}: SkeletonProps) {
  const baseClass = "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded"
  
  const variantClasses = {
    text: "h-4 w-full",
    circular: "w-12 h-12 rounded-full",
    rectangular: "w-full h-32",
    card: "w-full h-64 rounded-lg"
  }
  
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-shimmer bg-[length:200%_100%]",
    none: ""
  }
  
  return (
    <div
      className={cn(
        baseClass,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-card rounded-lg p-6 space-y-4">
      <Skeleton variant="rectangular" className="h-48 mb-4" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

export function LawCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="circular" className="w-12 h-12" />
        <Skeleton className="h-6 w-20" />
      </div>
      <Skeleton className="h-6 w-3/4 mb-2" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  )
}

export function GalleryImageSkeleton() {
  return (
    <div className="relative aspect-square">
      <Skeleton variant="rectangular" className="w-full h-full rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white/60 rounded-full animate-spin" />
      </div>
    </div>
  )
}