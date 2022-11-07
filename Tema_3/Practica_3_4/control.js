let boton = document.getElementById("boton");

function abrir(){
    boton.style.display="block"
}

function cerrar(){
    boton.style.display="none"
}

boton.addEventListener("click",function(){
    let VentanaNueva=GenerarVentana();
    if(VentanaNueva.document.cookie!= null){
        alert("Hay cookie!");
    }
    VentanaNueva.scrollTo(0,1000);
})

function GenerarVentana(){
    let numero=parseInt(Math.random()*4);
    switch(numero){
        case 0:return window.open("https://mail.google.com","_blank","width=300,height=200,top=500 left=500");
        case 1:return window.open("https://correoweb.educa.madrid.org","_blank","width=300,height=200,top=500 left=500");
        case 2:return window.open("https://consent.yahoo.com/v2/collectConsent?sessionId=3_cc-session_58535d3e-6814-4c12-bbb3-51f390edac49","_blank","width=300,height=200,top=500 left=500");
        case 3:return window.open("https://outlook.live.com/owa/","_blank","width=300,height=200,top=500 left=500");
    }
}