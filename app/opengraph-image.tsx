import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Juche GanG"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage({ params, searchParams }: { params: Record<string, string>; searchParams: Record<string, string | string[]> }) {
	const title = (typeof searchParams.title === "string" ? searchParams.title : Array.isArray(searchParams.title) ? searchParams.title[0] : null) ||
		"The 48 Laws of Excellence"
	const subtitle = (typeof searchParams.subtitle === "string" ? searchParams.subtitle : Array.isArray(searchParams.subtitle) ? searchParams.subtitle[0] : null) ||
		"Juche GanG Edition"

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: "linear-gradient(135deg, #0b1220 0%, #101828 30%, #031C3C 100%)",
					color: "white",
					fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
					padding: "60px",
				}}
			>
				<div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1, textAlign: "center" }}>{title}</div>
				<div style={{ marginTop: 16, fontSize: 32, opacity: 0.9, textAlign: "center" }}>{subtitle}</div>
				<div style={{ position: "absolute", bottom: 40, left: 60, right: 60, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<div style={{ fontSize: 24, opacity: 0.8 }}>juche.org</div>
					<div style={{ display: "flex", gap: 12 }}>
						<div style={{ width: 18, height: 18, borderRadius: 9999, background: "#EC1D25" }} />
						<div style={{ width: 18, height: 18, borderRadius: 9999, background: "#FFFFFF" }} />
						<div style={{ width: 18, height: 18, borderRadius: 9999, background: "#034DA2" }} />
					</div>
				</div>
			</div>
		),
		{ ...size }
	)
}
