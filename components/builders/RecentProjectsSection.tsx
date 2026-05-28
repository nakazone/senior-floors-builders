import { FadeUp } from './FadeUp'
import { MAIN_SITE_URL } from '@/lib/siteConfig'

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
    <section id="projects" className="section-padding border-t border-gray-100 bg-white">
      <div className="section-shell">
        <FadeUp>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-800">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Recent projects we&apos;re proud of.
              </h2>
            </div>
            <a
              href={`${MAIN_SITE_URL}/gallery`}
              className="text-sm font-bold text-primary transition-colors hover:text-secondary hover:underline"
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
                className={`group relative cursor-pointer overflow-hidden rounded-lg bg-primary-600 shadow-md ${
                  project.featured ? 'h-[220px] lg:h-full' : 'h-[220px]'
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: project.gradient }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary/10 to-transparent transition-all group-hover:from-primary-900/90" />
                <span className="absolute right-4 top-4 -translate-y-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-primary opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  View Project
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-secondary">
                    {project.location}
                  </span>
                  <h3
                    className={`font-semibold leading-tight text-white ${
                      project.featured ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">{project.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
