document.addEventListener("mousemove",function(e){
    let caja=document.getElementById("caja");
        caja.style.top=e.clientY+"px";
        caja.style.left=e.clientX+"px";
})