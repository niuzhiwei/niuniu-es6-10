//全局作用域
var abc = 1234;//控制台输入window.abc可以直接访问
abcd = 2345;//被当作全局属性,可被删除

function test(){
    ab = 45;//没有用var声明，挂在window属性存在,全局变量
}
test();

//函数作用域（局部作用域）
function test1(){
    var a = 3;
    if(a===3){
        var b = 4;
        console.log('abc')
    }else{
        console.log('abcd')
    }
    console.log(b);//4
    return a+4;
}
console.log(test1());//7
// console.log(a);//Uncaught ReferenceError: a is not defined

//闭包
function test2(){
    var a = 3;
    function test3(){
        var b = 4;
        return a+b
    }
    //console.log(b);//b is not defined;函数作用域是向上找的
    return test3
}
console.log(test2()());//3

//动态作用域
window.a = 3;
function test4(){
    console.log(this.a)
}
test4();//3
test4.bind({a:100})();//100

//暂时性死区
var a = 5
if(true){
    a = 6;
    let a;//Cannot access 'a' before initialization
}
function foo(a=b,b=2){
    console.log(a,b)
}
foo()//Cannot access 'b' before initialization

for(var i =0;i<3;i++){
    console.log('循环内',i)
}
console.log('循环外',i)
//循环内 0
//循环内 1
//循环内 2
//循环外 3

for(let i =0;i<3;i++){
    console.log('循环内',i)
}
console.log('循环外',i)//ReferenceError: i is not defined

if(false){
    var a = 5
}
console.log(a)//undefined,var没有块级作用域，变量提升了

if(true) var a = 5;//正常
if(true) let a = 5;//Lexical declaration cannot appear in a single-statement context

for(var i=0;i<3;i++){
    setTimeout(() => {
        console.log(i);//3个3，定时器是异步操作，取值是在for循环完成以后
    }, 10);
}
for(var i=0;i<3;i++){
    (function(i){
        setTimeout(() => {
            console.log(i);//0,1,2,利用了闭包，内部函数调用了外部函数的变量，外部函数的变量没有被释放
        }, 10);
    })(i)
}
for(let i=0;i<3;i++){
    setTimeout(() => {
        console.log(i);//0,1,2,利用babel查看,还是利用了上面的闭包
    }, 10);
}