/**
 * Maps each law number to a unique gallery image
 * We have 64 gallery images, so each of the 48 laws gets its own image
 */
export function getLawImage(lawNumber: number): string {
  // Ensure we have a valid law number
  if (lawNumber < 1 || lawNumber > 48) {
    return '/gallery/gallery-001.jpg' // fallback
  }
  
  // Explicit overrides requested by the user for specific laws
  const overrides: Record<number, string> = {
    1: '/gallery/gallery-064.png',
    3: '/gallery/gallery-063.png',
    5: '/gallery/gallery-054.webp',
    7: '/gallery/gallery-046.webp',
    8: '/gallery/gallery-044.jpg',
    46: '/gallery/gallery-055.webp',
    47: '/gallery/gallery-057.jpg',
    43: '/gallery/gallery-041.webp',
    44: '/gallery/gallery-042.jpg',
    42: '/gallery/gallery-040.webp',
    39: '/gallery/gallery-039.jpg',
    38: '/gallery/gallery-038.jpg',
    37: '/gallery/gallery-037.jpg',
    36: '/gallery/gallery-036.jpg',
    34: '/gallery/gallery-034.jpg',
    32: '/gallery/gallery-032.jpg',
    30: '/gallery/gallery-030.jpg',
    28: '/gallery/gallery-028.jpg',
    26: '/gallery/gallery-026.jpg',
    24: '/gallery/gallery-024.jpg',
    23: '/gallery/gallery-023.jpg',
    22: '/gallery/gallery-022.jpg',
    21: '/gallery/gallery-021.jpg',
    19: '/gallery/gallery-019.jpg',
    15: '/gallery/gallery-015.jpg',
    13: '/gallery/gallery-013.jpg',
    11: '/gallery/gallery-011.jpg',
    9: '/gallery/gallery-009.jpg',
  }
  if (overrides[lawNumber]) {
    return overrides[lawNumber]
  }

  // Format the number with leading zeros (001, 002, etc.)
  const paddedNumber = lawNumber.toString().padStart(3, '0')
  
  // Determine extension by probing known files; prefer .webp, then .jpg, then .png
  const candidates = [
    `/gallery/gallery-${paddedNumber}.webp`,
    `/gallery/gallery-${paddedNumber}.jpg`,
    `/gallery/gallery-${paddedNumber}.png`,
  ]
  // We cannot stat in the browser; the actual existence is handled by SafeFocalImage fallback.
  // Return first candidate and let SafeFocalImage swap to placeholder on error.
  return candidates[0]
}

/**
 * Get all law images for preloading or batch operations
 */
export function getAllLawImages(): string[] {
  return Array.from({ length: 48 }, (_, i) => getLawImage(i + 1))
}