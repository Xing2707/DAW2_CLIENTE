let recipido=document.getElementById("boton");
recipido.addEventListener("click", function(){
    let num=document.getElementById("num").value
    let par=document.getElementById("parrafo")
    let fin=" ";
    if(num<0 || num>9999){
        par.innerHTML="El numero introducido es incorrecto"
    }else{
        num.toString();

        for(let i=num.length; i>=0; i--){
            let y=i-1;
            fin+=num.substring(i,y);
        }
        par.innerHTML=fin;
    }
})