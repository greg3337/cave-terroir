import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cave & Terroir — Épicerie Fine Bordelaise',
  description: "Vins d'exception, fromages affinés et saveurs authentiques du terroir bordelais. Sélection artisanale depuis 1987.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${raleway.variable} font-serif bg-cream text-charcoal antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
