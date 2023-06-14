let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
let validarPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/


/* BOTON LOGIN */

const clickLog = document.querySelector("#clickLog");
clickLog.addEventListener("click", (e) => {
    e.preventDefault();
    const usuarioValido = document.getElementById("emailLogIn").value;
    const passwordValido = document.getElementById("passwordLogIn").value;

    if (!regex.test(usuarioValido)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El email ingresado no es correcto. <br> Por favor, <br> intentalo nuevamente.',
            showConfirmButton: false,
            timer: 3000
        })
    } else if (!validarPass.test(passwordValido)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La contraseña es incorrecta. Intentalo nuevamente.',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido al <br> Instituto Internacional de Idiomas!',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            window.location.href = "../index.html"
        })
    }
});

document.querySelector("#passOlvido").addEventListener("click", function () {
    Swal.fire({
        title: 'Ingrese su email',
        input: 'email',
        inputPlaceholder: 'Ingrese su email',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        inputValidator: (value) => {
            if (!regex.test(value)) {
                return ('El email ingresado es incorrecto');
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



/* SIGN UP ALUMNOS */

const btnClickReg = document.querySelector("#clickReg");
btnClickReg.addEventListener("click", (e) => {
    e.preventDefault();
    const usuarioValido = document.getElementById("emailRegistro").value;
    const passwordValido = document.getElementById("passwordRegistro").value;

    if (!regex.test(usuarioValido)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El email ingresado no es correcto. Por favor, intentalo nuevamente.',
            showConfirmButton: false,
            timer: 3000
        });
    } else if (!validarPass.test(passwordValido)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La contraseña es incorrecta. Intentalo nuevamente.',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido al Instituto Internacional de Idiomas!',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            window.location.href = "../index.html";
        });
    }
});
/* 
document.querySelector(".popUpSign .close-btn").addEventListener("click", function () {
    document.querySelector(".popUpSign").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function(){
    const btnDrop = document.querySelector("#btnDropIdiomas")
    const menuDesplegable = document.querySelector(".dropdown-menu")
    btnDrop.addEventListener("click", function(){
        menuDesplegable.classList.toggle("show");
    })
})

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
}) */