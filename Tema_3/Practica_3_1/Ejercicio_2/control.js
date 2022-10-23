let recipido = document.getElementById("enviar");
recipido.addEventListener("click",function(){
    let ani=document.getElementById("anio").value;
    validarAnio(ani);
        let tit=document.getElementById("titul").value;
        let aut=document.getElementById("autor").value;

        let tamtit=tit.split(" ").join("").length;
        let tamaut=aut.split(" ").join("").length;

        let lista=document.getElementById("lista");
        lista.style.display="block";
        let list1=document.getElementById("list1");
        let list2=document.getElementById("list2");
        let list3=document.getElementById("list3");

        list1.innerHTML="Titlo tiene " + contarMayuscula(tit) +"Numero de mayusculas, " + contaMinuscula(tit) +" Numero de minusculas y una tamaño de: "+ tamtit ;
        list2.innerHTML="Autor tiene " + contarMayuscula(aut) +"Numero de mayusculas, " + contaMinuscula(aut) +" Numero de minusculas y una tamaño de: "+ tamaut ;
        list3.innerHTML="año: "+ ani;

})


function validarAnio(valor){
    if(Number.isInteger(valor)){
        alert("Deben Introducir el año!");
        location.reload();
    }else{
        if(valor<1000 || valor>2022){
            alert("Año introducido incorrecto!");
            location.reload();
        }
    }
}


function contarMayuscula(valor){
    valor=valor.split(" ").join("");
    cont=0;
    for(let i=0; i<valor.length; i++){
        if(valor[i] == valor[i].toUpperCase()){
            cont++;
        }
    }
    return cont;
}


function contaMinuscula(valor){
    valor=valor.split(" ").join("");
    cont=0;
    for(let i=0; i<valor.length; i++){
        if(valor[i] == valor[i].toLowerCase()){
            cont++;
        }
    }
    return cont;
}