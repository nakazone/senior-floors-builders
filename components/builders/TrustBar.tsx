const items = [
  'Project Tracking',
  'Premium Service',
  'Licensed & Insured',
  'OSHA Certified',
  'NWFA Certified',
]

export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 bg-secondary px-4 py-4 lg:gap-12">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"
        >
          <span className="text-sm">?</span>
          {item}
        </span>
      ))}
    </div>
  )
}
