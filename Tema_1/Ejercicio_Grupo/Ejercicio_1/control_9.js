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
    let par=document.getElementById("parrafo5")
    recipido5.addEventListener("click",function(){
            valor=document.getElementById("num7").value
            if(valor.toLowerCase()=="salir"){
                document.open()
                for(let i=0; i<resultado.length; i++){
                    document.write(" "+resultado[i]+" ")
                }
                document.close()
            }else{
                resultado[cont]=valor*5/9+32
                console.log(resultado[cont]);
                cont++

                if(cont==10){
                   
                    par.innerHTML+= " "+resultado+" "
                    cont=0
                    par.innerHTML+="<br/>"
                }
            }
        
    })
}

function calcula_c(){
    pintar()
    let recipido5=document.getElementById("boton5")
    let cont=0
    let resultado=[]
    let valor=0
    let par=document.getElementById("parrafo5")
    recipido5.addEventListener("click",function(){
            valor=document.getElementById("num7").value
            if(valor.toLowerCase()=="salir"){
                document.open()
                for(let i=0; i<resultado.length; i++){
                    document.write(" "+resultado[i]+" ")
                }
                document.close()
            }else{
                resultado[cont]=(valor-32)*5/9
                console.log(resultado[cont]);
                cont++

                if(cont==10){
                   
                    par.innerHTML+= " "+resultado+" "
                    cont=0
                    par.innerHTML+="<br/>"
                }
            }
    })
}
