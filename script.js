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
setInterval(() => cambiarImagen(1), 5000);


// Validar formulario contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validar(); 
});

function validar() {
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");

    let error = false;

    const nombreError = document.getElementById("nombreError");
    nombreError.style.display = "none";
    if (nombre.value === "" || nombre.value.length > 30) {
        nombreError.textContent = "El nombre de nombre no es válido.";
        nombreError.style.display = "block";
        error = true;
    }

    const telefonoError = document.getElementById("telefonoError");
    telefonoError.style.display = "none";
    if (!validarTel(telefono.value)) {
        telefonoError.textContent = "El teléfono debe tener exactamente 10 dígitos numéricos.";
        telefonoError.style.display = "block";
        error = true;
    }

    const emailError = document.getElementById("emailError");
    emailError.style.display = "none"; 
    if (email.value === "" || !validarEmail(email.value)) { 
        emailError.textContent = "Ingrese un email válido.";
        emailError.style.display = "block";
        error = true;
    }

    if (!error) {
        const resultado = document.getElementById("validacion");
        resultado.innerHTML = "";
        let textoResultado = document.createElement("h2");
        textoResultado.innerHTML = "Estaremos en contacto.";
        resultado.appendChild(textoResultado);
    }

    return !error;
}
function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
    return emailRegex.test(email);
}
function validarTel(telefono) {
    const telRegex = /^\d{10}$/; 
    return telRegex.test(telefono); 
}
