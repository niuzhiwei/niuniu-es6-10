// //Array.prototype.flat()将嵌套的数组拍平
// const arr = [1,2,[3,4]]
// console.log(arr.flat()) //[1, 2, 3, 4]

// //flat()默认只会拍平一层，如果想要拍平多层，可以将入参写成一个整数，表示想要拍平的层数。默认为1
// const arr = [1,2,[3,[4,5]]]
// console.log(arr.flat())//[1,2,3,[4,5]]
// console.log(arr.flat(2))//[1, 2, 3, 4, 5]

// //如果不管有多少层嵌套，都要转换为一维数组，可以用Infinity关键字作为参数
// const arr = [1,[2,[3]]]
// console.log(arr.flat(Infinity))//[1, 2, 3]

// //如果原数组有空位，flat()方法会跳过空位
// const arr = [1,2,,4,5]
// console.log(arr.flat())//[1, 2, 4, 5]

//flatMap()方法对原数组的每个成员执行一个函数，相当于执行Array.prototype.map()，然后对返回组成的数组执行flat()方法、该方法返回一个新数组。不改变原数组
const arr = [[1],[2],[3]]
const arr1 =arr.flatMap(x=>x)
console.log(arr1)//1 2 3