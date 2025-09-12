"use client"

import { useEffect } from "react"

interface ResponsiveInstagramEmbedProps {
  postUrl: string
  className?: string
}

export function ResponsiveInstagramEmbed({ postUrl, className = "" }: ResponsiveInstagramEmbedProps) {
  useEffect(() => {
    // Trigger Instagram embed processing after component mounts
    if (typeof window !== 'undefined' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }
  }, [])

  return (
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: "125%" }}>
        <blockquote 
          className="instagram-media absolute inset-0 w-full h-full"
          data-instgrm-captioned 
          data-instgrm-permalink={postUrl}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '100%',
            minWidth: '326px',
            padding: '0',
            width: 'calc(100% - 2px)'
          }}
        >
          <div style={{ padding: '16px' }}>
            <a 
              href={postUrl}
              style={{
                background: '#FFFFFF',
                lineHeight: '0',
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Loading Instagram post...
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  )
}