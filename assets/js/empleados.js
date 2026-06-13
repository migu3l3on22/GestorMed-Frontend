const API_EMPLEADOS = 'http://localhost:8002';

async function cargarEmpleados() {
    try {
        const response = await fetch(`${API_EMPLEADOS}/empleados/`);
        const empleados = await response.json();
        const tbody = document.getElementById('tabla-empleados');
        tbody.innerHTML = '';
        empleados.forEach(emp => {
            tbody.innerHTML += `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.nombres}</td>
                    <td>${emp.apellidos}</td>
                    <td>${emp.documento}</td>
                    <td>${emp.cargo}</td>
                    <td>${emp.area}</td>
                    <td><span class="badge badge-${emp.estado}">${emp.estado}</span></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Error cargando empleados:', error);
    }
}

async function crearEmpleado() {
    const data = {
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        documento: document.getElementById('documento').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        cargo: document.getElementById('cargo').value,
        area: document.getElementById('area').value,
        fecha_ingreso: document.getElementById('fecha_ingreso').value
    };

    try {
        const response = await fetch(`${API_EMPLEADOS}/empleados/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('msg-empleado').textContent = result.mensaje || 'Registrado';
        cargarEmpleados();
    } catch (error) {
        document.getElementById('msg-empleado').textContent = 'Error al registrar';
        console.error(error);
    }
}

cargarEmpleados();