var formulario = document.getElementById("formulario")

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    var deporte = document.getElementById("deporte").value
    var serie = document.getElementById("serie").value
    var caja = document.getElementById("caja")
    while(caja.firstChild){
        caja.removeChild(caja.firstChild)
    }

    if(deporte!="" && serie!=""){
        var h1 = document.createElement("h1")
        var textoh1 = document.createTextNode("MIS FICCIONES")
        var saltolinea1 = document.createElement("br")
        var saltolinea2 = document.createElement("br")
        h1.appendChild(textoh1)
        var p1 = document.createElement("p")
        var textop1 = document.createTextNode("¿Mi Deporte Favorito?")
        var textop12 = document.createTextNode(deporte)
        p1.appendChild(textop1)
        p1.appendChild(saltolinea1)
        p1.appendChild(textop12)
        var p2 = document.createElement("p")
        var textop2 = document.createTextNode("¿Mi Serie Favorito?")
        var textop22 = document.createTextNode(serie)
        p2.appendChild(textop2)
        p2.appendChild(saltolinea2)
        p2.appendChild(textop22)

        caja.appendChild(h1)
        caja.appendChild(p1)
        caja.appendChild(p2)
    }else{
        var error = document.createElement("p")
        var textoerror = document.createTextNode("error!")
        error.appendChild(textoerror)
        caja.appendChild(error)
    }
    
})