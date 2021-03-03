//Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符
const obj = {
    foo:123,
    get bar(){return 'abc'}
}
console.log(Object.getOwnPropertyDescriptors(obj))