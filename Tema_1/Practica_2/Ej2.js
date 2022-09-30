let nombre=["X","I","N","G"];
let minombre="Xing";

function buscar_caracte(){
    for(let i=0; i<nombre.length; i++){
        if(i==3-1){
            console.log(nombre[i]);
            return nombre[i];
        }
    }
}

const p1=document.getElementById("nom");
console.log(minombre);

p1.innerHTML= "<p>nombre: " + minombre + " <br/><br/> La letra de 3 posicion de mi nombre es: "+buscar_caracte()+"</p>";