export class Mascotas{
    constructor(nombre,comidaGramo){
        this.nombre=nombre;
        this._comidaGramo=comidaGramo;
    }
    get comidaGramo(){
        return this._comidaGramo;
    }

    ToString() {
        return "Nombre: "+this.nombre+"<br>Cantidad de Comidad en gramos al dia: "+this.comidaGramo; 
    }
}