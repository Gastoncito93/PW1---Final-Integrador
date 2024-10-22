document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente cargado.");

    // Validar formulario contacto
    const contactForm = document.getElementById("contactForm");
    console.log("contactForm:", contactForm); // Esto debería mostrar el formulario en la consola

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            validar();
        });
    } else {
        console.error("El formulario con ID 'contactForm' no se encontró.");
    }

    function validar() {
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;

        let error = false;

        // Validación de Nombre
        const nombreError = document.getElementById("nombreError");
        nombreError.style.display = "none";
        if (nombre === "" || nombre.length > 40) {
            mostrarError(nombreError, "El nombre debe tener entre 1 y 40 caracteres.");
            error = true;
        }

        // Validación de Teléfono
        const telefonoError = document.getElementById("telefonoError");
        telefonoError.style.display = "none";
        if (!validarTel(telefono)) {
            mostrarError(telefonoError, "El teléfono debe tener exactamente 10 dígitos numéricos.");
            error = true;
        }

        // Validación de Email
        const emailError = document.getElementById("emailError");
        emailError.style.display = "none";
        if (email !== "" && !validarEmail(email)) {
            mostrarError(emailError, "Ingrese un email válido.");
            error = true;
        }

        if (!error) {
            const resultado = document.getElementById("validacion");
            resultado.innerHTML = "";
            const textoResultado = document.createElement("h2");
            let mensaje = `Estimado/a ${nombre}, nos contactaremos con usted al número ${telefono}`;
            if (email) {
                mensaje += ` o al correo ${email}`;
            }

            textoResultado.innerHTML = mensaje;
            resultado.appendChild(textoResultado);
        }

        return !error;
    }

    function mostrarError(element, mensaje) {
        element.textContent = mensaje;
        element.style.display = "block";
    }

    function validarEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
        return emailRegex.test(email);
    }

    function validarTel(telefono) {
        const telRegex = /^\d{10}$/;
        return telRegex.test(telefono);
    }
});