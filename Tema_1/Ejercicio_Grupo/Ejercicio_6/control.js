let tipo=prompt("Introduce el tipo")
let aray=[]
let salir=false
let total=[]
let par=document.getElementById("parrafo")

if(tipo.substring(0,1).toLowerCase()=="fa" || tipo.charAt(0).toLowerCase()=="f"){
    while(!salir){
    for(let i=0; i<10 && !salir; i++){
        let num=prompt("Introduce numero")
        if(num.substring(0,1).toLowerCase()=="sa" || num.charAt(0).toLowerCase()=="s"){
            salir=true
        }else{
            aray[i]=parseInt(num)*9/5+32 
        }
    }
        par.innerHTML+=aray
        total+=aray
    }
    if(salir){
        document.open()
        for(let i=0; i<total.length; i++){
            document.write(total[i]+" _ ")
        }
        document.close()
    }
}else
    if(tipo.substring(0,1).toLowerCase()=="ce" || tipo.charAt(0).toLowerCase()=="c"){
        while(!salir){
        for(let i=0; i<10 && !salir; i++){
            let num=prompt("Introduce numero")
            if(num.substring(0,1).toLowerCase()=="sa" || num.charAt(0).toLowerCase()=="s"){
                salir=true
            }else{
                aray[i]=(parseInt(num)-32)*5/9 
            }
        }
            par.innerHTML+=aray
            total+=aray
        }
        if(salir){
            document.open()
            for(let i=0; i<total.length; i++){
                document.write(total[i]+" _ ")
            }
            document.close()
        }
    }else{
        document.open()
            document.write("Error introduce el tipo de grado para calcular correctamente!")
        document.close()
    }
