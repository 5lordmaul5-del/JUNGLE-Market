# JUNGLE-Market 🌿

Un ecommerce moderno e responsivo costruito con **Next.js 14**, **React 18**, e **Tailwind CSS**.

## 🚀 Caratteristiche

- ✅ Design moderno e responsive
- ✅ Catalog prodotti completo
- ✅ Carrello della spesa
- ✅ Sistema di autenticazione
- ✅ Gestione ordini
- ✅ API serverless con Next.js
- ✅ Ottimizzato per SEO
- ✅ Performance alta

## 📋 Prerequisiti

- Node.js 18+
- npm o yarn

## 🛠️ Installazione

1. **Clone il repository**
```bash
git clone https://github.com/5lordmaul5-del/JUNGLE-Market.git
cd JUNGLE-Market
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Configura le variabili ambiente**
```bash
cp .env.local.example .env.local
```

4. **Avvia il server di sviluppo**
```bash
npm run dev
```

5. **Apri il browser**
```
http://localhost:3000
```

## 📁 Struttura del Progetto

```
JUNGLE-Market/
├── app/                    # App directory Next.js 14
│   ├── api/               # API Routes
│   ├── (auth)/            # Autenticazione
│   ├── (shop)/            # Ecommerce
│   ├── admin/             # Pannello admin
│   ├── layout.js          # Layout principale
│   └── page.js            # Homepage
├── components/            # Componenti React
│   ├── Header/
│   ├── Footer/
│   ├── ProductCard/
│   ├── Cart/
│   └── ...
├── lib/                   # Utility functions
├── public/                # Asset statici
├── styles/                # CSS globale
├── .env.local.example     # Variabili ambiente
├── next.config.js         # Configurazione Next.js
├── tailwind.config.js     # Configurazione Tailwind
├── package.json           # Dipendenze
└── README.md              # Questo file
```

## 🔧 Scripts Disponibili

```bash
# Sviluppo
npm run dev              # Avvia server di sviluppo

# Build
npm run build            # Build per produzione
npm start               # Avvia server produzione

# Qualità codice
npm run lint            # Linting con ESLint
npm run format          # Formatta codice con Prettier

# Test
npm run test            # Avvia test
npm run test:watch     # Test in modalità watch
```

## 🌐 Deployment su Vercel

### Metodo 1: Vercel CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Metodo 2: GitHub Integration

1. Vai su [vercel.com](https://vercel.com)
2. Importa il repository GitHub
3. Vercel auto-deployerà ad ogni push su `main`

## 📚 Documentazione

### API Routes

- `GET /api/products` - Ottieni tutti i prodotti
- `GET /api/products/[id]` - Ottieni prodotto per ID
- `POST /api/orders` - Crea un nuovo ordine
- `GET /api/orders` - Ottieni ordini utente

### Componenti Principali

- `Header` - Navigazione principale
- `ProductGrid` - Griglia prodotti
- `ProductCard` - Card singolo prodotto
- `Cart` - Carrello della spesa
- `Checkout` - Pagina checkout

## 🔐 Variabili Ambiente

Copia `.env.local.example` in `.env.local` e configura:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_NAME=JUNGLE-Market
NODE_ENV=development
```

## 🤝 Contribuire

Leggi [CONTRIBUTING.md](./CONTRIBUTING.md) per le linee guida.

## 📄 Licenza

MIT License - vedi [LICENSE](./LICENSE) file

## 👨‍💻 Autore

**5lordmaul5-del**

## 📞 Supporto

Per supporto, apri un issue su GitHub o contattami direttamente.

---

**Fatto con ❤️ per il commercio online**