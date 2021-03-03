// //数组解构赋值
// let arr = [1,2,3]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let [a,b,c] = [1,2,3]
// console.log(a,b,c)//1,2,3

// let [a,b,[c,d]] = [1,2,[3,4]]
// console.log(a,b,c,d)//1,2,3,4

// let [a,b,[c]] = [1,2,[3,4]];
// console.log(a,b,c);//1,2,3

// let [a,b,c] = [1,2,[3,4]];
// console.log(a,b,c);//1,2,[3,4]

// let [a,b,c,d] = [1,2,[3,4]];
// console.log(a,b,c,d);//1,2,[3,4],undefined

// let user = {
//     name:'niuniu',
//     age:28
// }
// let name = user.name
// let age = user.age
// console.log(name,age)//niuniu 28

// let {age:uage,name:uname} = user
// console.log(uage,uname)//28 niuniu

// let str = 'imooc'
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }
// let [a,b,c,d,e] = str
// console.log(a,b,c,d,e)//i m o o c,字符串解构类似数组解构

// let [a,b,c=8] = [4,5]
// console.log(a,b,c)//4 5 8

// let {name,age= 18} = {
//     name:'niuniu'
// }
// console.log(name,age)//niuniu 18

// function foo(){console.log(123)}
// let [a=foo()] = [1]
// console.log(a)//1,惰性赋值

// function foo([a,b,c]){
//  console.log(a,b,c)//1,2,3
// }
// let arr = [1,2,3]
// foo(arr)

// function foo({name,age,school = 'wuhan'}){
//     console.log(name,age,school)//niuniu 28 wuhan
// }
// let obj = {
//     name:'niuniu',
//     age:28
// }
// foo(obj)

// function foo(){
//     let obj = {
//     name:'niuniu',
//     age:28,
//     school:'xxx'
// }
// return obj
// }
// let {name,age} = foo()
// console.log(name,age)//niuniu 28

