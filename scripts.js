document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("cambiar-texto");
    const parrafo = document.getElementById("primerParrafo");
    let cambio = false; 

    boton.addEventListener("click", () => {
            if(!cambio){
                parrafo.style.fontFamily = "Courier New, monospace";
                parrafo.style.fontSize = "14px";
                parrafo.style.color = "#00f";
            }   else{
                parrafo.style.fontFamily = ""; // Revertir a la fuente por defecto
                parrafo.style.fontSize = "";   // Revertir al tamaño de fuente por defecto
                parrafo.style.color = "";
            }     
            cambio = !cambio;
    });
});
