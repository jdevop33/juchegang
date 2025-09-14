"use client"

import { useEffect, useState } from "react"

export default function ConsentBanner() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const stored = localStorage.getItem('analytics-consent')
		if (!stored) setVisible(true)
	}, [])

	if (!visible) return null

	return (
		<div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50">
			<div className="mx-auto max-w-2xl bg-black/70 text-white border border-white/20 rounded-lg p-4 backdrop-blur">
				<p className="text-sm mb-3">We use minimal analytics to improve the site. Allow anonymous usage data?</p>
				<div className="flex gap-3 justify-end">
					<button
						onClick={() => { localStorage.setItem('analytics-consent', 'granted'); setVisible(false) }}
						className="px-3 py-2 rounded bg-green-600 hover:bg-green-700"
					>
						Allow
					</button>
					<button
						onClick={() => { localStorage.setItem('analytics-consent', 'denied'); setVisible(false) }}
						className="px-3 py-2 rounded border border-white/30 hover:bg-white/10"
					>
						Decline
					</button>
				</div>
			</div>
		</div>
	)
}
