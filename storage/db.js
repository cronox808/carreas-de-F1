import { pilotos, vehiculos } from '../data/seed.js';

const PILOTOS_KEY = 'f1_pilotos';
const VEHICULOS_KEY = 'f1_vehiculos';

export const db = {
  // === Pilotos ===
  getPilotos() {
    return JSON.parse(localStorage.getItem(PILOTOS_KEY)) || [];
  },
  savePilotos(pilotos) {
    localStorage.setItem(PILOTOS_KEY, JSON.stringify(pilotos));
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
  },

  // === Vehículos ===
  getVehiculos() {
    return JSON.parse(localStorage.getItem(VEHICULOS_KEY)) || [];
  },
  saveVehiculos(vehiculos) {
    localStorage.setItem(VEHICULOS_KEY, JSON.stringify(vehiculos));
  },
  addVehiculo(vehiculo) {
    const vehiculos = this.getVehiculos();
    vehiculo.id = Date.now();
    vehiculos.push(vehiculo);
    this.saveVehiculos(vehiculos);
  },
  deleteVehiculo(id) {
    const vehiculos = this.getVehiculos().filter(v => v.id !== id);
    this.saveVehiculos(vehiculos);
  },
  updateVehiculo(vehiculoEditado) {
    const vehiculos = this.getVehiculos().map(v =>
      v.id === vehiculoEditado.id ? vehiculoEditado : v
    );
    this.saveVehiculos(vehiculos);
  },

  // === Inicialización ===
  initData() {
    if (!localStorage.getItem(PILOTOS_KEY)) {
      this.savePilotos(pilotos);
    }
    if (!localStorage.getItem(VEHICULOS_KEY)) {
      this.saveVehiculos(vehiculos);
    }
  }
};
