// let s = new Set()
// console.log(s)//Set(0)

// //Set值唯一
// let s = new Set([1,2,3,2])
// s.add('niu').add('es')
// s.delete(2)
// console.log(s)//Set(5) {1, 3, "niu", "es"}
// // s.clear() //清空
// console.log(s.has('niu'))//true
// console.log(s.size)//4

// //遍历
// s.forEach(item=>console.log(item))//1 3  niu es
// for(let item of s.keys()){
//     console.log(item)//1 3  niu es
// }
// for(let item of s.values()){
//     console.log(item)//1 3  niu es
// }

// //应用
// //去重
// let arr = [1,2,3,4,2,3]
// let s = new Set(arr)
// console.log(s)//Set(4) {1, 2, 3, 4}

// //合并去重
// let arr1 = [1,2,3,4]
// let arr2 = [2,3,4,5,6]
// let s = new Set([...arr1,...arr2])
// console.log(s)
// console.log([...s])//[1, 2, 3, 4, 5, 6]
// console.log(Array.from(s))//[1, 2, 3, 4, 5, 6]

// //交集
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let result = new Set(arr1.filter(item=>s2.has(item)))
// console.log(Array.from(result))//[2, 3, 4]

// //差集
// let arr3 = new Set(arr1.filter(item=>!s2.has(item)))
// let arr4 = new Set(arr2.filter(item=>!s1.has(item)))
// console.log(arr3)//Set(1) {1}
// console.log(arr4)//Set(2) {5, 6}
// console.log([...arr3,...arr4])//[1, 5, 6]

//WeakSet
let ws = new WeakSet()
const obj1 = {
    name:'niu'
}
const obj2 = {
    age:5
}
ws.add(obj1)
ws.add(obj2)
// ws.delete(obj1)
// console.log(ws)
// console.log(ws.has(obj2))//true
ws.forEach(item=>console.log(item)) //ws.forEach is not a function .WeakSet不可遍历

//垃圾回收机制 GC
//Weakset 弱引用 