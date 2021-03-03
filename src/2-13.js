//es6中的类与继承
class People{
    constructor(name,age){
       this.name = name
       this.age = age
       this._sex = -1
    }
    get sex(){ //属性
        if(this._sex === 1){
            return 'male'
        }else if(this._sex === 0){
            return 'female'
        }else{
            return 'error'
        }
    }
    set sex(val){ //1:male 0:female
       if(val === 0|| val===1){
        this._sex = val
       }
    }
    showName(){
        console.log('名字叫'+this.name)
    }
    //静态方法
    static getCount(){
        return 5
    }
}
People.count = 9 //静态属性
console.log(People.count)//9

let p1 = new People('niuniu',28)
console.log(p1)//{name: "niuniu", age: 28}
p1.sex = 1//Cannot set property sex of #<People> which has only a getter
console.log(p1.sex)//male
// console.log(p1.getCount())//p1.getCount is not a function
console.log(People.getCount())

class Coder extends People{
    constructor(name,age,company){
        super(name,age)
        this.company = company
    }
    showCompany(){
        console.log(this.company)
    }
}
let c1 = new Coder('niuniu',28,'moumou')
console.log(c1)//{name: "niuniu", age: 28, company: "moumou"}
c1.showName()//名字叫niuniu
c1.showCompany()//moumou
c1.sex = 1
console.log(c1.sex)//male
console.log(Coder.getCount())//5