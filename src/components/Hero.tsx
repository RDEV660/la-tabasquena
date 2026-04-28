import { useTranslation } from 'react-i18next'
import { getWhatsAppUrl, siteConfig } from '../config/site'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative mx-auto max-w-5xl overflow-hidden px-4 pb-12 pt-8 text-center sm:px-6 sm:pb-16 sm:pt-12"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-200/55 via-rose-200/45 to-fuchsia-300/35 blur-3xl anim-glow"
        aria-hidden
      />
      <div className="relative mb-6 flex flex-col items-center">
        <img
          src="/logo.png"
          width={360}
          height={360}
          className="anim-float mx-auto w-[min(100%,320px)] max-w-sm drop-shadow-[0_12px_32px_rgba(185,28,65,0.25)] sm:max-w-md"
          alt=""
          role="presentation"
        />
        {siteConfig.showOpenNowBadge && (
          <p className="mt-4 inline-flex w-fit max-w-md items-center gap-2 rounded-full border-2 border-primary/35 bg-white/90 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-primary shadow-md backdrop-blur-sm">
            <span
              className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_rgb(220,38,38)]"
              aria-hidden
            />
            {t('status.openNow')}
          </p>
        )}
        <h1
          id="hero-title"
          className="mt-5 text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary drop-shadow-sm sm:text-5xl"
          style={{
            fontFamily: 'var(--font-heading), ui-sans-serif, system-ui',
            textShadow:
              '0 2px 0 rgb(255 255 255 / 0.35), 0 12px 40px rgb(225 29 72 / 0.15)',
          }}
        >
          {t('hero.name')}
        </h1>
        <p className="mt-3 max-w-xl text-lg font-medium text-ink/92 sm:text-xl">
          {t('hero.tagline')}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="btn-pop-call"
          >
            {t('actions.call')}
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop-chat"
          >
            {t('actions.whatsapp')}
          </a>
          <a
            href="#visit"
            className="btn-pop-directions"
          >
            {t('actions.getDirections')}
          </a>
        </div>
      </div>
    </section>
  )
}
