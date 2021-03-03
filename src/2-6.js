function foo(x,y){
  y = y || 'world'
  console.log(x,y)//hello world
}
foo('hello')

//参数默认值
function foo(x,y='world'){
   console.log(x,y) //hello world
}
foo('hello')

function foo(x=5){
   const x = 1;//Identifier 'x' has already been declared
}
foo()

function foo(x,x,y=5){
   // Argument name clash
}
foo()

//与解构赋值结合
function foo({x,y=5}){
   console.log(x,y)//1 2
}
foo({x:1,y:2})

function ajax(url,{body='',method='GET',headers={}}={}){
   console.log(method)//POST
}
ajax('http://123.com',{method:'POST'})

function foo(x=1,y=2,z=3){
    console.log(x,y)
}
console.log(foo.length)//0 返回的是没有指定默认值的参数的个数

let x = 1
function foo(x,y=x){
  console.log(y)//2
}
foo(2)

let x = 1
function foo(y=x){
   let x = 2
   console.log(y)//1
}
foo()

function foo(y=x){
    let x = 2
    console.log(y)//x is not defined
}
foo()

function foo(){}
console.log(foo.name)//foo

console.log((new Function).name)//anonymous匿名

function foo(x,y){
    console.log(this,x,y)// {name: "niu"} 1 2
}
foo.bind({name:'niu'},1,2)()

function foo(x,y){
    console.log(this,x,y)// {name: "niu"} 1 2
}
foo.bind({name:'niu'})(1,2)
console.log(foo.bind({}).name)//bound foo

console.log((function(){}).bind({}).name)//bound