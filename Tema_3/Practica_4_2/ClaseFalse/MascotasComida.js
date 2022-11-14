export class MascotasComida extends Mascotas{
    constructor(nombre,comidaGramo){
        super(nombre,comidaGramo);
    }
    MascotaDias(){
        let bolsa=3000;
        let total=bolsa/super.comidaGramo;
        return "La bolsa de "+bolsa+"/g se puede consumir en: "+total +" dias";
    }
    ToString(){
        return super.ToString()+"<br>"+this.MascotaDias();
    }
}