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
					background: "linear-gradient(135deg, #0d1b2a 0%, #1b4965 50%, #0d1b2a 100%)",
					color: "#f0ebe3",
					fontFamily: "Georgia, 'Times New Roman', serif",
					padding: "60px",
				}}
			>
				<div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1, textAlign: "center", color: "#d4a74a" }}>{title}</div>
				<div style={{ marginTop: 16, fontSize: 32, opacity: 0.9, textAlign: "center", color: "#f0ebe3" }}>{subtitle}</div>
				<div style={{ position: "absolute", bottom: 40, left: 60, right: 60, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<div style={{ fontSize: 24, opacity: 0.8 }}>juche.org</div>
					<div style={{ display: "flex", gap: 12 }}>
						<div style={{ width: 18, height: 18, borderRadius: 9999, background: "#c73032" }} />
						<div style={{ width: 18, height: 18, borderRadius: 9999, background: "#d4a74a" }} />
						<div style={{ width: 18, height: 18, borderRadius: 9999, background: "#1b4965" }} />
					</div>
				</div>
			</div>
		),
		{ ...size }
	)
}
