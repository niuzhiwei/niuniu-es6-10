//ES7

//includes -> boolean
// const arr = ['es6','es7','es8']
// console.log(arr.includes('es6'))//true

// console.log(arr.includes('es7',1))//true 数组索引位置
// console.log(arr.includes('es7',2))//false
// console.log(arr.includes('es7',-2))//true

// console.log(arr.indexOf('es7'))//1
// console.log(arr.indexOf('es9'))//-1

// const arr = ['es6',['es7','es8'],'es9']
// console.log(arr.includes(['es7','es8']))//false
// console.log(arr.indexOf(['es7','es8']))//-1

const arr = ['es6','es7',NaN,'es8']
console.log(arr.includes(NaN))//true
console.log(arr.indexOf(NaN))//-1