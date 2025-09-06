export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="h-6 w-80 animate-pulse rounded bg-foreground/20" />
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded border border-foreground/15 bg-foreground/10" />
        ))}
      </div>
    </div>
  )
}


