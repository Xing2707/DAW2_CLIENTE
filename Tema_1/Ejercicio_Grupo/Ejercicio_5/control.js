let tipo=prompt("Introduce tipo de calculo")
if(tipo.substring(0,2).toLowerCase()=="fa" || tipo.charAt(0).toLowerCase()=="f"){
    let cont=0
    let aray=[]
    while(cont<10){
    let numero=prompt("Introduce el Celsius")
    aray[cont]=parseInt(numero)*9/5+32
    console.log(typeof(aray[cont]))
    cont++
    }
        document.open()
    for (let i=0; i < aray.length; i++) {
        document.write(" "+aray[i]+" ")
    }
        document.close()
}else
    if(tipo.substring(0,2).toLowerCase()=="ce" || tipo.charAt(0).toLowerCase()=="c"){
        let cont=0
        let aray=[]
        while(cont<10){
        let numero=prompt("Introduce el Celsius")
        aray[cont]=(parseInt(numero)-32)*5/9
        console.log(aray[cont])
        cont++
        }
            document.open()
        for (let i=0; i < aray.length; i++) {
            document.write(" "+aray[i]+" ")
        }
            document.close()
    }else{
    document.open()
        document.write("Error introduce el tipo de grado para calcular correctamente!")
    document.close()
    }