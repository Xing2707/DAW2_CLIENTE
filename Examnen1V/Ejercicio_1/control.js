let recipido=document.getElementById("Enviar");

recipido.addEventListener("click",function(){
    let nombreDisco=document.getElementById("nombreDisco").value;
    let nombreAutor=document.getElementById("nombreAutor").value;
    let tipoMusica=document.getElementsByName("tipoMusica");
    let textA=document.getElementById("textA").value;
    let patronAutor=/^[A-Z-_]+[a-zA-Z]{0,19}$/;
    let error="";
    let tipo;
    let contado=0;

    if(nombreDisco=="" || nombreDisco.length>25){
       error+="Error de Nombre disco\n";
       contado++;
       document.cookie="contador="+contado;
    }
    
    if(nombreAutor=="" || !patronAutor.test(nombreAutor)){
        error+="Error de Nombre de Autor\n";
        contado++;
        document.cookie="contador="+contado;
    }

    for(i=0; i<tipoMusica.length; i++){
        if(tipoMusica[i].checked==true){
            tipo=tipoMusica[i].value;
        }
    }
    if(tipo==null){
        error+="Error de Deben seleccionar un tipo\n";
        contado++;
        document.cookie="contador="+contado;
    }

    if(textA=="--Comentario sobre el album---"){
        error+="Error de Deben Intorducir Comentario";
        contado++;
        document.cookie="contador="+contado;
    }

    if(error!=""){
        alert(error);
        alert("contador de cookie\n"+document.cookie);
    }else{
        document.cookie="contador="+contado;
        alert("contador de cookie\n"+document.cookie);
    }
})