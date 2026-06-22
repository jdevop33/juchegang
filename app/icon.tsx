import { ImageResponse } from "next/og"

// 32×32 favicon, brand-colored, readable at 16×16. Replaces the
// 1.1 MB favicon.svg (DPRK emblem) that was being shipped to every user.
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #050505 0%, #1b4965 100%)",
          color: "#d4a74a",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: -1,
          fontFamily: "serif",
          borderRadius: 6,
        }}
      >
        JG
      </div>
    ),
    { ...size },
  )
}
