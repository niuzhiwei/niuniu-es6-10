// let s1 = Symbol();
// let s2 = Symbol();
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)//false

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// console.log(s1)
// console.log(s2)

// const obj = {
//     name:'niuniu',
//     toString(){
//         return this.name
//     }
// }
// let s = Symbol(obj)
// console.log(s)//Symbol(niuniu)

// let s = Symbol('foo')
// s.name = 'niuniu'
// console.log(s.description)//foo

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2)//true

// function foo(){
//     return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x===y)//true,symbol for是在全局环境下定义

// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1))//undefined

// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2))//foo

// //应用场景
// const grade = {
//     张三:{
//         address:'xxx',tel:'111'
//     },
//     李四:{
//         address:'yyy',tel:'222'
//     },
//     王五:{
//         address:'zzz',tel:'333'
//     }
// }
// console.log(grade)

// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//     [stu1]:{
//         address:'xxx',tel:'111'
//     },
//     [stu2]:{
//         address:'yyy',tel:'222'
//     }
// }
// console.log(grade)

// const stu1 = Symbol('李四')
// const stu2 = Symbol('李四')
// const grade = {
//     [stu1]:{
//         address:'xxx',tel:'111'
//     },
//     [stu2]:{
//         address:'yyy',tel:'222'
//     }
// }
// console.log(grade)
// console.log(grade[stu1])// {address: "xxx", tel: "111"}

// const sym = Symbol('chengzi')
// class User{
//     constructor(name){
//         this.name = name
//         this[sym] = 'gugugugu'
//     }
//     getName(){
//         return this.name +this[sym]
//     }
// }
// const user = new User('niuniu')
// console.log(user.getName())//niuniugugugugu

// for(let key in user){
//     console.log(key)//name
// }

// for(let key of Object.keys(user)){
//     console.log(key)//name
// }

// for(let key of Object.getOwnPropertySymbols(user)){
//     console.log(key)//Symbol(chengzi)
// }

// for(let key of Reflect.ownKeys(user)){
//     console.log(key)//name Symbol(chengzi)
// }

// function getArea(shape){
//     let area = 0
//     switch(shape){
//         case 'Triangle':
//             area = 1
//             break
//         case 'Circle':
//             area = 2
//             break
//     }
//     return area
// }
// console.log(getArea('Triangle'))//1

const shapeType = {
    triangle:Symbol(),
    circle:Symbol()
}
function getArea(shape){
    let area = 0
    switch(shape){
        case shapeType.triangle:
            area = 1
            break
        case shapeType.circle:
            area = 2
            break
    }
    return area
}
console.log(getArea(shapeType.triangle))//1