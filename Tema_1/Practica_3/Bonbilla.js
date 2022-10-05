const h1 = document.getElementById("titulo");
 h1.innerHTML= "What can javaScript Do?";

 const p1 = document.getElementById("parrafo");
p1.innerHTML= "JavaScript can change HTML. atribute values. <br/> In this case JavaScript changes the value of the src (source) atritute of image.";


let bombilla = document.getElementById("foto");
const bom_en = document.getElementById("on");
const bom_ap = document.getElementById("off");

bom_en.addEventListener("click",function(){

    bombilla.src="./bombilla_encedido.jpg"
})

bom_ap.addEventListener("click",function(){

    bombilla.src="./bombilla_apagado.png"
})