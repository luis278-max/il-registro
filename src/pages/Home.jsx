import { Link } from 'react-router-dom';
import { personaggi } from '../data/personaggi';
import { dataEstesa, protocollo } from '../lib/format';

function SchedaCard({ p, indice }) {
  const evidenza = p.metriche.find((m) => m.id === p.metricaEvidenza);
  const critici = p.metriche.filter((m) => m.critico).length;
  const pct = Math.round((evidenza.valore / evidenza.massimo) * 100);

  return (
    <Link
      to={`/scheda/${p.id}`}
      className="group flex flex-col border border-line bg-card transition
        hover:-translate-y-0.5 hover:border-ink hover:shadow-[4px_4px_0_0_rgba(22,25,28,1)]"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>{protocollo(indice, p.dataCatalogazione)}</span>
        {critici > 0 && <span className="timbro">Critico</span>}
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <h2 className="font-mono text-lg font-bold tracking-tight group-hover:text-critico">
          {p.nome}
        </h2>
        <p className="mt-1 text-xs text-muted">{p.categoria}</p>

        <div className="mt-4">
          <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-wide text-muted">
            <span>{evidenza.label}</span>
            <span className="font-semibold text-critico tabular-nums">
              {evidenza.valore}
              {evidenza.unita}
            </span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-sm border border-line bg-paper">
            <div className="h-full bg-critico" style={{ width: `${Math.max(2, pct)}%` }} />
          </div>
        </div>

        <div className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-widest text-muted">
          Catalogato il {dataEstesa(p.dataCatalogazione)}
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="mb-8 border border-line bg-card p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Premessa metodologica
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/80">
          Il presente archivio raccoglie le schede di catalogazione dei soggetti
          operanti nel comparto dell'intrattenimento digitale. Ciascun profilo è
          corredato da indici metrici rilevati, analisi longitudinale e referto
          sintetico. I dati hanno finalità documentaristica e non costituiscono
          giudizio di valore sulle persone.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 font-mono text-[11px] text-muted">
          <span>
            Soggetti catalogati:{' '}
            <span className="font-semibold text-ink">{personaggi.length}</span>
          </span>
          <span>
            Stato registro: <span className="font-semibold text-ink">aggiornato</span>
          </span>
        </div>
      </section>

      <div className="mb-4 flex items-baseline justify-between border-b border-line pb-2">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-widest">
          Soggetti catalogati
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {personaggi.length} schede
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {personaggi.map((p, i) => (
          <SchedaCard key={p.id} p={p} indice={i} />
        ))}
      </div>
    </>
  );
}
