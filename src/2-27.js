//模块化规范
//CommonJS:Node.js
//AMD:require.js
//CMD:sea.js
//ES6

import {a as aa,b,sum,obj,People} from './module'
console.log(aa,b)//5 'niu'
console.log(sum(2,3))//5
console.log(obj)
let p = new People('niuniu')
p.showName()//niuniu