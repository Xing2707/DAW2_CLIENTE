let ArrayColor=["#ec7063","#c39bd3","#45b39d","#f39c12","#85929e"];
let cartas=document.getElementById("cartas");

function GenerarCarta(total){
    for(let i=0; i<total; i++){
        cartas.innerHTML+="<div id='"+i+"'></div>"
    }
}