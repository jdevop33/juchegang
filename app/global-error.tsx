"use client"

import { useEffect } from "react"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		// Basic client-side logging; backend logging can be added later
		console.error("Global error boundary caught:", { message: error.message, stack: error.stack, digest: error.digest })
	}, [error])

	return (
		<html lang="en">
			<body>
				<div className="min-h-screen grid place-items-center bg-background text-foreground p-6">
					<div className="max-w-md w-full space-y-4 text-center">
						<h1 className="text-2xl font-semibold">Something went wrong</h1>
						<p className="text-muted-foreground">An unexpected error occurred. You can try again, or go back home.</p>
						<div className="flex items-center justify-center gap-3">
							<button onClick={() => reset()} className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Try again</button>
							<a href="/" className="px-4 py-2 rounded-md border border-border">Home</a>
						</div>
						{process.env.NODE_ENV !== "production" && (
							<pre className="text-left text-xs overflow-auto p-3 bg-black/20 rounded-md border border-border">
								{error?.stack || error?.message}
							</pre>
						)}
					</div>
				</div>
			</body>
		</html>
	)
}
