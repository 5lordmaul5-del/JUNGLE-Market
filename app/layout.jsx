import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'JUNGLE-Market - Ecommerce Moderno',
  description: 'Scopri i migliori prodotti su JUNGLE-Market, l\'ecommerce moderno e responsivo.',
  keywords: 'ecommerce, negozio online, prodotti, shopping',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}