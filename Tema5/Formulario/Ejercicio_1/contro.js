var enviar=document.getElementById("Enviar");

enviar.addEventListener("click",function(){
    var describete=document.getElementById("Describete");
    var sexo=document.getElementsByName("Sexo");
    var hobys=document.getElementsByName("hobbys");
    var provincia=document.getElementById("provincia");
    var cadena="";
    cadena+=describete.value+",";

    for(i=0; i<sexo.length; i++){
        if(sexo[i].checked==true){
            cadena+=sexo[i].value+",";
        }
    }

    for(i=0; i<hobys.length;i++){
        if(hobys[i].checked==true){
            cadena+=hobys[i].value+" - ";
        }
    }

    var seleccionado=provincia.selectedIndex;
    cadena+=provincia[seleccionado].value;
    alert(cadena);
})
var color=document.getElementsByName("color");
var formulario=document.getElementById("formulario");
function cambiardecolor(){
    for(i=0; i<color.length; i++){
        if(color[i].checked==true){
            formulario.style.color="white";
            switch(color[i].value){
                case "rojo": formulario.style.backgroundColor="red"; break;
                case "azul": formulario.style.backgroundColor="blue"; break;
                case "verde": formulario.style.backgroundColor="green"; break;
            }
        }
    }
}



