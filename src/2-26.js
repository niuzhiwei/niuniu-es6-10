//Iterator 迭代器
//是一种接口机制，为各种不同的数据结构提供统一访问的机制
//主要供for...of消费
//一句话：不支持遍历的数据结构“可遍历”
function makeIterator(arr){
    let nextIndex = 0
    return {
        next(){
            return nextIndex < arr.length ? {
                value:arr[nextIndex++],
                done:false
            }:{value:undefined,
                done:true
            }
        }
    }
}
let it = makeIterator(['a','b','c'])
console.log(it.next())//a
console.log(it.next())//b
console.log(it.next())//c
console.log(it.next())//undefined

//不可迭代
for(let c of course){
    console.log(c)//Invalid attempt to iterate non-iterable instance.
}
let arr = ['a','b','c']
let it = arr[Symbol.iterator]()
console.log(it.next())//a

let map = new Map()
map.set('name','es')
map.set('age',5)
map.set('school','imooc')
let it = map[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())

//原生具备Iterator接口的数据结构
//Array
//Map
//Set
//String
//TypedArray
//函数的arguments对象
//NodeList对象

//可迭代协议:Symbol.iterator
//迭代器协议:return {next(){return{value,done}}}
let course = {
    allCourse:{
        frontend:['es','小程序','vue','react'],
        backend:['java','python','springboot'],
        webapp:['android','ios']
    }
}
course[Symbol.iterator] = function(){
    let allCourse = this.allCourse;
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    return {
        next(){
            if(!values.length){
                if(keys.length){
                   values =  allCourse[keys[0]]
                   keys.shift()
                }
            }
            return {
                done:!values.length,
                value:values.shift()
            }
        }
    }
}
for(let c of course){
    console.log(c)
}

//generator实现
course[Symbol.iterator] = function* (){
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    while(1){
        if(!values.length){
            if(keys.length){
                values = allCourse[keys[0]]
                keys.shift()
                yield values.shift()
            }else{
                return false
            }
        }else{
            yield values.shift()
        }
    }
}
for(let c of course){
    console.log(c)
}

