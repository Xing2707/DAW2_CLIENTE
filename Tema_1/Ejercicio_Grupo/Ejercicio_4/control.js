let recipido=document.getElementById("boton");
recipido.addEventListener("click", function(){
    let num=document.getElementById("num").value
    let par=document.getElementById("parrafo")
    if(num<0 || num>9999){
        par.innerHTML="El numero introducido es incorrecto"
    }else{
        num.toString();
        let verdar=false;

        for(let i=0; i<num.length/2 && !verdar; i++){
            let cont=num.length-1;
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