//  let nombre = "备忘录" //String 
//  console.log(nombre) //显示字符
//  let numero = 100 //int
//  let decimales= 100.01 //double
//  console.log(numero)
//  console.log(decimales)
//  let correcto = true //boolean
//  console.log(correcto)

//  let vacio = undefined //undefined 表示他是空的
//  console.log(vacio)

//  let nulos = null //esta nulo como undefined pero diferente funcion
//  console.log(nulos)


//  let a = "我叫陈星，我的年岁: "
//  let b = 22
//  let nombre2 = a + b //所有字符都可整合 不管是 int 或者 string
//  console.log(nombre2)


// let numero1 = 20
// let numero2 = 30.90
// let total = numero1 + numero2 // 可以使用 + - * / %(余数)
// console.log(total)
// console.log(total +20)
// console.log(total%10)

// var let const
// let 跟 var 有着相同的作用 let 可以取代 var 来使用
//const 是不可修改的变数 作用跟Java里面的 final 一样 一旦唤醒和赐予字符或数字就不能够修改


//array

    // let nombres = ["juan","pepe","ana"] //array
    // console.log(nombres)
    //  nombres.push("pedro") // 添加新的没名字到array的最后
    //  console.log(nombres)
    //  console.log(nombres.length) // 显示array的长度
    //  console.log("第一个名字",nombres[0]) //显示array位置所储存的数据， 一旦超过arry长度会显示 undefined 因为那个位置没有储存任何数据


//objeto

    // const card={
    //     nombre: "陈星",
    //     localidad: "madrid",
    //     edad: "22",
    // } //创建 objeto

    // console.log("名字",card.nombre) //显示objeto里面的特定部位，比如只想知道名字。

    // const post ={
    //     Image: "https://www.youtube.com/watch?v=1pYtVwIAvhY&t=2488s",
    //     desc: "这是JavaScript入门网站",
    //     date: "10/07/2022",
    //     Comment: ["很好的网站","很喜欢"],
    // }

    // const wall = [card,post] //合并两个objeto

    // console.log("wall",wall)


//if else

    // let num1 = 100
    // let num2 = 90
    // let num3 =120
    // if(num1>num2){
    //     console.log(num1,"比",num2,"大")
    // }else if(num1<num2){
    //     console.log(num1,"比",num2,"小")
    // }else{
    //     console.log(num1,"和",num2,"一样")
    // } // &&(and) ||(or) !=(not)

    // if(num1!=num2){
    //     console.log(num1,"和",num2,"不一样")
    // }else{
    //     console.log(num1,"和",num2,"一样")
    // }

    // if(num1>num2 && (num1-num2==10)){
    //     console.log(num1,"比",num2,"大10位数")
    // }else{
    //     console.log(num1,"比",num2,"小")
    // }

    // if(num1>num2 || num1>num3){
    //     console.log(num1,"比第二个数字或第三个数字大")
    // }else{
    //     console.log(num1,"是最小的数字")
    // }


//switch case

    // let num = 5

    // switch(num){
    //     case 1:
    //         console.log("你好")
    //         break;
    //     case 2:
    //         console.log("欢迎")
    //         break;
    //     case 3:
    //         console.log("hallo")
    //         break;
    //     default:
    //         console.log("再见")
    // }


 //for

    // let nombre = ["ana","juan","pepe","carlo","david"]
    // for(let i =0; i<nombre.length; i++){
    //     console.log(nombre[i])
    // }


//while

    // let nombre = ["ana","juan","pepe","cesar","diana"]
    // let cont = 0
    // while(cont<nombre.length){
    //     console.log(nombre[cont])
    //     cont++
    // }


//do while

    // let numero = [,1,2,3,4,5,6,7,8,9,10]
    // let cont = 0
    // do {
    //     console.log(numero[cont])
    //     cont++
    // } while (cont!=numero.length);


    // let numero=parseInt(Math.random()*100)
    // console.log(numero)


//metodo

    // function sumar(a,b) { //crear el metodo
    //     console.log("total=",a+b)
    // }

    // sumar(10,5)


//clases

    // class carta{
    //     constructor(nom){
    //         this.nombre = nom
    //     }

    //      hola() {
    //          console.log("hola ",this.nombre)
    //      }
    // }

    // const c1 = new carta("pepe")
    // let c2 =new carta("juan")
    // c2.hola()

    // 通过这种方式创建的class this 是不会 绑定在class上面的

    // const c21 = {nombre: "cesar"} 
    // c21.hola = c2.hola
    // c21.hola()   
    // console.log(c21) //可以通过这种方式创建使用class的资源

    // console.log(c1.nombre) //如果只显示 c3 会显示c3 所有的存储数据 toString
    // console.log(c2.nombre)

    //绑定this 只能class 才能使用
    // class carta{
    //     constructor(nom){
    //         this.nombre = nom
             //第一种绑定方法
    //         this.holacarta = this.hola.bind(this) //通过这种方法绑定 让funcion只能class创建的objeto才能使用
    //     }

    //      hola() {
    //          console.log("hola ",this.nombre) 
    //      }

          //第二种绑定方法
    //         holacarta2 = () =>{
    //             console.log("hola ",this.nombre)  
    //         }
    // }

    //     const c11 = new carta("juan")
    //     console.log("使用没绑定的funcion: ")
    //     c11.hola()
    //     console.log("使用绑定后的funcion: ")
    //     c11.holacarta()

    //     const c12 = {nom: "pepe"}
    //     console.log("使用没绑定的funcion: ") //this 被绑定所以nombre是空的。
    //     c12.holaa = c11.hola
    //     c12.holaa()

    //     const c13 = {nom: "carla"}
    //     console.log("使用绑定后的funcion: ")
    //     c13.holaaa= c11.holacarta
    //     c13.holaaa()

    // 2º forma de crear clase

    // function crearcarta(nombre){ //最好不要使用 编辑器会推荐你修改成 class
    //     this.nombre = nombre
    // }
    
    // const c3= new crearcarta("ana")
    // let c4= new crearcarta("Maria")

    // console.log(c3.nombre)
    // console.log(c4.nombre)

//herencia

    // class vehiculo{

    //     constructor(tipo){
    //         this.tipo = tipo
    //     }

    //     hola1(){
    //         console.log("hola")
    //     }
    // }

    // class coche extends(vehiculo){
    //     constructor(tipo,marca){
    //     super(tipo)
    //     this.marca = marca
    //     }

    //     hola2(){
    //         super.hola1()
    //         console.log("es un ",this.tipo," su marca es: ",this.marca)
    //     }
    // }

    // const coche1 =new coche("coche","limbo")

    // coche1.hola2()
