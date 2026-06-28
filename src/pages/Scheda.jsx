import { Link, useParams } from 'react-router-dom';
import { personaggi } from '../data/personaggi';
import { dataEstesa, protocollo } from '../lib/format';
import Barra from '../components/Barra';

function Storico({ storico }) {
  const max = Math.max(...storico.dati.map((d) => d.valore));
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
        {storico.label}
      </p>
      <div className="mt-3 flex items-end gap-2 sm:gap-3" style={{ height: 140 }}>
        {storico.dati.map((d) => {
          const h = Math.max(6, Math.round((d.valore / max) * 120));
          return (
            <div key={d.anno} className="flex flex-1 flex-col items-center justify-end">
              <span className="mb-1 font-mono text-[10px] font-semibold tabular-nums text-ink">
                {d.valore}
              </span>
              <div
                className="w-full border border-ink bg-critico/70"
                style={{ height: h }}
              />
              <span className="mt-1 font-mono text-[10px] text-muted">{d.anno}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Scheda() {
  const { id } = useParams();
  const indice = personaggi.findIndex((p) => p.id === id);
  const p = personaggi[indice];

  if (!p) {
    return (
      <div className="border border-line bg-card p-8 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-muted">
          Scheda non presente in archivio
        </p>
        <Link
          to="/"
          className="mt-4 inline-block font-mono text-sm font-semibold text-critico underline"
        >
          ← Torna al registro
        </Link>
      </div>
    );
  }

  const correlati = p.correlati
    .map((cid) => personaggi.find((x) => x.id === cid))
    .filter(Boolean);

  return (
    <article>
      <Link
        to="/"
        className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-ink"
      >
        ← Registro
      </Link>

      {/* Intestazione scheda */}
      <header className="mt-3 border-2 border-ink bg-card">
        <div className="flex items-center justify-between border-b border-line px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted sm:px-6">
          <span>Scheda {protocollo(indice, p.dataCatalogazione)}</span>
          <span>Catalogato il {dataEstesa(p.dataCatalogazione)}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-6">
          <div>
            <h1 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
              {p.nome}
            </h1>
            <p className="mt-1 text-sm text-muted">{p.categoria}</p>
          </div>
          <span className="timbro text-xs">Soggetto critico</span>
        </div>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        {/* Metriche */}
        <section className="lg:col-span-3 border border-line bg-card p-5 sm:p-6">
          <h2 className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest">
            Indici rilevati
          </h2>
          <div className="space-y-4">
            {p.metriche.map((m) => (
              <Barra key={m.id} metrica={m} evidenza={m.id === p.metricaEvidenza} />
            ))}
          </div>
        </section>

        {/* Referto sintetico */}
        <section className="lg:col-span-2 border-2 border-critico bg-critico/5 p-5 sm:p-6">
          <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-critico">
            Referto sintetico
          </h2>
          <p className="text-sm leading-relaxed text-ink/90">{p.giudizioSintetico}</p>
        </section>
      </div>

      {/* Storico */}
      <section className="mt-6 border border-line bg-card p-5 sm:p-6">
        <h2 className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest">
          Analisi longitudinale
        </h2>
        <Storico storico={p.storicoMetrica} />
      </section>

      {/* Correlati */}
      {correlati.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 border-b border-line pb-2 font-mono text-sm font-semibold uppercase tracking-widest">
            Soggetti correlati
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {correlati.map((c) => (
              <Link
                key={c.id}
                to={`/scheda/${c.id}`}
                className="flex items-center justify-between border border-line bg-card px-4 py-3
                  transition hover:border-ink hover:shadow-[3px_3px_0_0_rgba(22,25,28,1)]"
              >
                <span className="font-mono text-sm font-semibold">{c.nome}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  Apri scheda →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
