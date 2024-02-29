
var clave,usuario;

//valores predeterminados.-
usuario="toloza@gmail.com";
clave = "User1234";

// validacion de Credenciales

function verificarCredenciales(event) {
    event.preventDefault();
    const usuarioIngresado = document.getElementById("email").value;
    const contrasenaIngresada = document.getElementById("password").value;

    if(usuarioIngresado === usuario && contrasenaIngresada === clave){
        document.getElementById("message").textContent = "Inicio de sesion exitoso";
       location.href='../HTML/menu.html';
    }else {
        document.getElementById("message").textContent = "Credencales incorrecta";
    }

} // cierre

// asociar la Funcion al Formulario

document.getElementById("login-form").addEventListener("submit", verificarCredenciales);
