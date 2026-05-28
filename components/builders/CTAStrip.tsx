export function CTAStrip() {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? '(720) 751-9813'
  const email = process.env.NEXT_PUBLIC_EMAIL ?? 'info@senior-floors.com'

  return (
    <section className="bg-[#D6B598] px-6 py-16 text-center lg:px-12">
      <h2 className="font-poppins text-[clamp(22px,2.8vw,34px)] font-bold text-[#1A2036]">
        Questions before you apply?
      </h2>
      <p className="mx-auto mt-2.5 max-w-lg text-[15px] text-[#1A2036]/72">
        Our team is happy to walk you through the program, pricing, and onboarding process.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-4">
        <a
          href={`tel:${phone.replace(/\D/g, '')}`}
          className="rounded-[6px] bg-[#1A2036] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#141928]"
        >
          Call {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className="rounded-[6px] border-2 border-[#1A2036] px-8 py-3.5 text-sm font-semibold text-[#1A2036] transition-colors hover:bg-[#1A2036]/8"
        >
          Send an Email
        </a>
      </div>
    </section>
  )
}
