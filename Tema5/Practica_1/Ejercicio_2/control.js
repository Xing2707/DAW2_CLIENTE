let arrayUrl=["./IMG/cara1.jpg","./IMG/cara2.jpg","./IMG/cara3.jpg","./IMG/cara4.jpg","./IMG/cara5.jpg"];
let arrayCarta=[];
let cartas=document.getElementById("cartas");
partiCarta();
generarCarta(10);

function generarCarta(total){
    let estilo="style='float:left; height:300px; width:16%; background-color:aqua; margin:10px;'";
    let estiloIMG="style='width:100%; height:100%; display:none'";
    for(let i=0; i<total; i++){
        cartas.innerHTML+="<div id='carta"+(i+1)+"'"+estilo+"onclic='mostrar()'><img src='"+arrayCarta[i]+"' "+estiloIMG+"/></div>"
    }
}

function mostrar(){
}

function partiCarta(){
    let cont0=0,cont1=0,cont2=0,cont3=0,cont4=0;
        for(let y=1; y<=arrayUrl.length*2; y++){
                let posicion=Math.random()*5;
                let opcion=true;
                posicion=Number.parseInt(posicion);
                if(posicion==0){
                    cont0+=1;
                    if(cont0>2){
                        y--;
                        opcion=false;
                    }
                }
                if(posicion==1){
                    cont1+=1;
                    if(cont1>2){
                        y--;
                        opcion=false;
                    }
                }
                if(posicion==2){
                    cont2+=1;
                    if(cont2>2){
                        y--;
                        opcion=false;
                    }
                }
                if(posicion==3){
                    cont3+=1;
                    if(cont3>2){
                        y--;
                        opcion=false;
                    }
                }
                if(posicion==4){
                    cont4+=1;
                    if(cont4>2){
                        y--;
                        opcion=false;
                    }
                }
                if(opcion){
                    arrayCarta.push(arrayUrl[posicion]);
                }
        }
}