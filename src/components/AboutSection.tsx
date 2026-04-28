import { useTranslation } from 'react-i18next'
import { getWhatsAppUrl, siteConfig } from '../config/site'

export function AboutSection() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[]
  const list = Array.isArray(paragraphs) ? paragraphs : []

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/25 bg-surface/55 px-4 py-12 backdrop-blur-sm sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="text-center font-heading text-2xl font-extrabold uppercase tracking-tight text-primary sm:text-3xl"
          style={{ fontFamily: 'var(--font-heading), ui-sans-serif' }}
        >
          {t('about.title')}
        </h2>
        <p className="mt-2 text-center text-sm font-semibold uppercase tracking-wide text-pink-vibrant">
          {t('about.specialty')}
        </p>
        <div className="mt-8 space-y-4 text-ink/90 leading-relaxed">
          {list.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mt-8 rounded-2xl border-2 border-primary/25 bg-white/85 p-5 text-center text-ink/90 shadow-lg shadow-rose-900/8 backdrop-blur-sm">
          {t('about.customCakes')}{' '}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary no-underline transition hover:text-pink-vibrant hover:underline"
          >
            {t('about.customCakesWhatsApp')}
          </a>{' '}
          {siteConfig.phoneDisplay}.
        </p>
      </div>
    </section>
  )
}
