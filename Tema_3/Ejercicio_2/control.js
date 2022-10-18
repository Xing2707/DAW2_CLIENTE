let recipido1=document.getElementById("boton1")
let recipido2=document.getElementById("boton2")
let caj1=document.getElementById("caja1")
let caj2=document.getElementById("caja2")
let caj3=document.getElementById("caja3")
let p1=document.getElementById("error")
let arai

recipido1.addEventListener("click",function(){
    let NumeroA=document.getElementById("NumAlu").value
    if(NumeroA>=8 && NumeroA<=28){
    caj1.style.display="none"
    caj2.style.display="block"
    p1.innerHTML=null
    }else{
        p1.innerHTML="Introduce un numero correcto entre 8 y 28!"
    }
})

recipido2.addEventListener("click",function(){
    let nombre=nombre.document.getElementById("nom").value
    let nota=nota.document.getElementById("not").value
    let cont=0
    while(cont<NumeroA){
        arai[nombre,nota]
        p1.innerHTML=arai[nombre,0]
        cont++
    }
    caj2.style.display="none"
})
