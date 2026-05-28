'use client'

import { useState } from 'react'
import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'
import { ARROW_RIGHT } from '@/lib/symbols'
import { CTA } from '@/components/ui/CTA'

const bullets = [
  'Dedicated account managers for every active partner',
  'Real-time project tracking from order to install',
  'Trade pricing on hardwood, engineered, LVP, and stone',
]

export function VideoSection() {
  const [loaded, setLoaded] = useState(false)
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID?.trim()

  return (
    <section id="video" className="section-padding bg-primary-700 text-white">
      <div className="section-shell max-w-5xl">
        <FadeUp>
          <SectionHeader
            dark
            label="Who we are"
            title="See why Colorado's top builders choose Senior Floors."
            subtitle="Watch a quick overview of how we work with builders, architects, and designers - and what makes our partnership program different."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-primary-900 shadow-xl"
            onClick={!loaded ? () => setLoaded(true) : undefined}
            role={!loaded ? 'button' : undefined}
            tabIndex={!loaded ? 0 : undefined}
            onKeyDown={
              !loaded
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') setLoaded(true)
                  }
                : undefined
            }
          >
            {loaded && videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                allow="autoplay; fullscreen"
                className="absolute inset-0 h-full w-full border-0"
                title="Senior Floors - Builder Partnership Overview"
              />
            ) : loaded && !videoId ? (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-900 via-primary to-primary-800 p-8 text-center">
                <p className="text-white/70">Video coming soon - add your YouTube video ID</p>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary to-primary-800" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                  <button
                    type="button"
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary transition-transform hover:scale-110 hover:bg-secondary-100"
                    aria-label="Play video"
                  >
                    <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-primary">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <p className="font-medium text-white/90">
                    Senior Floors - Builder Partnership Overview
                  </p>
                </div>
                <span className="absolute bottom-5 right-6 rounded bg-black/65 px-2.5 py-1 text-xs font-semibold text-white/80">
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
                <li key={bullet} className="flex items-center gap-2.5 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {bullet}
                </li>
              ))}
            </ul>
            <CTA href="#form" variant="secondary" className="shrink-0">
              Become a Partner {ARROW_RIGHT}
            </CTA>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
