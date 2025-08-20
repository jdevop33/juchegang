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
  
  // Determine file extension based on pattern (odd = .jpg, even = .webp for first 32, then mixed)
  let extension: string
  if (lawNumber <= 32) {
    extension = lawNumber % 2 === 1 ? '.jpg' : '.webp'
  } else {
    // For laws 33-48, use the actual pattern from our gallery
    const extensionMap: { [key: number]: string } = {
      33: '.webp', 34: '.jpg', 35: '.webp', 36: '.jpg', 37: '.jpg', 38: '.jpg', 
      39: '.jpg', 40: '.webp', 41: '.webp', 42: '.jpg', 43: '.jpg', 44: '.jpg',
      45: '.webp', 46: '.webp', 47: '.jpg', 48: '.webp'
    }
    extension = extensionMap[lawNumber] || '.jpg'
  }
  
  return `/gallery/gallery-${paddedNumber}${extension}`
}

/**
 * Get all law images for preloading or batch operations
 */
export function getAllLawImages(): string[] {
  return Array.from({ length: 48 }, (_, i) => getLawImage(i + 1))
}