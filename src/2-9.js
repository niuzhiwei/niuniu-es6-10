// let name = 'niuniu'
// let s = 'school'
// let obj = {
//     name,//对象key和value对应名字相同，可以省略
//     age:28,
//     [s]:'wuhan',//变量做key
//     study(){
//         console.log(this.name+'正在肚子疼')
//     }//方法简写
// }
// obj.study()

// console.log(Object.is(2,'2'))//false 严格相等
// console.log(Object.is(NaN,NaN))//true
// console.log(Object.is(+0,-0))//false
// let obj1 = {
//     name:'niuniu',
//     age:28
// }
// let obj2 = {
//     name:'niuniu',
//     age:28
// }
// console.log(Object.is(obj1,obj2))//false

// let x = {
//     a:3,
//     b:4
// }
// let y = {...x}
// console.log(y)//{a: 3, b: 4}


// let x = {
//     a:3,
//     b:4
// }
// let y = {c:5,a:6}
// Object.assign(y,x)
// console.log(y)//{c: 5, a: 3, b: 4}

// console.log('a' in x)//true,对象里是否包含某个属性

// let arr = [1,2,3]
// console.log(3 in arr)//false,查找的是索引
// console.log(2 in arr)//true,查找的是索引

//遍历对象属性
let obj = {
    name:'niuniu',
    age:28,
    school:'wuhan'
}
for(let key in obj){
    console.log(key,obj[key])
}
Object.keys(obj).forEach(key=>console.log(key,obj[key]))
Object.getOwnPropertyNames(obj).forEach(key=>console.log(key,obj[key]))
Reflect.ownKeys(obj).forEach(key=>console.log(key,obj[key]))