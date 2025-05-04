// components/vehiculo-list.js
import { db } from '../storage/db.js';

class VehiculoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const vehiculos = db.getVehiculos();
    this.innerHTML = `
      <h2>Lista de Vehículos</h2>
      <ul>
        ${vehiculos.map(v => `
          <li>
            <strong>${v.modelo}</strong> - ${v.escuderia} - ${v.potencia} HP
            <button data-id="${v.id}" class="edit">✏️</button>
            <button data-id="${v.id}" class="delete">🗑️</button>
          </li>
        `).join('')}
      </ul>
    `;

    this.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        db.deleteVehiculo(id);
        this.render();
      });
    });

    this.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const vehiculo = db.getVehiculos().find(v => v.id === id);
        const nuevoModelo = prompt("Editar modelo", vehiculo.modelo);
        const nuevaEscuderia = prompt("Editar escudería", vehiculo.escuderia);
        const nuevaPotencia = parseInt(prompt("Editar potencia", vehiculo.potencia));

        if (nuevoModelo && nuevaEscuderia && nuevaPotencia > 0) {
          db.updateVehiculo({
            id,
            modelo: nuevoModelo,
            escuderia: nuevaEscuderia,
            potencia: nuevaPotencia
          });
          this.render();
        }
      });
    });
  }
}

customElements.define('vehiculo-list', VehiculoList);
