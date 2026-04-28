import { useTranslation } from 'react-i18next'
import { Link, useParams, useLocation } from 'react-router-dom'
import { getWhatsAppUrl, siteConfig } from '../config/site'

export function Footer() {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const hash = location.hash
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-ink/90 px-4 py-8 text-surface sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-heading text-sm font-bold uppercase text-pink-pale">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-surface/80">
            {t('footer.line', { city: siteConfig.address.city })}
          </p>
          <p className="text-sm text-surface/70">
            <a
              className="text-surface no-underline hover:underline"
              href={`tel:${siteConfig.phoneTel}`}
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <a
              className="text-surface no-underline hover:underline"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('actions.whatsapp')}
            </a>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <a
              className="text-surface no-underline hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div
          className="flex items-center gap-1 rounded-full border border-surface/30 bg-ink/50 p-0.5"
          role="group"
          aria-label={t('footer.langSwitch')}
        >
          <Link
            to={`/en${hash}`}
            className={`rounded-full px-2.5 py-1.5 text-xs font-bold no-underline ${
              lang === 'en' ? 'bg-surface text-ink' : 'text-surface/80'
            }`}
          >
            {t('nav.langShortEn')}
          </Link>
          <Link
            to={`/es${hash}`}
            className={`rounded-full px-2.5 py-1.5 text-xs font-bold no-underline ${
              lang === 'es' ? 'bg-surface text-ink' : 'text-surface/80'
            }`}
          >
            {t('nav.langShortEs')}
          </Link>
        </div>
        <p className="text-xs text-surface/60 sm:self-end">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
