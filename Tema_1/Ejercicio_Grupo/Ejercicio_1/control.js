let recipido=document.getElementById("boton")

recipido.addEventListener("click",function(){
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value
    let num3=document.getElementById("num3").value
    let aray=[num1,num2,num3];
    let p1=document.getElementById("parrafo")

    aray.sort((a,b)=>b-a)
    p1.innerHTML=aray.slice(0,aray.length)
    
})



