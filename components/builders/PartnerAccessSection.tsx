'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Lock, LogIn, TableProperties } from 'lucide-react'
import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'
import { CTA } from '@/components/ui/CTA'
import { PORTAL_URL } from '@/lib/siteConfig'

import { CHECK, EN_DASH, ARROW_RIGHT } from '@/lib/symbols'

const pricingRows = [
  { service: 'Hardwood Sanding & Refinishing', coverage: 'per sq ft', rate: `$3.50 ${EN_DASH} $5.00` },
  { service: 'Hardwood Installation', coverage: 'per sq ft', rate: `$4.00 ${EN_DASH} $6.50` },
  { service: 'Engineered Wood Install', coverage: 'per sq ft', rate: `$3.75 ${EN_DASH} $5.50` },
  { service: 'LVP / Luxury Vinyl Plank', coverage: 'per sq ft', rate: `$2.80 ${EN_DASH} $4.00` },
  { service: 'Tile & Stone Installation', coverage: 'per sq ft', rate: `$5.00 ${EN_DASH} $9.00` },
  { service: 'Stairs & Custom Patterns', coverage: 'per unit / area', locked: true },
  { service: 'Material Sourcing (trade)', coverage: 'full catalog', locked: true },
]

function LoginCard() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      window.location.href = PORTAL_URL
    }, 1200)
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-primary p-8 shadow-xl lg:p-10">
      <div className="absolute left-0 right-0 top-0 h-1 bg-secondary" />
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/15">
        <LogIn className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-white">Partner Login</h3>
      <p className="mb-8 text-sm leading-relaxed text-white/75">
        Access your private dashboard to track projects, browse trade pricing, and connect with
        your dedicated account manager.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-secondary focus:bg-white/15"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter password"
            className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-secondary focus:bg-white/15"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="cta-button-secondary mt-1 w-full py-3.5 disabled:opacity-80"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Access My Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-3 flex justify-between">
        <a href={PORTAL_URL} className="text-xs text-white/50 transition-colors hover:text-secondary">
          Forgot password?
        </a>
        <a href="mailto:contact@senior-floors.com" className="text-xs text-white/50 transition-colors hover:text-secondary">
          Need help?
        </a>
      </div>

      <div className="mt-5 border-t border-white/10 pt-5 text-center">
        <p className="text-sm text-white/50">
          Not a partner yet?{' '}
          <a href="#form" className="font-semibold text-secondary hover:underline">
            Apply for access {ARROW_RIGHT}
          </a>
        </p>
      </div>
    </div>
  )
}

function PricingCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-md lg:p-10">
      <div className="absolute left-0 right-0 top-0 h-1 bg-secondary" />
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-50">
        <TableProperties className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-primary">Partner Pricing Overview</h3>
      <p className="mb-8 text-sm leading-relaxed text-gray-600">
        Sample trade rates for active partners. Full rate card with material specs and volume
        discounts available after approval.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="pb-3 text-left text-xs font-bold uppercase tracking-wide text-primary">
                Service
              </th>
              <th className="pb-3 text-left text-xs font-bold uppercase tracking-wide text-primary">
                Coverage
              </th>
              <th className="pb-3 text-right text-xs font-bold uppercase tracking-wide text-primary">
                Partner Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingRows.map((row) => (
              <tr key={row.service} className="border-b border-gray-200">
                <td className="py-3.5 text-sm font-medium text-primary">{row.service}</td>
                <td className="py-3.5 text-sm text-gray-600">{row.coverage}</td>
                <td className="py-3.5 text-right">
                  {row.locked ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-secondary">
                      <Lock className="h-3 w-3" />
                      Partner Only
                    </span>
                  ) : (
                    <span className="inline-block rounded-full border border-secondary bg-secondary-50 px-3 py-1 text-sm font-bold text-primary">
                      {row.rate}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-lg border-l-4 border-secondary bg-secondary-50 p-4 text-sm leading-relaxed text-primary">
        Partner pricing is 15-25% below standard retail. Apply to unlock the full rate card
        with material specs, volume discounts, and project minimums.
      </div>

      <CTA href="#form" variant="primary" className="mt-5 w-full">
        Unlock Full Pricing Table
      </CTA>
    </div>
  )
}

export function PartnerAccessSection() {
  return (
    <section id="access" className="section-padding bg-bg-light">
      <div className="section-shell">
        <FadeUp>
          <SectionHeader
            label="Partner area"
            title="Your exclusive access. All in one place."
            subtitle="Log in to your partner dashboard or preview sample trade pricing below."
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <FadeUp delay={0.1}>
            <LoginCard />
          </FadeUp>
          <FadeUp delay={0.2}>
            <PricingCard />
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
