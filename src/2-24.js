// let p1 = Promise.resolve('success')
// console.log(p1)//Promise {<fulfilled>: "success"}
// p1.then(res=>console.log(res))//success

// let p2 = Promise.reject('fail')
// console.log(p2)
// p2.catch(err=>{
//     console.log(err)//fail
// })

// function foo(flag){
//     if(flag){
//         return new Promise(resolve=>{
//             resolve('success')
//         })
//     }else{
//         return Promise.reject('fail')
//     }
// }
// foo(true).then(res=>console.log(res))//success
// foo(false).then(res=>console.log(res),err=>{
//     console.log(err)//fail
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(1)
//         resolve('1成功')
//     }, 1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(2)
//         resolve('2成功')
//     }, 2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(3)
//         resolve('3成功')
//     }, 3000);
// })
// //Promise all 只要有一个失败就认为都失败了
// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res)
// })

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res)
// })

// const imgArr = ['1.jpg','2.jpg','3.jpg']
// let promiseArr = []
// imgArr.forEach(item=>{
//    promiseArr.push(new Promise((resolve,reject)=>{
//     //图片上传操作
//     resolve()
// }))
// })
// Promise.all(promiseArr).then(res=>{
//     console.log('图片全部上传完成')
// })

//promise.race应用
function getImg(){
    return new Promise((resolve,reject)=>{
        let img = new Image();
        img.onload = function(){
           resolve()
        }
        img.src = 'http://123.jpg'
    })
}
function timeout(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           reject('图片请求超时')
        }, 2000);
    })
}
Promise.race([getImg(),timeout()]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})