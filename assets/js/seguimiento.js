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

cargarSeguimientos();