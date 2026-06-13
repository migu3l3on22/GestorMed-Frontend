const API_SEGUIMIENTO = 'http://localhost:8004';

async function cargarSeguimientos() {
    try {
        const response = await fetch(`${API_SEGUIMIENTO}/seguimientos/`);
        const seguimientos = await response.json();
        const tbody = document.getElementById('tabla-seguimientos');
        tbody.innerHTML = '';
        seguimientos.forEach(seg => {
            tbody.innerHTML += `
                <tr>
                    <td>${seg.id}</td>
                    <td>${seg.incapacidad_id}</td>
                    <td>${seg.fecha}</td>
                    <td>${seg.comentario}</td>
                    <td><span class="badge badge-${seg.estado}">${seg.estado}</span></td>
                    <td>${seg.usuario_responsable}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error('Error cargando seguimientos:', error);
    }
}

async function crearSeguimiento() {
    const data = {
        incapacidad_id: parseInt(document.getElementById('incapacidad_id').value),
        fecha: document.getElementById('fecha').value,
        comentario: document.getElementById('comentario').value,
        estado: document.getElementById('estado').value,
        usuario_responsable: document.getElementById('usuario_responsable').value
    };

    try {
        const response = await fetch(`${API_SEGUIMIENTO}/seguimientos/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('msg-seguimiento').textContent = result.mensaje || 'Registrado';
        cargarSeguimientos();
    } catch (error) {
        document.getElementById('msg-seguimiento').textContent = 'Error al registrar';
        console.error(error);
    }
}

cargarSeguimientos();