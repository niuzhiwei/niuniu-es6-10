//Object -> Reflect 将Object属于语言内部的方法放到Reflect上
let obj = {}
let newVal = ''
Reflect.defineProperty(obj,'name',{
    get(){
        return newVal
    },
    set(val){
       newVal = val
    }
})
obj.name = 'es'
console.log(obj.name)//es

//修改某些Object方法的返回结果，让其变得更合理
if(Reflect.defineProperty()){//boolean

}else{}

//让Object操作变为函数行为
console.log('assign' in Object)//true
console.log(Reflect.has(Object,'assign'))// true

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
            return Reflect.get(target,prop)
        }
    },
    set(target,prop,val){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            Reflect.set(target,prop,val)
            return true
        }
    },
    deleteProperty(target,prop){//拦截删除
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            // delete target[prop]
            Reflect.deleteProperty(target,prop)
            return true
        }
    },
    ownKeys(target){
    //    return Object.keys(target).filter(key=>!key.startsWith('_'))
      return Reflect.ownKeys(target).filter(key=>!key.startsWith('_'))
    }
})
console.log(user.name)//niu
user.age = 18
console.log(user.age)//18
delete user.age
console.log(user.age)//undefined
for(let key in user){
    console.log(key)//name
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
       return Reflect.apply(target,target,[...args]) *2
    }
})
console.log(sum(1,2,3))//12