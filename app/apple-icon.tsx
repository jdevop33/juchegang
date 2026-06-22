import { ImageResponse } from "next/og"

// 180×180 apple-touch-icon used on iOS home screen.
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, #1b4965 0%, #050505 70%)",
          color: "#d4a74a",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          JG
        </div>
        <div
          style={{
            marginTop: 6,
            fontSize: 14,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(232,223,208,0.7)",
          }}
        >
          JUCHE
        </div>
      </div>
    ),
    { ...size },
  )
}
