import { useTranslation } from 'react-i18next'
import { getWhatsAppUrl, siteConfig } from '../config/site'

type HoursRow = { line: string; time: string }

export function ContactSection() {
  const { t } = useTranslation()
  const hoursGrouped = t('contact.hoursGrouped', { returnObjects: true }) as HoursRow[]
  const rows = Array.isArray(hoursGrouped) ? hoursGrouped : []

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center font-heading text-2xl font-extrabold uppercase tracking-tight text-primary sm:text-3xl"
          style={{ fontFamily: 'var(--font-heading), ui-sans-serif' }}
        >
          {t('contact.title')}
        </h2>
        <ul className="mx-auto mt-8 grid max-w-lg gap-4 sm:max-w-none sm:grid-cols-1">
          <li className="rounded-2xl border-2 border-primary/15 bg-white/90 p-5 shadow-lg shadow-rose-900/5 backdrop-blur-sm transition duration-300 hover:border-primary/25 hover:shadow-xl">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              {t('contact.phone')}
            </p>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-1 block break-all text-lg font-semibold text-ink no-underline transition hover:text-primary"
            >
              {siteConfig.phoneDisplay}
            </a>
          </li>
          <li className="rounded-2xl border-2 border-pink-vibrant/35 bg-white/90 p-5 shadow-lg shadow-rose-900/5 backdrop-blur-sm transition duration-300 hover:border-primary/30 hover:shadow-xl">
            <p className="text-sm font-bold uppercase tracking-wide text-pink-vibrant">
              {t('contact.whatsapp')}
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block break-all text-lg font-semibold text-ink no-underline transition hover:text-primary"
            >
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-ink/75">{t('contact.whatsappHint')}</p>
          </li>
          <li className="rounded-2xl border-2 border-primary/15 bg-white/90 p-5 shadow-md backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              {t('contact.email')}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block break-all text-lg font-semibold text-ink no-underline transition hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </li>
          <li className="rounded-2xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/95 via-orange-50/80 to-rose-50/90 p-5 shadow-inner">
            <p className="text-sm font-bold uppercase tracking-wide text-accent">
              {t('contact.hours')}
            </p>
            <ul className="mt-3 space-y-2">
              {rows.map((row, i) => (
                <li
                  key={`${row.line}-${i}`}
                  className="flex flex-col gap-0.5 border-b border-amber-900/10 pb-2 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-medium text-ink">{row.line}</span>
                  <span className="text-ink/85">{row.time}</span>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <p className="mt-6 text-center text-sm text-ink/70">
          {siteConfig.name}
        </p>
      </div>
    </section>
  )
}
