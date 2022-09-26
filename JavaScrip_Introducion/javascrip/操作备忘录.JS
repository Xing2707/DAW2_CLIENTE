
const content = document.getElementById("contes")
const date = document.getElementById("fecha")
const time = document.getElementById("tiempo")

const addbwl = document.getElementById("adbwl")
const rembwl = document.getElementById("delbwl")

const listbwl = document.getElementById("lis")

const list =[]

function showlist (){
    let htmlStr= ""

    list.forEach(function(item) {
    
            htmlStr = htmlStr + `  
            <div class="lis" id="lis">
                <div class="ite">
                    <p>内容 : ${item.content}</p>
                    <p>时间 : ${item.date} ${item.time}</p>
             </div>
            </div>
            ` //这种语法可以使代码能换行着写，并且插入item物件里面的字符
    })

    listbwl.innerHTML= htmlStr
}

addbwl.addEventListener("click",function(){
    console.log(content.value)
    console.log(date.value)
    console.log(time.value)

    list.push({
        content: content.value,
        date: date.value,
        time: time.value
    }) //push 是增加新的物件到最后的， 如果想增加新的物件到前面的话 使用 unshift

    showlist()
})

rembwl.addEventListener("click",function(){
    list.pop() // pop 是删除最后一个物件，如果想删除最前面的物件的话使用 shift

        let htmlStr= ""

        list.forEach(function(item) {
        
            showlist()
        })
})