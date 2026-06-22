import { ImageResponse } from "next/og"

export const alt = "Juche GanG — Navigate the Current"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "linear-gradient(135deg, #0d1b2a 0%, #142638 45%, #1b4965 100%)",
          color: "#f0ebe3",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, transparent 0%, #d4a74a 20%, #d4a74a 80%, transparent 100%)",
          }}
        />

        {/* Korean radial decoration */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,167,74,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #d4a74a 0%, #8b6914 100%)",
              color: "#0d1b2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            JG
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
            }}
          >
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: "#d4a74a",
                letterSpacing: 1,
              }}
            >
              JUCHE GANG
            </div>
            <div
              style={{
                fontSize: 16,
                color: "rgba(240,235,227,0.7)",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Navigate the Current
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#f0ebe3",
              maxWidth: 960,
            }}
          >
            The 48 Laws of Excellence
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(240,235,227,0.75)",
              lineHeight: 1.3,
              maxWidth: 900,
              fontFamily: "sans-serif",
              fontWeight: 400,
            }}
          >
            Primary-source briefings, philosophy, and analysis on Korean
            sovereignty, media, and peace.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(212,167,74,0.35)",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontFamily: "sans-serif",
              color: "rgba(232,223,208,0.8)",
              letterSpacing: 1,
            }}
          >
            juche.org
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#d4a74a",
              letterSpacing: 3,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            factual · respectful · hopeful · bold
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
