'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteConfig'

const navLinks = [
  { href: '#video', label: 'About Us' },
  { href: '#why', label: 'Why Partner' },
  { href: '#projects', label: 'Projects' },
  { href: '#access', label: 'Partner Access' },
  { href: '#form', label: 'Apply' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-primary shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:h-24">
          <div className="flex shrink-0 items-center">
            <Logo />
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-medium text-white/90 transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-secondary after:transition-all after:duration-200 hover:text-white hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={SITE_PHONE_TEL}
              className="whitespace-nowrap rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-text-dark shadow-md transition-all hover:-translate-y-0.5 hover:bg-secondary-100 hover:shadow-lg"
            >
              Call Now
            </a>
            <a
              href="#form"
              className="whitespace-nowrap rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-text-dark shadow-md transition-all hover:-translate-y-0.5 hover:bg-secondary-100 hover:shadow-lg"
            >
              Apply as Partner
            </a>
          </div>

          <button
            type="button"
            className="z-50 flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={cn(
                'h-0.5 w-6 rounded bg-white transition-all',
                mobileMenuOpen && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 rounded bg-white transition-all',
                mobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 rounded bg-white transition-all',
                mobileMenuOpen && '-translate-y-2 -rotate-45'
              )}
            />
          </button>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-400 lg:hidden',
            mobileMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="space-y-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block border-b border-white/10 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="space-y-2 px-4 pt-4">
              <a
                href={SITE_PHONE_TEL}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-4 py-3 text-center text-sm font-semibold text-text-dark transition-all hover:bg-secondary-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Call {SITE_PHONE_DISPLAY}
              </a>
              <a
                href="#form"
                className="block w-full rounded-md bg-secondary px-4 py-3 text-center text-sm font-semibold text-text-dark transition-all hover:bg-secondary-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply as Partner
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
