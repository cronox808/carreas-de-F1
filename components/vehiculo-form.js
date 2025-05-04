// components/vehiculo-form.js
import { db } from '../storage/db.js';

class VehiculoForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2>Agregar Vehículo</h2>
      <form id="form-vehiculo">
        <input type="text" name="modelo" placeholder="Modelo" required />
        <input type="text" name="escuderia" placeholder="Escudería" required />
        <input type="number" name="potencia" placeholder="Potencia (HP)" required />
        <button type="submit">Guardar</button>
      </form>
    `;

    this.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      const form = e.target;
      const vehiculo = {
        modelo: form.modelo.value.trim(),
        escuderia: form.escuderia.value.trim(),
        potencia: parseInt(form.potencia.value)
      };

      if (vehiculo.modelo && vehiculo.escuderia && vehiculo.potencia > 0) {
        db.addVehiculo(vehiculo);
        form.reset();
        document.querySelector('vehiculo-list')?.render();
      }
    });
  }
}

customElements.define('vehiculo-form', VehiculoForm);
