let esAdmin = false;

const ADMIN_CREDENCIALES = {
    user: "admin",
    password: "f1admin2023"
};

// Función de login
export function login(user, password) {
    esAdmin = (user === ADMIN_CREDENCIALES.user && password === ADMIN_CREDENCIALES.password);
    return esAdmin;
}

export function checkAdmin() {
    return esAdmin;
}

export function logout() {
    esAdmin = false;
    updateUI();
}

export function updateUI() {
    const adminBtn = document.getElementById('btn-admin');
    if (esAdmin) {
        adminBtn.textContent = "Salir del modo administrador";
        adminBtn.classList.add('btn-admin-active');
    } else {
        adminBtn.textContent = "Modo administrador";
        adminBtn.classList.remove('btn-admin-active');
    }
    
    // Actualizar la vista de pilotos al cambiar el estado de admin
    if (typeof renderPilotos === 'function') {
        renderPilotos();
    }
}

// Mostrar ventana de login
export function showLoginWindow() {
    const loginWindow = document.getElementById('login-window');
    loginWindow.style.display = 'flex';
    void loginWindow.offsetWidth; // Forzar reflow
    loginWindow.classList.add('active');
}

// Ocultar ventana de login
export function hideLoginWindow() {
    const loginWindow = document.getElementById('login-window');
    loginWindow.classList.remove('active');
    setTimeout(() => {
        loginWindow.style.display = 'none';
    }, 300); // Coincide con la duración de la animación
}

// Evento del botón admin
document.getElementById('btn-admin').addEventListener('click', () => {
    if (checkAdmin()) {
        logout();
    } else {
        showLoginWindow();
    }
});

// Evento del botón cerrar
document.querySelector('.close-btn').addEventListener('click', hideLoginWindow);

// Evento del botón login (¡CORREGIDO!)
document.getElementById('btn-login').addEventListener('click', () => {
    const user = document.getElementById('login-user').value;
    const password = document.getElementById('login-password').value;
    
    if (login(user, password)) {
        hideLoginWindow();
        updateUI();
        alert("¡Bienvenido, Administrador!");
    } else {
        // Animación de error
        const loginContent = document.querySelector('.login-content');
        loginContent.classList.add('shake');
        setTimeout(() => {
            loginContent.classList.remove('shake');
        }, 500);
        alert("Credenciales incorrectas");
    }
});