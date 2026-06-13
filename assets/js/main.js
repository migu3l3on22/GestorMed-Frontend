const API_AUTH = 'http://localhost:8001';
const API_EMPLEADOS = 'http://localhost:8002';
const API_INCAPACIDADES = 'http://localhost:8003';
const API_SEGUIMIENTO = 'http://localhost:8004';

async function login() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const errorMsg = document.getElementById('error-msg');

    try {
        const response = await fetch(`${API_AUTH}/usuarios/`);
        const usuarios = await response.json();

        const encontrado = usuarios.find(u => u.usuario === usuario);

        if (!encontrado) {
            errorMsg.textContent = 'Usuario no encontrado';
            return;
        }

        localStorage.setItem('usuario', encontrado.usuario);
        localStorage.setItem('rol', encontrado.rol);
        window.location.href = 'pages/empleados.html';

    } catch (error) {
        errorMsg.textContent = 'Error conectando con el servidor de autenticación';
        console.error(error);
    }
}