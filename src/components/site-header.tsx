'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Lösungsbeispiele', href: '#leistungen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Vorgehen', href: '#vorgehen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) {
        setIsMenuOpen(false)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <Link href="/" className="site-logo-card" aria-label="Recura Startseite">
        <Image
          src="/recura-assets/recura-logo.jpg"
          alt="Recura"
          width={160}
          height={48}
          className="site-logo-image"
          priority
        />
      </Link>

      <nav className="site-nav-pill" aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="site-nav-link">
            {item.label}
          </a>
        ))}
        <a href="#kontakt" className="site-nav-cta">
          Erstgespräch vereinbaren <span aria-hidden="true">→</span>
        </a>
      </nav>

      <button
        type="button"
        className="mobile-menu-button"
        aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className={isMenuOpen ? 'is-open' : ''} />
        <span className={isMenuOpen ? 'is-open' : ''} />
      </button>

      <nav
        id="mobile-navigation"
        className={`mobile-menu-panel ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile Hauptnavigation"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#kontakt" className="mobile-menu-cta" onClick={() => setIsMenuOpen(false)}>
          Erstgespräch vereinbaren <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  )
}
