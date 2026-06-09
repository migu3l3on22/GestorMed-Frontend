const API_INCAPACIDADES = 'http://localhost:8003';

async function cargarIncapacidades() {
    try {
        const response = await fetch(`${API_INCAPACIDADES}/incapacidades/`);
        const incapacidades = await response.json();
        const tbody = document.getElementById('tabla-incapacidades');
        tbody.innerHTML = '';
        incapacidades.forEach(inc => {
            tbody.innerHTML += `
                <tr>
                    <td>${inc.id}</td>
                    <td>${inc.empleado_id}</td>
                    <td>${inc.fecha_inicio}</td>
                    <td>${inc.fecha_fin}</td>
                    <td>${inc.tipo}</td>
                    <td>${inc.dias_incapacidad}</td>
                    <td><span class="badge badge-${inc.estado}">${inc.estado}</span></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Error cargando incapacidades:', error);
    }
}

cargarIncapacidades();