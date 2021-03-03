//扩展运算符:把数组或者类数组转换成逗号分隔的数组

//解构赋值方式
function foo([a,b,c]){
    console.log(a,b,c)//1,2,3
}
let arr = [1,2,3]
foo(arr)

function foo(a,b,c){
    console.log(a,b,c)//1,2,3
}
let arr = [1,2,3]
foo(...arr)

console.log(...arr)//1,2,3

let arr1 = [1,2,3]
let arr2 = [4,5,6]
//es5中合并数组方法
Array.prototype.push.apply(arr1,arr2)
console.log(arr1)//[1, 2, 3, 4, 5, 6]

//es6中合并数组方法
arr1.push(...arr2)
console.log(arr1)//[1, 2, 3, 4, 5, 6]

let str = 'niuzi'
var arr = [...str]
console.log(arr)//["n", "i", "u", "z", "i"]

//rest参数:把逗号隔开的值组合成一个数组
function foo(x,y,z){
    let sum = 0
   Array.prototype.forEach.call(arguments,(item)=>{sum+=item})
   return sum
}
console.log(foo(1,2))//3
console.log(foo(1,2,3))//6

function foo(x,y,z){
    let sum = 0
    Array.from(arguments).forEach((item)=>sum+=item)
   return sum
}
console.log(foo(1,2))//3
console.log(foo(1,2,3))//6

function foo(...args){
  let sum = 0
  args.forEach((item)=>sum+=item)
  return sum
}
console.log(foo(1,2))//3
console.log(foo(1,2,3))//6

function foo(x,...args){
  console.log(x,args)// 1 [2,3]
}
foo(1,2,3)

let [x,...y] = [1,2,3]
console.log(x)//1
console.log(y)//[2,3]