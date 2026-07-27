'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      {/* Product Image */}
      <div className="relative w-full h-48 mb-4 bg-gray-200 rounded-lg overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Immagine non disponibile
          </div>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-bold text-dark mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <span className="text-yellow-400">★</span>
        <span className="text-gray-600 text-sm ml-2">
          {product.rating || 4.5} ({product.reviews || 0} recensioni)
        </span>
      </div>

      {/* Price & Stock */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-bold text-primary">${product.price}</p>
          {product.originalPrice && (
            <p className="text-gray-400 line-through text-sm">${product.originalPrice}</p>
          )}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            product.stock > 0
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : 'Esaurito'}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Link href={`/products/${product.id}`} className="btn-primary flex-1 text-center">
          Dettagli
        </Link>
        <button
          className={`btn-secondary flex-1 ${
            product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={product.stock === 0}
        >
          🛒 Aggiungi
        </button>
      </div>
    </div>
  );
}