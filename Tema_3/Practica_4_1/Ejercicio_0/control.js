let Sevilla=[];
let Huelva=[];
let Cadiz=[];
let nombre;
let sueldo;
let salir;
let opcion;

    //imprimir menu y validarla
    Menu(opcion);

    //Imprimir total de cada delegacion
    let listaTotal=document.getElementById("ListaTotal");
    let tit1=document.getElementById("tit1");
        tit1.style.display="block";
    listaTotal.innerHTML+=implimir("sevilla:",Sevilla.length);
    listaTotal.innerHTML+=implimir("Huelva:",Huelva.length);
    listaTotal.innerHTML+=implimir("Cadiz:",Cadiz.length);

    //Imprimir Sueldo media de cade  delegacion
    let ListaMedia=document.getElementById("ListaMedia");
    let tit2=document.getElementById("tit2");
        tit2.style.display="block";
    ListaMedia.innerHTML+=implimir("sevilla:",SueldoMedia(Sevilla));
    ListaMedia.innerHTML+=implimir("Huelva:",SueldoMedia(Huelva));
    ListaMedia.innerHTML+=implimir("Cadiz:",SueldoMedia(Cadiz));
    //Ordernar array de meno a mayor
    Sevilla.sort(ordenar);
    Huelva.sort(ordenar);
    Cadiz.sort(ordenar);

    //Pintar cade delegacion de menor a mayor en una tabla
    let caja=document.getElementById("caja");
        caja.style.display="block";
    let tabla=document.getElementById("tabla");
    tabla.innerHTML+=pintar(Sevilla);
    tabla.innerHTML+=pintar(Huelva);
    tabla.innerHTML+=pintar(Cadiz);

    //Sacar sueldo menor y mayor de los delegaciones juntos
    let tit3=document.getElementById("tit3");
    let SueldoMenor=document.getElementById("SueldoMenor");
        tit3.style.display="block";
    SueldoMenor.innerHTML+=implimir("sevilla:",Sevilla[0][1]);
    SueldoMenor.innerHTML+=implimir("Huelva:",Huelva[0][1]);
    SueldoMenor.innerHTML+=implimir("Cadiz:",Cadiz[0][1]);

    let tit4=document.getElementById("tit4");
        tit4.style.display="block";
    let SueldoMayor=document.getElementById("SueldoMayor");
    SueldoMayor.innerHTML+=implimir("sevilla:",Sevilla[Sevilla.length-1][1]);
    SueldoMayor.innerHTML+=implimir("Huelva:",Huelva[Huelva.length-1][1]);
    SueldoMayor.innerHTML+=implimir("Cadiz:",Cadiz[Cadiz.length-1][1]);

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
        for(let y=0; y<array[i].length; y++){
            if(y==array[i].length){
                media+=array[i][y];
            }
        }
    }
    return media/array.length;
}

function implimir(nombre,valor){
    return "<li>"+nombre+" "+valor+"</li>";
}

function ordenar(valor1,valor2){
    if(valor1[1]==valor2[1]){
        return 0;
    }
    return (valor1[1]>valor2[1])? 1 : -1;
}

function pintar(array){
    for(let i=0; i<array.length; i++){
        print("<tr>");
        for(let j=0; j<array[i].length; j++){
            print("<td>"+array[i][y]+"</td>");
        }
        print("</tr>");
    }
}
