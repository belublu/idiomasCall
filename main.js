/* BOTON LOGIN */
let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let validarPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/

document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popUp").classList.add("active");
    document.querySelector(".overlay").style.display = "block";
});

const formUsuario = document.querySelector(".formUsuario");
formUsuario.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuarioValido = document.getElementById("email").value;
    const passwordValido = document.getElementById("password").value;

    if(!regex.test(usuarioValido)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El email ingresado no es correcto. <br> Por favor, <br> intentalo nuevamente.',
            showConfirmButton: false,
            timer: 3000
        })
    }else if(!validarPass.test(passwordValido)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La contraseña es incorrecta. Intentalo nuevamente.',
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 2000
        }).then (() => {
            window.location.href = "../index.html"
        })
    }
});

document.querySelector(".passwordOlvidada").addEventListener("click", function() {
    Swal.fire({
        title: 'Ingrese su email',
        input: 'email',
        inputPlaceholder: 'Ingrese su email',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        inputValidator: (value) => {
            if (!regex.test(value)) {
                return('El email ingresado es incorrecto');
            }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Email de recuperación enviado correctamente a:',
                text: result.value,
                timer: 2000
            });
        }
    });
});

document.querySelector(".popUp .close-btn").addEventListener("click", function() {
    document.querySelector(".popUp").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});

/* SIGN UP ALUMNOS */

document.querySelector("#signUp").addEventListener("click", function() {
    document.querySelector(".popUpSign").classList.add("active");
    document.querySelector(".overlay").style.display = "block";
});

const formRegistro = document.querySelector(".formRegistro");
formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuarioValido = document.getElementById("email").value;
    const passwordValido = document.getElementById("password").value;

    if(!regex.test(usuarioValido)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El email ingresado no es correcto. <br> Por favor, <br> intentalo nuevamente.',
            showConfirmButton: false,
            timer: 3000
        })
    }else if(!validarPass.test(passwordValido)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La contraseña es incorrecta. Intentalo nuevamente.',
            showConfirmButton: false,
            timer: 1500
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 2000
        }).then (() => {
            window.location.href = "../index.html"
        })
    }
});

document.querySelector(".popUpSign .close-btn").addEventListener("click", function() {
    document.querySelector(".popUpSign").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
});