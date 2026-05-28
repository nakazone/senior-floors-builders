'use client'

import { Logo } from './Logo'

const navLinks = [
  { href: '#video', label: 'About Us' },
  { href: '#why', label: 'Why Partner' },
  { href: '#projects', label: 'Projects' },
  { href: '#access', label: 'Partner Access' },
  { href: '#form', label: 'Apply' },
]

export function Navbar() {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? '(720) 751-9813'

  return (
    <nav className="fixed top-0 z-50 flex h-[80px] w-full items-center justify-between bg-[#1A2036] px-6 lg:px-12">
      <Logo />

      <ul className="hidden items-center gap-9 lg:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[13px] text-white/80 transition-colors hover:text-[#D6B598]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="hidden rounded-[6px] border border-white/25 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:border-[#D6B598] hover:text-[#D6B598] sm:inline-block"
        >
          {phone}
        </a>
        <a
          href="#form"
          className="rounded-[6px] bg-[#D6B598] px-5 py-2.5 text-[13px] font-bold text-[#1A2036] transition-colors hover:bg-[#E8D0BA]"
        >
          Apply as Partner
        </a>
      </div>
    </nav>
  )
}
