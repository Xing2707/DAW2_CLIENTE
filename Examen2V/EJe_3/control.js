var formulario = document.getElementById("formulario")

formulario.addEventListener("submit",function(){
    var error = []
    var parrafo = document.getElementById("parrafo")
    var nombre = document.getElementById("nombre").value
    if(nombre==""){
        error.push("Error Deben Introducir un nombre valido")
    }
    var dni = document.getElementById("dni").value
    const patrondni = /([^\d{1,8}\s{1}$])/;
    if(!patrondni.test(dni)){
        error.push("Error Deben Introducir un DNI valido")
    }
    var edad = document.getElementById("edad").value
    const patronedad = /([\d{1}*\d{1}$])/
    if(!patronedad.test(edad)){
        error.push("Error Deben Introducir un edad valido")
    }

    if(error.length == 0){
        alert("Correcto")
    }else{
        for(i=0; i<error.length; i++){
            alert(error[i])
        }
    }
})
