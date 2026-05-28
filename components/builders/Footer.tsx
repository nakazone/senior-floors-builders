import Link from 'next/link'
import { Instagram, Facebook, MapPin } from 'lucide-react'
import { Logo } from './Logo'
import {
  BUSINESS_ADDRESS,
  getBusinessAddressCityStateZip,
  getGoogleMapsBusinessSearchUrl,
  MAIN_SITE_URL,
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  socialLinks,
} from '@/lib/siteConfig'

const footerServices = [
  { name: 'Hardwood Installation', href: `${MAIN_SITE_URL}/services/hardwood-floor-installation-denver` },
  { name: 'Floor Refinishing', href: `${MAIN_SITE_URL}/services/hardwood-floor-refinishing-denver` },
  { name: 'Luxury Vinyl Plank', href: `${MAIN_SITE_URL}/services/luxury-vinyl-plank-installation-denver` },
  { name: 'Custom Stairs', href: `${MAIN_SITE_URL}/services/custom-stair-installation-denver` },
  { name: 'Water Damage Repair', href: `${MAIN_SITE_URL}/services/water-damage-floor-repair-denver` },
]

const footerFlooring = [
  { name: 'Site-Finished Wood', href: `${MAIN_SITE_URL}/flooring/site-finished-wood` },
  { name: 'Pre-Finished Wood', href: `${MAIN_SITE_URL}/flooring/pre-finished-wood` },
  { name: 'Luxury Vinyl', href: `${MAIN_SITE_URL}/flooring/luxury-vinyl` },
  { name: 'Laminate', href: `${MAIN_SITE_URL}/flooring/laminate` },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="section-shell py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="footer" />
            <p className="mb-4 text-sm leading-relaxed text-white/80">
              Elegant, durable flooring installed with precision and care. Denver&apos;s trusted
              hardwood flooring experts serving medium to high-end homes across the metro area.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {['Licensed', 'Insured', '10+ Years Experience'].map((badge) => (
                <span
                  key={badge}
                  className="inline-block rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/95"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-2 inline-block rounded-md border border-white/20 bg-white/10 px-4 py-2">
              <div className="mb-1 text-center text-sm font-semibold tracking-wider text-secondary">
                ????? Google Reviews
              </div>
              <div className="text-center text-xs font-semibold uppercase tracking-wide text-white/95">
                Hardwood Flooring Specialists
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-secondary">Services</h4>
            <ul className="m-0 list-none space-y-2 p-0">
              {footerServices.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-secondary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-secondary">Flooring</h4>
            <ul className="m-0 list-none space-y-2 p-0">
              {footerFlooring.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-secondary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-secondary">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="mb-1 flex items-center gap-1.5 text-white">
                  <MapPin className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  Address
                </strong>
                <address className="not-italic text-white/80">
                  {BUSINESS_ADDRESS.streetAddress}
                  <br />
                  {getBusinessAddressCityStateZip()}
                </address>
                <a
                  href={getGoogleMapsBusinessSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs font-semibold text-secondary hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
              <div>
                <strong className="mb-1 block text-white">Phone:</strong>
                <a href={SITE_PHONE_TEL} className="text-secondary hover:underline">
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <strong className="mb-1 block text-white">Email:</strong>
                <a href={`mailto:${SITE_EMAIL}`} className="text-secondary hover:underline">
                  {SITE_EMAIL}
                </a>
              </div>
              <div>
                <strong className="mb-2 block text-white">Follow us:</strong>
                <div className="flex gap-3">
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:border-secondary hover:bg-secondary hover:text-primary"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={socialLinks[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:border-secondary hover:bg-secondary hover:text-primary"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <p className="text-sm text-white/80">
              &copy; {new Date().getFullYear()} Senior Floors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href={`${MAIN_SITE_URL}/policies`}
                className="text-sm text-white/60 transition-colors hover:text-secondary"
              >
                Policies &amp; legal
              </a>
              <Link href="/" className="text-sm text-white/60 transition-colors hover:text-secondary">
                Builder Program
              </Link>
              <a
                href={MAIN_SITE_URL}
                className="text-sm text-white/60 transition-colors hover:text-secondary"
              >
                Main Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
