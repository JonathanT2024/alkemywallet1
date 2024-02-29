function iniciarSesion(usuario, contrasena){
        // Valores predeterminados de usuario y contraseña (pueden ser reemplazados)
        const usuarioValido = "usuario123";
        const contrasenaValida = "claveSecreta";
    
        // Verificar si las credenciales coinciden con los valores predeterminados
        if (usuario === usuarioValido && contrasena === contrasenaValida) {
            return "Inicio de sesión exitoso";
        } else {
            return "Credenciales incorrectas";
        }
    
}

const usuarioIngresado = prompt("Ingresa tu nombre de usuario:");
const contrasenaIngresada = prompt("Ingresa tu contraseña:");
const resultado = iniciarSesion(usuarioIngresado, contrasenaIngresada);
alert(resultado);


