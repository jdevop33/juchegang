export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="h-6 w-64 animate-pulse rounded bg-foreground/20" />
      <div className="mt-6 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-foreground/15" />
        <div className="h-4 w-11/12 animate-pulse rounded bg-foreground/15" />
        <div className="h-4 w-10/12 animate-pulse rounded bg-foreground/15" />
      </div>
    </div>
  )
}


