//es5数组遍历方式
//for循环
//forEach():没有返回值，只是针对每个元素调用func,不支持break,continue
//map():返回新的Array,每个元素为调用func的结果,不改变原数组
//filter():返回符合func条件的元素数组
//some():返回boolean,判断是否有元素符合func条件
//every():返回boolean,判断每个元素是否符合func条件
//reduce():接受一个函数作为累加器


let arr = [1,2,2,3,4,2]
//求和
let result = arr.reduce((prev,cur,index,array)=>{
    return prev+cur
},0)
console.log(result)//6
//求最大值
let max = arr.reduce((prev,cur)=>{
    return Math.max(prev,cur)
})
console.log(max)//3
//去重
const res = arr.reduce((prev,cur)=>{
   prev.indexOf(cur)== -1 && prev.push(cur)
   return prev
},[])
console.log(res)//[1,2,3,4]

Array.prototype.foo = function(){
    console.log('foo')
}
for(let i in arr){
    console.log(i,arr[i])//会遍历出数组的方法foo,for in不适合遍历数组
}

// es6中数组遍历方式
// find()：返回第一个通过测试的元素
// findIndex():返回的值为该通过第一个元素的索引
// for of
// values()
// keys()
// entries()


let res = arr.find((value)=>{
    return value ==8
})
console.log(res)//undefined

//for of
for(let item of arr){
    console.log(item)//1 2 2 3 4 2
}

for(let item of arr.values()){
    console.log(item)//1 2 2 3 4 2
}

for(let item of arr.keys()){
    console.log(item)// 0 1 2 3 4 5 (索引)
}

for(let [index,item] of arr.entries()){
   console.log(index)// 0 1 2 3 4 5 (索引)
   console.log(item)//1 2 2 3 4 2
}