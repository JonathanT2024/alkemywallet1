


// LOGIN AUTENTICACION
$(document).ready(function () {
    $('#login-form').submit(function (event) {
        event.preventDefault();
        var username = $('#email').val();
        var password = $('#password').val();

        // Verificar las credenciales
        if (username === 'toloza@gmail.com' && password === '12345') {
            // Credenciales válidas, redirigir a la pantalla de wallet
            window.location.href = '../HTML/menu.html';
        } else {
            // Credenciales inválidas, mostrar mensaje de error
            alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
        }
    });
});


// para el movimiento del dinero deposito

$(document).ready(function () {
    
  let balance = 0;

    function updateBalance() {
        $('#balance').text(balance.toFixed(2));
    }

    $('#depositBtn').click(function(e) {
        e.preventDefaul();
        var amount = parseFloat($('#depositAmount').val());
        if (!isNaN(amount) && amount > 0) {
            balance.push() += amount;
            updateBalance();
            $('#depositAmount').val('');
            alert('Deposit realizado!');
        } else {
            alert('Monto invalido. Por favor ingrese un número positivo.');
        }
    });

// para el movimiento del dinero giro

    $('#withdrawBtn').click(function () {
        var amount = parseFloat($('#amount').val());
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            updateBalance();
            $('#amount').val('');
            alert('Retiro exitoso!');
        } else {
            alert('Cantidad no válida. Ingrese un número válido dentro de su saldo.');
        }
    });
});