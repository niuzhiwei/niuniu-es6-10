//数值的扩展

//十进制->二进制
const a = 5
console.log(a.toString(2))//101

//二进制->十进制
const b = 101
console.log(parseInt(b,2))//5

//es6 0B二进制 0O八进制
const a = 0B0101
console.log(a)//5

const b = 0o777
console.log(b)//511

console.log(Number.isFinite(5))//true
console.log(Number.isFinite(5/0))//false
console.log(Number.isFinite(Infinity))//false
console.log(Number.isFinite('niu'))//false
console.log(Number.isFinite(false))//false

console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN('a'/5))//true
console.log(Number.isNaN(15))//false

console.log(Number.parseInt(5.5))//5
console.log(Number.parseFloat(5.5))//5.5

console.log(Number.isInteger(5))//true
console.log(Number.isInteger(5.5))//false

console.log(0.1+0.2==0.3) //false,因为精度缺失

const max = Math.pow(2,53)
console.log(max)//9007199254740992
console.log(max+1)//9007199254740992

console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))//true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))//false

console.log(Math.trunc(5.5))//5 去除小数部分返回整数部分
console.log(Math.trunc(-5.5))//-5 去除小数部分返回整数部分
console.log(Math.trunc(true))//1
console.log(Math.trunc(undefined))//NaN
console.log(Number.parseInt(true))//NaN

console.log(Math.sign(5)) // 1 判断正数负数零
console.log(Math.sign(-5)) // -1 判断正数负数零
console.log(Math.sign(0)) // 0 判断正数负数零
console.log(Math.sign(NaN)) // NaN 判断正数负数零
console.log(Math.sign(true)) // 1 判断正数负数零

console.log(Math.cbrt(8))//2 求立方根
console.log(Math.cbrt('niu'))//NaN 求立方根