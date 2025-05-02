import { PilotosCRUD, Auth } from './auth.js';

export const renderPilotos = () => {
    const container = document.getElementById('pilotos-container');
    const pilotos = PilotosCRUD.get();
    
    container.innerHTML = pilotos.map(piloto => `
        <div class="piloto-card" data-id="${piloto.id}">
            <h3>${piloto.nombre}</h3>
            <p>${piloto.equipo}</p>
            ${Auth.checkAdmin() ? `
                <button class="btn-edit" data-id="${piloto.id}">✏️</button>
                <button class="btn-delete" data-id="${piloto.id}">🗑️</button>
            ` : ''}
        </div>
    `).join('');
    
    // Eventos para botones
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            PilotosCRUD.delete(Number(e.target.dataset.id));
            renderPilotos();
        });
    });
};