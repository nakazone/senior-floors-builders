import type { Metadata } from 'next'
import { Navbar } from '@/components/builders/Navbar'
import { HeroSection } from '@/components/builders/HeroSection'
import { TrustBar } from '@/components/builders/TrustBar'
import { VideoSection } from '@/components/builders/VideoSection'
import { WhyPartnerSection } from '@/components/builders/WhyPartnerSection'
import { HowItWorksSection } from '@/components/builders/HowItWorksSection'
import { WhoWeServeSection } from '@/components/builders/WhoWeServeSection'
import { RegionsSection } from '@/components/builders/RegionsSection'
import { RecentProjectsSection } from '@/components/builders/RecentProjectsSection'
import { TestimonialSection } from '@/components/builders/TestimonialSection'
import { PartnerAccessSection } from '@/components/builders/PartnerAccessSection'
import { ApplicationFormSection } from '@/components/builders/ApplicationFormSection'
import { CTAStrip } from '@/components/builders/CTAStrip'
import { Footer } from '@/components/builders/Footer'

export const metadata: Metadata = {
  title: 'Builder Partner Program — Senior Floors Colorado',
  description:
    'Partner with Senior Floors for premium hardwood and tile installation in Boulder, Morrison, Cherry Creek, and across Colorado. Dedicated service, real-time tracking, trade pricing.',
}

export default function BuildersPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <VideoSection />
        <WhyPartnerSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <RegionsSection />
        <RecentProjectsSection />
        <TestimonialSection />
        <PartnerAccessSection />
        <ApplicationFormSection />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
