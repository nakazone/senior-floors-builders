import type { Metadata } from 'next'
import './globals.css'
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Builder Partner Program - Senior Floors Colorado',
  description:
    'Partner with Senior Floors for premium hardwood and tile installation in Boulder, Morrison, Cherry Creek, and across Colorado. Dedicated service, real-time tracking, trade pricing.',
  icons: {
    icon: '/assets/logoSeniorFloors.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pb-[5.5rem] md:pb-0">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  )
}
