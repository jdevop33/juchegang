"use client"

import { Linkedin } from "lucide-react"
import { useMemo } from "react"
import { useLanguage } from "@/contexts/language-context"

type Props = {
  url?: string
  title?: string
  utm?: string
  className?: string
}

export function LinkedInShare({ url, title, utm = "utm_source=linkedin&utm_medium=social&utm_campaign=share", className }: Props) {
  const { t } = useLanguage()

  const shareUrl = useMemo(() => {
    const base = url || (typeof window !== "undefined" ? window.location.href : "")
    if (!base) return ""
    const hasQuery = base.includes("?")
    const full = hasQuery ? `${base}&${utm}` : `${base}?${utm}`
    // LinkedIn recommended endpoint
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(full)}`
  }, [url, utm])

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!shareUrl) return
    const w = 780
    const h = 640
    const left = window.screenX + (window.outerWidth - w) / 2
    const top = window.screenY + (window.outerHeight - h) / 2
    window.open(shareUrl, "linkedin-share", `width=${w},height=${h},left=${left},top=${top},noopener,noreferrer`)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        className ||
        "inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border/60 hover:bg-muted/30 transition text-sm"
      }
      aria-label={t("shareOnLinkedIn")}
      title={title || t("shareOnLinkedIn")}
    >
      <Linkedin className="h-4 w-4" />
      <span className="hidden sm:inline">{t("shareOnLinkedIn")}</span>
    </button>
  )
}
