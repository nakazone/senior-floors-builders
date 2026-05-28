import { CTA } from '@/components/ui/CTA'
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteConfig'

export function CTAStrip() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-600 py-16 text-white lg:py-20">
      <div className="section-shell max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl">
          Questions before you apply?
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-lg text-white/90">
          Our team is happy to walk you through the program, pricing, and onboarding process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CTA href={SITE_PHONE_TEL} variant="secondary">
            Call {SITE_PHONE_DISPLAY}
          </CTA>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-all hover:border-secondary hover:bg-white/10"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  )
}
