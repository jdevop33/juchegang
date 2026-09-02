#!/usr/bin/env python3
"""Build the JucheGang icon set from public/rose-mark.png.

Run: python3 scripts/build-icons.py

Every icon derives from ONE source, public/rose-mark.png (728x728, RGBA), so
the mark stays identical across the header, the browser tab, the home screen
and the manifest.

Why the crop: rose-mark.png carries a large leaf across its bottom fifth.
Measured on the alpha and colour channels, 68% of the green mass sits below
y=582 while the red bloom mass ends at y=559. Scaled to a 32px favicon that
leaf becomes a pale blob roughly the size of a rose head, and the two blooms
shrink to fill barely half the frame. Cropping the leaf away lets the blooms
fill the icon, which is the whole job at 16 and 32 pixels.

Transparency is kept everywhere except the two places it actively hurts:
apple-touch (iOS composites transparency to black) and the maskable icon
(Android crops to a shape and needs bleed).
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "rose-mark.png"
NAVY = (13, 27, 42, 255)          # river-depths, matches manifest theme_color

# Blooms plus sepals, leaf dropped. Measured, not eyeballed: red bloom mass
# spans y 3-559; the leaf mass begins in earnest at y 582.
BLOOM_CROP = (6, 3, 717, 555)


def fit(img, size, pad=0.0, bg=None):
    """Center img in a size x size canvas, scaled to fill minus padding."""
    inner = max(1, int(size * (1 - 2 * pad)))
    im = img.copy()
    im.thumbnail((inner, inner), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    canvas.paste(im, ((size - im.width) // 2, (size - im.height) // 2), im)
    return canvas


def main():
    src = Image.open(SRC).convert("RGBA")
    bloom = src.crop(BLOOM_CROP)
    print(f"source {src.size} -> bloom crop {bloom.size}")

    out = {
        # Next.js file-convention icons (these are what browsers actually get)
        "app/icon.png":                    fit(bloom, 512),
        "app/apple-icon.png":              fit(bloom, 180, pad=0.10, bg=NAVY),
        # Referenced by manifest.json, rss.xml, layout structured data, sw.js
        "public/faviconjuche.png":         fit(bloom, 192),
        # Referenced by juche-header.tsx (inner pages), manifest.json, sw.js
        "public/logo-icon-gang.png":       fit(bloom, 512),
        # Android adaptive: needs bleed to the edge, subject inside the 80% safe zone
        "public/icon-512-maskable.png":    fit(bloom, 512, pad=0.19, bg=NAVY),
    }
    for rel, im in out.items():
        p = ROOT / rel
        im.save(p, optimize=True)
        print(f"  {rel:34s} {im.size[0]}x{im.size[1]}  {p.stat().st_size:>7,}B")

    # Legacy fallback for crawlers that still ask for /favicon.ico.
    ico = ROOT / "public" / "favicon.ico"
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    fit(bloom, 256).save(ico, sizes=sizes)
    print(f"  {'public/favicon.ico':34s} {len(sizes)} sizes  {ico.stat().st_size:>7,}B")


if __name__ == "__main__":
    main()
