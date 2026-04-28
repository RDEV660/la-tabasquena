import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/site'

export function VisitSection() {
  const { t } = useTranslation()
  const a = siteConfig.address
  const line1 = [a.street, a.suite].filter(Boolean).join(' · ')
  const mapSrc = `https://www.google.com/maps?q=${siteConfig.mapsQuery}&output=embed`
  const mapsUrl = siteConfig.mapsPlaceUrl

  return (
    <section
      id="visit"
      className="scroll-mt-20 border-t border-white/20 bg-surface/60 px-4 py-12 shadow-inner backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-heading text-2xl font-extrabold uppercase tracking-tight text-primary sm:text-3xl"
          style={{ fontFamily: 'var(--font-heading), ui-sans-serif' }}
        >
          {t('visit.title')}
        </h2>
        <p className="mt-2 text-center text-muted">
          {line1}
          <br />
          {t('visit.cityLine', { city: a.city, state: a.state })}{' '}
          {a.postalCode}
        </p>
        <p className="mt-1 text-center text-sm text-ink/70">
          {a.country}
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop-sm"
          >
            {t('actions.getDirections')}
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-ink/20 shadow-lg">
          <iframe
            title={t('visit.mapEmbedTitle')}
            src={mapSrc}
            className="aspect-video h-[min(50vh,400px)] w-full border-0"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
