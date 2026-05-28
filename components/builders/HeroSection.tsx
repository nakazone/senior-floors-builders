'use client'

import { Award, Building2, Shield, Star } from 'lucide-react'
import { FadeUp } from './FadeUp'
import { CTA } from '@/components/ui/CTA'

const stats = [
  { value: '12+', label: 'Years serving Colorado' },
  { value: '48h', label: 'Guaranteed response time' },
  { value: '100%', label: 'Projects tracked in real-time' },
  { value: '$0', label: 'Cost to join the program' },
]

const perks = [
  'Dedicated account manager from day one',
  'Real-time project tracking dashboard',
  'Exclusive trade pricing on full catalog',
  'Priority scheduling for your projects',
  'Showroom access for client presentations',
]

const trustItems = [
  { icon: Star, label: '5-Star Rated / 31 Reviews' },
  { icon: Award, label: 'NWFA Certified' },
  { icon: Building2, label: '+2,000 Projects' },
  { icon: Shield, label: 'Licensed & Insured' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 text-white md:pt-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800" aria-hidden />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/50 via-primary/40 to-primary/50" aria-hidden />

      <div className="section-shell relative z-20 grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                Builder Partnership Program
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance drop-shadow-lg sm:text-5xl lg:text-6xl">
              The flooring partner your projects{' '}
              <span className="text-secondary">can rely on.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mb-8 max-w-xl text-lg text-white/90 sm:text-xl">
              Senior Floors works side-by-side with Colorado&apos;s top builders, architects, and
              designers - delivering premium hardwood and tile with the reliability, communication,
              and follow-through your clients expect.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <CTA href="#form" variant="secondary" className="px-8 py-4">
                Apply for Partnership
              </CTA>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-8 py-4 text-base font-semibold text-white transition-all hover:border-secondary hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/15 pt-8">
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-2">
                  {i > 0 ? <div className="mr-2 hidden h-7 w-px bg-white/15 sm:block" /> : null}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <item.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-xs font-medium text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="rounded-xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
              Partnership At a Glance
            </p>

            <div className="mb-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/5 py-4 text-center"
                >
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul>
              {perks.map((perk, i) => (
                <li
                  key={perk}
                  className={`flex items-center gap-3 py-2.5 text-sm text-white/85 ${
                    i < perks.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                    ?
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
