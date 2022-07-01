let selects = document.querySelectorAll(".p3-password-fields select")
let pswUsuario = document.getElementById("procesar")
let mensaje = document.getElementById("mensaje")
let instruccion = document.querySelector("h1")

mensaje.textContent + ""

let psw1 = "b56a18e0eacdf51aa2a5306b0f533204"
let psw2 = "d14220ee66aeec73c49038385428ec4c"

const obtenerPassword = () => {
    let password = ""

    selects.forEach( (select) => {
        password = password + select.value
    })

    return md5(password)
}

const validarPassword = (password) => {
    let psw_uno_correcto = false
    let psw_dos_correcto = false

    if (mensaje.textContent === "" || mensaje.textContent === "password 1 incorrecto") {
        do {
            if (password === psw1) {
                psw_uno_correcto = true
                mensaje.textContent = 'password 1 correcto'
                instruccion.textContent = "Ingresa el password 2"
                return
            } else {
                mensaje.textContent = 'password 1 incorrecto'
                return
            }
        }
        while (!psw_uno_correcto)
    }
    if (mensaje.textContent === "password 1 correcto" || mensaje.textContent === "password 2 incorrecto") {
        do {
            if (password === psw2) {
                psw_dos_correcto = true
                mensaje.textContent = 'password 2 correcto'
                setTimeout( () => {
                    mensaje.textContent = ""
                    instruccion.textContent = "Ingresa el password 1"
                    selects.forEach( (select) => {
                        select.value = 1
                    })
                }, 2000)
            } else {
                mensaje.textContent = 'password 2 incorrecto'
                return
            }
        }
        while (!psw_dos_correcto)
    }
}


const procesarPsw = () => {
    const password = obtenerPassword()
    validarPassword(password)
}

pswUsuario.addEventListener("click", procesarPsw)



