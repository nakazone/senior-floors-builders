import { FadeUp } from './FadeUp'
import { StarRating } from './StarRating'

export function TestimonialSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <FadeUp>
        <div className="section-shell mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <StarRating size="lg" />
          </div>
          <blockquote className="mb-8 text-xl font-light italic leading-relaxed text-white sm:text-2xl">
            &ldquo;Senior Floors is the only flooring company I&apos;ve worked with that proactively
            keeps me in the loop. On a high-end build, that level of communication isn&apos;t optional
            - it&apos;s everything. They show up, they follow through, and the work speaks for
            itself.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold text-secondary">James R. Whitfield</p>
          <p className="mt-1 text-xs text-white/60">
            Principal, Whitfield Custom Homes | Boulder, CO | Google Review
          </p>
        </div>
      </FadeUp>
    </section>
  )
}
