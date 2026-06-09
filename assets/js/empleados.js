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

cargarEmpleados();