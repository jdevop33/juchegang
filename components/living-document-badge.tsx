import Link from "next/link"

export function LivingDocumentBadge({
  lastVerified,
  version,
  reportSlug,
}: {
  lastVerified: string
  version?: string
  reportSlug?: string
}) {
  const href = reportSlug
    ? `/corrections?report=${reportSlug}`
    : "/corrections"

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-river-deep border border-river-current/40 rounded text-xs hover:border-sovereign-gold/40 transition-colors"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-sovereign-gold/70 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sovereign-gold" />
      </span>
      <span className="font-mono text-cream-muted">
        Verified {lastVerified}
      </span>
      {version && (
        <span className="text-sovereign-gold/70">v{version}</span>
      )}
    </Link>
  )
}
