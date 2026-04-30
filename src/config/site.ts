/** Single source of truth for contact data and editable copy (hours, open status, social). */

export const siteConfig: {
  name: string
  phoneDisplay: string
  phoneTel: string
  /** E.164 digits only, no + (for WhatsApp wa.me) */
  whatsappTel: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  /** For Google Maps embed search query */
  mapsQuery: string
  /** Short share link (directions) */
  mapsPlaceUrl: string
  showOpenNowBadge: boolean
  social: { facebookUrl: string }
  reviews: { count: number; ratingValue: number }
} = {
  name: 'La Tabasqueña Bakery',
  phoneDisplay: '(956) 599-9221',
  phoneTel: '9565999221',
  whatsappTel: '19565999221',
  email: 'latabasquenabakeryllc@gmail.com',
  address: {
    street: '2901 Flores Rd',
    suite: '',
    city: 'Mission',
    state: 'TX',
    postalCode: '78574',
    country: 'United States',
  },
  mapsQuery: '2901+Flores+Rd+Mission+TX+78574',
  mapsPlaceUrl: 'https://goo.gl/maps/ySAbYF1FnMJ9Zm8AA',
  showOpenNowBadge: true,
  social: {
    facebookUrl:
      'https://www.facebook.com/p/La-Tabasque%C3%B1a-Bakery-100086939588376/',
  },
  reviews: {
    count: 6,
    ratingValue: 5,
  },
}

export function getWhatsAppUrl(): string {
  return `https://wa.me/${siteConfig.whatsappTel}`
}

export function getSiteUrl(): string {
  const v = import.meta.env.VITE_SITE_URL
  if (typeof v === 'string' && v.length > 0) return v.replace(/\/$/, '')
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}
