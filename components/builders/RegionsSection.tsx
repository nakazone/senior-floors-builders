import { FadeUp } from './FadeUp'

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
    <section className="border-y border-[#C1A08C]/20 bg-[#F5EDE4] px-6 py-[72px] lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="text-center">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C1A08C]">
              Service areas
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-[#1A2036]">
              Serving Colorado&apos;s premium build markets.
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <span
                key={region}
                className="flex items-center gap-1.5 rounded-full border-[1.5px] border-[#D6B598] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#1A2036]"
              >
                <span className="text-[12px]">??</span>
                {region}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
