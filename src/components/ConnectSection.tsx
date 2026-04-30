import { useTranslation } from 'react-i18next'
import { siteConfig } from '../config/site'
import { FacebookIcon } from './FacebookIcon'

export function ConnectSection() {
  const { t } = useTranslation()
  const n = siteConfig.reviews.count
  const rating = siteConfig.reviews.ratingValue
  const mapsUrl = siteConfig.mapsPlaceUrl
  const f = siteConfig.social.facebookUrl
  const hasExternal = mapsUrl.length > 0 || (f && f.length > 0)

  return (
    <section
      id="connect"
      className="scroll-mt-20 border-t border-white/20 bg-surface/45 px-4 py-12 backdrop-blur-sm sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="font-heading text-2xl font-extrabold uppercase tracking-tight text-primary sm:text-3xl"
          style={{ fontFamily: 'var(--font-heading), ui-sans-serif' }}
        >
          {t('connect.title')}
        </h2>
        <p className="mt-4 text-lg text-ink/90" role="status">
          {t('connect.reviewsLine', { rating, count: n })}
        </p>
        {hasExternal ? (
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {mapsUrl ? (
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-primary/35 bg-white/90 px-5 py-2 text-sm font-bold text-primary no-underline shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                >
                  {t('connect.googleMaps')}
                </a>
              </li>
            ) : null}
            {f ? (
              <li>
                <a
                  href={f}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-[#1877f2]/40 bg-[#1877f2] px-5 py-2 text-sm font-bold text-white no-underline shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#166fe5]/55 hover:bg-[#166fe5] hover:shadow-md"
                  aria-label={t('connect.facebookAria')}
                >
                  <FacebookIcon className="h-4 w-4 shrink-0 text-white" />
                  {t('connect.facebook')}
                </a>
              </li>
            ) : null}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-ink/75">{t('connect.addLinksHint')}</p>
        )}
      </div>
    </section>
  )
}
