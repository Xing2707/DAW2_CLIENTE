let ArrayColor=["#ec7063","#c39bd3","#45b39d","#f39c12","#85929e"];
let cartas=document.getElementById("cartas");
GenerarCarta(10);

function GenerarCarta(total){
    let estilo="float:left; height:200px; width:16%; background-color:aqua; margin:10px;";
    for(let i=0; i<total; i++){
        cartas.innerHTML+="<div id='carta"+i+"' style='"+estilo+"'></div>"
    }
}