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
