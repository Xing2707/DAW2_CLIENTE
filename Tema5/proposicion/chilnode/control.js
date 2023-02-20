function MostrarHijo(){
    let CajaPadre = document.getElementById("CajaPadre").childNodes;
    let Listas = document.getElementById("Listas");
    for ( let i=1; i <= CajaPadre.length ; i++) {
        Listas.innerHTML+="<li>"+CajaPadre[i].textContent +"</li>"
        Listas.innerHTML+="<li> Tipo de nodo: "+i+" "+CajaPadre[i].nodeType +"</li>";
        
    }
}