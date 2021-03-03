// const foo = (a,b,c,d)=>{
//     console.log(a) //["", ",他的年龄是", "", raw: Array(3)]
//     console.log(b) //niuniu
//     console.log(c) //28
//     console.log(d) //undefined
// }
// const name = 'niuniu'
// const age = 28
// foo`${name},他的年龄是${age}`


const foo = arg =>{
    console.log(arg) 
}
// foo`\u{61} and \u{62}` //a and b
foo`\u{61} and \unicode` //undefined