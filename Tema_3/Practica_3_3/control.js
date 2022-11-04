let nuevo
function abrirVentana(){
    alert("La ventana Se cierra automaticamente en 30 segunto.\nTambien puedes cerrarlo con el bonto de cierro");
   nuevo= window.open("https://www.w3schools.com", "", "top=100,left=200 width=400,height=400"); 
    setTimeout(function(){nuevo.window.close()},30000);
}

function cerrarVentana(){ nuevo.window.close(); }