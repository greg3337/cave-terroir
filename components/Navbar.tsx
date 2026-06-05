'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'La Cave', href: '#catalogue' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { count, openCart } = useCart()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bordeaux-dark/95 backdrop-blur-sm py-3 shadow-xl shadow-bordeaux-deep/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center select-none" aria-label="Cave & Terroir">
          <span className="font-display text-gold text-[0.72rem] tracking-[0.45em] uppercase leading-tight">Cave</span>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent my-[3px]" />
          <span className="font-display text-cream text-[0.72rem] tracking-[0.45em] uppercase leading-tight italic">
            &amp; Terroir
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Navigation principale">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-cream/65 hover:text-gold transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px bg-gold w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </nav>

        {/* Cart trigger */}
        <button
          onClick={openCart}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label={`Ouvrir le panier — ${count} article${count !== 1 ? 's' : ''}`}
        >
          <span className="hidden sm:block font-sans text-[0.62rem] tracking-[0.28em] uppercase text-cream/55 group-hover:text-gold transition-colors duration-300">
            Panier
          </span>
          <div className="relative">
            <BagIcon className="w-5 h-5 text-cream/60 group-hover:text-gold transition-colors duration-300" />
            <span
              className={`absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-gold rounded-full flex items-center justify-center px-1 transition-transform duration-300 ${count > 0 ? 'scale-100' : 'scale-0'}`}
              aria-hidden="true"
            >
              <span className="font-sans text-[9px] text-bordeaux-deep font-bold leading-none">{count}</span>
            </span>
          </div>
        </button>

      </div>
    </header>
  )
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  )
}
