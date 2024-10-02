document.getElementById("contactoForm").addEventListener("submit", function(event) {
    

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const resultado = document.getElementById("resultado");

    // Validaciones extra (si es necesario)
    if (nombre && email && telefono) {
        resultado.innerHTML = `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Teléfono: ${telefono}</p>`;
    } else {
        resultado.innerHTML = "<p>Por favor, completa todos los campos correctamente.</p>";
    }
});


let index = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.imagenes img');
    imagenes[index].classList.remove('activo');

    index += direccion;

    if (index < 0) {
        index = imagenes.length - 1; // Volver al final
    } else if (index >= imagenes.length) {
        index = 0; // Volver al principio
    }

    imagenes[index].classList.add('activo');

    // Desplazar las imágenes
    const offset = -index * 100; // Ajuste basado en el índice
    document.querySelector('.imagenes').style.transform = `translateX(${offset}%)`;
}

// Opcional: cambia automáticamente cada 3 segundos
setInterval(() => cambiarImagen(1), 3000);
