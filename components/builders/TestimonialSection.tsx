import { FadeUp } from './FadeUp'

export function TestimonialSection() {
  return (
    <section className="bg-[#1A2036] px-6 py-24 lg:px-12">
      <FadeUp>
        <div className="mx-auto max-w-[780px] text-center">
          <p className="mb-6 text-[20px] tracking-[3px] text-[#D6B598]">?????</p>
          <blockquote className="mb-9 font-poppins text-[clamp(19px,2.4vw,27px)] font-light italic leading-[1.55] text-white">
            &ldquo;Senior Floors is the only flooring company I&apos;ve worked with that proactively
            keeps me in the loop. On a high-end build, that level of communication isn&apos;t optional
            — it&apos;s everything. They show up, they follow through, and the work speaks for
            itself.&rdquo;
          </blockquote>
          <p className="text-[14px] font-semibold text-[#D6B598]">James R. Whitfield</p>
          <p className="mt-1 text-[12px] text-white/45">
            Principal, Whitfield Custom Homes · Boulder, CO · Google Review
          </p>
        </div>
      </FadeUp>
    </section>
  )
}
