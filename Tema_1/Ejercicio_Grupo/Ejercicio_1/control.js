let recipido=document.getElementById("boton")

recipido.addEventListener("click",function(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let num3=document.getElementById("num3").value
    let aray=[num1,num2,num3];
    let p1=document.getElementById("parrafo")

    aray.sort((a,b)=>b-a)
    p1.innerHTML=aray.slice(0,aray.length)
    
})

let recipido2=document.getElementById("boton2");
recipido2.addEventListener("click", function(){
    let num4=document.getElementById("num4").value
    let p2=document.getElementById("parrafo2")
    if(num4<0 || num4>9999){
        p2.innerHTML="El numero introducido es incorrecto"
    }else{
        p2.innerHTML="El cifra de numero es: "+ num4.length
    }
})

let recipido3=document.getElementById("boton3");
recipido3.addEventListener("click", function(){
    let num5=document.getElementById("num5").value
    let p3=document.getElementById("parrafo3")
    let fin=" ";
    if(num5<0 || num5>9999){
        p3.innerHTML="El numero introducido es incorrecto"
    }else{
        num5.toString();

        for(let i=num5.length; i>=0; i--){
            let y=i-1;
            fin+=num5.substring(i,y);
        }
        p3.innerHTML=fin;
    }
})

let recipido4=document.getElementById("boton4");
recipido4.addEventListener("click", function(){
    let num6=document.getElementById("num6").value
    let p4=document.getElementById("parrafo4")
    if(num6<0 || num6>9999){
        p4.innerHTML="El numero introducido es incorrecto"
    }else{
        num6.toString();
        let verdar=false;

        for(let i=0; i<num6.length/2 && !verdar; i++){
            let cont=num6.length-1;
            if(num6.charAt(i)==num6.charAt(cont)){
                verdar=true
            }else{
                verdar=false
            }
            cont--
        }
        if(verdar){
            p4.innerHTML="Es Capicua"
        }else{
            p4.innerHTML="No es Capicua"
        }
    }
})

function pintar(){
    let caja=document.getElementById("item")
    caja.style.display="inline"
}


function calcula_f(){
    pintar()
    let recipido5=document.getElementById("boton5")
    let cont=0
    let resultado=[]
    let valor=0
    recipido5.addEventListener("click",function(){
            valor=document.getElementById("num7").value
            resultado[cont]=valor*5/9+32
            console.log(resultado[cont]);
            cont++
        if(cont==10){
            document.open()
            for(let i=0; i<resultado.length; i++){
                document.write(resultado[i]+"<br>")
            }
            document.close()
        }
        
    })
}

function calcula_c(){
    pintar()
    let recipido5=document.getElementById("boton5")
    let cont=0
    let resultado=[]
    let valor=0
    recipido5.addEventListener("click",function(){
            valor=document.getElementById("num7").value
            resultado[cont]=(valor-32)*5/9
            console.log(resultado[cont]);
            cont++
        if(cont==10){
            document.open()
            for(let i=0; i<resultado.length; i++){
                document.write(resultado[i]+"<br>")
            }
            document.close()
        }
        
    })
}




