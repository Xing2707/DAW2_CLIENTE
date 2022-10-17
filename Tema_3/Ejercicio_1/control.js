let recipido=document.getElementById("boton")
function calcular(alt,bas){
    let total=(alt*2)+bas;
    return total
}

recipido.addEventListener("click",function(){
    let base=parseFloat(document.getElementById("bas").value)
    let altura=parseFloat(document.getElementById("alt").value)
    let p1=document.getElementById("parrafo")
    let perimetro

    perimetro=calcular(altura,base) 
    p1.innerHTML="Pelimetro: "+perimetro
})