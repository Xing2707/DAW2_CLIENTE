let recipido=document.getElementById("boton")

recipido.addEventListener("click", function(){
    let pre= document.getElementById("precio").value
    let can= document.getElementById("cant").value
    let p1= document.getElementById("parrafo")
    p1.innerHTML="Total: "+ pre*can
})