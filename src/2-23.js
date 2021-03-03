// //状态管理
// //resolve 成功
// //reject 失败
// let p  = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('niu')
//         resolve('成功')
//     }, 1000);
// }).then((res)=>{
//     console.log(res)
// },()=>{ console.log('失败')})

// let p = new Promise((resolve,reject)=>{
//     console.log(1)
//     resolve()
// })
// p.then(res=>{
//     console.log(3)
// })
// console.log(2)
// // 1 2 3

function ajax(url,successCallback,failCallback){
    //1.创建XMLHttpRequest对象
    var xmlhttp
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest()
    }else{ //兼容早期浏览器
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.发送请求
    xmlhttp.open('GET',url,true)
    xmlhttp.send()
    //3.服务端响应
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
            var obj = JSON.parse(xmlhttp.responseText)
            successCallback && successCallback(obj)
        }else if(xmlhttp.readyState === 4 && xmlhttp.status === 404){
            failCallback && failCallback(xmlhttp.statusText)
        }
      }
}

// new Promise((resolve,reject)=>{
//     ajax('static/a.json',res=>{
//         console.log(res)
//         resolve()
//     })
// }).then(res=>{
//     console.log('a成功')
//     return new Promise((resolve,reject)=>{
//         ajax('static/b.json',res=>{
//             console.log(res)
//             resolve()
//         })
//     })
// }).then((res)=>{
//     console.log('b成功')
//     return new Promise((resolve,reject)=>{
//         ajax('static/c.json',res=>{
//             console.log(res)
//             resolve()
//         })
//     })
// }).then((res)=>{
//     console.log('c成功')
// })

function getPromise(url){
    return new Promise((resolve,reject)=>{
        ajax(url,res=>{
            resolve(res)
        },err=>{
            reject(err)
        })
    })
}

// getPromise('static/aa.json')
//    .then(res=>{
//     console.log(res)
//     return getPromise('static/b.json')
//    },err=>{
//      console.log(err)
//      return getPromise('static/b.json')
//    }).then(res=>{
//     console.log(res)
//     return getPromise('static/c.json')
//    }).then(res=>{
//     console.log(res)
//    })

getPromise('static/a.json')
   .then(res=>{
    console.log(res)
    return getPromise('static/bb.json')
   }).then(res=>{
    console.log(res)
    return getPromise('static/c.json')
   }).then(res=>{
    console.log(res)
   }).catch(err=>{console.log(err)})
