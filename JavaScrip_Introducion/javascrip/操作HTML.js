//window 代表一整个浏览器的功能和操作

    window.addEventListener("load",function(params){
           const p1 = document.getElementById("title") //获取标签的id是 title 的信息
           console.log(p1)
            p1.innerText = "欢迎使用备忘录" //修改所在标签里面的文字内容


            const b1 = document.getElementById("boton")
            b1.addEventListener("click",function(){
               console.log("按下去") 
            }
            ) //创建新的监听事件 当按钮被按下后台显示 按下去

            const box1 = document.getElementById("box")
            box1.innerHTML = "<p> test </p>"

            const inp1 = this.document.getElementById("ip1")
            inp1.addEventListener("keyup",function(texto){
                console.log("input")
                console.log("texto: ",texto.target.value)
            }) //这个事件是为了提取键盘按钮所打的每一个字


        }

        //每一个创建的新监听事件内部文字 像 click,keyup 必须是一样的 一旦少一个字母都不能读取你所需要的信息 比如说 keyup 是用来读取键盘输入信息， click是当你按下鼠标左键会发生的事。
    ) // 创建网页的载入入口， 需要等网页加载完毕了才会做一个回呼。

//document 获取html档案里面的标签， 比如寻找 ID， 插入 css
