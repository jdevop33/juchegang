import { ImageResponse } from "next/og"
import { loadGoogleFont } from "./og-fonts"

export const OG_SIZE = { width: 1200, height: 630 }

export interface BriefingOgProps {
  /** Serial / classification line, e.g. "주체강 WHITE PAPER · JCK-WP-2026-0714" */
  serial: string
  /** Display title, kept short enough for three lines at 58px */
  title: string
  /** Optional Korean subtitle rendered in Noto Serif KR */
  titleKr?: string
  /** One-line tagline under the title */
  tagline?: string
  /** Brand shown bottom-left, e.g. "주체강" or "IPURPOSE" */
  brand: string
  /** Brand descriptor bottom-right, e.g. "Navigate the Current" */
  brandSub: string
}

/**
 * Shared 1200x630 OpenGraph card for document briefings: dark river
 * gradient, gold serial line, Playfair display title, branded footer.
 * Fonts are fetched as exact-glyph subsets at build/render time.
 */
export async function briefingOgImage(props: BriefingOgProps) {
  const { serial, title, titleKr, tagline, brand, brandSub } = props

  const monoText = `${serial}${brandSub}IPURPOSE·`.toUpperCase()
  const latinText = `${title}${tagline ?? ""}${brand}`
  const koreanText = `${titleKr ?? ""}${brand}${serial}`

  const fonts: {
    name: string
    data: ArrayBuffer
    weight: 400 | 700
    style: "normal"
  }[] = [
    {
      name: "Playfair Display",
      data: await loadGoogleFont("Playfair Display", 700, latinText),
      weight: 700,
      style: "normal",
    },
    {
      name: "JetBrains Mono",
      data: await loadGoogleFont(
        "JetBrains Mono",
        400,
        monoText + monoText.toLowerCase()
      ),
      weight: 400,
      style: "normal",
    },
  ]

  // Korean glyph subset only when the card actually shows Korean text
  if (/[가-힣]/.test(koreanText)) {
    fonts.push({
      name: "Noto Serif KR",
      data: await loadGoogleFont("Noto Serif KR", 700, koreanText),
      weight: 700,
      style: "normal",
    })
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundImage:
            "linear-gradient(135deg, #0d1b2a 0%, #142638 55%, #1b4965 100%)",
        }}
      >
        {/* Serial line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 4,
              height: 26,
              backgroundColor: "#c73032",
            }}
          />
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 21,
              letterSpacing: "0.22em",
              color: "#d4a74a",
              textTransform: "uppercase",
            }}
          >
            {serial}
          </span>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 1020,
          }}
        >
          <span
            style={{
              fontFamily: "Playfair Display",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#f0ebe3",
            }}
          >
            {title}
          </span>
          {titleKr ? (
            <span
              style={{
                fontFamily: "Noto Serif KR",
                fontSize: 30,
                fontWeight: 700,
                color: "#d4a74a",
              }}
            >
              {titleKr}
            </span>
          ) : null}
          {tagline ? (
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: 24,
                color: "#a0b4c8",
                lineHeight: 1.35,
              }}
            >
              {tagline}
            </span>
          ) : null}
        </div>

        {/* Brand footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(212, 167, 74, 0.45)",
            paddingTop: 26,
          }}
        >
          <span
            style={{
              fontFamily: /[가-힣]/.test(brand)
                ? "Noto Serif KR"
                : "JetBrains Mono",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: /[가-힣]/.test(brand) ? "0.14em" : "0.3em",
              color: "#d4a74a",
              textTransform: "uppercase",
            }}
          >
            {brand}
          </span>
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 18,
              letterSpacing: "0.2em",
              color: "#a0b4c8",
              textTransform: "uppercase",
            }}
          >
            {brandSub}
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  )
}
