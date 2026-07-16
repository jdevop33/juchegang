/**
 * Fetch a TTF subset from Google Fonts for use with next/og (satori).
 * Requesting css2 without a browser user-agent returns truetype URLs,
 * which satori supports (it cannot parse woff2). Passing `text` returns
 * a subset containing only the glyphs actually used on the card.
 *
 * A hard timeout keeps a slow/unreachable Google Fonts from hanging an
 * OG image request. The OG routes are dynamic (rendered on request), so
 * a failure here only affects that single share image — never the build
 * or the rest of the site.
 */
export async function loadGoogleFont(
  family: string,
  weight: number,
  text?: string
): Promise<ArrayBuffer> {
  let url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}`
  if (text) url += `&text=${encodeURIComponent(text)}`

  const fetchWithTimeout = async (target: string, ms = 5000) => {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), ms)
    try {
      return await fetch(target, { signal: controller.signal })
    } finally {
      clearTimeout(timer)
    }
  }

  const cssRes = await fetchWithTimeout(url)
  if (!cssRes.ok) throw new Error(`font css fetch failed: ${cssRes.status}`)
  const css = await cssRes.text()

  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error(`no ttf url in css2 response for ${family}`)

  const fontRes = await fetchWithTimeout(match[1])
  if (!fontRes.ok) throw new Error(`font file fetch failed: ${fontRes.status}`)
  return fontRes.arrayBuffer()
}
