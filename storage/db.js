import { pilotos, vehiculos } from '../data/seed.js';

const PILOTOS_KEY = 'f1_pilotos';
const VEHICULOS_KEY = 'f1_vehiculos';

export const db = {
  // === Pilotos ===
getPilotos() {
    return JSON.parse(localStorage.getItem(PILOTOS_KEY)) || [];
  },

  addPiloto(piloto) {
    const pilotos = db.getPilotos();
    pilotos.push(piloto);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pilotos));
  },

  deletePiloto(id) {
    const pilotos = db.getPilotos().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pilotos));
  },

  updatePiloto(pilotoActualizado) {
    const pilotos = db.getPilotos().map(p => p.id === pilotoActualizado.id ? pilotoActualizado : p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pilotos));
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
