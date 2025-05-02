let esAdmin = false

const ADMIN_CREDENCIALES = {
    user: "admin",
    password: "f1admin2023"
}

export function login(user, password){
    esAdmin = (user === ADMIN_CREDENCIALES.user && password === ADMIN_CREDENCIALES.password)
    return esAdmin
} 

export function checkAdmin(){
    return esAdmin
}

export function logout(){
    esAdmin = false
    updateUI()
}

export function updateUI(){
    const adminBtn = document.getElementById('btn-admin')
    if(esAdmin){
        adminBtn.textContent = "salir del modo administrador"
        adminBtn.classList.add('btn-admin-active')
    }else{
        adminBtn.textContent = "modo administrador"
        adminBtn.classList.remove('btn-admin-active')
    }
}

//evento para el boton admin
document.getElementById('btn-admin').addEventListener('click', () => {
    if (esAdmin) {
        logout();
    } else {
        const loginWindow = document.getElementById('login-window');
        loginWindow.style.display = 'flex'; // Cambia primero a flex
        setTimeout(() => {
            loginWindow.classList.add('active'); // Luego activa la animación
        }, 10);
    }
});

// Cerrar ventana
document.querySelector('.close-btn').addEventListener('click',()=>{
    document.getElementById('login-window').classList.remove('active')
})


export function showLoginWindow() {
    const loginWindow = document.getElementById('login-window')
    loginWindow.style.display = 'flex'

    void loginWindow.offsetWidth

    loginWindow.classList.add('active')
}

document.getElementById('btn-login').addEventListener('click', () => {
    if(checkAdmin()){
        logout()
    }else{
        showLoginWindow()
    }
})