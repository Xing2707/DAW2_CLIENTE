// crear una variable que con busqueda de atributo id de etiqueta html
let busquedaId = document.getElementById("busquedaId"); 
busquedaId.style.height="30px";
busquedaId.style.fontSize="20px";
busquedaId.style.color="springgreen";
//Controla estilo de id buscado.

// crear una variable que con busqueda de atributo class de etiqueta html
let busquedaClass = document.getElementsByClassName("busquedaClass");
for(i=0; i<busquedaClass.length; i++){
    busquedaClass[i].style.backgroundColor="pink";
    busquedaClass[i].style.fontSize="20px";
    busquedaClass[i].style.color="white";
}
//Controla estilo de class buscado.

// crear una variable que con busqueda de atributo name de etiqueta html
let busquedaName = document.getElementsByName("busquedaName");
busquedaName.forEach(item => {
    item.style.fontSize="20px";
    item.style.letterSpacing="5px";
    item.style.color="red";
});
//Controla estilo de class buscado.

// crear una variable que busca la etiqueta html
let buscaEtiqueta = document.getElementsByTagName("span");
for(i=0; i<buscaEtiqueta.length; i++){
    buscaEtiqueta[i].style.fontSize="20px";
    buscaEtiqueta[i].style.fontFamily="cursive";
    buscaEtiqueta[i].style.color="blueviolet";
}
//Controla estilo de etiqueta buscado.

//crear una variable que recibe query selecto buscado por id de etiqueta html
let busquedaQuerySelecto=document.querySelector("#busquedaQuerySelecto");
busquedaQuerySelecto.style.fontSize="20px";
busquedaQuerySelecto.style.fontFamily="arial";
busquedaQuerySelecto.style.backgroundColor="silver";
//Controla estilo de id buscado.

//crear una variable que recibe query selecto all buscado por class de etiqueta html
let busquedaQuerySelectoAll1=document.querySelectorAll(".busquedaQuerySelectoAll");
for(i=0; i<busquedaQuerySelectoAll1.length; i++){
    busquedaQuerySelectoAll1[i].style.fontSize="20px";
    busquedaQuerySelectoAll1[i].style.color="violet";
    busquedaQuerySelectoAll1[i].style.letterSpacing="10px"
}
//tambien puedes buscar por atributo name o nombre de etiqueta aqui solo hacer una ejemplo mas con atributo name
let busquedaQuerySelectoAll2=document.querySelectorAll('[name="busquedaQuerySelectoAll"]');
for(i=0; i<busquedaQuerySelectoAll2.length; i++){
    busquedaQuerySelectoAll2[i].style.fontSize="20px";
    busquedaQuerySelectoAll2[i].style.backgroundColor="lightcyan";
    busquedaQuerySelectoAll2[i].style.color="blue";
}