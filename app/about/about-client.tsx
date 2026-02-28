"use client"

import { JucheHeader } from "@/components/juche-header"
import { JucheFooter } from "@/components/juche-footer"
import { Waves, Compass, Users, Globe, ArrowRight, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// v2.0 River Palette — scoped to this page only
const river = {
  depths: "#0D1B2A",
  current: "#1B4965",
  deepWater: "#142638",
  red: "#C73032",
  gold: "#D4A74A",
  mist: "#E8DFD0",
}

export function AboutClient() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: river.depths }}>
      <JucheHeader />

      {/* Hero — River Flow gradient */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${river.depths}, ${river.current}, #2A6F8E)`,
        }}
      >
        {/* Subtle water ripple overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at 20% 50%, ${river.current}44 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, ${river.gold}22 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Korean characters — large, proud */}
            <h1
              className="text-7xl md:text-9xl font-bold mb-4 tracking-tight"
              style={{
                color: river.mist,
                fontFamily: "'Noto Serif KR', 'Georgia', serif",
              }}
            >
              주체강
            </h1>
            <p
              className="text-2xl md:text-3xl font-light mb-2 tracking-wide uppercase"
              style={{ color: river.gold }}
            >
              JucheGang
            </p>
            <div
              className="w-24 h-0.5 mx-auto my-6"
              style={{ backgroundColor: river.gold }}
            />
            <p
              className="text-xl md:text-2xl font-light italic"
              style={{
                color: river.mist,
                fontFamily: "'Georgia', serif",
                opacity: 0.9,
              }}
            >
              Navigate the Current
            </p>
            <p
              className="text-base mt-3"
              style={{
                color: river.gold,
                fontFamily: "'Georgia', serif",
                opacity: 0.8,
              }}
            >
              주체의 흐름을 따라
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: `linear-gradient(to bottom, transparent, ${river.depths})`,
          }}
        />
      </section>

      {/* The Origin Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Waves className="w-6 h-6" style={{ color: river.gold }} />
              <h2
                className="text-sm uppercase tracking-[0.2em] font-semibold"
                style={{ color: river.gold }}
              >
                The Origin Story
              </h2>
            </div>

            <p
              className="text-xl md:text-2xl leading-relaxed mb-8"
              style={{
                color: river.mist,
                fontFamily: "'Georgia', serif",
              }}
            >
              JucheGang was born as a movement — a crew of independent thinkers
              building bridges across cultures, challenging Western narratives
              through factual analysis and radical transparency.
            </p>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                color: river.mist,
                opacity: 0.8,
              }}
            >
              When Google Translate rendered &ldquo;JucheGang&rdquo; into Korean
              as{" "}
              <span
                style={{
                  color: river.gold,
                  fontFamily: "'Noto Serif KR', serif",
                }}
              >
                주체강
              </span>{" "}
              — &ldquo;Subjective River&rdquo; — it didn&rsquo;t break the brand.
              It revealed its soul.
            </p>

            {/* Dual-Language Identity Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div
                className="rounded-xl p-8 border"
                style={{
                  backgroundColor: river.deepWater,
                  borderColor: `${river.current}55`,
                }}
              >
                <p
                  className="text-sm uppercase tracking-[0.15em] mb-3 font-semibold"
                  style={{ color: river.gold }}
                >
                  In English
                </p>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: river.mist }}
                >
                  JucheGang
                </h3>
                <p style={{ color: river.mist, opacity: 0.75 }}>
                  The crew — the movement, the people navigating together.
                  The English name carries the boldness.
                </p>
              </div>

              <div
                className="rounded-xl p-8 border"
                style={{
                  backgroundColor: river.deepWater,
                  borderColor: `${river.red}44`,
                }}
              >
                <p
                  className="text-sm uppercase tracking-[0.15em] mb-3 font-semibold"
                  style={{ color: river.red }}
                >
                  In Korean
                </p>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    color: river.mist,
                    fontFamily: "'Noto Serif KR', serif",
                  }}
                >
                  주체강 — Subjective River
                </h3>
                <p style={{ color: river.mist, opacity: 0.75 }}>
                  The philosophy underneath — life as a personal current you align
                  with rather than fight. The Korean meaning carries the wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${river.depths}, ${river.deepWater}88, ${river.depths})`,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <User className="w-6 h-6" style={{ color: river.gold }} />
              <h2
                className="text-sm uppercase tracking-[0.2em] font-semibold"
                style={{ color: river.gold }}
              >
                The Founder
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div
                  className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border-2"
                  style={{ borderColor: `${river.gold}44` }}
                >
                  <Image
                    src="/images/jj.png"
                    alt="JPanda James — Founder"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: river.mist }}
                >
                  JPanda James
                </h3>
                <p
                  className="text-sm uppercase tracking-wide mb-4 font-medium"
                  style={{ color: river.gold }}
                >
                  iPurpose Consulting &middot; Victoria, BC
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: river.mist, opacity: 0.8 }}
                >
                  Independent thinker, bridge-builder, and the current behind
                  JucheGang. Building platforms that challenge narratives through
                  factual analysis and radical transparency. Based on the west
                  coast of Canada, navigating the current one day at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy — Full Width Statement */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${river.depths}, ${river.deepWater}, ${river.depths})`,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Compass className="w-6 h-6" style={{ color: river.gold }} />
              <h2
                className="text-sm uppercase tracking-[0.2em] font-semibold"
                style={{ color: river.gold }}
              >
                The Philosophy
              </h2>
            </div>

            <blockquote
              className="text-xl md:text-2xl leading-relaxed"
              style={{
                color: river.mist,
                fontFamily: "'Georgia', serif",
                borderLeft: `3px solid ${river.gold}`,
                paddingLeft: "1.5rem",
              }}
            >
              Life is a subjective river — a personal current you cannot fight.
              You can struggle against it and fail, or turn around, read the flow,
              and let the current carry you forward.
            </blockquote>

            <p
              className="text-lg leading-relaxed mt-8"
              style={{ color: river.mist, opacity: 0.8 }}
            >
              Self-reliance isn&rsquo;t brute force against reality. It&rsquo;s
              understanding your own agency within forces bigger than you. The
              river is different for everyone. Your current isn&rsquo;t my current.
              That&rsquo;s radical subjectivity. That&rsquo;s{" "}
              <span
                style={{
                  color: river.gold,
                  fontFamily: "'Noto Serif KR', serif",
                }}
              >
                주체
              </span>{" "}
              at its philosophical core.
            </p>
          </div>
        </div>
      </section>

      {/* The "Gang" Reframe */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6" style={{ color: river.gold }} />
              <h2
                className="text-sm uppercase tracking-[0.2em] font-semibold"
                style={{ color: river.gold }}
              >
                The &ldquo;Gang&rdquo; Reframe
              </h2>
            </div>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: river.mist, opacity: 0.85 }}
            >
              &ldquo;Gang&rdquo; in English carries baggage. But in Korean, our
              name translates to{" "}
              <span
                style={{
                  color: river.gold,
                  fontFamily: "'Noto Serif KR', serif",
                }}
              >
                주체강
              </span>{" "}
              — &ldquo;Subjective River.&rdquo; It&rsquo;s not about crews on
              corners. It&rsquo;s about navigating life&rsquo;s current together.
            </p>

            <div
              className="rounded-xl p-8 mt-8"
              style={{
                background: `linear-gradient(135deg, ${river.deepWater}, ${river.current}33)`,
                border: `1px solid ${river.gold}33`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p
                    className="text-sm uppercase tracking-wide mb-2 font-semibold"
                    style={{ color: river.gold }}
                  >
                    The English name carries
                  </p>
                  <p
                    className="text-3xl font-bold"
                    style={{ color: river.mist }}
                  >
                    The Boldness
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm uppercase tracking-wide mb-2 font-semibold"
                    style={{ color: river.red }}
                  >
                    The Korean meaning carries
                  </p>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      color: river.mist,
                      fontFamily: "'Noto Serif KR', serif",
                    }}
                  >
                    The Wisdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(180deg, ${river.depths}, ${river.deepWater})`,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-6 h-6" style={{ color: river.gold }} />
              <h2
                className="text-sm uppercase tracking-[0.2em] font-semibold"
                style={{ color: river.gold }}
              >
                Voice & Personality
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  trait: "Philosophical",
                  desc: "The river, the Dao, Eastern wisdom. The deep current underneath.",
                },
                {
                  trait: "Bold",
                  desc: "Unapologetic, radical transparency. Says what others won't.",
                },
                {
                  trait: "Professional",
                  desc: "Credible, data-driven, serious when the moment demands it.",
                },
                {
                  trait: "Bridge-Builder",
                  desc: "Connects cultures, challenges narratives, questions status quo.",
                },
              ].map((item) => (
                <div
                  key={item.trait}
                  className="rounded-lg p-6 border"
                  style={{
                    backgroundColor: `${river.deepWater}cc`,
                    borderColor: `${river.current}44`,
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: river.gold }}
                  >
                    {item.trait}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: river.mist, opacity: 0.75 }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Taglines */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: river.mist,
                fontFamily: "'Georgia', serif",
              }}
            >
              Your River. Your Path.
            </p>
            <p
              className="text-2xl mb-8"
              style={{
                color: river.gold,
                fontFamily: "'Noto Serif KR', serif",
              }}
            >
              주체의 흐름을 따라
            </p>
            <p className="text-sm" style={{ color: river.mist, opacity: 0.5 }}>
              Follow the Flow of Juche
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/briefings"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: river.red,
                  color: river.mist,
                }}
              >
                Read Our Briefings
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 border"
                style={{
                  borderColor: river.gold,
                  color: river.gold,
                }}
              >
                Our Mission
              </Link>
            </div>

            {/* Attribution */}
            <div className="mt-16 pt-8" style={{ borderTop: `1px solid ${river.current}33` }}>
              <p className="text-xs" style={{ color: river.mist, opacity: 0.4 }}>
                iPurpose Consulting &middot; Victoria, BC, Canada
              </p>
              <p className="text-xs mt-1" style={{ color: river.mist, opacity: 0.3 }}>
                JucheGang.ca &middot; Juche.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <JucheFooter />
    </main>
  )
}
