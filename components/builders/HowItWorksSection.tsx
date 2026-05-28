import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'

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
    <section id="how" className="section-padding bg-gradient-to-br from-primary to-primary-600 text-white">
      <div className="section-shell">
        <FadeUp>
          <SectionHeader
            dark
            label="Simple process"
            title="From application to active partner in 4 clear steps."
            subtitle="No long onboarding cycles. No hidden fees. Just a straightforward path to becoming a Senior Floors partner."
          />
        </FadeUp>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-secondary/30 lg:block" />

          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={0.1 * i}>
              <div className="relative px-6 text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-primary">
                  {step.num}
                </div>
                <h3 className="mb-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
