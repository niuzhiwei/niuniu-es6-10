// //深拷贝与浅拷贝
// let target = {
//     a:{
//         b:{
//             c:1
//         },
//         e:4,
//         f:5,
//         g:6
//     }
// }
// let source = {
//     a:{
//         b:{
//             c:1
//         },
//         e:2,
//         f:3
//     }
// }
// Object.assign(target,source)
// console.log(target)//只是浅拷贝

//深拷贝
let checkType = data =>{
   return Object.prototype.toString.call(data).slice(8,-1)
}
let deepClone = target =>{
    let targetType =  checkType(target)
    let result
    if(targetType === 'Object'){
        result = {}
    }else if(targetType === 'Array'){
        result = []
    }else{
        return target
    }
    for(let i in target){
       let value = target[i];
       let valueType = checkType(value)
       if(valueType === 'Object' || valueType === 'Array'){
           result[i] = deepClone(value)
       }else{
        result[i] = value
       }
    }
    return result
}
let arr1 = [1,2,{age:18}]
let arr2 = deepClone(arr1)
console.log(arr2)