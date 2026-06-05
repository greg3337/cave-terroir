'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Vins', href: '#catalogue' },
  { label: 'Fromages', href: '#catalogue' },
  { label: 'Épicerie Fine', href: '#catalogue' },
  { label: 'Notre Histoire', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-bordeaux-dark/95 backdrop-blur-sm py-3 shadow-2xl shadow-bordeaux-deep/60'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center select-none" aria-label="Cave & Terroir accueil">
          <span className="font-display text-gold text-[0.7rem] tracking-[0.45em] uppercase leading-tight">Cave</span>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent my-[3px]" />
          <span className="font-display text-cream text-[0.7rem] tracking-[0.45em] uppercase leading-tight italic">
            &amp; Terroir
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navigation principale">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative font-sans text-[0.62rem] tracking-[0.25em] uppercase text-cream/65 hover:text-gold transition-colors duration-300 group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Cart */}
        <button className="flex items-center gap-3 group" aria-label="Panier d'achats">
          <span className="hidden sm:block font-sans text-[0.58rem] tracking-[0.3em] uppercase text-cream/50 group-hover:text-gold transition-colors duration-300">
            Panier
          </span>
          <div className="relative">
            <CartIcon className="w-[18px] h-[18px] text-cream/60 group-hover:text-gold transition-colors duration-300" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-gold rounded-full flex items-center justify-center">
              <span className="font-sans text-[7px] text-bordeaux-deep font-bold leading-none">0</span>
            </span>
          </div>
        </button>
      </div>
    </header>
  )
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
