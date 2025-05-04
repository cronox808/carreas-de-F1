import './components/piloto-form.js';
import './components/piloto-list.js';
import { db } from './storage/db.js';
db.initData();


document.addEventListener('DOMContentLoaded', () => {
  const appView = document.getElementById('app-view');
  const navButtons = document.querySelectorAll('nav button');

  function render(view) {
    appView.innerHTML = '';
    switch (view) {
      case 'pilotos':
        appView.innerHTML = `<piloto-form></piloto-form><piloto-list></piloto-list>`;
        break;
      case 'vehiculos':
        appView.innerHTML = `<h2>Gestión de Vehículos (pendiente)</h2>`;
        break;
      case 'circuitos':
        appView.innerHTML = `<h2>Gestión de Circuitos (pendiente)</h2>`;
        break;
      case 'simulacion':
        appView.innerHTML = `<h2>Simulación (pendiente)</h2>`;
        break;
    }
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => render(btn.dataset.view));
  });

  render('pilotos'); // Vista por defecto
});