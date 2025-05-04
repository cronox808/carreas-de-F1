// components/piloto-form.js
import { db } from '../storage/db.js';

class PilotoForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2>Agregar Piloto</h2>
      <form id="form-piloto">
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="text" name="pais" placeholder="País" required />
        <input type="text" name="escuderia" placeholder="Escudería" required />
        <button type="submit">Guardar</button>
      </form>
    `;

    this.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      const form = e.target;
      const nuevoPiloto = {
        nombre: form.nombre.value.trim(),
        pais: form.pais.value.trim(),
        escuderia: form.escuderia.value.trim()
      };

      if (nuevoPiloto.nombre && nuevoPiloto.pais && nuevoPiloto.escuderia) {
        db.addPiloto(nuevoPiloto);
        form.reset();
        document.querySelector('piloto-list')?.render(); // Recarga lista
      }
    });
  }
}

customElements.define('piloto-form', PilotoForm);
