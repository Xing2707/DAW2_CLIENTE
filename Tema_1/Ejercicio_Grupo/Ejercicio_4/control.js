let recipido=document.getElementById("boton");
recipido.addEventListener("click", function(){
    let num=document.getElementById("num").value
    let par=document.getElementById("parrafo")
    if(num<0 || num>9999){
        par.innerHTML="El numero introducido es incorrecto"
    }else{
        num.toString();
        let verdar=true;
        let cont=num.length-1;

        for(let i=0; i<num.length/2 && verdar; i++){
            console.log(num.charAt(i) + num.charAt(cont))
            if(num.charAt(i)==num.charAt(cont)){
                verdar=true
            }else{
                verdar=false
            }
            cont--
        }
        if(verdar){
            par.innerHTML="Es Caparicua"
        }else{
            par.innerHTML="No es Caparicua"
        }
    }
})