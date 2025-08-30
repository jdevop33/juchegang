export function BriefingSignature() {
  return (
    <div className="flex justify-center mt-12 mb-8">
      <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
        {/* Gold circles around the star */}
        <circle cx="60" cy="15" r="4" fill="#DAA520" />
        <circle cx="78" cy="20" r="4" fill="#DAA520" />
        <circle cx="92" cy="32" r="4" fill="#DAA520" />
        <circle cx="100" cy="48" r="4" fill="#DAA520" />
        <circle cx="105" cy="60" r="4" fill="#DAA520" />
        <circle cx="100" cy="72" r="4" fill="#DAA520" />
        <circle cx="92" cy="88" r="4" fill="#DAA520" />
        <circle cx="78" cy="100" r="4" fill="#DAA520" />
        <circle cx="60" cy="105" r="4" fill="#DAA520" />
        <circle cx="42" cy="100" r="4" fill="#DAA520" />
        <circle cx="28" cy="88" r="4" fill="#DAA520" />
        <circle cx="20" cy="72" r="4" fill="#DAA520" />
        <circle cx="15" cy="60" r="4" fill="#DAA520" />
        <circle cx="20" cy="48" r="4" fill="#DAA520" />
        <circle cx="28" cy="32" r="4" fill="#DAA520" />
        <circle cx="42" cy="20" r="4" fill="#DAA520" />
        
        {/* Red five-pointed star */}
        <path 
          d="M60,25 L67.5,47 L90,47 L72.5,61 L80,83 L60,69 L40,83 L47.5,61 L30,47 L52.5,47 Z" 
          fill="#EC1D25"
        />
      </svg>
    </div>
  )
}