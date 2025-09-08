import TtsButton from "./tts-button"

type Chapter = { time: string; label: string }

type Props = {
  title: string
  speaker: string
  series?: string
  date?: string
  views?: string
  description?: string
  hashtags?: string[]
  youtubeEmbedUrl: string
  attributionHtml?: string
  chapters?: Chapter[]
}

export function FeaturedLecture(props: Props) {
  const {
    title,
    speaker,
    series,
    date,
    views,
    description,
    hashtags,
    youtubeEmbedUrl,
    attributionHtml,
    chapters = [],
  } = props

  const ttsText = `${title}. ${speaker}. ${description ?? ""}`

  return (
    <section aria-labelledby="featured-lecture-title" className="mb-16">
      <div className="bg-black/30 border border-white/10 rounded-2xl overflow-hidden">
        <div className="aspect-video w-full bg-black/40">
          <iframe
            src={youtubeEmbedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="featured-lecture-title" className="text-2xl md:text-3xl font-bold text-white">
                {title}
              </h2>
              <p className="text-white/70 text-sm">
                {series ? `${series} • ` : ""}{speaker}{date ? ` • ${date}` : ""}{views ? ` • ${views} views` : ""}
              </p>
            </div>
            <TtsButton text={ttsText} />
          </div>

          {description ? <p className="text-white/85 leading-relaxed">{description}</p> : null}

          {chapters.length > 0 ? (
            <div>
              <h3 className="text-white font-semibold mb-2">Chapters</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-white/80 text-sm">
                {chapters.map((c) => (
                  <li key={`${c.time}-${c.label}`} className="flex items-center gap-2">
                    <span className="text-white/60 font-mono text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {c.time}
                    </span>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {hashtags && hashtags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {hashtags.map((h) => (
                <span key={h} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70 text-xs">
                  #{h}
                </span>
              ))}
            </div>
          ) : null}

          {attributionHtml ? (
            <p className="text-white/60 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: attributionHtml }} />
          ) : null}
        </div>
      </div>
    </section>
  )
}


