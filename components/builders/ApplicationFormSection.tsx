'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FadeUp } from './FadeUp'

interface ApplicationFormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  role: string
  projectSize: string
  serviceArea: string
  priorities: string
}

const perks = [
  'Dedicated account manager from day one',
  'Real-time project tracking through your partner dashboard',
  'Exclusive trade pricing on the full Senior Floors catalog',
  'Priority scheduling and installation slots for your projects',
  'Private showroom access for client consultations',
  'Co-marketing and referral recognition opportunities',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        d="M4 10l5 5 7-8"
        stroke="#D6B598"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const inputClass =
  'w-full rounded-[6px] border-[1.5px] border-[#E2E8F0] bg-[#F7F8FC] px-[14px] py-[11px] text-[14px] text-[#1A2036] outline-none transition-colors focus:border-[#1A2036] focus:bg-white'

export function ApplicationFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm<ApplicationFormData>()

  const onSubmit = async (_data: ApplicationFormData) => {
    // TODO: connect to POST /api/partner-application or webhook
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-[#F7F8FC] px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C1A08C]">
              Apply now
            </p>
            <h2 className="font-poppins text-[clamp(26px,3vw,38px)] font-bold leading-[1.2] text-[#1A2036]">
              Ready to build a better partnership?
            </h2>
            <p className="mb-9 mt-4 text-[15px] leading-[1.8] text-[#6B7280]">
              Tell us about your firm and how you work. We review every application personally and
              respond within 48 business hours.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul>
              {perks.map((perk, i) => (
                <li
                  key={perk}
                  className={`flex items-start gap-3 py-3 text-[14px] leading-snug text-[#1A2036] ${
                    i < perks.length - 1 ? 'border-b border-[#E2E8F0]' : ''
                  }`}
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1A2036]">
                    <CheckIcon />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="rounded-[12px] border border-[#E2E8F0] bg-white p-8 shadow-sm lg:p-11">
            <h3 className="font-poppins text-[22px] font-bold text-[#1A2036]">
              Partner Application
            </h3>
            <p className="mb-7 mt-1.5 text-[13px] text-[#6B7280]">
              We review every application and respond within 48 business hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[18px]">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                    First Name
                  </label>
                  <input {...register('firstName', { required: true })} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                    Last Name
                  </label>
                  <input {...register('lastName', { required: true })} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                  Company / Studio
                </label>
                <input {...register('company', { required: true })} className={inputClass} />
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                    Your Role
                  </label>
                  <select {...register('role', { required: true })} className={inputClass}>
                    <option value="">Select role</option>
                    <option value="General Contractor">General Contractor</option>
                    <option value="Architect">Architect</option>
                    <option value="Interior Designer">Interior Designer</option>
                    <option value="Developer">Developer</option>
                    <option value="Subcontractor">Subcontractor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                    Typical Project Size
                  </label>
                  <select {...register('projectSize', { required: true })} className={inputClass}>
                    <option value="">Select size</option>
                    <option value="Under $300K">Under $300K</option>
                    <option value="$300K–$500K">$300K–$500K</option>
                    <option value="$500K–$1M">$500K–$1M</option>
                    <option value="$1M–$3M">$1M–$3M</option>
                    <option value="$3M+">$3M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                  Primary service area
                </label>
                <input {...register('serviceArea', { required: true })} className={inputClass} />
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-semibold text-[#1A2036]">
                  What matters most in a flooring partner?
                </label>
                <textarea
                  {...register('priorities', { required: true })}
                  rows={4}
                  className={`${inputClass} min-h-[88px] resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full rounded-[6px] py-[15px] text-[14px] font-bold transition-colors ${
                  submitted
                    ? 'cursor-default bg-[#1E7D40] text-white'
                    : 'bg-[#1A2036] text-white hover:bg-[#222C47]'
                }`}
              >
                {submitted
                  ? "? Application Received — We'll be in touch within 48h"
                  : 'Submit Application'}
              </button>

              <p className="text-center text-[12px] leading-relaxed text-[#6B7280]">
                By submitting, you agree to be contacted by Senior Floors regarding the partner
                program. We never share your information.
              </p>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
