const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("btnContacto").addEventListener("click", function (e) {
    e.preventDefault()
    const nombreApellidoValido = document.getElementById("exampleFormControlInput1").value
    const emailValido = document.getElementById("exampleFormControlInput2").value
    const consultaValido = document.getElementById("validationTextarea").value
    const idiomaValido = document.getElementById("idiomaConsulta").value
    const sedeValido = document.getElementById("sedeConsulta").value

    if (nombreApellidoValido === "" || emailValido === "" || consultaValido === "" || idiomaValido === "" || sedeValido == ""){
        Swal.fire({
            icon: "error",
            title: "Hay campos incompletos",
            text: "Por favor completalos todos.",
            timer: 60000, 
            position: "center",
            showConfirmButton: false
        })
    }else if (!emailRegex.test(emailValido)){
        Swal.fire({
            icon: "error",
            title: "Por favor ingresa un email válido",
            timer: 60000, 
            position: "center",
            showConfirmButton: false
        })
    }else{
        Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito!",
        text: "Nos pondremos en contacto a la brevedad.",
        timer: 6000, 
        position: "center",
        showConfirmButton: false
    })
    }

})
