let Sevilla=[];
let Huelva=[];
let Cadiz=[];
let nombre;
let sueldo;
let salir;
let opcion;

    Menu(opcion);

    let listaTotal=document.getElementById("ListaTotal");
    listaTotal.innerHTML+="<li>Sevilla:" +Sevilla.length+ "</li>";
    listaTotal.innerHTML+="<li>Huelva:" +Huelva.length+ "</li>";
    listaTotal.innerHTML+="<li>Cadiz:" +Cadiz.length+ "</li>";

    let ListaMedia=document.getElementById("ListaMedia");
    ListaMedia.innerHTML+="<li>Sevilla: "+SueldoMedia(Sevilla)+"</li>";
    ListaMedia.innerHTML+="<li>Huelva: "+SueldoMedia(Huelva)+"</li>";
    ListaMedia.innerHTML+="<li>Cadiz: "+SueldoMedia(Cadiz)+"</li>";

    Sevilla.sort(ordenar);
    Huelva.sort(ordenar);
    Cadiz.sort(ordenar);

    

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
                    if(Sevilla.length<4 && Huelva.length<4 && Cadiz.length<4){
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
    let media;
    for(let i=0; i<array.length; i++){
        for(let y=0; y<array[i].length; y++){
            if(y==array[i].length){
                media+=array[i][y];
            }
        }
    }
    return media/array.length;
}

function ordenar(valor1,valor2){
    if(valor1[1]==valor2[1]){
        return 0;
    }
    return (valor1[1]>valor2[1])? 1:-1;
}