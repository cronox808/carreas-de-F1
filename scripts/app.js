import { pilotos, circuitos } from './data.js';
import { checkAdmin, logout, login } from './auth.js';
import { PilotosManager } from '.crud.js'
import { renderPilotos } from '.dom.js'

document.getElementById('form-login').addEventLister('submit', (e) => {
    e.preventDefault()

    const nuevoPiloto ={
        nombre: document.getElementById('input-nombre').value,
        equipo: document.getElementById('input-equipo').value
    } 

    if (PilotosManager.addPiloto(nuevoPiloto)) {
        renderPilotos()
        e.target.reset()
    }
})



document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = e.target.getAttribute('data-view');
        loadView(view);
    });
});

// Login simulado
document.getElementById('btn-login').addEventListener('click', () => {
    const password = document.getElementById('login-password').value;
    if (login(password)) {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('btn-logout').style.display = 'block';
        alert("¡Bienvenido, Administrador!");
        loadView('pilotos');
    }
});

function loadView(view) {
    const app = document.getElementById('app');
    switch(view) {
        case 'pilotos':
            app.innerHTML = `
                <h2>🏁 Pilotos</h2>
                ${checkAdmin() ? `
                    <div class="form-piloto">
                        <input type="text" id="input-nombre" placeholder="Nombre" class="input-field">
                        <input type="text" id="input-equipo" placeholder="Equipo" class="input-field">
                        <button id="btn-agregar" class="btn">Agregar</button>
                    </div>
                ` : ''}
                <div id="pilotos-container" class="pilotos-grid"></div>
            `;
            if (checkAdmin()) setupFormulario();
            renderPilotos();
            break;
        case 'circuitos':
            app.innerHTML = `<h2>Circuitos</h2>`;
            break;
        case 'simulacion':
            app.innerHTML = `<canvas id="pista" width="800" height="400"></canvas>`;
            initCanvas();
            break;
        default:
            app.innerHTML = `<p class="welcome-message">Selecciona una sección del menú.</p>`;
    }
}

function setupFormulario() {
    document.getElementById('btn-agregar').addEventListener('click', () => {
        const nombre = document.getElementById('input-nombre').value.trim();
        const equipo = document.getElementById('input-equipo').value.trim();
        if (nombre && equipo) {
            const nuevoPiloto = { id: Date.now(), nombre, equipo };
            pilotos.push(nuevoPiloto);
            renderPilotos();
            document.getElementById('input-nombre').value = '';
            document.getElementById('input-equipo').value = '';
        }
    });
}



// Función global para eliminar
window.eliminarPiloto = function(id) {
    const index = pilotos.findIndex(p => p.id === id);
    if (index !== -1) {
        pilotos.splice(index, 1);
        renderPilotos();
    }
};

// Inicialización
loadView('');
renderPilotos();