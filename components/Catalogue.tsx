'use client'

import { useState } from 'react'
import { useCart, Product } from '@/context/CartContext'
import { useInView } from '@/hooks/useInView'

const products: Product[] = [
  {
    id: 1,
    name: 'Château Bellefond 2018',
    category: 'Vin Rouge',
    description: 'Notes de cassis, tabac et épices douces. Grand Cru de Saint-Émilion d\'une élégance rare.',
    price: 89,
    gradient: 'linear-gradient(145deg, #2A0710 0%, #6B1E2C 55%, #8B2E3C 100%)',
    initial: 'B',
    badge: 'Coup de Cœur',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Clos des Lunes 2022',
    category: 'Vin Blanc',
    description: 'Miel d\'acacia, abricot confit et fleurs blanches. Sauternes liquoreux d\'une fraîcheur exquise.',
    price: 34,
    gradient: 'linear-gradient(145deg, #6B4A10 0%, #C9A84C 65%, #E8D5A0 100%)',
    initial: 'L',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Château Pichon 2019',
    category: 'Vin Rouge',
    description: 'Pauillac puissant et structuré. Notes de cèdre, mûre et cuir. Vieillissement en fût de chêne 18 mois.',
    price: 65,
    gradient: 'linear-gradient(145deg, #2A0710 0%, #6B1E2C 55%, #8B2E3C 100%)',
    initial: 'P',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Château Carbonnieux 2021',
    category: 'Vin Rosé',
    description: 'Frais et fruité, notes de fraise et pêche blanche. Pessac-Léognan d\'exception.',
    price: 24,
    gradient: 'linear-gradient(145deg, #4A1820 0%, #C06080 65%, #E8A0B0 100%)',
    initial: 'C',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rose_wine_-_stonesoup.jpg/400px-Rose_wine_-_stonesoup.jpg',
  },
  {
    id: 5,
    name: 'Coffret Bordeaux Prestige',
    category: 'Coffret',
    description: 'Trois bouteilles Grand Cru sélectionnées par notre sommelier, livraison sous coffret bois gravé.',
    price: 165,
    gradient: 'linear-gradient(145deg, #1A0508 0%, #4A1020 50%, #C9A84C 100%)',
    initial: 'P',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Coffret Découverte Terroir',
    category: 'Coffret',
    description: 'Six bouteilles représentant les grands appellations bordelaises : Saint-Émilion, Pauillac, Sauternes.',
    price: 120,
    gradient: 'linear-gradient(145deg, #2C1A08 0%, #5C3820 60%, #8B5C38 100%)',
    initial: 'T',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop',
  },
]

const categoryStyle: Record<string, string> = {
  'Vin Rouge': 'text-bordeaux',
  'Vin Blanc': 'text-gold-dark',
  'Vin Rosé':  'text-[#A04060]',
  'Coffret':   'text-[#5A3A10]',
}

export default function Catalogue() {
  const { ref, inView } = useInView()

  return (
    <section id="catalogue" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-bordeaux/28" />
            <span className="font-sans text-[0.58rem] tracking-[0.48em] uppercase text-bordeaux/48">Cave à Vins</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-bordeaux/28" />
          </div>
          <h2 className="font-display text-bordeaux text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            Notre <em>Sélection</em>
          </h2>
          <div className="gold-rule w-24 mx-auto mb-5" />
          <p className="font-sans text-charcoal/45 text-sm leading-relaxed max-w-md mx-auto">
            Vins d&apos;exception et coffrets prestige du terroir bordelais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const { ref, inView } = useInView()

  const handleAdd = () => {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <article
      ref={ref}
      className={`group flex flex-col bg-white border border-cream-deep/55 hover:border-gold/35 hover:-translate-y-1.5 transition-all duration-500 hover:shadow-xl hover:shadow-bordeaux/8 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Visual area */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-bordeaux-deep/20 group-hover:bg-bordeaux-deep/10 transition-all duration-500" />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold/92 px-2.5 py-1 z-10">
            <span className="font-sans text-[0.44rem] tracking-[0.35em] uppercase text-bordeaux-deep font-bold">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-2">
          <span className={`font-sans text-[0.52rem] tracking-[0.32em] uppercase font-medium ${categoryStyle[product.category] ?? 'text-charcoal/50'}`}>
            {product.category}
          </span>
        </div>
        <h3 className="font-display text-charcoal text-xl leading-tight mb-2">{product.name}</h3>
        <div className="h-px bg-gradient-to-r from-bordeaux/10 to-transparent mb-3" />
        <p className="font-sans text-charcoal/45 text-sm leading-relaxed flex-1 mb-5">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-cream-deep/50">
          <span className="font-display text-gold text-2xl leading-none">{product.price} €</span>
          <button
            onClick={handleAdd}
            className={`font-sans text-[0.58rem] tracking-[0.22em] uppercase px-4 py-2.5 border transition-all duration-300 ${
              added
                ? 'bg-bordeaux border-bordeaux text-cream'
                : 'border-bordeaux/25 text-bordeaux/65 hover:bg-bordeaux hover:border-bordeaux hover:text-cream'
            }`}
          >
            {added ? '✓ Ajouté' : 'Ajouter'}
          </button>
        </div>
      </div>
    </article>
  )
}
