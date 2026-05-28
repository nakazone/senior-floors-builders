import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  dark?: boolean
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div className={cn('mb-12', centered ? 'text-center' : 'text-left', className)}>
      {label ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.14em]',
            dark ? 'text-secondary' : 'text-secondary-800'
          )}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={cn(
          'mb-4 text-3xl font-bold sm:text-4xl',
          dark ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'max-w-2xl text-lg',
            centered && 'mx-auto',
            dark ? 'text-white/90' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
