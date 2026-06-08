const API_AUTH = 'http://localhost:8001';
const API_EMPLEADOS = 'http://localhost:8002';
const API_INCAPACIDADES = 'http://localhost:8003';
const API_SEGUIMIENTO = 'http://localhost:8004';

function login() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (usuario === 'admin' && contrasena === 'admin123') {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('rol', 'administrador');
        window.location.href = 'pages/empleados.html';
    } else if (usuario === 'gestionhumana' && contrasena === 'gh123') {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('rol', 'gestion_humana');
        window.location.href = 'pages/empleados.html';
    } else {
        document.getElementById('error-msg').textContent = 'Usuario o contraseña incorrectos';
    }
}