"use client"

import { useEffect, useState } from "react"

export default function MotionToggle() {
	const [mode, setMode] = useState<"system" | "on" | "off">("system")

	useEffect(() => {
		const saved = localStorage.getItem('motion-preference') as any
		if (saved === 'on' || saved === 'off' || saved === 'system') setMode(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem('motion-preference', mode)
		// Dispatch a custom event so interested components could react if needed
		window.dispatchEvent(new CustomEvent('motion-preference-change', { detail: { mode } }))
	}, [mode])

	return (
		<div className="hidden md:flex items-center gap-2 text-xs text-cream/70">
			<span>Motion</span>
			<div className="inline-flex rounded-md overflow-hidden border border-cream/20">
				<button
					className={`px-2 py-1 ${mode==='system' ? 'bg-cream/15 text-cream' : 'bg-transparent hover:bg-cream/10'}`}
					onClick={() => setMode('system')}
				>
					System
				</button>
				<button
					className={`px-2 py-1 ${mode==='on' ? 'bg-cream/15 text-cream' : 'bg-transparent hover:bg-cream/10'}`}
					onClick={() => setMode('on')}
				>
					On
				</button>
				<button
					className={`px-2 py-1 ${mode==='off' ? 'bg-cream/15 text-cream' : 'bg-transparent hover:bg-cream/10'}`}
					onClick={() => setMode('off')}
				>
					Off
				</button>
			</div>
		</div>
	)
}
