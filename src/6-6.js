// //JSON 超集 \u2029 \u2028
// eval("var str = 'niuzi';\u2029 function foo(){return str;}")
// console.log(foo())//niuzi

//0xD800~0xDfff
console.log(JSON.stringify('\uD83D\uDE0E'))//emoji
