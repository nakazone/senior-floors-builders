export const SITE_NAME = 'Senior Floors'

export const MAIN_SITE_URL =
  process.env.NEXT_PUBLIC_MAIN_SITE_URL?.trim().replace(/\/$/, '') || 'https://senior-floors.com'

export const SITE_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() ||
  process.env.NEXT_PUBLIC_PHONE?.trim() ||
  '(720) 751-9813'

export const SITE_PHONE_TEL =
  process.env.NEXT_PUBLIC_PHONE_TEL?.trim() || 'tel:+17207519813'

export const SITE_EMAIL =
  process.env.NEXT_PUBLIC_EMAIL?.trim() || 'contact@senior-floors.com'

export const PORTAL_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL?.trim() ||
  'https://senior-floors-system-production.up.railway.app'

export const BUSINESS_ADDRESS = {
  streetAddress: '7900 E Union Ave',
  addressLocality: 'Denver',
  addressRegion: 'CO',
  postalCode: '80237',
}

export function getBusinessAddressCityStateZip(): string {
  return `${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion} ${BUSINESS_ADDRESS.postalCode}`
}

export function getGoogleMapsBusinessSearchUrl(): string {
  const line = `${BUSINESS_ADDRESS.streetAddress}, ${getBusinessAddressCityStateZip()}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(line)}`
}

export const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/seniorfloors/' },
  { name: 'Facebook', href: 'https://www.facebook.com/seniorflooring' },
]
