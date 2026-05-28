'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check } from 'lucide-react'
import { FadeUp } from './FadeUp'
import { SectionHeader } from './SectionHeader'
import { cn } from '@/lib/utils'

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

const inputClass =
  'w-full rounded-md border border-gray-300 bg-bg-light px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-primary focus:bg-white'

export function ApplicationFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm<ApplicationFormData>()

  const onSubmit = async (_data: ApplicationFormData) => {
    setSubmitted(true)
  }

  return (
    <section id="form" className="section-padding bg-bg-light">
      <div className="section-shell grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeUp>
            <SectionHeader
              align="left"
              label="Apply now"
              title="Ready to build a better partnership?"
              subtitle="Tell us about your firm and how you work. We review every application personally and respond within 48 business hours."
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <ul>
              {perks.map((perk, i) => (
                <li
                  key={perk}
                  className={cn(
                    'flex items-start gap-3 py-3 text-sm leading-snug text-primary',
                    i < perks.length - 1 && 'border-b border-gray-200'
                  )}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-secondary" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md lg:p-10">
            <h3 className="text-2xl font-bold text-primary">Partner Application</h3>
            <p className="mb-7 mt-1.5 text-sm text-gray-600">
              We review every application and respond within 48 business hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary">First Name</label>
                  <input {...register('firstName', { required: true })} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary">Last Name</label>
                  <input {...register('lastName', { required: true })} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-primary">Company / Studio</label>
                <input {...register('company', { required: true })} className={inputClass} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary">Email</label>
                  <input type="email" {...register('email', { required: true })} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary">Phone</label>
                  <input type="tel" {...register('phone', { required: true })} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-primary">Your Role</label>
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
                  <label className="mb-1.5 block text-sm font-semibold text-primary">Typical Project Size</label>
                  <select {...register('projectSize', { required: true })} className={inputClass}>
                    <option value="">Select size</option>
                    <option value="Under $300K">Under $300K</option>
                    <option value="$300K$500K">$300K$500K</option>
                    <option value="$500K$1M">$500K$1M</option>
                    <option value="$1M$3M">$1M$3M</option>
                    <option value="$3M+">$3M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-primary">Primary service area</label>
                <input {...register('serviceArea', { required: true })} className={inputClass} />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-primary">
                  What matters most in a flooring partner?
                </label>
                <textarea
                  {...register('priorities', { required: true })}
                  rows={4}
                  className={cn(inputClass, 'min-h-[88px] resize-y')}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={cn(
                  'w-full rounded-md py-3.5 text-sm font-bold transition-colors',
                  submitted
                    ? 'cursor-default bg-green-700 text-white'
                    : 'cta-button'
                )}
              >
                {submitted
                  ? "? Application Received - We'll be in touch within 48h"
                  : 'Submit Application'}
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-600">
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
