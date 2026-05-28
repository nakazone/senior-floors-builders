import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function CTA({
  href,
  onClick,
  variant = 'primary',
  className,
  children,
  type = 'button',
  disabled,
}: CTAProps) {
  const baseClasses = variant === 'primary' ? 'cta-button' : 'cta-button-secondary'

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    const isHash = href.startsWith('#')

    if (isExternal || isHash) {
      return (
        <a href={href} className={cn(baseClasses, className)} onClick={onClick}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={cn(baseClasses, className)} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  )
}
