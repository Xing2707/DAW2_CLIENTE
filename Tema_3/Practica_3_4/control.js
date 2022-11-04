let boton = document.getElementById("boton");

function abrir(){
    boton.style.display="block"
}

function cerrar(){
    boton.style.display="none"
}

boton.addEventListener("click",function(){
    let numero=parseInt(Math.random()*4);
    switch(numero){
        case 0:AbrirVentana("https://mail.google.com"); break;
        case 1:AbrirVentana("https://correoweb.educa.madrid.org"); break;
        case 2:AbrirVentana("https://consent.yahoo.com/v2/collectConsent?sessionId=3_cc-session_58535d3e-6814-4c12-bbb3-51f390edac49"); break;
        case 3:AbrirVentana("https://outlook.live.com/owa/"); break;
    }
})

function AbrirVentana(string){
    let nueva=window.open(string,"_blank","width=300,height=200,top=500 left=500,toolbar=yes,menubar=yes,resizable=no");
    if(nueva.document.cookie != null){
        alert("hay cookies");
    }
    nueva.scrollTo(0,1000);
}