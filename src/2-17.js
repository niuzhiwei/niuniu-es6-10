//unicode
//es6 \uxxxx码点 0000~ffff
// \20BB7 -> \u20BB+7
// \u{20BB7}
// \u{41} -> A

// console.log('\z'==='z')//true
// console.log('\z'==='z')//true

for(let item of 'niu'){
    console.log(item)//n i u
}

console.log(String.fromCharCode(0x20BB7))//输出的是乱码
console.log(String.fromCodePoint(0x20BB7))//𠮷

const str = 'niu'
console.log(str.includes('iu'))//true
console.log(str.startsWith('ni'))//true
console.log(str.startsWith('ns'))//false

const newStr = str.repeat(10)
console.log(newStr)//niuniuniuniuniuniuniuniuniuniu