RellenarVisualizarDivisa()

function ValidadrDivisa(valor){
    let val=valor.substring(0,2).toLowerCase()
    console.log(val)
    switch(val){
        case "eu": return true
        case "do": return true
        case "li": return true
        case "ye": return true
        default:
            return false
    }

}


function ValidarCantidad(valor){
        var regla=/^[1-9]\d*(\.d+)?$/i
        if(regla.test(valor)){
        return true
        }else{
            return false
        }
}


function Calcular(valor1,cant,valor2){
    let var1=valor1.substring(0,2).toLowerCase()
    let var2=valor2.substring(0,2).toLowerCase()
    switch(var1){
        case "eu":
            switch(var2){
            case "do": return cant*0.97
            case "li": return cant*0.86
            case "ye": return cant*144.26
            }
        case "do":
            switch(var2){
                case "eu": return cant*1.02
                case "li": return cant*0.88
                case "ye": return cant*147.98
            }
        case "li":
            switch(var2){
                case "eu": return cant*1.15
                case "do": return cant*1.12
                case "ye": return cant*166.36
            }
        case "ye":
            switch(var2){
                case "eu": return cant*0.006
                case "do": return cant*0.006
                case "li": return cant*0.006
            }
    }
}


function RellenarVisualizarDivisa(){
    let divisa1
    let divisa2
    let cantidad
    let validacion=true
    let Error="Erro! introduce el valor valido"

    do {
        divisa1=prompt("Introduce divisa de partida")
        validacion=ValidadrDivisa(divisa1)
        if(!validacion){alert(Error)}
    } while (!validacion);

    do {
        cantidad=prompt("Introduce cantidad")
        validacion=ValidarCantidad(cantidad)
        if(!validacion){alert(Error)}
        cantidad=(parseFloat(cantidad)*100)/100
    } while (!validacion);
    
    do {
        divisa2=prompt("Introduce divisa que desea convertir")
        validacion=ValidadrDivisa(divisa2)
        if(!validacion){alert(Error)}
    } while (!validacion);
    

    let total=Calcular(divisa1,cantidad,divisa2)
    
    alert(divisa1+" con cantidad de:" +cantidad+" se convierte: "+total+" "+divisa2)


}

