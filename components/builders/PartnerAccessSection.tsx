'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Lock } from 'lucide-react'
import { FadeUp } from './FadeUp'

const pricingRows = [
  { service: 'Hardwood Sanding & Refinishing', coverage: 'per sq ft', rate: '$3.50 – $5.00' },
  { service: 'Hardwood Installation', coverage: 'per sq ft', rate: '$4.00 – $6.50' },
  { service: 'Engineered Wood Install', coverage: 'per sq ft', rate: '$3.75 – $5.50' },
  { service: 'LVP / Luxury Vinyl Plank', coverage: 'per sq ft', rate: '$2.80 – $4.00' },
  { service: 'Tile & Stone Installation', coverage: 'per sq ft', rate: '$5.00 – $9.00' },
  { service: 'Stairs & Custom Patterns', coverage: 'per unit / area', locked: true },
  { service: 'Material Sourcing (trade)', coverage: 'full catalog', locked: true },
]

function LoginCard() {
  const [loading, setLoading] = useState(false)
  const portalUrl =
    process.env.NEXT_PUBLIC_PORTAL_URL ??
    'https://senior-floors-system-production.up.railway.app'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      window.location.href = portalUrl
    }, 1200)
  }

  return (
    <div className="relative overflow-hidden rounded-[16px] bg-[#1A2036] p-8 lg:p-12">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#D6B598]" />
      <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#D6B598]/12 text-2xl">
        ??
      </div>
      <h3 className="mb-2 font-poppins text-[22px] font-bold text-white">
        Partner Login
      </h3>
      <p className="mb-8 text-[14px] leading-[1.7] text-white/55">
        Access your private dashboard to track projects, browse trade pricing, and connect with
        your dedicated account manager.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-white/50">
            EMAIL
          </label>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-[8px] border border-white/12 bg-white/6 px-4 py-3.5 text-[14px] text-white outline-none transition-colors focus:border-[#D6B598] focus:bg-white/9"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-white/50">
            PASSWORD
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="w-full rounded-[8px] border border-white/12 bg-white/6 px-4 py-3.5 text-[14px] text-white outline-none transition-colors focus:border-[#D6B598] focus:bg-white/9"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 flex items-center justify-center gap-2 rounded-[8px] bg-[#D6B598] py-3.5 text-[14px] font-bold text-[#1A2036] transition-colors hover:bg-[#E8D0BA] disabled:opacity-80"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Access My Dashboard
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-3 flex justify-between">
        <a href={portalUrl} className="text-[12px] text-white/40 transition-colors hover:text-[#D6B598]">
          Forgot password?
        </a>
        <a href="mailto:info@senior-floors.com" className="text-[12px] text-white/40 transition-colors hover:text-[#D6B598]">
          Need help?
        </a>
      </div>

      <div className="mt-5 border-t border-white/8 pt-5 text-center">
        <p className="text-[13px] text-white/40">
          Not a partner yet?{' '}
          <a href="#form" className="font-semibold text-[#D6B598] no-underline hover:underline">
            Apply for access ?
          </a>
        </p>
      </div>
    </div>
  )
}

function PricingCard() {
  return (
    <div className="relative overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white p-8 shadow-sm lg:p-12">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#D6B598]" />
      <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#F5EDE4] text-2xl">
        ??
      </div>
      <h3 className="mb-2 font-poppins text-[22px] font-bold text-[#1A2036]">
        Partner Pricing Overview
      </h3>
      <p className="mb-8 text-[14px] leading-[1.7] text-[#6B7280]">
        Sample trade rates for active partners. Full rate card with material specs and volume
        discounts available after approval.
      </p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-[#1A2036]">
            <th className="pb-3 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-[#1A2036]">
              Service
            </th>
            <th className="pb-3 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-[#1A2036]">
              Coverage
            </th>
            <th className="pb-3 text-right text-[11px] font-bold uppercase tracking-[0.1em] text-[#1A2036]">
              Partner Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingRows.map((row) => (
            <tr key={row.service} className="border-b border-[#E2E8F0]">
              <td className="py-3.5 text-[14px] font-medium text-[#1A2036]">{row.service}</td>
              <td className="py-3.5 text-[14px] text-[#6B7280]">{row.coverage}</td>
              <td className="py-3.5 text-right">
                {row.locked ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1A2036] px-2.5 py-1 text-[11px] font-bold text-[#D6B598]">
                    <Lock className="h-3 w-3" />
                    Partner Only
                  </span>
                ) : (
                  <span className="inline-block rounded-full border border-[#D6B598] bg-[#F5EDE4] px-3 py-1 text-[13px] font-bold text-[#1A2036]">
                    {row.rate}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 rounded-[10px] border-l-[3px] border-[#D6B598] bg-[#F5EDE4] p-4 text-[13px] leading-[1.6] text-[#1A2036]">
        ?? Partner pricing is 15–25% below standard retail. Apply to unlock the full rate card
        with material specs, volume discounts, and project minimums.
      </div>

      <a
        href="#form"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#1A2036] py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-[#222C47]"
      >
        Unlock Full Pricing Table
      </a>
    </div>
  )
}

export function PartnerAccessSection() {
  return (
    <section id="access" className="bg-[#F7F8FC] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="mb-[60px] text-center">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C1A08C]">
              Partner area
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-[#1A2036]">
              Your exclusive access. All in one place.
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-[1.75] text-[#6B7280]">
              Log in to your partner dashboard or preview sample trade pricing below.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-2">
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
