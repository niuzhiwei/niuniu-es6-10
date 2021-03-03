//this指向定义时所在的对象，而不是调用时所在的对象
//不可以当作构造函数
//不可以使用arguments对象

let oBtn = document.querySelector('#btn')
oBtn.addEventListener('click',function(){
    window.setTimeout(function(){
        console.log(this)//window
    }, 100);
    console.log(this)//button
})

let oBtn = document.querySelector('#btn')
oBtn.addEventListener('click',function(){
    window.setTimeout(function(){
        //call apply bind
        console.log(this)//button
    }.bind(this), 100);
    console.log(this)//button
})

let oBtn = document.querySelector('#btn')
oBtn.addEventListener('click',function(){
    window.setTimeout(()=>{
        console.log(this)//button
    }, 100);
    console.log(this)//button
})

//类
function People(name,age){
    this.name = name
    this.age = age
}
let p1 = new People('niuniu',28)
console.log(p1)//People {name: "niuniu", age: 28}

let People = (name,age) =>{
    this.name = name
    this.age = age
}
let p1 = new People('niuniu',28)
console.log(p1) //People is not a constructor

let foo = (...args)=>{
    console.log(args)//[1, 2, 3]
    console.log(arguments)//arguments is not defined
}
foo(1,2,3)