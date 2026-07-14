/**
 * Fetch a TTF subset from Google Fonts for use with next/og (satori).
 * Requesting css2 without a browser user-agent returns truetype URLs,
 * which satori supports (it cannot parse woff2). Passing `text` returns
 * a subset containing only the glyphs actually used on the card.
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

  const css = await fetch(url).then((res) => {
    if (!res.ok) throw new Error(`font css fetch failed: ${res.status}`)
    return res.text()
  })

  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error(`no ttf url in css2 response for ${family}`)

  const font = await fetch(match[1]).then((res) => {
    if (!res.ok) throw new Error(`font file fetch failed: ${res.status}`)
    return res.arrayBuffer()
  })
  return font
}
