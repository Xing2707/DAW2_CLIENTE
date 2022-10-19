let hoy=new Date()
let mes=hoy.getMonth() +1
let dia=hoy.getDate()
let anio=hoy.getFullYear()

let p1=document.getElementById("parrafo")
let DiaR=dias(dia,mes,anio)
let fechaAcual=hoy.toLocaleDateString()

p1.innerHTML=fechaAcual+ " Hasta fin de año queda: "+DiaR+ " dias."

function dias(d, m, a){
    let diaF=0;
    while(a<2023){
        switch(m){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: diaF+=31; break;

            case 4:
            case 6:
            case 9:
            case 11: diaF+=30; break;

            case 2: diaF+=28;
        }

        if(m==12){
            a++
        }
        m++
    }
    return diaF-d
}