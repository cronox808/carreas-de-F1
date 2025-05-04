// storage/db.js
import { pilotos } from '../data/seed.js';

const PILOTOS_KEY = 'f1_pilotos';

export const db = {
  getPilotos() {
    return JSON.parse(localStorage.getItem(PILOTOS_KEY)) || [];
  },

  savePilotos(pilotos) {
    localStorage.setItem(PILOTOS_KEY, JSON.stringify(pilotos));
  },

  initData() {
    if (!localStorage.getItem(PILOTOS_KEY)) {
      this.savePilotos(pilotos);
    }
  },

  addPiloto(piloto) {
    const pilotos = this.getPilotos();
    piloto.id = Date.now();
    pilotos.push(piloto);
    this.savePilotos(pilotos);
  },

  deletePiloto(id) {
    const pilotos = this.getPilotos().filter(p => p.id !== id);
    this.savePilotos(pilotos);
  },

  updatePiloto(pilotoEditado) {
    const pilotos = this.getPilotos().map(p =>
      p.id === pilotoEditado.id ? pilotoEditado : p
    );
    this.savePilotos(pilotos);
  }
};
