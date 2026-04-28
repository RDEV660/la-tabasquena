import { useEffect } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import i18n from './i18n'
import { Seo } from './components/Seo'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BakeryGallery } from './components/BakeryGallery'
import { AboutSection } from './components/AboutSection'
import { VisitSection } from './components/VisitSection'
import { ContactSection } from './components/ContactSection'
import { ConnectSection } from './components/ConnectSection'
import { Footer } from './components/Footer'

function defaultLangPath(): string {
  try {
    const s = localStorage.getItem('i18n_lang')
    if (s === 'en' || s === 'es') return `/${s}`
  } catch {
    // ignore
  }
  return '/en'
}

function HomePage() {
  const { lang } = useParams()

  useEffect(() => {
    if (lang === 'en' || lang === 'es') {
      void i18n.changeLanguage(lang)
      try {
        localStorage.setItem('i18n_lang', lang)
      } catch {
        // ignore
      }
    }
  }, [lang])

  if (lang !== 'en' && lang !== 'es') {
    return <Navigate to="/en" replace />
  }

  return (
    <>
      <Seo />
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <BakeryGallery />
          <AboutSection />
          <VisitSection />
          <ContactSection />
          <ConnectSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

function RootRedirect() {
  return <Navigate to={defaultLangPath()} replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  )
}

export default App
