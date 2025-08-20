/**
 * Maps each law number to a unique gallery image
 * We have 64 gallery images, so each of the 48 laws gets its own image
 */
export function getLawImage(lawNumber: number): string {
  // Ensure we have a valid law number
  if (lawNumber < 1 || lawNumber > 48) {
    return '/gallery/gallery-001.jpg' // fallback
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