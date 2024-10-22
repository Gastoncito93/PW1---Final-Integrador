//carrusel

function mostrarImagen() {
    const imgElement = document.getElementById('imagen');
    if (imgElement) {
        imgElement.src = imagenes[index]; // Asegúrate de que 'imagenes' y 'index' estén definidos
    } else {
        console.error("El elemento con ID 'imagen' no se encontró.");
    }
}
const imagenes = [
    'img/hoja.jpg',
    'img/mosaico.jpg',
    'img/ojo.jpg'
];

let index = 0;

function mostrarImagen() {
    const imgElement = document.getElementById('imagen');
    imgElement.src = imagenes[index];
}

function cambiarImagen(n) {
    index = (index + n + imagenes.length) % imagenes.length;
    mostrarImagen();
}
mostrarImagen();

