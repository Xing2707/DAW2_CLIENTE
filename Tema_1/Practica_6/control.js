let recepido=document.getElementById("boton")

recepido.addEventListener("click",function(){
    let lados=document.getElementById("lado").value
    let item=document.getElementById("parrafo")
    console.log(lados)
    item.innerHTML= "Pelimetro de este cuadrado es: " + lados * 4
})