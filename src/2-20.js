//es5
let obj = {}
let newVal = ''
Object.defineProperty(obj,'name',{
    get(){
        return newVal
    },
    set(val){
        console.log('set')
        // this.name = val
        newVal = val
    }
})
console.log(obj.name)
obj.name = 'es'
console.log(obj.name)

//proxy
let obj = {}
let p = new Proxy(obj,{})
p.name = 'niu'
console.log(obj.name)//niu

//get
let arr = [7,8,9]
arr = new Proxy(arr,{
    get(target,prop){
        console.log(target,prop)//[7,8,9]  1
       return prop in target ?target[prop]:'error'
    }
})
console.log(arr[1])//8
console.log(arr[10])//error

let dict = {
    hello:'你好',
    world:'世界'
}
dict = new Proxy(dict,{
    get(target,prop){
    return prop in target?target[prop]:prop
    }
})
console.log(dict['hello'])//你好
console.log(dict['niu'])//niu

//set
let arr = []
arr = new Proxy(arr,{
    set(target,prop,val){
        console.log(target,prop,val)
       if(typeof val ==='number'){
           target[prop] = val
           return true
       }else{
           return false
       }
    }
})
arr.push(5)
console.log(arr[0])//5

//has
let range = {
    start:1,
    end:5
}
range = new Proxy(range,{
    has(target,prop){
       return prop >=target.start && prop<=target.end
    }
})
console.log(2 in range)//true
console.log(9 in range)//false

//ownKeys
let obj = {
    name:'niu',
    [Symbol('es')]:'es6'
}
console.log(Object.getOwnPropertyNames(obj))// ["name"]
console.log(Object.getOwnPropertySymbols(obj))//[Symbol(es)]
console.log(Object.keys(obj))//["name"]
for(let key in obj){
    console.log(key)//name
}

let userinfo = {
    username:'niuniu',
    age:28,
    _password:'***'
}
userinfo = new Proxy(userinfo,{
    ownKeys(target){
      return Object.keys(target).filter(key=>!key.startsWith('_'))
    }
})
for(let key in userinfo){
    console.log(key)//username age
}
console.log(Object.keys(userinfo))// ["username", "age"]

let user = {
    name:'niu',
    age:28,
    _password:'***'
}
user = new Proxy(user,{
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            return target[prop]
        }
    },
    set(target,prop,val){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            target[prop] = val
            return true
        }
    },
    deleteProperty(target,prop){//拦截删除
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            delete target[prop]
            return true
        }
    },
    ownKeys(target){
       return Object.keys(target).filter(key=>!key.startsWith('_'))
    }
})
console.log(user.age)//28
console.log(user._password)//不可访问
user.age = 18
console.log(user.age)//18
user._password = 'xxx')//不可访问
delete user._password//不可访问
for(let key in user){
    console.log(key)//name age
}

//apply
let sum = (...args)=>{
    let sum = 0
    args.forEach(item=> {
        sum+=item
    })
    return sum
}
sum = new Proxy(sum,{
    apply(target,ctx,args){
       return target(...args) *2
    }
})
console.log(sum(1,2))//6
console.log(sum.call(null,1,2,3))//12
console.log(sum.apply(null,[1,2,3]))//12

//construct 拦截new命令
let User = class {
    constructor(name){
        this.name = name
    }
}
User = new Proxy(User,{
    construct(target,args,newTarget){
         return new target(...args)
    }
})
console.log(new User('niu'))