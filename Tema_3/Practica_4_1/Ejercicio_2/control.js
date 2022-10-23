let recipido1=document.getElementById("boton1")
let recipido2=document.getElementById("boton2")
let caj1=document.getElementById("caja1")
let caj2=document.getElementById("caja2")
let caj3=document.getElementById("caja3")
let p1=document.getElementById("error")
let list=document.getElementById("lista")
let arai=[]
let NumeroA
let cont=0
let media=0

recipido1.addEventListener("click",function(){
    NumeroA=document.getElementById("NumAlu").value
    if(NumeroA>=8 && NumeroA<=28){
    caj1.style.display="none"
    caj2.style.display="block"
    p1.innerHTML=null
    }else{
        p1.innerHTML="Introduce un numero correcto entre 8 y 28!"
    }
})

recipido2.addEventListener("click",function(){
    let nombre=document.getElementById("nom").value
    let nota=parseInt(document.getElementById("not").value)
    if(cont<NumeroA){
        if(nota>0 && nota<10){
            p1.innerHTML=null
            arai.push([nombre,nota])
            cont++
        }else{
            p1.innerHTML="Introduce una nota correcto!"
            cont--
        }
        
    }else{
        caj2.style.display="none"
        caj3.style.display="block"
        for(let i=0; i<arai.length; i++){
            list.innerHTML+="<li>" + arai[i][0] + " : " + arai[i][1] +"</li>"
            media+=arai[i][1]
        }
        media/=NumeroA
        list.innerHTML+="<li> Media: "+media +"</li>"
    } 
})

