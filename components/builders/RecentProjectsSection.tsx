import { FadeUp } from './FadeUp'

const projects = [
  {
    featured: true,
    gradient:
      'linear-gradient(172deg, #3B2517 0%, #5C3A24 8%, #3E2818 16%, #6B4A2E 24%, #4A3020 32%, #5E3D28 40%, #3A2315 48%, #664530 56%)',
    location: 'Boulder, CO',
    name: 'Foothills Modern Residence',
    detail: '4,800 sqft · Wide-plank European White Oak · Builder: Anderson Group',
  },
  {
    featured: false,
    gradient:
      'linear-gradient(168deg, #6B5140 0%, #8A6A50 15%, #5C4030 30%, #7A5A45 45%, #664E3C 60%, #8C6C52 75%)',
    location: 'Cherry Creek',
    name: 'Penthouse Renovation',
    detail: '2,100 sqft · Engineered Oak · Designer: M. Torres Studio',
  },
  {
    featured: false,
    gradient:
      'linear-gradient(175deg, #2A1E14 0%, #4A3525 20%, #2E2018 40%, #5A4030 60%, #302215 80%)',
    location: 'Evergreen, CO',
    name: 'Mountain Lodge Estate',
    detail: '6,200 sqft · Reclaimed Hardwood',
  },
  {
    featured: false,
    gradient:
      'linear-gradient(170deg, #8A6B4A 0%, #A87C54 20%, #7A5B3C 40%, #967050 60%, #8C6D4C 80%)',
    location: 'Morrison, CO',
    name: 'Red Rocks View Home',
    detail: '3,400 sqft · LVP Luxury Vinyl',
  },
  {
    featured: false,
    gradient:
      'linear-gradient(165deg, #4A3828 0%, #6A5240 18%, #3E2E20 36%, #5C4636 54%, #4C3A2A 72%)',
    location: 'Greenwood Village',
    name: 'Executive Estate',
    detail: '5,100 sqft · Custom Stone & Hardwood',
  },
]

export function RecentProjectsSection() {
  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <FadeUp>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C1A08C]">
                Portfolio
              </p>
              <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-[#1A2036]">
                Recent projects we&apos;re proud of.
              </h2>
            </div>
            <a
              href="https://senior-floors.com/gallery"
              className="border-b border-[#D6B598] text-[14px] font-semibold text-[#1A2036] no-underline transition-colors hover:text-[#C1A08C]"
            >
              View full gallery ?
            </a>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:grid-rows-[280px_260px]">
          {projects.map((project, i) => (
            <FadeUp
              key={project.name}
              delay={0.1 * (i % 4)}
              className={project.featured ? 'lg:row-span-2' : ''}
            >
              <div
                className={`group relative cursor-pointer overflow-hidden rounded-[12px] bg-[#222C47] ${
                  project.featured ? 'h-[220px] lg:h-full' : 'h-[220px]'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: project.gradient }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18]/78 via-[#0A0E18]/10 to-transparent transition-all group-hover:from-[#0A0E18]/88" />
                <span className="absolute right-4 top-4 -translate-y-1 rounded-full bg-[#D6B598] px-3.5 py-1.5 text-[11px] font-bold text-[#1A2036] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  View Project
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#D6B598]/30 bg-[#D6B598]/18 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D6B598]">
                    ?? {project.location}
                  </span>
                  <h3
                    className={`font-poppins font-semibold leading-[1.2] text-white ${
                      project.featured ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[12px] text-white/55">{project.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
