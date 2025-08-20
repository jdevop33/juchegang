type FocalPoint = { x: number; y: number }

// Defaults to center if not specified
const defaultFocal: FocalPoint = { x: 50, y: 50 }

// Per-image focal points so faces are not cropped.
// Values are percentages for CSS object-position.
const focalMap: Record<string, FocalPoint> = {
  "/images/hero-image.png": { x: 50, y: 12 },
  "/gallery/gallery-010.webp": { x: 50, y: 18 },
}

export function getFocalForImage(src: string): FocalPoint {
  return focalMap[src] ?? defaultFocal
}

export function setFocalPoint(src: string, x: number, y: number) {
  focalMap[src] = { x, y }
}


