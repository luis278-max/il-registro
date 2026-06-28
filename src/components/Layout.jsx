import { Link } from 'react-router-dom';

// Intestazione e piè di pagina comuni, in stile documento d'archivio.
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b-2 border-ink bg-card/70 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span>Archivio centrale di catalogazione</span>
            <span className="hidden sm:inline">Classificazione — riservato</span>
          </div>
          <Link to="/" className="block border-t border-line py-4">
            <h1 className="font-mono text-2xl font-bold uppercase tracking-[0.2em] sm:text-3xl">
              Il&nbsp;Registro
            </h1>
            <p className="mt-1 text-sm text-muted">
              Catalogazione e referto delle figure dell'intrattenimento digitale
            </p>
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>

      <footer className="border-t-2 border-ink">
        <div className="mx-auto max-w-5xl px-4 py-4 font-mono text-[10px] uppercase tracking-widest text-muted sm:px-6">
          Il Registro · Documento generato automaticamente · Nessun valore probatorio
        </div>
      </footer>
    </div>
  );
}
