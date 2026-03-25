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
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#142638] border border-[#1b4965]/40 rounded text-xs hover:border-[#d4a74a]/40 transition-colors"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f] animate-pulse" />
      <span className="font-mono text-[#a0b4c8]">
        Verified {lastVerified}
      </span>
      {version && (
        <span className="text-[#d4a74a]/60">v{version}</span>
      )}
    </Link>
  )
}
