//继承（组合继承例子）
//父类
function Animal(name){
    this.name = name
}
Animal.prototype.showName = function(){
    console.log('名字是：'+this.name)
}
//子类
function Dog(name,color){
    Animal.call(this,name) //属性继承
    this.color = color
}
Dog.prototype  = new Animal()
Dog.prototype.constructor = Dog //原型继承

let d1 = new Dog('wangcai','white')
console.log(d1)
d1.showName()