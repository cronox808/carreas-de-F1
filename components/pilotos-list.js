import { getPilotos, savePilotos } from '../data/seed.js';

class PilotoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const pilotos = getPilotos();
    this.innerHTML = `
      <ul>
        ${pilotos.map(p => `
          <li>
            <strong>${p.nombre}</strong> - ${p.equipo}
            <button data-id="${p.id}">Eliminar</button>
          </li>
        `).join('')}
      </ul>
    `;
    this.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', () => this.eliminarPiloto(btn.dataset.id))
    );
  }

  eliminarPiloto(id) {
    let pilotos = getPilotos();
    pilotos = pilotos.filter(p => p.id != id);
    savePilotos(pilotos);
    this.render();
  }
}

customElements.define('piloto-list', PilotoList);
