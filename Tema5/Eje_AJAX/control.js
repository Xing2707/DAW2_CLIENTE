
let caja=document.getElementById("respuesta");
let enviar = document.getElementById("enviar");
enviar.addEventListener("click",function(e){

    while(caja.firstChild){
        caja.removeChild(caja.firstChild);
    }

    let nombre=document.getElementById("nombre").value;
    e.preventDefault();

    $.ajax({
        method: "GET",
        url: "comprobar.php",
        data: {nombre : nombre}
    })

    .done(function( response ){
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(response);
        parrafo.appendChild(texto);
        caja.appendChild(parrafo);
    })

    e.preventDefault();

})