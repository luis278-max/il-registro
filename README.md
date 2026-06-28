# Il Registro

Archivio di catalogazione delle figure dell'intrattenimento digitale. Ogni
soggetto ha una scheda con indici metrici rilevati, referto sintetico e analisi
longitudinale, in uno stile da dossier burocratico.

## Stack

- React 18
- React Router
- Tailwind CSS
- Vite

## Sviluppo

```bash
npm install
npm run dev      # server di sviluppo
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

## Struttura

```
src/
  data/personaggi.js   # dati dei soggetti catalogati
  components/           # Layout, Barra
  pages/                # Home, Scheda
  lib/format.js         # utilità di formattazione
vercel.json             # rewrites per React Router
```
