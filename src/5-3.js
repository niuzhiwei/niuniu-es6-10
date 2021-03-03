const obj1 = {
    name:niuniu,
    age:28,
    school:'wh',
    course:'es'
}
const {name,age,...rest} = obj1
console.log(obj1.name)
console.log(obj1.rest)