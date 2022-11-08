let Sevilla=[];
let Huelva=[];
let Cadiz=[];
let nombre;
let sueldo;
let salir;
let opcion;

    Menu(opcion);

    let listaTotal=document.getElementById("ListaTotal");
    let tit1=document.getElementById("tit1");
        tit1.style.display="block";

    listaTotal.innerHTML+=implimir("sevilla:",Sevilla.length);
    listaTotal.innerHTML+=implimir("Huelva:",Huelva.length);
    listaTotal.innerHTML+=implimir("Cadiz:",Cadiz.length);

    let ListaMedia=document.getElementById("ListaMedia");
    let tit2=document.getElementById("tit2");
        tit2.style.display="block";

    ListaMedia.innerHTML+=implimir("sevilla:",SueldoMedia(Sevilla));
    ListaMedia.innerHTML+=implimir("Huelva:",SueldoMedia(Huelva));
    ListaMedia.innerHTML+=implimir("Cadiz:",SueldoMedia(Cadiz));
function Menu(opcion){
    while(!salir){
        do{
            opcion=prompt("Introduce que delegacion pertenece 1.Sevilla,2.Huelva,3.Cadiz");
            
            if(!parseInt(opcion) && parseInt(opcion)!=0){
                alert("Error no deben introducir ningun caracte de letra y dejarse en blanco");
            }

            opcion=parseInt(opcion);

            if((opcion>3 || opcion<0)){
                alert("Error deben Introducir un numero valido");
            }else{
                if(opcion==0){
                    if(Sevilla.length<4 || Huelva.length<4 || Cadiz.length<4){
                        alert("Los delegaciones deben tener al menos 4 empresarios");
                    }else{
                        salir=true;
                    }
                }
            }
            if(opcion!=0 && Number.isInteger(opcion)){
                AniadirArray(opcion);
            }

        }while(opcion<0 || opcion>3);
    }
}

function AniadirArray(opcion){
    nombre=prompt("Introduce tu nombre");
    do{
        sueldo=prompt("Introduce tu sueldo");
        if(!parseFloat(sueldo)){
            alert("Deben introducir tu numero de sueldo sin nigun caracter de letra");
        }
        sueldo=parseFloat(sueldo);
    }while(!parseFloat(sueldo));

    switch(opcion){
        case 1:
                Sevilla.push([nombre,sueldo]); break;
        case 2:
                Huelva.push([nombre,sueldo]); break;
        case 3:
                Cadiz.push([nombre,sueldo]); break;
    }
}

function SueldoMedia(array){
    let media=0;
    let delegacion=array.length;
    for(let i=0; i<array.length; i++){
        media+=array[i][1];
    }
    return media/delegacion;
}
function implimir(nombre,valor){
    return "<li>"+nombre+" "+valor+"</li>";
}