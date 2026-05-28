const items = [
  'Project Tracking',
  'Premium Service',
  'Licensed & Insured',
  'OSHA Certified',
  'NWFA Certified',
]

export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 bg-[#D6B598] px-6 py-4 lg:gap-12 lg:px-12">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1A2036]"
        >
          <span className="text-[13px]">?</span>
          {item}
        </span>
      ))}
    </div>
  )
}
