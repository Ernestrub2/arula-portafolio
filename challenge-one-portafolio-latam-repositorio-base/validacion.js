//Haz tú validación en javascript acá
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="form"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = form.querySelector('input[name="nombre"]');
        const email = form.querySelector('input[name="email"]');
        const asunto = form.querySelector('input[name="asunto"]');
        const mensaje = form.querySelector('textarea[name="mensaje"]');

        if (validateForm(nombre, email, asunto, mensaje)) {
            alert('Formulario enviado con éxito');
            form.reset();
        }
    });

    function validateForm(nombre, email, asunto, mensaje) {
        if (!validateName(nombre.value)) {
            alert('Por favor, ingrese un nombre válido');
            nombre.focus();
            return false;
        }

        if (!validateEmail(email.value)) {
            alert('Por favor, ingrese un correo electrónico válido');
            email.focus();
            return false;
        }

        if (!validateAsunto(asunto.value)) {
            alert('Por favor, ingrese un asunto válido');
            asunto.focus();
            return false;
        }

        if (!validateMensaje(mensaje.value)) {
            alert('Por favor, ingrese un mensaje válido');
            mensaje.focus();
            return false;
        }

        return true;
    }

    function validateName(name) {
        return name.trim().length > 0;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateAsunto(asunto) {
        return asunto.trim().length > 0;
    }

    function validateMensaje(mensaje) {
        return mensaje.trim().length > 0;
    }
});
