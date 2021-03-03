//DOM
let divs = document.getElementsByTagName('div')
console.log(divs)// HTMLCollection []

let divs2 = document.getElementsByClassName('xx')
console.log(divs2)// HTMLCollection []

let divs3 = document.querySelectorAll('.xx')
console.log(divs3)//NodeList []
console.log(divs3 instanceof Array)//false
//以上都为伪数组

//slice
let arr =Array.prototype.slice.call(divs3)
console.log(arr)//[] 转化成真正的数组，es5方法

function foo(){
    console.log(arguments)//Arguments(3) [1, "niuniu", true]
    console.log(arguments instanceof Array)//false
}
foo(1,'niuniu',true)

//es6中伪数组转化
let arrayLike = {
    0:'es6',
    1:'es7',
    2:'es8',
    length:3
}
let arr = Array.from(arrayLike)
console.log(arr)// ["es6", "es7", "es8"]
arr.push('es9')
console.log(arr)//["es6", "es7", "es8", "es9"]

let arr = new Array(1,2)
console.log(arr)//[1,2]

let arr = new Array(3)
console.log(arr)//[empty × 3]

let arr = Array.of(1,2)
console.log(arr)//[1,2]

let arr = Array.of(3)
console.log(arr)//[3]

let arr = Array.of(1,true,'niuniu',[1,2,3],{age:28})
console.log(arr)//[1,true,'niuniu',[1,2,3],{age:28}]

//复制数组的前面两个元素到后面两个元素上
//参数target:复制到指定目标索引位置 start:元素复制的起始位置 end:停止复制的索引位置，默认到结尾
let arr = [1,2,3,4,5]
console.log(arr.copyWithin(1,3))//[1, 4, 5, 4, 5]

let arr = new Array(3).fill(7)
console.log(arr)//[7, 7, 7]

let arr = [1,2,3,4,5]
arr.fill('niu',1,3)
console.log(arr)//[1, "niu", "niu", 4, 5]
arr.fill(0)
console.log(arr)//[0, 0, 0, 0, 0]

let arr = [1,2,3,NaN]
console.log(arr.indexOf(2))// 1
console.log(arr.indexOf(NaN))// -1
console.log(arr.includes(2))//true
console.log(arr.includes(NaN))//true