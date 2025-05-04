import { getPilotos, savePilotos } from '../data/seed.js';

class PilotoForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="piloto-form">
        <input type="text" id="nombre" placeholder="Nombre del piloto" required />
        <input type="text" id="equipo" placeholder="Equipo" required />
        <button>Agregar piloto</button>
      </form>
    `;
    this.querySelector('form').addEventListener('submit', this.addPiloto);
  }

  addPiloto(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const equipo = document.getElementById('equipo').value.trim();
    if (!nombre || !equipo) return;

    const pilotos = getPilotos();
    pilotos.push({ id: Date.now(), nombre, equipo });
    savePilotos(pilotos);

    document.getElementById('nombre').value = '';
    document.getElementById('equipo').value = '';
    document.querySelector('piloto-list').render();
  }
}

customElements.define('piloto-form', PilotoForm);
