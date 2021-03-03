// const obj = {
//     name:'niuniu',
//     course:'es'
// }
// const entries = Object.entries(obj)
// console.log(entries)

// //ES10
// const fromEntries =  Object.fromEntries(entries)
// console.log(fromEntries)


// //map->对象
// const map = new Map()
// map.set('name','niuniu')
// map.set('course','es')
// console.log(map)
// const fromEntries = Object.fromEntries(map)
// console.log(fromEntries)

const course = {
    math:80,
    englist:85,
    chinese:90
}
const res = Object.entries(course).filter(([key,val])=>val>=90)
console.log(Object.fromEntries(res)) //{chinese: 90}