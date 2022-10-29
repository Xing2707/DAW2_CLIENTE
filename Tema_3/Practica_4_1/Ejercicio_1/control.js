let recipido=document.getElementById("boton")

function PelimetroRectangulo(alt,bas){
    return (alt*2)+(bas*2);
}

recipido.addEventListener("click",function(){
    let base=parseFloat(document.getElementById("bas").value);
    let altura=parseFloat(document.getElementById("alt").value);
    let tabla=document.getElementById("tabla");

    if(((checkFloat(base)&& (Number.isInteger(altura) || checkFloat(altura))) || (checkFloat(altura) && (Number.isInteger(base) || checkFloat(base)))|| Number.isInteger(base) && Number.isInteger(altura))){
        let perimetro=PelimetroRectangulo(altura,base);
        tabla.style.display="block";
        tabla.innerHTML+="<tr> <td>" + base.toFixed(2) + " , " + altura.toFixed(2) + "</td> <td>" + perimetro.toFixed(2) + "</td> </td>";
    }else{
        alert("Error");
        location.reload();
    }
    
})

function checkFloat(numero){
    return Number(numero) === numero && numero % 1 !==0;
}