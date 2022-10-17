let recipido1=document.getElementById("boton1")
let caj1=document.getElementById("caja1")
let caj2=document.getElementById("caja2")
let caj3=document.getElementById("caja3")
let p1=document.getElementById("error")

recipido1.addEventListener("click",function(){
    let NumeroA=document.getElementById("NumAlu").value
    if(NumeroA>=8 && NumeroA<=28){
    caj1.style.display="none"
    caj2.style.display="block"
    }else{
        p1.innerHTML="Introduce un numero correcto entre 8 y 28!"
    }
})

let arai

