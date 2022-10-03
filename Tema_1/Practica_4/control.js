window.addEventListener("load",function(params){
let contrasena = document.getElementById("gmail");
let p1= document.getElementById("parrafo");

const nombre = this.document.getElementById("user")
nombre.addEventListener("keyup",function(texto){  
        console.log("input")
        console.log("texto: ",texto.target.value)
        p1.innerHTML=texto.target.value;
    })

contrasena.addEventListener("keyup",function(texto){   
    console.log("input")
    console.log("texto: ",texto.target.value)
    p1.innerHTML=texto.target.value;
    })
   
})


