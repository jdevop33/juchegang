import Image from "next/image"
import clsx from "clsx"

type Props = {
  src: string
  alt: string
  className?: string
  aspect?: "4/3" | "16/9" | "12/5"
  contain?: boolean
  priority?: boolean
  overlay?: "none" | "top" | "bottom" | "left" | "right"
  unoptimized?: boolean
}

export function BriefingBanner({
  src,
  alt,
  className,
  aspect = "12/5",
  contain = false,
  priority = false,
  overlay = "bottom",
  unoptimized = false,
}: Props) {
  const aspectClass = clsx({
    "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[12/5]": aspect === "12/5",
    "aspect-[4/3] sm:aspect-[16/9]": aspect === "16/9",
    "aspect-[4/3]": aspect === "4/3",
  })

  const overlayClass = clsx(
    "absolute inset-0 pointer-events-none",
    overlay === "none" && "",
    overlay === "bottom" && "bg-gradient-to-t from-black/60 via-black/10 to-transparent",
    overlay === "top" && "bg-gradient-to-b from-black/60 via-black/10 to-transparent",
    overlay === "left" && "bg-gradient-to-r from-black/60 via-black/10 to-transparent",
    overlay === "right" && "bg-gradient-to-l from-black/60 via-black/10 to-transparent",
  )

  return (
    <section className={clsx("not-prose -mx-4 sm:-mx-6 lg:-mx-8 mb-8 sm:mb-12", className)}>
      <div className={clsx("relative w-full overflow-hidden", aspectClass)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={clsx(contain ? "object-contain" : "object-cover")}
          sizes="100vw"
          unoptimized={unoptimized}
        />
        {overlay !== "none" && <div className={overlayClass} />}
      </div>
    </section>
  )
}
