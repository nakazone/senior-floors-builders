'use client'

import { useState } from 'react'
import { FadeUp } from './FadeUp'

const bullets = [
  'Dedicated account managers for every active partner',
  'Real-time project tracking from order to install',
  'Trade pricing on hardwood, engineered, LVP, and stone',
]

export function VideoSection() {
  const [loaded, setLoaded] = useState(false)
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID?.trim()

  const loadVideo = () => setLoaded(true)

  return (
    <section id="video" className="bg-[#141928] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <FadeUp>
          <div className="mb-[52px] text-center">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6B598]">
              Who we are
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-white">
              See why Colorado&apos;s top builders choose Senior Floors.
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-[1.75] text-white/55">
              Watch a quick overview of how we work with builders, architects, and designers — and
              what makes our partnership program different.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="relative aspect-video cursor-pointer overflow-hidden rounded-[16px] border border-[#D6B598]/20 bg-[#0B0E18]"
            onClick={!loaded ? loadVideo : undefined}
            role={!loaded ? 'button' : undefined}
            tabIndex={!loaded ? 0 : undefined}
            onKeyDown={
              !loaded
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') loadVideo()
                  }
                : undefined
            }
          >
            {loaded && videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                allow="autoplay; fullscreen"
                className="absolute inset-0 h-full w-full border-0"
                title="Senior Floors — Builder Partnership Overview"
              />
            ) : loaded && !videoId ? (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0D1220] via-[#1A2036] to-[#0F1525] p-8 text-center">
                <p className="text-[15px] text-white/70">
                  Video coming soon — add your YouTube video ID
                </p>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D1220] via-[#1A2036] to-[#0F1525]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <button
                    type="button"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D6B598] transition-transform hover:scale-110 hover:bg-[#E8D0BA]"
                    aria-label="Play video"
                  >
                    <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-[#1A2036]">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <p className="text-[15px] font-medium text-white/85">
                    Senior Floors — Builder Partnership Overview
                  </p>
                </div>
                <span className="absolute bottom-5 right-6 rounded bg-black/65 px-2.5 py-1 text-[12px] font-semibold text-white/80">
                  3:24
                </span>
              </>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <ul className="space-y-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2.5 text-[14px] text-white/65">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6B598]" />
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              href="#form"
              className="shrink-0 rounded-[6px] bg-[#D6B598] px-8 py-[15px] text-sm font-bold text-[#1A2036] transition-colors hover:bg-[#E8D0BA]"
            >
              Become a Partner ?
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
