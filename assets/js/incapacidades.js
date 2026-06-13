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

async function crearIncapacidad() {
    const data = {
        empleado_id: parseInt(document.getElementById('empleado_id').value),
        fecha_inicio: document.getElementById('fecha_inicio').value,
        fecha_fin: document.getElementById('fecha_fin').value,
        tipo: document.getElementById('tipo').value,
        diagnostico_general: document.getElementById('diagnostico_general').value,
        entidad_medica: document.getElementById('entidad_medica').value,
        observaciones: document.getElementById('observaciones').value,
        dias_incapacidad: parseInt(document.getElementById('dias_incapacidad').value)
    };

    try {
        const response = await fetch(`${API_INCAPACIDADES}/incapacidades/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('msg-incapacidad').textContent = result.mensaje || 'Registrado';
        cargarIncapacidades();
    } catch (error) {
        document.getElementById('msg-incapacidad').textContent = 'Error al registrar';
        console.error(error);
    }
}

cargarIncapacidades();