function primavera(){
    var caja = document.getElementById("caja")
    var img = document.createElement("img")
    while(caja.firstChild){
        caja.removeChild(caja.firstChild)
    }

    fetch('http://localhost:8080/Examen2V/Eje_4/control.php',{
        method: 'POST',
        body:'imagen=primavera',
        headers: {
            'COntent-Type':'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(response => img.src=response)
    .then(caja.appendChild(img))
}

function verano(){
    var caja = document.getElementById("caja")
    var img = document.createElement("img")
    while(caja.firstChild){
        caja.removeChild(caja.firstChild)
    }

    fetch('http://localhost:8080/Examen2V/Eje_4/control.php',{
        method: 'POST',
        body:'imagen=verano',
        headers: {
            'COntent-Type':'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(response => img.src=response)
    .then(caja.appendChild(img))
}

function otonio(){
    var caja = document.getElementById("caja")
    var img = document.createElement("img")
    while(caja.firstChild){
        caja.removeChild(caja.firstChild)
    }

    fetch('http://localhost:8080/Examen2V/Eje_4/control.php',{
        method: 'POST',
        body:'imagen=otonio',
        headers: {
            'COntent-Type':'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(response => img.src=response)
    .then(caja.appendChild(img))
}

function invierno(){
    var caja = document.getElementById("caja")
    var img = document.createElement("img")
    while(caja.firstChild){
        caja.removeChild(caja.firstChild)
    }
    
    fetch('http://localhost:8080/Examen2V/Eje_4/control.php',{
        method: 'POST',
        body:'imagen=invierno',
        headers: {
            'COntent-Type':'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(response => img.src=response)
    .then(caja.appendChild(img))
}