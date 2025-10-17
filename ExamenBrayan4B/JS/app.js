const boton = document.querySelector('.guardar');
const nombre = document.querySelector('.nombre');
const correo = document.querySelector('.correo');
const edad = document.querySelector('.edad');
const pais = document.querySelector('.pais');
const mensaje = document.querySelector('.mensaje');

boton.addEventListener('click', () => {
    if (nombre.value && correo.value && edad.value && pais.value && pais.value != "") {
        localStorage.setItem('nombre', nombre.value);
        localStorage.setItem('correo', correo.value);
        localStorage.setItem('edad', edad.value);
        localStorage.setItem('pais', pais.value);

        
        mensaje.textContent = `Tu nombre es ${nombre.value}, tu correo es ${correo.value}. Tienes ${edad.value} años de edad y eres de ${pais.value}.`;
    } else {
        mensaje.textContent = "Por favor, completa todos los campos.";
    }
});
