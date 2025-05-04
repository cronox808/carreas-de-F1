// components/piloto-list.js
import { db } from '../storage/db.js';

class PilotoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const pilotos = db.getPilotos();
    this.innerHTML = `
      <h2>Lista de Pilotos</h2>
      <ul>
        ${pilotos.map(p => `
          <li>
            <strong>${p.nombre}</strong> - ${p.pais} - ${p.escuderia}
            <button data-id="${p.id}" class="edit">✏️</button>
            <button data-id="${p.id}" class="delete">🗑️</button>
          </li>
        `).join('')}
      </ul>
    `;

    this.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        db.deletePiloto(id);
        this.render();
      });
    });

    this.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const piloto = db.getPilotos().find(p => p.id === id);
        const nuevoNombre = prompt("Editar nombre", piloto.nombre);
        const nuevoPais = prompt("Editar país", piloto.pais);
        const nuevaEscuderia = prompt("Editar escudería", piloto.escuderia);

        if (nuevoNombre && nuevoPais && nuevaEscuderia) {
          db.updatePiloto({
            id,
            nombre: nuevoNombre,
            pais: nuevoPais,
            escuderia: nuevaEscuderia
          });
          this.render();
        }
      });
    });
  }
}

customElements.define('piloto-list', PilotoList);
