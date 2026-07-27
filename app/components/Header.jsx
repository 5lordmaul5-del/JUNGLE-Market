'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          🌿 JUNGLE-Market
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/products" className="text-dark hover:text-primary transition">
            Prodotti
          </Link>
          <Link href="/categories" className="text-dark hover:text-primary transition">
            Categorie
          </Link>
          <Link href="/about" className="text-dark hover:text-primary transition">
            Chi Siamo
          </Link>
          <Link href="/contact" className="text-dark hover:text-primary transition">
            Contatti
          </Link>
        </div>

        {/* Cart & Auth */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/cart"
            className="relative p-2 text-dark hover:text-primary transition"
          >
            🛒 Carrello
          </Link>
          <Link href="/auth/login" className="btn-primary">
            Accedi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <div className="flex flex-col gap-4">
            <Link href="/products" className="text-dark hover:text-primary">
              Prodotti
            </Link>
            <Link href="/categories" className="text-dark hover:text-primary">
              Categorie
            </Link>
            <Link href="/about" className="text-dark hover:text-primary">
              Chi Siamo
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary">
              Contatti
            </Link>
            <Link href="/cart" className="text-dark hover:text-primary">
              🛒 Carrello
            </Link>
            <Link href="/auth/login" className="btn-primary block text-center">
              Accedi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}