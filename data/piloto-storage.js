const STORAGE_KEY = 'f1_pilotos';

export function getPilotos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function savePilotos(pilotos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pilotos));
}
