let parrafo1=document.getElementById("parrafo1");
let parrafo2=document.getElementById("parrafo2");
let parrafo3=document.getElementById("parrafo3");
let parrafo4=document.getElementById("parrafo4");

document.addEventListener("mousemove",function(e){
    parrafo1.innerHTML="Posicion X: "+e.clientX+"<br>";
    parrafo2.innerHTML="Posicion Y: "+e.clientY+"<br>";
    parrafo3.innerHTML="Posicion Xr: "+e.screenX+"<br>";
    parrafo4.innerHTML="Posicion Yr: "+e.screenY+"<br>";
});