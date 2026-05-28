import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  count?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClass = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

export function StarRating({ count = 5, size = 'md', className }: StarRatingProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-0.5', className)}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          className={cn(sizeClass[size], 'fill-secondary text-secondary')}
          aria-hidden
        />
      ))}
    </span>
  )
}
