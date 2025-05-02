import { login, updateUI, showLoginWindow } from './auth.js';

document.getElementById('btn-login').addEventListener('click', () => {
    const loginWindow = document.getElementById('login-window');
    const loginContent = document.querySelector('.login-content')
    const user = document.getElementById("login-user").value;
    const password = document.getElementById("login-password").value;
    
    if (login(user, password)) {
        // 1. Animación de salida
        loginWindow.style.animation = 'fadeOut 0.3s forwards';
        
        // 2. Remover completamente después de la animación
        setTimeout(() => {
            loginWindow.style.display = 'none';
            loginWindow.style.animation = '';
            loginWindow.classList.remove('active');
            updateUI();
            alert(`¡Bienvenido, ${user}!`)
            
            // 3. Limpiar inputs
            document.getElementById('login-user').value = '';
            document.getElementById('login-password').value = '';
            
            updateUI();
        }, 300);
    } else {
        const loginContent = document.querySelector('.login-content');
        loginContent.style.animation = 'shake 0.5s';

        setTimeout(() => {
            loginContent.style.animation = '';
            alert(`Usuario o contraseña incorrectos.`)
        }, 500)
    }
});