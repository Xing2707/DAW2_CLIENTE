let valor= prompt("Introduce una forma de mostrar fechar <br> 1.hora detallado <br> 2.hora con PM o AM ")
valor=parseInt(valor);
let item = document.getElementById("item");
let horas = new Date();
let h = horas.getHours();
let m = horas.getMinutes();
let s = horas.getSeconds();

switch(valor){
    case 1: item.innerHTML=h+":"+m+":"+s; break;
    case 2:
        if(h>12){
            item.innerHTML=h+":"+m+" PM"; break;
        }else{
            item.innerHTML=h+":"+m+" AM"; break;
        }
    default:alert("ERROR!!!"); location.reload();
}