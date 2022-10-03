const h1 = document.getElementById("titulo");
 h1.innerHTML= "What can javaScript Do?";

 const p1 = document.getElementById("parrafo");
p1.innerHTML= "JavaScript can change HTML. atribute values. <br/> In this case JavaScript changes the value of the src (source) atritute of image.";

const bombilla = document.getElementById("foto");

function bombilla_on(){
        bombilla.src = "./bombilla_encedido.jpg";
}

function bombilla_off(){
    bombilla.src = "./bombilla_apagado.png";
}


