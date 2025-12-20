"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function ConsentBanner() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const dismissed = localStorage.getItem('privacy-notice-seen')
		if (!dismissed) setVisible(true)
	}, [])

	const dismiss = () => {
		localStorage.setItem('privacy-notice-seen', 'true')
		setVisible(false)
	}

	if (!visible) return null

	return (
		<div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50">
			<div className="mx-auto max-w-2xl bg-black/80 text-white border border-green-500/30 rounded-lg p-4 backdrop-blur">
				<div className="flex items-start gap-3">
					<div className="flex-1">
						<p className="text-sm text-green-400 font-medium mb-1">Privacy-First Analytics</p>
						<p className="text-xs text-white/70">
							We use Umami - no cookies, no personal data, no tracking across sites.
							Your privacy is respected by design.
						</p>
					</div>
					<button
						onClick={dismiss}
						className="p-1 rounded hover:bg-white/10 transition-colors"
						aria-label="Dismiss"
					>
						<X className="w-4 h-4 text-white/60" />
					</button>
				</div>
			</div>
		</div>
	)
}
