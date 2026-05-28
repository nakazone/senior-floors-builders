import { Building2, Monitor, Palette, Ruler } from 'lucide-react'
import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'

const cards = [
  {
    icon: Building2,
    title: 'General Contractors',
    body: 'Single point of contact for all flooring on every project. We integrate into your build process, not around it.',
  },
  {
    icon: Ruler,
    title: 'Architects',
    body: 'Spec with confidence. Our material library covers wide-plank hardwood to custom stone for the most demanding visions.',
  },
  {
    icon: Palette,
    title: 'Interior Designers',
    body: 'Exclusive showroom access, curated collections, and a team that understands your design intent - not just the floor plan.',
  },
  {
    icon: Monitor,
    title: 'Developers',
    body: 'Volume pricing, consistent quality across multiple units, and a delivery system built for scale. From 2 units to 200.',
  },
]

export function WhoWeServeSection() {
  return (
    <section id="who" className="section-padding border-t border-gray-100 bg-white">
      <div className="section-shell">
        <FadeUp>
          <SectionHeader
            label="Who we serve"
            title="Partners across the build ecosystem."
            subtitle="Whether you're managing a full build, specifying materials, or designing interiors - Senior Floors adapts to your workflow."
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={0.1 * i}>
              <div className="rounded-lg bg-primary p-8 text-center shadow-md transition-transform hover:-translate-y-1">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-secondary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
