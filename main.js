/* BOTON LOGIN */
let regex = /\S+@\S+\.\S+/;
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
    }else if(passwordValido === passwordValido.toUpperCase() || passwordValido.length < 8 || passwordValido.length > 20){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Sólo ingresar minúsculas y entre 8 y 20 caracteres.',
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
    /* document.querySelector(".popUp").classList.remove("active");
    document.querySelector(".overlay").style.display = "none"; */
});

document.querySelector(".popUp .close-btn").addEventListener("click", function() {
    document.querySelector(".popUp").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});