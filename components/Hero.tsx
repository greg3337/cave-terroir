import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="grain relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 18% 65%, rgba(107,30,44,0.5) 0%, transparent 52%),
          radial-gradient(ellipse at 82% 22%, rgba(61,11,21,0.7) 0%, transparent 52%),
          radial-gradient(ellipse at 50% 95%, rgba(42,7,16,0.55) 0%, transparent 44%),
          #2A0710
        `,
      }}
    >
      {/* Subtle horizontal rule lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 88px, rgba(201,168,76,0.6) 88px, rgba(201,168,76,0.6) 89px)`,
        }}
      />

      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-5 mb-10 animate-fade-in delay-100">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="font-sans text-gold/75 text-[0.58rem] tracking-[0.5em] uppercase">
            Bordeaux · Depuis 1987
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Main headline */}
        <h1 className="font-display leading-none mb-6">
          <span className="block text-cream text-[clamp(3.2rem,9vw,8rem)] tracking-tight animate-fade-up delay-200">
            L&apos;excellence du
          </span>
          <span className="block italic text-gold text-[clamp(3.8rem,10.5vw,9.5rem)] tracking-tight animate-fade-up delay-300 -mt-2 md:-mt-4">
            terroir bordelais
          </span>
        </h1>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 my-8 animate-fade-in delay-400">
          <div className="h-px w-18 bg-gradient-to-r from-transparent to-gold/38" />
          <span className="text-gold/52 text-sm">✦</span>
          <div className="h-px w-18 bg-gradient-to-l from-transparent to-gold/38" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-cream/52 text-[clamp(0.875rem,1.8vw,1.1rem)] leading-relaxed max-w-lg mx-auto mb-12 animate-fade-up delay-500">
          Cave à vins bordelaise — vins d&apos;exception et coffrets prestige,<br className="hidden sm:block" />
          sélectionnés au cœur du vignoble bordelais.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-600">
          <Link
            href="#catalogue"
            className="font-sans text-[0.7rem] tracking-[0.3em] uppercase px-10 py-4 bg-gold text-bordeaux-deep hover:bg-gold-light active:scale-[0.98] transition-all duration-300 min-w-[230px] text-center"
          >
            Découvrir la cave
          </Link>
          <Link
            href="#histoire"
            className="font-sans text-[0.7rem] tracking-[0.3em] uppercase px-10 py-4 border border-cream/22 text-cream/62 hover:border-gold hover:text-gold transition-all duration-300 min-w-[230px] text-center"
          >
            Notre histoire
          </Link>
        </div>
      </div>

      {/* Year badge — desktop decoration */}
      <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in delay-700">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/22" />
        <div className="border border-gold/22 px-3 py-4 text-center">
          <div className="font-sans text-[0.44rem] tracking-[0.38em] uppercase text-gold/42 mb-0.5">Fondée en</div>
          <div className="font-display text-gold/65 text-lg leading-none">1987</div>
        </div>
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-gold/22" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="font-sans text-[0.46rem] tracking-[0.48em] uppercase text-cream/22">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/18 to-transparent" />
      </div>
    </section>
  )
}
