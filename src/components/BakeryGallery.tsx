import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { gallerySlides } from '../config/gallery'

const SLIDE_MS = 6000

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

export function BakeryGallery() {
  const { t, i18n } = useTranslation()
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const slides = gallerySlides
  const count = slides.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback(
    (dir: -1 | 1) => {
      if (count <= 1) return
      setIndex((i) => (i + dir + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (count <= 1 || reducedMotion) return
    timerRef.current = setInterval(() => go(1), SLIDE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [count, go, reducedMotion])

  return (
    <section
      id="gallery"
      className="scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="gallery-heading"
          className="text-center font-heading text-2xl font-extrabold uppercase tracking-tight text-primary sm:text-3xl"
          style={{ fontFamily: 'var(--font-heading), ui-sans-serif' }}
        >
          {t('gallery.title')}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted">
          {t('gallery.subtitle')}
        </p>

        <div className="relative mt-8 mx-auto max-w-3xl">
          {/* Outer “frame” */}
          <div
            className="rounded-[2px] p-3 shadow-2xl sm:p-4"
            style={{
              background:
                'linear-gradient(145deg, #f5e6c8 0%, #c9a227 18%, #8b6914 42%, #e8d5a3 65%, #a67c1a 100%)',
              boxShadow:
                '0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.35)',
            }}
          >
            <div className="rounded-sm border border-black/25 bg-ink/90 p-2 shadow-inner sm:p-2.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ink ring-1 ring-white/15">
                {count === 0 ? (
                  <div
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-pink-pale via-surface to-pink-pale/80 px-6 text-center"
                    role="img"
                    aria-label={t('gallery.placeholderAlt')}
                  >
                    <span
                      className="text-4xl opacity-40"
                      aria-hidden
                    >
                      🥖
                    </span>
                    <p className="max-w-sm text-sm font-medium text-ink/80">
                      {t('gallery.placeholder')}
                    </p>
                  </div>
                ) : (
                  slides.map((slide, i) => {
                    const alt = i18n.language === 'es' ? slide.altEs : slide.altEn
                    const active = i === index
                    return (
                      <figure
                        key={slide.src}
                        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                          active ? 'z-[1] opacity-100' : 'z-0 opacity-0'
                        }`}
                        aria-hidden={!active}
                      >
                        <img
                          src={slide.src}
                          alt={alt}
                          className="h-full w-full object-cover"
                          loading={i === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                        <figcaption className="sr-only">{alt}</figcaption>
                      </figure>
                    )
                  })
                )}
              </div>
            </div>
          </div>

          {count > 1 ? (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-1 sm:px-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-ink/80 text-lg font-bold text-surface shadow-lg backdrop-blur-sm transition hover:bg-ink"
                  aria-label={t('gallery.prev')}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 bg-ink/80 text-lg font-bold text-surface shadow-lg backdrop-blur-sm transition hover:bg-ink"
                  aria-label={t('gallery.next')}
                >
                  ›
                </button>
              </div>
              <div
                className="mt-4 flex flex-wrap justify-center gap-2"
                role="tablist"
                aria-label={t('gallery.dotsLabel')}
              >
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={t('gallery.goToSlide', { n: i + 1 })}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full border-2 border-ink/30 transition ${
                      i === index ? 'scale-125 bg-primary shadow-[0_0_12px_rgb(220,38,38,0.45)]' : 'bg-ink/20 hover:bg-ink/40'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
