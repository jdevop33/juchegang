"use client"

// Lightweight wrapper for LinkedIn Follow Company plugin using iframe embedding
// Docs: https://developer.linkedin.com/docs/plugins/follow-company

type Props = {
  companyId: number | string
  counter?: "right" | "top" | "" // empty hides counter
  lang?: string
  className?: string
}

export function LinkedInFollow({ companyId, counter = "right", lang = "en_US", className }: Props) {
  const src = `https://www.linkedin.com/plugins/follow?locale=${encodeURIComponent(
    lang
  )}&company=${encodeURIComponent(String(companyId))}&counter=${encodeURIComponent(counter)}`
  return (
    <iframe
      title="LinkedIn Follow"
      src={src}
      height="21"
      style={{ width: 300, maxWidth: "100%" }}
      className={className}
      frameBorder="0"
      scrolling="no"
    />
  )
}
