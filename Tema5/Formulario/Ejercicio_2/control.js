// var recipido=document.getElementById("Enviar");

// recipido.addEventListener("click",function(){
//     var numero=document.getElementById("numero").value;
//     var hora=document.getElementById("hora").value;
//     let patronnum=/(^\d{1,3}$)|(^\d{1,3}\.\d{0,3}$)/;
//     let patronhor=/^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

//     if(patronnum.test(numero)){
//         alert("Numero Correcto");
//     }else{
//         alert("Numero Falso");
//     }

//     if(patronhor.test(hora)){
//         alert("Hora Correcto");
//     }else{
//         alert("Hora Falso");
//     }
// });

var numero=document.getElementById("numero");
numero.addEventListener("keyup",function(){
    let patronnum=/(^\d{1,3}$)|(^\d{1,3}\.\d{0,3}$)/;
    var parrafo=document.getElementById("parrafo");
    if(patronnum.test(numero.value)){
        parrafo.innerHTML+="<br> Correocto";
    }else{
        parrafo.innerHTML+="<br> Incorrecto";
    }
});

var hora=document.getElementById("hora");
hora.addEventListener("keyup",function(){
    let patronhor=/^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    var parrafo2=document.getElementById("parrafo2");
    if(patronhor.test(hora.value)){
        parrafo2.innerHTML+="<br> Correocto";
    }else{
        parrafo2.innerHTML+="<br> Incorrecto";
    }
});
