import { Mascotas } from "./Mascota";
import { MascotasComida } from "./MascotasComida";

Perro=new MascotasComida("Jony",500);
Gato=new MascotasComida("Jeny",100);
Tortuga=new MascotasComida("GAW",20);

let parrafo=document.getElementById("parrafo");
parrafo.innerHTML+=Perro.imprimir()+"<br>";
parrafo.innerHTML+=Gato.imprimir()+"<br>";
parrafo.innerHTML+=Tortuga.imprimir()+"<br>";