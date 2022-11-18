let caja=document.getElementById("caja");
caja.style.backgroundColor="#58C3BB";
caja.style.height="200px";
caja.style.width="50%";
caja.style.margin="auto";

caja.addEventListener("mousedown",function(){
    caja.style.backgroundColor="#f5b041";
});
caja.addEventListener("mouseup",function(){
    caja.style.backgroundColor="#58C3BB";
});