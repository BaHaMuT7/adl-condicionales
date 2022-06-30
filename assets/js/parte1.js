const imagen = document.getElementById("imagen-adl");

imagen.addEventListener("click", () => {

    let borderConfig = "2px solid red"

    if (imagen.style.border === borderConfig) {
        imagen.style.border = "none";
    } else {
        imagen.style.border = borderConfig;
    }
})