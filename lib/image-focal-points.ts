type FocalPoint = { x: number; y: number }

// Defaults to center if not specified
const defaultFocal: FocalPoint = { x: 50, y: 50 }

// Per-image focal points so faces are not cropped.
// Values are percentages for CSS object-position.
const focalMap: Record<string, FocalPoint> = {
  "/images/hero-image.png": { x: 50, y: 12 },
  "/gallery/gallery-010.webp": { x: 50, y: 18 },
  // Ensure faces visible for specific laws
  "/gallery/gallery-064.png": { x: 50, y: 35 }, // Law 1
  "/gallery/gallery-063.png": { x: 50, y: 35 }, // Law 3
  "/gallery/gallery-054.webp": { x: 50, y: 35 }, // Law 5
  "/gallery/gallery-046.webp": { x: 50, y: 35 }, // Law 7
  "/gallery/gallery-044.jpg": { x: 50, y: 35 }, // Law 8
  "/gallery/gallery-055.webp": { x: 50, y: 38 }, // Law 46 (more headroom)
  "/gallery/gallery-057.jpg": { x: 50, y: 35 }, // Law 47
  "/gallery/gallery-041.webp": { x: 50, y: 35 },
  "/gallery/gallery-042.jpg": { x: 50, y: 35 },
  "/gallery/gallery-040.webp": { x: 50, y: 35 },
  "/gallery/gallery-039.jpg": { x: 50, y: 35 },
  "/gallery/gallery-038.jpg": { x: 50, y: 35 },
  "/gallery/gallery-037.jpg": { x: 50, y: 35 },
  "/gallery/gallery-036.jpg": { x: 50, y: 35 },
  "/gallery/gallery-034.jpg": { x: 50, y: 35 },
  "/gallery/gallery-032.jpg": { x: 50, y: 35 },
  "/gallery/gallery-030.jpg": { x: 50, y: 35 },
  "/gallery/gallery-028.jpg": { x: 50, y: 35 },
  "/gallery/gallery-026.jpg": { x: 50, y: 35 },
  "/gallery/gallery-024.jpg": { x: 50, y: 35 },
  "/gallery/gallery-023.jpg": { x: 50, y: 35 },
  "/gallery/gallery-022.jpg": { x: 50, y: 35 },
  "/gallery/gallery-021.jpg": { x: 50, y: 35 },
  "/gallery/gallery-019.jpg": { x: 50, y: 35 },
  "/gallery/gallery-015.jpg": { x: 50, y: 35 },
  "/gallery/gallery-013.jpg": { x: 50, y: 35 },
  "/gallery/gallery-011.jpg": { x: 50, y: 35 },
  "/gallery/gallery-009.jpg": { x: 50, y: 35 },
  // Law 4 dynamic file varies, but we bias downward crop
  "/gallery/gallery-004.jpg": { x: 50, y: 35 },
  "/gallery/gallery-004.webp": { x: 50, y: 35 },
}

export function getFocalForImage(src: string): FocalPoint {
  return focalMap[src] ?? defaultFocal
}

export function setFocalPoint(src: string, x: number, y: number) {
  focalMap[src] = { x, y }
}


