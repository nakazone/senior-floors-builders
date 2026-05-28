import { cn } from '@/lib/utils'
import { STARS_5 } from '@/lib/symbols'

interface StarRatingProps {
  count?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClass = {
  sm: 'text-sm tracking-wider',
  md: 'text-base tracking-wider',
  lg: 'text-xl tracking-[0.2em]',
}

export function StarRating({ count = 5, size = 'md', className }: StarRatingProps) {
  const stars = '\u2605'.repeat(count)

  return (
    <span
      className={cn('font-semibold text-secondary', sizeClass[size], className)}
      aria-label={`${count} out of 5 stars`}
    >
      {stars}
    </span>
  )
}

/** Default export alias for footer badge matching main site copy. */
export function GoogleReviewStars({ className }: { className?: string }) {
  return (
    <span className={cn('font-semibold tracking-wider text-secondary', className)}>
      {STARS_5} Google Reviews
    </span>
  )
}
