let indice = 0;
const imagenes = document.querySelectorAll('.imagenes img');

function mostrarImagen() {
    imagenes.forEach((img, i) => {
        img.classList.remove('activo'); // Esconde todas las imágenes
        if (i === indice) {
            img.classList.add('activo'); // Muestra la imagen activa
        }
    });
}

function cambiarImagen(direccion) {
    indice += direccion;
    if (indice < 0) {
        indice = imagenes.length - 1; // Volver a la última imagen
    } else if (indice >= imagenes.length) {
        indice = 0; // Volver a la primera imagen
    }
    mostrarImagen();
}

// Cambia la imagen cada 3 segundos
setInterval(() => cambiarImagen(1), 3000);
