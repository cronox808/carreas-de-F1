import { checkAdmin } from './auth.js';

export const PilotosManager = {
    getPilotos: () => {
        const pilotos = localStorage.getItem('pilotos');
        return pilotos ? JSON.parse(pilotos) : [];
    },

    addPiloto: (nuevoPiloto) => {
        if (!checkAdmin()) {
            alert("Acceso denegado: se requieren permisos de administrador");
            return false;
        }
        
        const pilotos = this.getPilotos();
        pilotos.push({ ...nuevoPiloto, id: Date.now() });
        localStorage.setItem('pilotos', JSON.stringify(pilotos));
        return true;
    },

    deletePiloto: (id) => {
        if (!checkAdmin()) {
            alert("Acceso denegado: se requieren permisos de administrador");
            return false;
        }
        
        const pilotos = this.getPilotos().filter(p => p.id !== id);
        localStorage.setItem('pilotos', JSON.stringify(pilotos));
        return true;
    }
};