"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import { AlertCircle, Image as ImageIcon, ZoomIn, ZoomOut } from "lucide-react"

type Props = {
  initialSrc?: string
  alt?: string
}

export default function ImageViewer({ initialSrc = "", alt = "Uploaded image" }: Props) {
  const [src, setSrc] = useState<string>(initialSrc)
  const [error, setError] = useState<string>("")
  const [zoom, setZoom] = useState<number>(1)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onFileSelected = useCallback((file: File) => {
    setError("")
    try {
      const url = URL.createObjectURL(file)
      setSrc(url)
      setZoom(1)
    } catch (e) {
      setError("Could not load image. Please try a different file.")
    }
  }, [])

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.")
      return
    }
    onFileSelected(file)
  }, [onFileSelected])

  const onDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setError("Please drop an image file.")
      return
    }
    onFileSelected(file)
  }, [onFileSelected])

  const canZoomOut = useMemo(() => zoom > 0.25, [zoom])
  const canZoomIn = useMemo(() => zoom < 5, [zoom])

  return (
    <section aria-labelledby="image-viewer-heading" className="space-y-4">
      <h2 id="image-viewer-heading" className="text-2xl font-bold text-cream">Image viewer</h2>

      <label
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="block w-full cursor-pointer rounded-lg border border-cream/20 bg-river-depths/30 p-6 text-center hover:bg-river-depths/40 transition-colors"
      >
        <div className="flex flex-col items-center gap-2 text-cream/80">
          <ImageIcon className="h-8 w-8 text-cream/70" />
          <p>Click to upload or drag & drop an image</p>
          <p className="text-xs text-cream/50">PNG, JPG, or SVG</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onInputChange}
          className="hidden"
          aria-label="Upload image"
        />
      </label>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-korean-red/40 bg-korean-red/15 p-3 text-cream/80">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-cream/60">Zoom: {(zoom * 100).toFixed(0)}%</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => canZoomOut && setZoom((z) => Math.max(0.25, Number((z - 0.25).toFixed(2))))}
            disabled={!canZoomOut}
            className="inline-flex items-center gap-2 rounded-md border border-cream/20 bg-cream/10 px-3 py-2 text-cream/80 hover:bg-cream/20 disabled:opacity-40"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
            <span>Out</span>
          </button>
          <button
            onClick={() => canZoomIn && setZoom((z) => Math.min(5, Number((z + 0.25).toFixed(2))))}
            disabled={!canZoomIn}
            className="inline-flex items-center gap-2 rounded-md border border-cream/20 bg-cream/10 px-3 py-2 text-cream/80 hover:bg-cream/20 disabled:opacity-40"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
            <span>In</span>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-cream/10 bg-river-depths/50" style={{ height: 420 }}>
        {src ? (
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              style={{ transform: `scale(${zoom})`, transition: "transform 120ms ease" }}
              className="max-h-full max-w-full select-none"
              onError={() => setError("Image failed to load.")}
            />
          </div>
        ) : (
          <div className="h-full w-full grid place-items-center text-cream/60">
            <p>No image selected yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}


