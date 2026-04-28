import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getSiteUrl, siteConfig } from '../config/site'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const sel = `meta[${attr}="${key}"]`
  let el = document.querySelector(sel) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const base = getSiteUrl()
    const path = i18n.language === 'es' ? '/es' : '/en'
    const canonical = `${base}${path}`
    const title = t('meta.title')
    const description = t('meta.description')
    const ogImage = `${base}/logo.png`

    document.title = title
    document.documentElement.lang = i18n.language
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    let linkCanonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.rel = 'canonical'
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.href = canonical

    const addr = siteConfig.address
    const streetAddress = [addr.street, addr.suite].filter(Boolean).join(' ')
    const json = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Bakery',
      name: siteConfig.name,
      image: base ? [ogImage] : undefined,
      url: base || undefined,
      telephone: `+1${siteConfig.phoneTel}`,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress,
        addressLocality: addr.city,
        addressRegion: addr.state,
        postalCode: addr.postalCode,
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(siteConfig.reviews.ratingValue),
        reviewCount: String(siteConfig.reviews.count),
      },
    })

    let script = document.getElementById('ld-bakery') as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-bakery'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = json
  }, [i18n.language, t])

  return null
}
