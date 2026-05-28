import Image from 'next/image'
import Link from 'next/link'
import { MAIN_SITE_URL } from '@/lib/siteConfig'

interface LogoProps {
  size?: 'header' | 'footer'
}

export function Logo({ size = 'header' }: LogoProps) {
  const isFooter = size === 'footer'

  return (
    <Link
      href={MAIN_SITE_URL}
      className="flex items-center"
      aria-label="Senior Floors - Home"
    >
      <Image
        src="/assets/logoSeniorFloors.png"
        alt="Senior Floors logo"
        width={isFooter ? 160 : 90}
        height={isFooter ? 160 : 90}
        className={isFooter ? 'mb-4 h-32 w-auto object-contain' : 'h-14 w-auto object-contain md:h-20'}
        priority={!isFooter}
      />
    </Link>
  )
}
