'use client'

import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, count } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 bg-bordeaux-deep/55 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Votre panier"
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-2xl shadow-bordeaux-deep/40 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-deep">
          <div>
            <h2 className="font-display text-bordeaux text-2xl tracking-wide">Votre Panier</h2>
            <p className="font-sans text-charcoal/40 text-xs tracking-widest mt-0.5 uppercase">
              {count === 0 ? 'Aucun article' : `${count} article${count > 1 ? 's' : ''}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            aria-label="Fermer le panier"
            className="w-9 h-9 flex items-center justify-center rounded-full text-charcoal/35 hover:text-bordeaux hover:bg-bordeaux/8 transition-all duration-200"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

        {/* Items list */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
              <EmptyCartIcon className="w-14 h-14 text-cream-deep" />
              <div>
                <p className="font-display text-charcoal/35 text-2xl italic mb-1">Votre panier est vide</p>
                <p className="font-sans text-charcoal/30 text-xs tracking-wide">Ajoutez des produits depuis notre sélection</p>
              </div>
              <button
                onClick={closeCart}
                className="font-sans text-[0.65rem] tracking-[0.28em] uppercase px-7 py-3 bg-bordeaux text-cream hover:bg-bordeaux-light transition-colors duration-300 mt-2"
              >
                Découvrir la sélection
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-cream-deep/60 px-6 py-2">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  {/* Mini visual */}
                  <div
                    className="w-14 h-14 shrink-0 rounded flex items-center justify-center overflow-hidden"
                    style={{ background: product.gradient }}
                  >
                    <span className="font-display text-cream/80 text-xl italic">{product.initial}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[0.52rem] tracking-[0.3em] uppercase text-bordeaux/60 mb-0.5">
                      {product.category}
                    </p>
                    <h4 className="font-display text-charcoal text-[1.05rem] leading-tight truncate">
                      {product.name}
                    </h4>
                    <p className="font-display text-gold text-base mt-1 leading-none">
                      {(product.price * quantity).toFixed(2)} €
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-col items-end gap-2.5 shrink-0">
                    <button
                      onClick={() => removeItem(product.id)}
                      aria-label={`Supprimer ${product.name}`}
                      className="text-charcoal/25 hover:text-bordeaux transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                    <div className="flex items-center border border-cream-deep">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        aria-label="Diminuer la quantité"
                        className="w-7 h-7 flex items-center justify-center font-sans text-sm text-charcoal/50 hover:bg-bordeaux hover:text-cream transition-colors duration-200"
                      >
                        −
                      </button>
                      <span className="font-sans text-sm w-6 text-center text-charcoal/70 select-none">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        aria-label="Augmenter la quantité"
                        className="w-7 h-7 flex items-center justify-center font-sans text-sm text-charcoal/50 hover:bg-bordeaux hover:text-cream transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-cream-deep bg-white/40">
            <div className="flex items-center justify-between mb-5">
              <span className="font-sans text-[0.62rem] tracking-[0.28em] uppercase text-charcoal/45">
                Total
              </span>
              <span className="font-display text-bordeaux text-2xl leading-none">
                {total.toFixed(2)} €
              </span>
            </div>
            <button className="w-full font-sans text-[0.7rem] tracking-[0.28em] uppercase py-4 bg-bordeaux text-cream hover:bg-bordeaux-light active:scale-[0.98] transition-all duration-300">
              Passer commande
            </button>
            <button
              onClick={closeCart}
              className="w-full font-sans text-[0.6rem] tracking-[0.22em] uppercase py-3 text-charcoal/35 hover:text-bordeaux transition-colors duration-200 mt-1"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="2" y1="2" x2="14" y2="14" />
      <line x1="14" y1="2" x2="2" y2="14" />
    </svg>
  )
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  )
}

function EmptyCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8h4l6 28h28l4-20H18" />
      <circle cx="26" cy="52" r="3" />
      <circle cx="44" cy="52" r="3" />
    </svg>
  )
}
