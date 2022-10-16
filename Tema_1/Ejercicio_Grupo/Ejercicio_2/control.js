let recipido=document.getElementById("boton");
recipido.addEventListener("click", function(){
    let num=document.getElementById("num").value
    let par=document.getElementById("parrafo")
    if(num<0 || num>9999){
        par.innerHTML="El numero introducido es incorrecto"
    }else{
        par.innerHTML="El cifra de numero es: "+ num.length
    }
})