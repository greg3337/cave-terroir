'use client'

export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#110305' }}>
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-14">

          {/* Brand + address */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <span className="font-display text-gold text-[0.74rem] tracking-[0.45em] uppercase leading-tight">Cave</span>
              <div className="w-16 h-px bg-gradient-to-r from-gold/52 to-transparent my-[3px]" />
              <span className="font-display text-cream/72 text-[0.74rem] tracking-[0.45em] uppercase leading-tight italic">
                &amp; Terroir
              </span>
            </div>
            <p className="font-sans text-cream/32 text-sm leading-relaxed mb-7 max-w-xs">
              Épicerie fine bordelaise fondée en 1987. Sélection artisanale de vins, fromages et spécialités du terroir.
            </p>
            <div className="space-y-1.5 mb-6">
              <p className="font-sans text-[0.54rem] tracking-[0.18em] uppercase text-cream/22">
                12 rue du Chapeau Rouge, 33000 Bordeaux
              </p>
              <p className="font-sans text-[0.54rem] tracking-[0.18em] uppercase text-cream/22">
                contact@cave-terroir.fr · 05 56 44 22 00
              </p>
            </div>
            <div className="flex gap-4">
              {['Instagram', 'Facebook'].map(s => (
                <a key={s} href="#" className="font-sans text-[0.52rem] tracking-[0.28em] uppercase text-cream/22 hover:text-gold transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-sans text-[0.58rem] tracking-[0.42em] uppercase text-gold/58 mb-7">
              Horaires
            </h3>
            <ul className="space-y-2">
              {[
                { day: 'Lun – Ven', hours: '9h00 – 19h30' },
                { day: 'Samedi',    hours: '9h00 – 20h00' },
                { day: 'Dimanche',  hours: '10h00 – 13h00' },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between py-1.5 border-b border-cream/[0.06]">
                  <span className="font-sans text-[0.6rem] tracking-widest uppercase text-cream/32">{day}</span>
                  <span className="font-display italic text-gold/55 text-sm">{hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="font-sans text-[0.58rem] tracking-[0.42em] uppercase text-gold/58 mb-5">
                Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {['La Cave', 'Vins', 'Fromages', 'Coffrets', 'Notre Histoire', 'Contact'].map(l => (
                  <li key={l}>
                    <a href="#" className="font-sans text-cream/30 hover:text-cream/65 transition-colors text-[0.8rem] tracking-wide">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans text-[0.58rem] tracking-[0.42em] uppercase text-gold/58 mb-5">
              La Lettre du Sommelier
            </h3>
            <p className="font-sans text-cream/32 text-sm leading-relaxed mb-6">
              Nos conseils de dégustation, nouvelles arrivées et événements de la cave — chaque mois.
            </p>
            <form className="flex mb-8" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 min-w-0 bg-transparent border border-cream/12 border-r-0 px-3 py-3 font-sans text-[0.65rem] text-cream/52 placeholder:text-cream/18 focus:outline-none focus:border-gold/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-bordeaux-deep font-sans text-[0.55rem] tracking-[0.22em] uppercase px-4 hover:bg-gold-light transition-colors duration-300 shrink-0"
              >
                OK
              </button>
            </form>

            {/* Trust badge */}
            <div className="border border-cream/8 px-4 py-4">
              <p className="font-sans text-[0.52rem] tracking-[0.28em] uppercase text-gold/45 mb-2">Paiement sécurisé</p>
              <p className="font-sans text-cream/22 text-xs leading-relaxed">
                SSL · Visa · Mastercard · PayPal<br />
                Livraison France entière en 48h
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/[0.07] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[0.5rem] tracking-[0.25em] uppercase text-cream/17">
            © 2024 Cave &amp; Terroir — Tous droits réservés
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {['Mentions légales', 'CGV', 'Confidentialité'].map(l => (
              <a key={l} href="#" className="font-sans text-[0.5rem] tracking-[0.18em] uppercase text-cream/17 hover:text-cream/40 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <p className="font-sans text-[0.44rem] tracking-[0.14em] uppercase text-cream/12">
            L&apos;abus d&apos;alcool est dangereux pour la santé
          </p>
        </div>
      </div>
    </footer>
  )
}
