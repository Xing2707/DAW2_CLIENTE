let recipido=document.getElementById("boton")

recipido.addEventListener("click", function(){
    const pi=3.14
    let p1=document.getElementById("parrafo")
    let radio=document.getElementById("rad").value //usa .value para sacar dato de entrada de input

    let total=(radio*pi)
    total=total*100
    total=total/100
    p1.innerHTML= "Total: "+ total
})