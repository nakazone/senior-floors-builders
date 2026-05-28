import { FadeUp } from './FadeUp'

const cards = [
  {
    icon: '???',
    title: 'General Contractors',
    body: 'Single point of contact for all flooring on every project. We integrate into your build process, not around it.',
  },
  {
    icon: '??',
    title: 'Architects',
    body: 'Spec with confidence. Our material library covers wide-plank hardwood to custom stone for the most demanding visions.',
  },
  {
    icon: '??',
    title: 'Interior Designers',
    body: 'Exclusive showroom access, curated collections, and a team that understands your design intent — not just the floor plan.',
  },
  {
    icon: '??',
    title: 'Developers',
    body: 'Volume pricing, consistent quality across multiple units, and a delivery system built for scale. From 2 units to 200.',
  },
]

export function WhoWeServeSection() {
  return (
    <section id="who" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="mb-[60px] text-center">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C1A08C]">
              Who we serve
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-[#1A2036]">
              Partners across the build ecosystem.
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-[1.75] text-[#6B7280]">
              Whether you&apos;re managing a full build, specifying materials, or designing interiors
              — Senior Floors adapts to your workflow.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={0.1 * i}>
              <div className="rounded-[12px] bg-[#1A2036] p-9 text-center transition-transform hover:-translate-y-1">
                <span className="mb-4 block text-[36px]">{card.icon}</span>
                <h3 className="mb-2.5 font-poppins text-[15px] font-semibold text-[#D6B598]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-white/55">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
