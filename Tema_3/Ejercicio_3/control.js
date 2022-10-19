let recipido=document.getElementById("boton")
let tex1,tex2
let ary=[]
let p1=document.getElementById("parrafo")

function comparar(valor){
   
    let comp1=valor[0].replace(/\s+/g,'')
    let comp2=valor[1].replace(/\s+/g,'')
                                                                                                                                                                             //comp1.localeCompare(comp2)==0  localcompareto sirve para comparar dos texto si son iguales si devuelve 0 es decir es true igual si devuelve 1 es decir es false no es igual
    if(comp1.includes(comp2)){
        return true
    }else{
        return false
    }
}
recipido.addEventListener("click",function(){
    tex1=document.getElementById("tex1").value.toLowerCase()
    tex2=document.getElementById("tex2").value.toLowerCase()
    ary=[[tex1,tex2]]
    console.log(ary)
    let valido=ary.map(comparar)
    console.log(valido)
     if(valido[0]){
         p1.innerHTML=tex2 +" aparece todo dentro de "+ tex1
     }else{
        p1.innerHTML=tex2 +" no aparece todo dentro de "+ tex1
     }
    
    

})