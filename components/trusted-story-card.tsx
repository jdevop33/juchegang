import Link from "next/link"

type Props = {
  title?: string
  author?: string
  sourceName?: string
  url: string
  publishedAt?: string
  summary?: string
}

export function TrustedStoryCard({ title, author, sourceName, url, publishedAt, summary }: Props) {
  return (
    <article className="bg-black/30 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
      {title && (
        <h3 className="text-white text-xl font-semibold">
          <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
            {title}
          </Link>
        </h3>
      )}
      <div className="text-white/60 text-sm">
        <span>{sourceName || "Trusted Source"}</span>
        {author ? <span> • {author}</span> : null}
        {publishedAt ? <span> • {new Date(publishedAt).toLocaleDateString()}</span> : null}
      </div>
      {summary ? <p className="text-white/80 text-sm leading-relaxed">{summary}</p> : null}
      <div className="mt-2">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
        >
          Read / Watch
        </Link>
      </div>
    </article>
  )
}


