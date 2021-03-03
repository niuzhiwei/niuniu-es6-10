//es5中的类与继承

//类
function People(name,age){
    console.log(this)//指向new出来的实例
    //实例属性，定义在构造函数上
    this.name = name
    this.age = age
    People.count++
}
//静态属性,定义在类上
People.count = 0;
//静态方法，定义在类上
People.getCount = function(){
    console.log(this)//指向当前构造函数
    console.log('当前共有'+People.count+'个人')
}
//实例方法
People.prototype.showName = function(){
    console.log('我的名字'+this.name)
}//方法最好定义在原型上

let p1 = new People('niuniu',28)
console.log(p1)
p1.showName()

let p2 = new People('luanluan',29)
console.log(p2)
p2.showName()

console.log(People.count)//0
People.getCount()//当前共有2个人


let str = new String('niu')
console.log(str)
//静态方法
Math.max(4,5)