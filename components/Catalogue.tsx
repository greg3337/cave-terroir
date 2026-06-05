'use client'

import { useState } from 'react'

type Category = 'Tous' | 'Vin Rouge' | 'Vin Blanc' | 'Fromage' | 'Conserve'

interface Product {
  id: number
  name: string
  appellation: string
  category: Exclude<Category, 'Tous'>
  year?: number
  description: string
  price: number
  unit?: string
  badge?: string
  bgGradient: string
  initial: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Château Bellefond',
    appellation: 'Saint-Émilion Grand Cru',
    category: 'Vin Rouge',
    year: 2018,
    description: 'Fruits noirs, cèdre et réglisse. Tanins soyeux d\'une rare élégance, finale de velours.',
    price: 89,
    badge: 'Coup de Cœur',
    bgGradient: 'linear-gradient(145deg, #2A0710 0%, #6B1E2C 55%, #8B2E3C 100%)',
    initial: 'B',
  },
  {
    id: 2,
    name: 'Moulin de Provence',
    appellation: 'Bordeaux AOC',
    category: 'Vin Rouge',
    year: 2021,
    description: 'Bouquet de mûre et violette. Élégant, bien structuré, remarquable rapport qualité-plaisir.',
    price: 28,
    bgGradient: 'linear-gradient(145deg, #3D1020 0%, #701A35 55%, #9B3050 100%)',
    initial: 'M',
  },
  {
    id: 3,
    name: "L'Orée du Château",
    appellation: 'Entre-Deux-Mers',
    category: 'Vin Blanc',
    year: 2022,
    description: 'Fraîcheur d\'agrumes et fleurs blanches. Sauvignon-Sémillon en parfait équilibre minéral.',
    price: 22,
    bgGradient: 'linear-gradient(145deg, #6B4A10 0%, #C9A84C 65%, #E8D5A0 100%)',
    initial: 'O',
  },
  {
    id: 4,
    name: "Comté d'Exception",
    appellation: 'Jura · Affinage 24 mois',
    category: 'Fromage',
    description: 'Cristaux de tyrosine, notes de noix torréfiée et de caramel. Excellence jurassienne.',
    price: 9.50,
    unit: '/250g',
    bgGradient: 'linear-gradient(145deg, #5C3810 0%, #A07828 60%, #D4A84C 100%)',
    initial: 'C',
  },
  {
    id: 5,
    name: 'Ossau-Iraty Fermier',
    appellation: 'Brebis des Pyrénées · AOP',
    category: 'Fromage',
    description: 'Doux et fondant, saveurs de lait frais et noisette. Affinage traditionnel 4 mois en cave.',
    price: 7.80,
    unit: '/200g',
    bgGradient: 'linear-gradient(145deg, #4A2C10 0%, #8C602A 60%, #C09050 100%)',
    initial: 'O',
  },
  {
    id: 6,
    name: 'Confit de Canard',
    appellation: 'Périgord Noir · Bocal artisanal',
    category: 'Conserve',
    description: 'Deux cuisses confites selon la recette d\'antan. Préparation familiale depuis 1953.',
    price: 14.90,
    bgGradient: 'linear-gradient(145deg, #2C1A08 0%, #5C3820 60%, #8B5C38 100%)',
    initial: 'C',
  },
]

const categories: Category[] = ['Tous', 'Vin Rouge', 'Vin Blanc', 'Fromage', 'Conserve']

const categoryAccent: Record<string, string> = {
  'Vin Rouge': 'text-bordeaux',
  'Vin Blanc': 'text-gold-dark',
  'Fromage': 'text-[#7A5A18]',
  'Conserve': 'text-[#6B4220]',
}

export default function Catalogue() {
  const [active, setActive] = useState<Category>('Tous')

  const filtered = active === 'Tous' ? products : products.filter(p => p.category === active)

  return (
    <section id="catalogue" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-bordeaux/30" />
            <span className="font-sans text-[0.58rem] tracking-[0.45em] uppercase text-bordeaux/45">Épicerie Fine</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-bordeaux/30" />
          </div>

          <h2 className="font-display text-bordeaux text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            Notre{' '}
            <em className="italic text-gold">Catalogue</em>
          </h2>

          <div className="gold-rule w-28 mx-auto mb-5" />

          <p className="font-serif text-charcoal/45 text-lg max-w-lg mx-auto">
            Une sélection rigoureuse de vins, fromages et saveurs authentiques du terroir.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-[0.58rem] tracking-[0.28em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? 'bg-bordeaux border-bordeaux text-cream'
                  : 'bg-transparent border-bordeaux/20 text-bordeaux/55 hover:border-bordeaux/45 hover:text-bordeaux'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col bg-white border border-cream-deep/60 hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-500 hover:shadow-2xl hover:shadow-bordeaux/8 cursor-pointer">
      {/* Visual area */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: product.bgGradient }}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-gold/90 px-3 py-1 z-10">
            <span className="font-sans text-[0.48rem] tracking-[0.32em] uppercase text-bordeaux-deep font-semibold">
              {product.badge}
            </span>
          </div>
        )}

        {/* Medallion */}
        <div className="flex flex-col items-center gap-2 relative z-10">
          <div className="w-[72px] h-[72px] rounded-full border border-cream/20 bg-black/15 flex items-center justify-center backdrop-blur-sm">
            <span className="font-display text-cream/80 text-3xl italic leading-none">{product.initial}</span>
          </div>
          {product.year && (
            <span className="font-sans text-[0.5rem] tracking-[0.45em] uppercase text-cream/40">
              {product.year}
            </span>
          )}
        </div>

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-bordeaux-deep/0 group-hover:bg-bordeaux-deep/15 transition-all duration-500" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className={`font-sans text-[0.52rem] tracking-[0.32em] uppercase font-medium ${categoryAccent[product.category] ?? 'text-charcoal/50'}`}>
            {product.category}
          </span>
          <span className="font-sans text-[0.48rem] tracking-wide text-charcoal/30 truncate ml-2 max-w-[150px] text-right">
            {product.appellation}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-display text-charcoal text-xl leading-tight mb-2">
          {product.name}
        </h3>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-bordeaux/12 to-transparent mb-3" />

        {/* Description */}
        <p className="font-serif italic text-charcoal/45 text-sm leading-relaxed flex-1 mb-6">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-deep/50">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-gold text-2xl leading-none">
              {product.price.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} €
            </span>
            {product.unit && (
              <span className="font-sans text-[0.5rem] text-charcoal/30">{product.unit}</span>
            )}
          </div>
          <button className="font-sans text-[0.58rem] tracking-[0.22em] uppercase px-5 py-2.5 border border-bordeaux/25 text-bordeaux/65 hover:bg-bordeaux hover:text-cream hover:border-bordeaux transition-all duration-300">
            Ajouter
          </button>
        </div>
      </div>
    </article>
  )
}
