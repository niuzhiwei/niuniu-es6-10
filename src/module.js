// export const a = 5
// export const b = 'niu'
// export const sum = (x,y)=>{return x+y}
// const obj = {
//     name:'es'
// }
// export {obj}

const a = 5
const b = 'niu'
const sum = (x,y)=>{return x+y}
const obj = {
    name:'es'
}
class People{
    constructor(name){
        this.name = name
    }
    showName(){
        console.log(this.name)
    }
}
export {a,b,sum,obj,People}
