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
  },
  {
    id: 2,
    name: 'Clos des Lunes 2022',
    category: 'Vin Blanc',
    description: 'Miel d\'acacia, abricot confit et fleurs blanches. Sauternes liquoreux d\'une fraîcheur exquise.',
    price: 34,
    gradient: 'linear-gradient(145deg, #6B4A10 0%, #C9A84C 65%, #E8D5A0 100%)',
    initial: 'L',
  },
  {
    id: 3,
    name: 'Comté Fort du Crêt',
    category: 'Fromage',
    description: 'Affinage 24 mois. Cristaux de tyrosine, notes de noix torréfiée et de caramel fumé.',
    price: 18,
    gradient: 'linear-gradient(145deg, #5C3810 0%, #A07828 60%, #D4A84C 100%)',
    initial: 'C',
  },
  {
    id: 4,
    name: 'Ossau-Iraty Fermier',
    category: 'Fromage',
    description: 'Brebis des Pyrénées AOP, affinage 6 mois. Doux, fondant, saveurs de lait frais et noisette.',
    price: 14,
    gradient: 'linear-gradient(145deg, #4A2C10 0%, #8C602A 60%, #C09050 100%)',
    initial: 'O',
  },
  {
    id: 5,
    name: 'Coffret Bordeaux Prestige',
    category: 'Coffret',
    description: 'Deux bouteilles Grand Cru, terrine de foie gras artisanale et confiture de figues du Lot.',
    price: 65,
    gradient: 'linear-gradient(145deg, #1A0508 0%, #4A1020 50%, #C9A84C 100%)',
    initial: 'P',
    badge: 'Bestseller',
  },
  {
    id: 6,
    name: 'Coffret Terroir & Saveurs',
    category: 'Coffret',
    description: 'Confit de canard, rillettes de bœuf, moutarde à l\'ancienne et miel de garrigues du Périgord.',
    price: 42,
    gradient: 'linear-gradient(145deg, #2C1A08 0%, #5C3820 60%, #8B5C38 100%)',
    initial: 'T',
  },
]

const categoryStyle: Record<string, string> = {
  'Vin Rouge': 'text-bordeaux',
  'Vin Blanc': 'text-gold-dark',
  'Fromage':   'text-[#7A5A18]',
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
            <span className="font-sans text-[0.58rem] tracking-[0.48em] uppercase text-bordeaux/48">Épicerie Fine</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-bordeaux/28" />
          </div>
          <h2 className="font-display text-bordeaux text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            Notre <em>Sélection</em>
          </h2>
          <div className="gold-rule w-24 mx-auto mb-5" />
          <p className="font-sans text-charcoal/45 text-sm leading-relaxed max-w-md mx-auto">
            Vins d&apos;exception, fromages affinés et coffrets gourmands du terroir.
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
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{ background: product.gradient }}
      >
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold/92 px-2.5 py-1 z-10">
            <span className="font-sans text-[0.44rem] tracking-[0.35em] uppercase text-bordeaux-deep font-bold">
              {product.badge}
            </span>
          </div>
        )}
        <div className="w-[68px] h-[68px] rounded-full border border-cream/18 bg-black/15 backdrop-blur-sm flex items-center justify-center relative z-10">
          <span className="font-display text-cream/82 text-2xl italic leading-none">{product.initial}</span>
        </div>
        <div className="absolute inset-0 bg-bordeaux-deep/0 group-hover:bg-bordeaux-deep/12 transition-all duration-500" />
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
