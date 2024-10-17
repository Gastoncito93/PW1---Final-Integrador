//carrusel

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
