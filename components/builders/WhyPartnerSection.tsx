import {
  BarChart3,
  ClipboardList,
  DollarSign,
  Handshake,
  Landmark,
  Trophy,
} from 'lucide-react'
import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'

const cards = [
  {
    icon: ClipboardList,
    title: 'Project Tracking',
    body: "Real-time visibility into order status, delivery windows, and installation schedules. You'll always know exactly where things stand - before you need to ask.",
  },
  {
    icon: Trophy,
    title: 'Premium Service',
    body: 'One dedicated account manager. Direct lines. Fast answers. We treat every timeline with urgency - because we know a flooring delay cascades across your entire schedule.',
  },
  {
    icon: Handshake,
    title: 'Reliability You Can Count On',
    body: 'Consistent product availability, precise delivery timelines, and the accountability your clients expect from every vendor on site. We show up - every time.',
  },
  {
    icon: DollarSign,
    title: 'Exclusive Trade Pricing',
    body: 'Trade-only pricing on our full catalog of hardwoods, engineered floors, LVP, and stone. Protect your margins on every project without compromising quality.',
  },
  {
    icon: Landmark,
    title: 'Showroom Access',
    body: 'Bring your clients to our Denver showroom for a presentation that sells itself. We handle the material selection experience so you can focus on the build.',
  },
  {
    icon: BarChart3,
    title: 'Referral Recognition',
    body: 'Qualified referrals, project co-features, and marketing opportunities for builders who match our standard. A true partnership that grows both businesses.',
  },
]

export function WhyPartnerSection() {
  return (
    <section id="why" className="section-padding bg-bg-light">
      <div className="section-shell">
        <FadeUp>
          <SectionHeader
            label="Why partner with us"
            title="Built for builders who refuse to compromise."
            subtitle="From first spec to final walkthrough, Senior Floors is the flooring partner that keeps pace with your standard - and your schedule."
          />
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={0.1 * (i % 4)}>
              <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-xl">
                <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-primary">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
