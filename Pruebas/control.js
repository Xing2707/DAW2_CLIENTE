let array=[["juan",1000],["javiel",1000],["ana",900],["pepe",3000],["a",1100]]
console.log(array);
array.sort(ordenar);
    function ordenar(a,b){
        if(a[1]=== b[1]){
            return 0;
        }
        return (a[1]>b[1])? 1: -1;
    
    }
console.log(array);