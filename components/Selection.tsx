export default function Selection() {
  return (
    <section
      id="selection"
      className="grain relative py-24 md:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1C0407 0%, #3D0B15 55%, #2A0710 100%)',
      }}
    >
      {/* Decorative concentric circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 hidden lg:block pointer-events-none">
        {[600, 500, 400, 300].map((size, i) => (
          <div
            key={size}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.06]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-gold/35" />
              <span className="font-sans text-[0.55rem] tracking-[0.45em] uppercase text-gold/65">
                Notre Pépite du Moment
              </span>
            </div>

            {/* Category */}
            <p className="font-sans text-[0.58rem] tracking-[0.38em] uppercase text-bordeaux-muted mb-3">
              Vin Rouge · Saint-Émilion Grand Cru
            </p>

            {/* Product name */}
            <h2 className="font-display text-cream text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] mb-1">
              Château
            </h2>
            <h2 className="font-display italic text-gold text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.95] mb-7">
              Bellefond
            </h2>

            {/* Tags */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <div className="border border-gold/35 px-3 py-1.5">
                <span className="font-sans text-[0.55rem] tracking-widest text-gold/80 uppercase">Millésime 2018</span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gold text-sm leading-none">★</span>
                ))}
              </div>
              <span className="font-sans text-[0.55rem] text-cream/30 tracking-wider">96 / 100</span>
            </div>

            {/* Description */}
            <p className="font-serif text-cream/55 text-lg leading-relaxed mb-10 max-w-lg">
              Un grand millésime d&apos;exception, issu des meilleures parcelles argilo-calcaires de Saint-Émilion.
              Élevé 18 mois en barriques de chêne neuf, ce vin révèle une profondeur aromatique incomparable —{' '}
              <em>l&apos;essence même du terroir bordelais.</em>
            </p>

            {/* Tasting notes */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-t border-b border-cream/10 py-6">
              {[
                { label: 'Robe', value: 'Grenat profond, reflets pourpres' },
                { label: 'Nez', value: 'Fruits noirs, truffe, vanille dorée' },
                { label: 'Bouche', value: 'Tanins veloutés, longue finale' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-sans text-[0.52rem] tracking-[0.3em] uppercase text-gold/55 mb-1.5">{label}</p>
                  <p className="font-serif text-cream/60 text-sm leading-snug italic">{value}</p>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex items-center gap-6 flex-wrap">
              <span className="font-display text-gold text-4xl leading-none">89 €</span>
              <button className="font-sans text-[0.62rem] tracking-[0.28em] uppercase px-8 py-4 bg-gold text-bordeaux-deep hover:bg-gold-light transition-colors duration-300">
                Ajouter au Panier
              </button>
              <button className="font-sans text-[0.62rem] tracking-[0.28em] uppercase px-8 py-4 border border-cream/20 text-cream/50 hover:border-gold/40 hover:text-gold/70 transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Decorative medallion — right */}
          <div className="hidden lg:flex items-center justify-center">
            <ChateauMedallion />
          </div>
        </div>
      </div>
    </section>
  )
}

function ChateauMedallion() {
  return (
    <div className="relative w-80 h-80 flex-shrink-0">
      {/* Rotating outer ring */}
      <div className="absolute inset-0 rounded-full border border-gold/15 animate-spin-slow" />

      {/* Static rings */}
      <div className="absolute inset-3 rounded-full border border-gold/10" />
      <div className="absolute inset-6 rounded-full border border-gold/08" />

      {/* Dot markers on outer ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const r = 47
        return (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/25"
            style={{
              top: `calc(50% - ${r * Math.cos(angle)}%)`,
              left: `calc(50% + ${r * Math.sin(angle)}%)`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )
      })}

      {/* Inner medallion content */}
      <div className="absolute inset-10 rounded-full bg-bordeaux/30 border border-gold/25 backdrop-blur-sm flex flex-col items-center justify-center gap-2 p-8">
        <span className="font-sans text-[0.48rem] tracking-[0.4em] uppercase text-gold/50">Grand Cru Classé</span>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
        <span className="font-display text-cream/85 italic text-2xl text-center leading-snug">
          Château<br />Bellefond
        </span>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
        <span className="font-sans text-[0.52rem] tracking-[0.5em] text-gold/60 uppercase">2018</span>
        <span className="font-sans text-[0.42rem] tracking-[0.3em] text-gold/30 uppercase">· Saint-Émilion ·</span>
      </div>
    </div>
  )
}
