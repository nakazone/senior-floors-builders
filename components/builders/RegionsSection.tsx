import { MapPin } from 'lucide-react'
import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'

const regions = [
  'Boulder',
  'Morrison',
  'Cherry Creek',
  'Denver Metro',
  'Evergreen',
  'Vail',
  'Greenwood Village',
  'Lakewood',
  'Aspen',
  'Castle Rock',
]

export function RegionsSection() {
  return (
    <section className="border-y border-secondary/20 bg-secondary-50 py-14 lg:py-20">
      <div className="section-shell">
        <FadeUp>
          <SectionHeader
            label="Service areas"
            title="Serving Colorado's premium build markets."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-2 rounded-full border border-secondary bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-secondary" />
                {region}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
