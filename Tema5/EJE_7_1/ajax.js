var formulario = document.getElementById("formulario")
var p = document.getElementById("parrafo")

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const data = new FormData(formulario);

    fetch("http://localhost:8080/Tema5/EJE_7_1/comprobar.php",{
        method: 'POST',
        body:data,
    })

    .then(response => response.text())
    .then(response => p.innerHTML=response)
    .catch(p.innerHTML="Error no hemos podido conectarse a servidor")
})

var deleteDNI = document.getElementById("formularioDeleteDNI")
var p2 = document.getElementById("parrafo2")

deleteDNI.addEventListener("submit",function(e){
    e.preventDefault();
    const data2 = new FormData(deleteDNI);
    fetch("http://localhost:8080/Tema5/EJE_7_1/comprobar.php",{
        method: 'POST',
        body:data2,
    })
    .then(response => response.text())
    .then(response => p2.innerHTML=response)
    .catch(p2.innerHTML="Error no hemos podido conectarse a servidor")
})