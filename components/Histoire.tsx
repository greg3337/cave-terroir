'use client'

import { useInView } from '@/hooks/useInView'

export default function Histoire() {
  const { ref: leftRef, inView: leftIn } = useInView()
  const { ref: rightRef, inView: rightIn } = useInView()

  return (
    <section
      id="histoire"
      className="grain py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C0407 0%, #3D0B15 58%, #2A0710 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Text content */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${leftIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-gold/38" />
              <span className="font-sans text-[0.56rem] tracking-[0.48em] uppercase text-gold/62">Notre Histoire</span>
            </div>

            <h2 className="font-display text-cream text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6">
              L&apos;épicerie fine<br />
              <em className="italic text-gold">au cœur du terroir</em>
            </h2>

            <div className="gold-rule w-20 mb-8" />

            <p className="font-sans text-cream/52 text-[0.925rem] leading-relaxed mb-5">
              Fondée en 1987 par la famille Moreau au cœur de Bordeaux,{' '}
              <strong className="text-cream/78 font-normal">Cave &amp; Terroir</strong> est née d&apos;une passion pour
              les produits authentiques et les artisans du Sud-Ouest. Depuis quatre décennies, nous sillonnons vignobles,
              fromageries et fermes pour vous proposer le meilleur du terroir.
            </p>
            <p className="font-sans text-cream/40 text-[0.925rem] leading-relaxed mb-10">
              Chaque produit est sélectionné selon des critères stricts&nbsp;: respect des savoir-faire traditionnels,
              qualité irréprochable et engagement envers les producteurs locaux. Notre cave abrite plus de 300 références,
              toutes issues d&apos;exploitations familiales.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-5 border-t border-cream/10 pt-8">
              {[
                { number: '1987', label: 'Fondée à Bordeaux' },
                { number: '+300', label: 'Références de vins' },
                { number: '60+',  label: 'Producteurs partenaires' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p className="font-display text-gold text-3xl leading-none mb-1">{number}</p>
                  <p className="font-sans text-cream/35 text-[0.62rem] leading-snug tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative frame — desktop only */}
          <div
            ref={rightRef}
            className={`hidden lg:flex items-center justify-center transition-all duration-700 delay-200 ${rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <FrameDecoration />
          </div>

        </div>
      </div>
    </section>
  )
}

function FrameDecoration() {
  return (
    <div className="relative w-72 h-96">
      {/* Outer frame */}
      <div className="absolute inset-0 border border-gold/15" />
      <div className="absolute inset-3 border border-gold/8" />

      {/* Corner accents */}
      {[
        'top-0 left-0',
        'top-0 right-0 rotate-90',
        'bottom-0 right-0 rotate-180',
        'bottom-0 left-0 -rotate-90',
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute ${cls} w-5 h-5 border-t-2 border-l-2 border-gold/40`}
        />
      ))}

      {/* Frame content */}
      <div className="absolute inset-8 flex flex-col items-center justify-center gap-5 text-center">
        <span className="font-sans text-[0.48rem] tracking-[0.55em] uppercase text-gold/38">Depuis</span>
        <span className="font-display text-gold/75 text-[6rem] leading-none">87</span>
        <div className="gold-rule w-16" />
        <blockquote className="font-display text-cream/38 italic text-lg leading-snug">
          &ldquo;La qualité<br />n&apos;est pas une option&rdquo;
        </blockquote>
        <div className="gold-rule w-16" />
        <p className="font-sans text-[0.46rem] tracking-[0.42em] uppercase text-cream/22 leading-loose">
          Famille Moreau<br />Bordeaux
        </p>
      </div>
    </div>
  )
}
