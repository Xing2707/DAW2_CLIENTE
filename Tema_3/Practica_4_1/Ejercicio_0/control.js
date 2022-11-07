let Sevilla=[];
let Huelva=[];
let Cadiz=[];
let nombre;
let sueldo;
let salir;
let opcion;

    Menu(opcion);

function Menu(opcion){
    while(!salir){
        do{
            opcion=prompt("Introduce que delegacion pertenece 1.Sevilla,2.Huelva,3.Cadiz");
            
            if(!parseInt(opcion) && parseInt(opcion)!=0){
                alert("Error no deben introducir ningun caracte de letra y dejarse en blanco");
            }

            parseInt(opcion);

            if((opcion>3 || opcion<0)){
                alert("Error deben Introducir un numero valido");
            }else{
                if(opcion==0 && opcion!=""){
                    if(Sevilla.length<4 && Huelva.length<4 && Cadiz.length<4){
                        alert("Los delegaciones deben tener al menos 4 empresarios");
                    }else{
                    salir=true;
                    }
                }
            }
            if(opcion!=0){
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
    }while(!parseFloat(sueldo));

    switch(opcion){
        case 1:
                Sevilla.push([nombre,sueldo]);
        case 2:
                Huelva=push([nombre,sueldo]);
        case 3:
                Cadiz=push([nombre,sueldo]);
    }
}