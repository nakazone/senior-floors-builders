import { Logo } from './Logo'

const footerLinks = [
  { href: 'https://senior-floors.com', label: 'Main Site' },
  { href: 'https://senior-floors.com/services', label: 'Services' },
  { href: 'https://senior-floors.com/gallery', label: 'Gallery' },
  { href: 'https://senior-floors.com/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[#D6B598]/12 bg-[#141928] px-6 py-11 lg:px-12">
      <Logo size="footer" />

      <nav className="flex flex-wrap gap-7">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] text-white/45 no-underline transition-colors hover:text-[#D6B598]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="text-[12px] text-white/30">
        © 2025 Senior Floors · Denver, Colorado · Licensed & Insured
      </p>
    </footer>
  )
}
