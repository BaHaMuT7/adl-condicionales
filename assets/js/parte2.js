let inputs = document.querySelectorAll("article input")
let boton = document.getElementById("verificar")
let mensaje = document.getElementById("mensaje")

mensaje.style.display = "none"

const sumaCupones = () => {
    let total = 0
    inputs.forEach((inputNumero) => {
        console.log(`Valor del input: ${inputNumero.value}`)
        total = total + parseInt(inputNumero.value)
    })
    console.log(`Valor total: ${total}`)
    return total;
}

const recomponerMensaje = (mensaje) => {
    this.mensaje.style.display = "block"
    this.mensaje.textContent = mensaje
}

const estableceMensaje = (total) => {
    let mensaje = ""

    if (total === 0 ) {
        mensaje = "No ha agregado ningun cupon"
        recomponerMensaje(mensaje);
    }
    if (total > 0 && total < 11) {
        mensaje = `Llevas ${total} cupon(es)`
        recomponerMensaje(mensaje);
    }
    if (total > 10) {
        mensaje = "Llevas demasiados cupones"
        recomponerMensaje(mensaje);
    }
}

const procesaCupones = () => {
    const total = sumaCupones()
    estableceMensaje(total)
}

boton.addEventListener("click", procesaCupones)
