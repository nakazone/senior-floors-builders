import { FadeUp } from './FadeUp'

const steps = [
  {
    num: '1',
    title: 'Submit Application',
    body: 'Fill out the form below. Tell us about your work and what you need from a flooring partner. We review within 48 hours.',
  },
  {
    num: '2',
    title: 'Meet Your Rep',
    body: 'A dedicated Senior Floors rep will reach out to learn your workflow and walk you through our catalog and services.',
  },
  {
    num: '3',
    title: 'Access Your Portal',
    body: 'Get login credentials to your private partner dashboard. Track projects, browse the catalog, and connect with your team.',
  },
  {
    num: '4',
    title: 'Build With Confidence',
    body: 'From first selection to final install, Senior Floors is accountable, communicative, and committed to your standard.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-[#1A2036] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="mb-[60px] text-center">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D6B598]">
              Simple process
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-white">
              From application to active partner in 4 clear steps.
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-[1.75] text-white/55">
              No long onboarding cycles. No hidden fees. Just a straightforward path to becoming a
              Senior Floors partner.
            </p>
          </div>
        </FadeUp>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#D6B598]/20 lg:block" />

          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={0.1 * i}>
              <div className="relative px-6 text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D6B598] font-poppins text-[22px] font-bold text-[#1A2036]">
                  {step.num}
                </div>
                <h3 className="mb-3 font-poppins text-[15px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[1.8] text-white/50">{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
