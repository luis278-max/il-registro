// Barra di una singola metrica nello stile referto.
export default function Barra({ metrica, evidenza = false }) {
  const pct = Math.max(2, Math.round((metrica.valore / metrica.massimo) * 100));

  return (
    <div className={evidenza ? 'rounded-sm bg-critico/5 -mx-2 px-2 py-1.5' : ''}>
      <div className="flex items-baseline justify-between gap-3 font-mono text-[11px] sm:text-xs">
        <span className="uppercase tracking-wide text-muted">{metrica.label}</span>
        <span
          className={
            'font-semibold tabular-nums ' +
            (metrica.critico ? 'text-critico' : 'text-ink')
          }
        >
          {metrica.valore}
          {metrica.unita}
        </span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-sm border border-line bg-paper">
        <div
          className={'h-full ' + (metrica.critico ? 'bg-critico' : 'bg-ink')}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
