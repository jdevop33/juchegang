"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { socialProfiles } from "@/lib/social-profiles"
import { TrustedStoryCard } from "@/components/trusted-story-card"
import TtsButton from "@/components/tts-button"
import { featuredVideos } from "@/data/featured-videos"
import { FeaturedLecture } from "@/components/featured-lecture"
import { featuredChannels } from "@/data/featured-channels"
import { FeaturedChannel } from "@/components/featured-channel"
import { personalInspiration } from "@/data/personal-inspiration"
import { PersonalInspiration } from "@/components/personal-inspiration"
import { TelegramFeed } from "@/components/telegram-feed"
import { telegramFeed, telegramChannels } from "@/data/telegram-feed"
import { trustedSources } from "@/data/trusted-sources"
import { ExternalLink, Radio, MessageCircle, PlaySquare, FileText, Send, Headphones } from "lucide-react"

export default function SocialContent({
  yt,
  trustedStories,
  trustedVideos,
  featuredChannelVideosMap
}: {
  yt: any[]
  trustedStories: any[]
  trustedVideos: any[]
  featuredChannelVideosMap: Record<string, any[]>
}) {
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(heroScroll, [0, 1], ["0%", "30%"])
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  const youtubeSources = trustedSources.filter((s) => s.kind === 'youtube')
  const linkSources = trustedSources.filter((s) => s.kind === 'link')

  return (
    <div className="min-h-[100dvh] bg-river-depths selection:bg-sovereign-gold/30 selection:text-sovereign-gold">
      
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden mb-20">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/gallery/paektu-hero-1.webp"
            alt="Juche Social Media Operations"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-river-depths/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-river-depths via-river-depths/40 to-transparent" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 h-full flex items-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-korean-red/30 bg-korean-red/10 backdrop-blur-md mb-6">
              <Radio className="w-4 h-4 text-korean-red" />
              <span className="text-xs font-mono tracking-widest text-korean-red uppercase">
                Broadcasting
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight tracking-tight text-cream">
              Social Media & Comms
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/70 font-light max-w-2xl leading-relaxed">
              Updates, media, structural analysis, and the trusted sources that guide our understanding.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24 relative z-10 -mt-10">
        
        {/* Core Profiles Bento Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-cream">Official Channels</h2>
            <div className="h-px bg-cream/10 flex-grow" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialProfiles.map((p, i) => (
              <motion.a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative p-px rounded-xl bg-gradient-to-b from-cream/10 to-transparent overflow-hidden block"
              >
                <div className="relative bg-[#0a1521] border border-cream/5 rounded-[11px] p-6 h-full flex flex-col items-center justify-center text-center hover:bg-[#0e1c2c] transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-sovereign-gold/10 group-hover:border-sovereign-gold/20">
                    <span className="text-lg font-bold text-cream group-hover:text-sovereign-gold uppercase tracking-wider">{p.platform[0]}</span>
                  </div>
                  <div className="text-cream font-bold text-lg mb-1">{p.displayName ?? `@${p.handle}`}</div>
                  <div className="text-xs font-mono tracking-widest text-cream/40 uppercase">{p.platform}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
          
          <div className="lg:col-span-8 space-y-24">
            
            {/* Foundational Inspiration */}
            {personalInspiration && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-3 py-1 bg-sovereign-gold/10 border border-sovereign-gold/20 text-sovereign-gold text-[10px] font-bold uppercase tracking-widest rounded">Foundational</div>
                  <div className="h-px bg-cream/10 flex-grow" />
                </div>
                <PersonalInspiration
                  title={personalInspiration.title}
                  description={personalInspiration.description}
                  youtubeEmbedUrl={personalInspiration.youtubeEmbedUrl}
                  sources={personalInspiration.sources}
                />
              </motion.section>
            )}

            {/* Featured Lecture */}
            {featuredVideos.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-3 py-1 bg-korean-red/10 border border-korean-red/20 text-korean-red text-[10px] font-bold uppercase tracking-widest rounded">Featured Briefing</div>
                  <div className="h-px bg-cream/10 flex-grow" />
                </div>
                <FeaturedLecture
                  title={featuredVideos[0].title}
                  speaker={featuredVideos[0].speaker}
                  series={featuredVideos[0].series}
                  date={featuredVideos[0].date}
                  views={featuredVideos[0].views}
                  description={featuredVideos[0].description}
                  hashtags={featuredVideos[0].hashtags}
                  youtubeEmbedUrl={featuredVideos[0].youtubeEmbedUrl}
                  attributionHtml={featuredVideos[0].attributionHtml}
                  chapters={featuredVideos[0].chapters}
                />
              </motion.section>
            )}

            {/* Featured Channels */}
            {featuredChannels.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-3 py-1 bg-river-mid/10 border border-river-mid/20 text-river-mid text-[10px] font-bold uppercase tracking-widest rounded">Allied Channels</div>
                  <div className="h-px bg-cream/10 flex-grow" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredChannels.map((fc) => (
                    <FeaturedChannel
                      key={fc.id}
                      title={fc.title}
                      username={fc.username}
                      channelUrl={`https://youtube.com/${fc.username}`}
                      description={fc.description}
                      location={fc.location}
                      joined={fc.joined}
                      subscribers={fc.subscribers}
                      videosCount={fc.videosCount}
                      totalViews={fc.totalViews}
                      links={fc.links}
                      videos={featuredChannelVideosMap[fc.id] || []}
                    />
                  ))}
                </div>
              </motion.section>
            )}

          </div>

          <div className="lg:col-span-4 space-y-12">
            {/* Telegram Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-5 h-5 text-river-mid" />
                <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] text-cream">Live Dispatch</h2>
              </div>
              <div className="p-px rounded-2xl bg-gradient-to-b from-river-mid/30 to-transparent">
                <div className="bg-[#0a1521] border border-river-mid/10 rounded-[15px] overflow-hidden">
                  <TelegramFeed
                    posts={telegramFeed}
                    channels={telegramChannels}
                    autoPlay={true}
                    autoPlayInterval={10000}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trusted Sources */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-cream mb-4">Trusted Intelligence</h2>
              <p className="text-cream/60">Monitored feeds, vetted analysis, and objective reporting from across the multipolar world.</p>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {youtubeSources.map((src) => (
                <a key={src.id} href={src.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-[#0a1521] border border-cream/10 text-cream/70 hover:bg-[#122338] hover:text-cream text-xs font-bold tracking-widest uppercase transition-all">
                  {src.sourceName || src.url}
                </a>
              ))}
              {linkSources.map((src) => (
                <a key={src.id} href={src.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20 text-sovereign-gold hover:bg-sovereign-gold/20 text-xs font-bold tracking-widest uppercase transition-all">
                  {src.sourceName || src.url}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Stories */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-5 h-5 text-cream/50" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-cream">Written Analysis</h3>
              </div>
              {trustedStories.length > 0 ? (
                <div className="space-y-6">
                  {trustedStories.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="p-px rounded-xl bg-gradient-to-b from-cream/10 to-transparent block"
                    >
                      <div className="bg-[#0a1521] border border-cream/5 rounded-[11px] p-6">
                        <TrustedStoryCard
                          title={item.title}
                          author={item.author}
                          sourceName={item.sourceName}
                          url={item.url}
                          publishedAt={item.publishedAt}
                          summary={item.summary}
                        />
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-cream/5">
                          <TtsButton text={(item.title ? item.title + ". " : "") + (item.summary || "")} />
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase text-cream/40 hover:text-cream transition-colors">
                            Original source
                          </a>
                        </div>
                        {item.youtubeUrl && (
                          <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-cream/10 bg-black/50">
                            <iframe
                              src={item.youtubeUrl.replace("watch?v=", "embed/")}
                              title={item.title || "Video"}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-cream/40 text-sm">No trusted stories available right now.</p>
              )}
            </div>

            {/* Videos */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <PlaySquare className="w-5 h-5 text-cream/50" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-cream">Video Briefs</h3>
              </div>
              {trustedVideos.length > 0 ? (
                <div className="space-y-6">
                  {trustedVideos.map((v, i) => (
                    <motion.div
                      key={v.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="p-px rounded-xl bg-gradient-to-b from-cream/10 to-transparent"
                    >
                      <div className="bg-[#0a1521] border border-cream/5 rounded-[11px] p-4">
                        <div className="aspect-video w-full overflow-hidden rounded-lg border border-cream/10 bg-black/50 mb-4">
                          <iframe
                            src={v.url.replace("watch?v=", "embed/")}
                            title={v.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                        <div className="px-2 pb-2">
                          <div className="text-cream/40 text-[10px] font-mono tracking-widest uppercase mb-2">
                            {v.sourceName ? `${v.sourceName} • ` : ""}{new Date(v.publishedAt).toLocaleString()}
                          </div>
                          <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-cream font-bold leading-snug hover:text-sovereign-gold transition-colors block">
                            {v.title}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-cream/40 text-sm">No trusted videos available right now.</p>
              )}
            </div>
          </div>
        </section>

        {/* Audio / Diss Track */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="p-px rounded-3xl bg-gradient-to-b from-korean-red/30 to-transparent">
            <div className="bg-[#050a10] border border-cream/5 rounded-[23px] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/3 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-korean-red/10 border border-korean-red/20 mb-6">
                    <Headphones className="w-8 h-8 text-korean-red" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-cream mb-4">Audio Broadcast</h2>
                  <p className="text-cream/60 leading-relaxed mb-6">
                    The cultural arm of the information war. Soundscapes, diss tracks, and audio propaganda.
                  </p>
                  <p className="text-xs text-cream/40 uppercase tracking-widest font-mono">
                    <a href="https://soundcloud.com/kimjongunnuking" target="_blank" rel="noopener noreferrer" className="hover:text-cream">KimJongUn</a>
                    {" "}·{" "}
                    <a href="https://soundcloud.com/kimjongunnuking/donald-trump-diss-panda-remix" target="_blank" rel="noopener noreferrer" className="hover:text-cream">Donald Trump Diss Track</a>
                  </p>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="rounded-xl overflow-hidden border border-korean-red/20 bg-black/50 shadow-2xl shadow-korean-red/5">
                    <iframe
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407296785&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                      title="SoundCloud Player — Donald Trump Diss Track"
                      className="w-full h-[300px] md:h-[400px]"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <section className="text-center">
          <div className="inline-flex flex-col items-center p-8 bg-[#0a1521] border border-cream/10 rounded-2xl">
            <MessageCircle className="w-8 h-8 text-cream/40 mb-4" />
            <h2 className="text-xl font-bold text-cream mb-2 font-[family-name:var(--font-heading)]">Direct Inquiries</h2>
            <p className="text-cream/50 text-sm mb-6 max-w-sm">
              For collaborations, intelligence sharing, and structural analysis.
            </p>
            <a
              href="mailto:panda@juche.org"
              className="inline-flex items-center px-6 py-3 bg-sovereign-gold/10 border border-sovereign-gold/30 text-sovereign-gold font-bold tracking-widest text-sm uppercase rounded-lg hover:bg-sovereign-gold hover:text-[#050a10] transition-colors"
            >
              panda@juche.org
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
