import { FadeUp } from './FadeUp'

const cards = [
  {
    icon: '??',
    title: 'Project Tracking',
    body: "Real-time visibility into order status, delivery windows, and installation schedules. You'll always know exactly where things stand — before you need to ask.",
  },
  {
    icon: '??',
    title: 'Premium Service',
    body: 'One dedicated account manager. Direct lines. Fast answers. We treat every timeline with urgency — because we know a flooring delay cascades across your entire schedule.',
  },
  {
    icon: '??',
    title: 'Reliability You Can Count On',
    body: 'Consistent product availability, precise delivery timelines, and the accountability your clients expect from every vendor on site. We show up — every time.',
  },
  {
    icon: '??',
    title: 'Exclusive Trade Pricing',
    body: 'Trade-only pricing on our full catalog of hardwoods, engineered floors, LVP, and stone. Protect your margins on every project without compromising quality.',
  },
  {
    icon: '???',
    title: 'Showroom Access',
    body: 'Bring your clients to our Denver showroom for a presentation that sells itself. We handle the material selection experience so you can focus on the build.',
  },
  {
    icon: '??',
    title: 'Referral Recognition',
    body: 'Qualified referrals, project co-features, and marketing opportunities for builders who match our standard. A true partnership that grows both businesses.',
  },
]

export function WhyPartnerSection() {
  return (
    <section id="why" className="bg-[#F7F8FC] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="mb-[60px] text-center">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C1A08C]">
              Why partner with us
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-[#1A2036]">
              Built for builders who refuse to compromise.
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-[1.75] text-[#6B7280]">
              From first spec to final walkthrough, Senior Floors is the flooring partner that keeps
              pace with your standard — and your schedule.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={0.1 * (i % 4)}>
              <div className="group relative overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-white p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B598] hover:shadow-lg">
                <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-[#D6B598] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#F5EDE4] text-[22px]">
                  {card.icon}
                </div>
                <h3 className="mb-2.5 font-poppins text-[17px] font-semibold text-[#1A2036]">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[1.8] text-[#6B7280]">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
