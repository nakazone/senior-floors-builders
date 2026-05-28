'use client'

import { Phone } from 'lucide-react'
import { CTA } from '@/components/ui/CTA'
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteConfig'

export function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-gray-200 bg-white/95 px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href={SITE_PHONE_TEL}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-3 text-sm font-bold text-text-dark shadow-md transition-transform active:scale-[0.98]"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden />
        Call
      </a>
      <CTA href="#form" variant="primary" className="flex-1 px-3 py-3 text-sm">
        Apply Now
      </CTA>
    </div>
  )
}
