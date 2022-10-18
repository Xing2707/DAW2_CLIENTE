let recipido=document.getElementById("boton")
let texto1,texto2
let aray=[]


recipido.addEventListener("click",function(){

    function igual(valor){
        let comp=valor[0]
        console.log(comp)
        if(comp.localeCompare(valor[0])==1){
            return true;
        }else
            return false;
    }


    texto1=document.getElementById("tex1").value.toLowerCase()
    texto2=document.getElementById("tex2").value.toLowerCase()
    aray.push(texto1,texto2)
    let validad=aray.map(igual)
    console.log(validad)
    // console.log(validad);
})

