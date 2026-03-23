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
			<div className="inline-flex rounded-md overflow-hidden border border-cream/20" role="group" aria-label="Motion preference">
				<button
					className={`px-3 py-2 min-h-[36px] ${mode==='system' ? 'bg-cream/15 text-cream' : 'bg-transparent hover:bg-cream/10'}`}
					onClick={() => setMode('system')}
					aria-label="Use system motion preference"
					aria-pressed={mode === 'system'}
				>
					System
				</button>
				<button
					className={`px-3 py-2 min-h-[36px] ${mode==='on' ? 'bg-cream/15 text-cream' : 'bg-transparent hover:bg-cream/10'}`}
					onClick={() => setMode('on')}
					aria-label="Enable animations"
					aria-pressed={mode === 'on'}
				>
					On
				</button>
				<button
					className={`px-3 py-2 min-h-[36px] ${mode==='off' ? 'bg-cream/15 text-cream' : 'bg-transparent hover:bg-cream/10'}`}
					onClick={() => setMode('off')}
					aria-label="Disable animations"
					aria-pressed={mode === 'off'}
				>
					Off
				</button>
			</div>
		</div>
	)
}
