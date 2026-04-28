import { useTranslation } from 'react-i18next'
import { Link, useParams, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

const sections = [
  { id: 'gallery', key: 'nav.gallery' as const },
  { id: 'about', key: 'nav.about' as const },
  { id: 'visit', key: 'nav.visit' as const },
  { id: 'contact', key: 'nav.contact' as const },
  { id: 'connect', key: 'nav.connect' as const },
] as const

export function Header() {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const hash = location.hash

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/65 shadow-md backdrop-blur-xl supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          to={`/${lang}`}
          className="flex items-center gap-2 text-left no-underline transition duration-200 hover:opacity-90"
        >
          <img
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-lg object-contain drop-shadow-sm"
          />
          <span
            className="font-heading text-sm font-bold uppercase leading-tight tracking-wide text-ink sm:text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {siteConfig.name}
          </span>
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2"
          aria-label="Primary"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="nav-chip"
            >
              {t(s.key)}
            </a>
          ))}
          <div
            className="ms-1 flex items-center gap-0.5 rounded-full border-2 border-primary/15 bg-white/70 p-0.5 shadow-sm backdrop-blur-sm"
            role="group"
            aria-label={t('footer.langSwitch')}
          >
            <Link
              to={`/en${hash}`}
              className={`rounded-full px-2.5 py-1.5 text-xs font-bold no-underline transition sm:px-3 ${
                lang === 'en'
                  ? 'bg-gradient-to-br from-primary to-pink-vibrant text-white shadow-md'
                  : 'text-ink/70 hover:bg-white/80'
              }`}
            >
              {t('nav.langShortEn')}
            </Link>
            <Link
              to={`/es${hash}`}
              className={`rounded-full px-2.5 py-1.5 text-xs font-bold no-underline transition sm:px-3 ${
                lang === 'es'
                  ? 'bg-gradient-to-br from-primary to-pink-vibrant text-white shadow-md'
                  : 'text-ink/70 hover:bg-white/80'
              }`}
            >
              {t('nav.langShortEs')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
