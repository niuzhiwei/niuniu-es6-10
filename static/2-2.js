//es5中定义一个常量
Object.defineProperty(window,'PI',{value:3.14,writable:false})
console.log(PI);//3.14
PI = 5;
console.log(PI);//3.14

const a = 5;
a = 6;//Assignment to constant variable.

const a
a = 5;//Missing initializer in const declaration

if(true){
    const a = 5;
}
console.log(a);//a is not defined

if(true){
    console.log(a)
    const a = 5;//Cannot access 'a' before initialization
}

const obj = {
    name:'niuniu',
    age:28
}
console.log(obj)//{name: "niuniu", age: 28}
obj.school = 'wuhan'
console.log(obj)//{name: "niuniu", age: 28, school: "wuhan"}
//基本数据类型是栈内存(stack),比如数字，字符串,const其实是变量所指的内存地址不可改变

const arr = [1,2,3]
arr.push(4)
console.log(arr)//[1, 2, 3, 4]

const obj = {
    name:'niuniu',
    age:28,
    skill:{
        name:'code',
        year:5
    }
}
Object.freeze(obj)
obj.school = 'wuhan'//冻结后不会被改变
obj.skill.year = 100
console.log(obj)//object.free的冻结是只是冻结了第一层