import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="grain relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 18% 65%, rgba(107, 30, 44, 0.55) 0%, transparent 52%),
          radial-gradient(ellipse at 82% 20%, rgba(61, 11, 21, 0.75) 0%, transparent 52%),
          radial-gradient(ellipse at 50% 95%, rgba(42, 7, 16, 0.6) 0%, transparent 45%),
          #1C0407
        `,
      }}
    >
      {/* Horizontal rule lines background decoration */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 88px,
            rgba(201, 168, 76, 0.6) 88px, rgba(201, 168, 76, 0.6) 89px
          )`,
        }}
      />

      {/* Top rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-5 mb-10 animate-fade-in delay-100">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/45" />
          <span className="font-sans text-gold/75 text-[0.58rem] tracking-[0.45em] uppercase">
            Épicerie Fine · Bordeaux
          </span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/45" />
        </div>

        {/* Main headline */}
        <h1 className="font-display leading-none mb-0">
          <span className="block text-cream text-[clamp(3.5rem,9.5vw,8.5rem)] tracking-tight animate-fade-up delay-200">
            L&apos;Art du
          </span>
          <span className="block italic text-gold text-[clamp(4rem,11vw,10rem)] tracking-tight animate-fade-up delay-300 -mt-2 md:-mt-4">
            Terroir
          </span>
        </h1>

        {/* Ornamental separator */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-8 animate-fade-in delay-400">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/35" />
          <span className="text-gold/55 text-base">✦</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/35" />
        </div>

        {/* Subtitle */}
        <p className="font-serif text-cream/55 text-[clamp(1rem,2.2vw,1.4rem)] leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-up delay-500">
          Vins d&apos;exception, fromages affinés et saveurs authentiques
          <br />
          <em>sélectionnés au cœur du vignoble bordelais</em>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-600">
          <Link
            href="#catalogue"
            className="font-sans text-[0.68rem] tracking-[0.28em] uppercase px-10 py-4 bg-gold text-bordeaux-deep hover:bg-gold-light transition-all duration-300 min-w-[220px]"
          >
            Découvrir la Sélection
          </Link>
          <Link
            href="#selection"
            className="font-sans text-[0.68rem] tracking-[0.28em] uppercase px-10 py-4 border border-cream/25 text-cream/65 hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px]"
          >
            Notre Pépite du Moment
          </Link>
        </div>
      </div>

      {/* Year badge — right side decoration */}
      <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in delay-800">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-gold/25" />
        <div className="border border-gold/25 px-3 py-4 flex flex-col items-center gap-1">
          <span className="font-sans text-[0.48rem] tracking-[0.35em] uppercase text-gold/45">Fondée en</span>
          <span className="font-display text-gold/65 text-lg leading-none">1987</span>
        </div>
        <div className="w-px h-14 bg-gradient-to-t from-transparent to-gold/25" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="font-sans text-[0.48rem] tracking-[0.45em] uppercase text-cream/25">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/20 to-transparent" />
      </div>
    </section>
  )
}
