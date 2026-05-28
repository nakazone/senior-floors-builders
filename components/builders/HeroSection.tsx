import { FadeUp } from './FadeUp'

const stats = [
  { value: '12+', label: 'Years serving Colorado' },
  { value: '48h', label: 'Guaranteed response time' },
  { value: '100%', label: 'Projects tracked in real-time' },
  { value: '$0', label: 'Cost to join the program' },
]

const perks = [
  'Dedicated account manager from day one',
  'Real-time project tracking dashboard',
  'Exclusive trade pricing on full catalog',
  'Priority scheduling for your projects',
  'Showroom access for client presentations',
]

const trustItems = [
  { icon: '?', label: '5-Star Rated / 31 Reviews' },
  { icon: '??', label: 'NWFA Certified' },
  { icon: '???', label: '+2,000 Projects' },
  { icon: '???', label: 'Licensed & Insured' },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 18 18" className="h-[18px] w-[18px] shrink-0" aria-hidden="true">
      <path
        d="M4 9l4 4 6-6"
        stroke="#1A2036"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A2036] pt-[80px]">
      {/* Corner brackets */}
      <div className="pointer-events-none absolute left-6 top-[110px] h-14 w-14 border-l-2 border-t-2 border-solid border-[#D6B598] opacity-40 lg:left-12" />
      <div className="pointer-events-none absolute right-6 top-[110px] h-14 w-14 border-r-2 border-t-2 border-solid border-[#D6B598] opacity-40 lg:right-12" />
      <div className="pointer-events-none absolute bottom-12 left-6 h-14 w-14 border-b-2 border-l-2 border-solid border-[#D6B598] opacity-40 lg:left-12" />
      <div className="pointer-events-none absolute bottom-12 right-6 h-14 w-14 border-b-2 border-r-2 border-solid border-[#D6B598] opacity-40 lg:right-12" />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[72px] lg:px-12">
        <div>
          <FadeUp>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#D6B598]/30 bg-[#D6B598]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B598]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#D6B598]">
                Builder Partnership Program
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-poppins text-[clamp(36px,4.5vw,60px)] font-bold leading-[1.1] text-white">
              The flooring partner your projects{' '}
              <span className="text-[#D6B598]">can rely on.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.75] text-white/65">
              Senior Floors works side-by-side with Colorado&apos;s top builders, architects, and
              designers — delivering premium hardwood and tile with the reliability, communication,
              and follow-through your clients expect.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#form"
                className="rounded-[6px] bg-[#D6B598] px-8 py-[15px] text-sm font-bold text-[#1A2036] transition-colors hover:bg-[#E8D0BA]"
              >
                Apply for Partnership
              </a>
              <a
                href="#how"
                className="rounded-[6px] border border-white/25 px-8 py-[15px] text-sm font-medium text-white transition-colors hover:border-[#D6B598] hover:text-[#D6B598]"
              >
                How It Works
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-white/10 pt-7">
              {trustItems.map((item, i) => (
                <div key={item.label} className="flex items-center gap-2">
                  {i > 0 && <div className="mr-3 hidden h-7 w-px bg-white/12 sm:block" />}
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#D6B598]/12 text-[15px]">
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-medium leading-tight text-white/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="rounded-[12px] border border-[#D6B598]/18 bg-white/5 p-9 backdrop-blur-sm">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#D6B598]">
              Partnership At a Glance
            </p>

            <div className="mb-7 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[8px] border border-white/7 bg-white/4 py-[18px] text-center"
                >
                  <p className="font-poppins text-[32px] font-bold leading-none text-[#D6B598]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-0">
              {perks.map((perk, i) => (
                <li
                  key={perk}
                  className={`flex items-center gap-2.5 py-2.5 text-[13px] text-white/78 ${
                    i < perks.length - 1 ? 'border-b border-white/7' : ''
                  }`}
                >
                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#D6B598]">
                    <CheckIcon />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
