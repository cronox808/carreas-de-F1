import { login, updateUI } from './auth.js';

document.getElementById("btn-login").addEventListener('click', () => {
    const user = document.getElementById("login-user").value;
    const password = document.getElementById("login-password").value;

    if (login(user, password)) {
        // Animación de éxito
        const loginWindow = document.getElementById('login-window');
        loginWindow.style.animation = 'fadeOut 0.3s forwards';

        setTimeout(() => {
            loginWindow.classList.remove('active');
            loginWindow.style.animation = '';
            updateUI();
            alert(`¡Bienvenido, ${user}!`);
        }, 300);
    } else {
        // Animación de error
        const loginContent = document.querySelector('.login-content'); // Corregido aquí
        loginContent.style.animation = 'shake 0.5s';

        setTimeout(() => {
            loginContent.style.animation = '';
            alert("Credenciales incorrectas"); // Mover el alert aquí
        }, 500);
    }
});