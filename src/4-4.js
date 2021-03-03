const str = 'niuzi'
console.log(str.padStart(8,'x'))//xxxniuzi
console.log(str.padEnd(8,'x'))//niuzixxx

console.log(str.padStart(8))//用空格填充

//yyyy-mm-dd 2020-05-01
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2,'0')
const day = (now.getDate()).toString().padStart(2,'0')
console.log(`${year}-${month}-${day}`)

const tel = '13012345678'
const newTel = tel.slice(-4).padStart(tel.length,'*')
console.log(newTel)

console.log(new Date().getTime()) // 13位 ms