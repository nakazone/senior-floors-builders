interface LogoProps {
  size?: 'default' | 'footer'
}

export function Logo({ size = 'default' }: LogoProps) {
  const markSize = size === 'footer' ? 'h-9 w-9 text-[13px]' : 'h-[52px] w-[52px] text-lg'
  const brandSize = size === 'footer' ? 'text-sm' : 'text-base'

  return (
    <a href="#" className="flex items-center gap-3 no-underline">
      <div
        className={`${markSize} flex shrink-0 items-center justify-center rounded-[4px] bg-gradient-to-br from-[#D6B598] via-[#C1A08C] to-[#A8876E] font-poppins font-bold text-[#1A2036]`}
      >
        SF
      </div>
      <div className="flex flex-col font-poppins text-white">
        <span className={`${brandSize} font-semibold leading-tight tracking-wide`}>
          Senior Floors
        </span>
        {size === 'default' && (
          <span className="text-[9px] uppercase tracking-[0.18em] text-[#D6B598] opacity-80">
            Hardwood and Tiles
          </span>
        )}
      </div>
    </a>
  )
}
