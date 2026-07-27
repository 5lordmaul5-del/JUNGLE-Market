'use client';

import Link from 'next/link';
import ProductCard from './components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Prodotto Premium 1',
    description: 'Descrizione del prodotto premium 1 con qualità eccezionale',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://via.placeholder.com/300x300?text=Product+1',
    rating: 4.5,
    reviews: 128,
    stock: 15,
  },
  {
    id: 2,
    name: 'Prodotto Premium 2',
    description: 'Descrizione del prodotto premium 2 con design moderno',
    price: 39.99,
    originalPrice: null,
    image: 'https://via.placeholder.com/300x300?text=Product+2',
    rating: 4.8,
    reviews: 256,
    stock: 8,
  },
  {
    id: 3,
    name: 'Prodotto Premium 3',
    description: 'Descrizione del prodotto premium 3 con tecnologia avanzata',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://via.placeholder.com/300x300?text=Product+3',
    rating: 4.2,
    reviews: 64,
    stock: 20,
  },
  {
    id: 4,
    name: 'Prodotto Premium 4',
    description: 'Descrizione del prodotto premium 4 con garanzia completa',
    price: 34.99,
    originalPrice: null,
    image: 'https://via.placeholder.com/300x300?text=Product+4',
    rating: 4.6,
    reviews: 189,
    stock: 0,
  },
  {
    id: 5,
    name: 'Prodotto Premium 5',
    description: 'Descrizione del prodotto premium 5 con servizio eccellente',
    price: 44.99,
    originalPrice: 59.99,
    image: 'https://via.placeholder.com/300x300?text=Product+5',
    rating: 4.7,
    reviews: 312,
    stock: 12,
  },
  {
    id: 6,
    name: 'Prodotto Premium 6',
    description: 'Descrizione del prodotto premium 6 con funzioni innovative',
    price: 54.99,
    originalPrice: null,
    image: 'https://via.placeholder.com/300x300?text=Product+6',
    rating: 4.4,
    reviews: 95,
    stock: 7,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🌿 Benvenuto in JUNGLE-Market</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Scopri i migliori prodotti con sconti incredibili
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Inizia lo Shopping
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Perché Scegliere JUNGLE-Market?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Spedizione Veloce</h3>
              <p className="text-gray-600">Consegna in 24-48 ore su tutto il territorio</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Pagamento Sicuro</h3>
              <p className="text-gray-600">Transazioni protette con i migliori standard di sicurezza</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Prezzi Competitivi</h3>
              <p className="text-gray-600">I migliori prezzi del mercato con sconti esclusivi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Prodotti in Evidenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              Visualizza Tutti i Prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Iscriviti alla Newsletter</h2>
          <p className="mb-6">Ricevi i migliori sconti e le novità direttamente nella tua email</p>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg text-dark"
            />
            <button className="btn-secondary">Iscriviti</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Cosa Dicono i Nostri Clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Servizio eccellente! I prodotti sono di qualità superiore e la spedizione è stata velocissima. Consiglio vivamente JUNGLE-Market!"
                </p>
                <p className="font-bold text-dark">Cliente Soddisfatto {i}</p>
                <p className="text-gray-600 text-sm">Utente Verificato</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}