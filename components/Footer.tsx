'use client'

const quickLinks = [
  'Vins Rouges',
  'Vins Blancs',
  'Fromages Affinés',
  'Conserves & Épicerie',
  'Coffrets Cadeaux',
  'Notre Histoire',
]

export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#110305' }}>
      {/* Gold rule at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10 md:pt-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <span className="font-display text-gold text-[0.72rem] tracking-[0.45em] uppercase leading-tight">Cave</span>
              <div className="w-16 h-px bg-gradient-to-r from-gold/55 to-transparent my-[3px]" />
              <span className="font-display text-cream/75 text-[0.72rem] tracking-[0.45em] uppercase leading-tight italic">
                &amp; Terroir
              </span>
            </div>

            <p className="font-serif text-cream/35 text-sm leading-relaxed max-w-xs mb-8">
              Épicerie fine bordelaise fondée en 1987. Nous sélectionnons avec passion les meilleurs vins,
              fromages et spécialités du terroir pour vous offrir l&apos;excellence à chaque dégustation.
            </p>

            <div className="flex gap-5">
              {['Instagram', 'Facebook', 'Pinterest'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-[0.52rem] tracking-[0.3em] uppercase text-cream/25 hover:text-gold transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans text-[0.58rem] tracking-[0.4em] uppercase text-gold/60 mb-7">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-serif text-cream/35 hover:text-cream/70 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans text-[0.58rem] tracking-[0.4em] uppercase text-gold/60 mb-7">
              La Lettre du Sommelier
            </h3>
            <p className="font-serif text-cream/35 text-sm leading-relaxed mb-6">
              Nos conseils de dégustation, les nouvelles arrivées et les événements de la cave, chaque mois.
            </p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 bg-transparent border border-cream/15 border-r-0 px-4 py-3 font-sans text-[0.65rem] text-cream/55 placeholder:text-cream/18 focus:outline-none focus:border-gold/30 transition-colors min-w-0"
              />
              <button
                type="submit"
                className="bg-gold text-bordeaux-deep font-sans text-[0.55rem] tracking-[0.22em] uppercase px-5 whitespace-nowrap hover:bg-gold-light transition-colors duration-300 shrink-0"
              >
                S&apos;abonner
              </button>
            </form>

            {/* Contact */}
            <div className="mt-8 space-y-2">
              <p className="font-sans text-[0.52rem] tracking-[0.2em] uppercase text-cream/20">
                12 Cours de l&apos;Intendance, 33000 Bordeaux
              </p>
              <p className="font-sans text-[0.52rem] tracking-[0.2em] uppercase text-cream/20">
                contact@cave-terroir.fr · 05 56 00 00 00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[0.52rem] tracking-[0.28em] uppercase text-cream/18">
            © 2024 Cave &amp; Terroir — Tous droits réservés
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {['Mentions Légales', 'CGV', 'Confidentialité'].map(link => (
              <a
                key={link}
                href="#"
                className="font-sans text-[0.52rem] tracking-[0.2em] uppercase text-cream/18 hover:text-cream/40 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="font-sans text-[0.46rem] tracking-[0.18em] uppercase text-cream/12 text-center md:text-right">
            L&apos;abus d&apos;alcool est dangereux pour la santé
          </p>
        </div>
      </div>
    </footer>
  )
}
