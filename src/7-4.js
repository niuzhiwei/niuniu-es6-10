// Promise.all([
//     Promise.resolve({code:200,data:[1,2,3]}),
//     Promise.reject({code:500,data:[3,4,6]}),
//     Promise.resolve({code:200,data:[5,8,9]}),
// ]).then(res=>{
//    console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

Promise.allSettled([
    Promise.resolve({code:200,data:[1,2,3]}),
    Promise.reject({code:500,data:[3,4,6]}),
    Promise.resolve({code:200,data:[5,8,9]}),
]).then(res=>{
   console.log(res)
}).catch(err=>{
    console.log(err)
})





