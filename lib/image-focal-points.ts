type FocalPoint = { x: number; y: number }

// Defaults to center if not specified
const defaultFocal: FocalPoint = { x: 50, y: 50 }

// Per-image focal points so subjects are not cropped awkwardly.
// Values are percentages for CSS object-position, applied by FocalImage.
//
// Only images that still exist in /public belong here. The 48 law cards
// render their heritage artwork with object-contain (full image, no crop),
// so they intentionally need no focal entry. Add a key only when an
// object-cover image needs its subject biased away from center.
const focalMap: Record<string, FocalPoint> = {
  "/images/hero-image.png": { x: 50, y: 12 },
  "/gallery/North_Korean_Bibimbap_비빔밥_(12330376074).jpg": { x: 50, y: 35 }, // Cuisine hero
}

export function getFocalForImage(src: string): FocalPoint {
  return focalMap[src] ?? defaultFocal
}

export function setFocalPoint(src: string, x: number, y: number) {
  focalMap[src] = { x, y }
}
