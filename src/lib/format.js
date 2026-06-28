// Utilità di formattazione condivise dal Registro.

const MESI = [
  'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
  'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
];

// "2026-01-14" -> "14 gennaio 2026"
export function dataEstesa(iso) {
  const [anno, mese, giorno] = iso.split('-').map(Number);
  return `${giorno} ${MESI[mese - 1]} ${anno}`;
}

// Numero di protocollo deterministico: RG-2026-001
export function protocollo(indice, iso) {
  const anno = iso.split('-')[0];
  return `RG-${anno}-${String(indice + 1).padStart(3, '0')}`;
}
