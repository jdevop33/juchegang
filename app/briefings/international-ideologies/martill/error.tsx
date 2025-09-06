"use client"

import { useEffect } from "react"

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error("Martill page error:", error)
  }, [error])

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded border border-red-500/60 bg-red-500/10 p-4 text-red-200">
        <h2 className="mb-2 text-xl font-bold">Something went wrong</h2>
        <p className="mb-1">Please refresh and try again later.</p>
        {error?.digest ? <p className="text-xs opacity-80">Error ID: {error.digest}</p> : null}
      </div>
    </div>
  )
}


