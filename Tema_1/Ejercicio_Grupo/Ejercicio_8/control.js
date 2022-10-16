let numero=parseInt(GeneraNumeroRandom(0,100))
let p1=document.getElementById("parrafo")
    p1.innerHTML=numero

let arai=[]
let cont=0
let recipido=document.getElementById("boton")
recipido.addEventListener("click",function(){
    let numero1=parseInt(document.getElementById("num1").value)
    let numero2=parseInt(document.getElementById("num2").value)
    arai[cont]=numero
    cont++
        if(numero1 < numero2){
            numero=parseInt(GeneraNumeroRandom(numero1,numero2))
            console.log(numero)
            p1.innerHTML=numero
        }else{
            numero=parseInt(GeneraNumeroRandom(numero2,numero1))
            console.log(numero)
            p1.innerHTML=numero
        }
})

let acep=document.getElementById("acepta").onclick = function aceptado(){
    document.open()
    document.write("Numeros no aceptados"+arai)
    document.close()
}

function GeneraNumeroRandom(valor1,valor2){
    return Math.random() * (valor2-valor1)+valor1
}


