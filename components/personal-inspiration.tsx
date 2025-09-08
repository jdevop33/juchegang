type Props = {
  title: string
  description?: string
  youtubeEmbedUrl: string
  sources: { label: string; url: string }[]
}

export function PersonalInspiration({ title, description, youtubeEmbedUrl, sources }: Props) {
  return (
    <section aria-labelledby="inspiration-title" className="mb-16">
      <div className="bg-gradient-to-b from-red-900/40 to-black/40 border border-red-700/40 rounded-2xl overflow-hidden">
        <div className="p-6 pb-0">
          <h2 id="inspiration-title" className="text-2xl md:text-3xl font-bold text-yellow-300">
            {title}
          </h2>
          {description ? (
            <p className="text-white/85 mt-2 max-w-3xl">
              {description}
            </p>
          ) : null}
        </div>
        <div className="aspect-video w-full bg-black/40 mt-4">
          <iframe
            src={youtubeEmbedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        {sources?.length ? (
          <div className="p-6">
            <h3 className="text-white/80 font-semibold mb-2">Sources</h3>
            <ul className="flex flex-wrap gap-3">
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}


