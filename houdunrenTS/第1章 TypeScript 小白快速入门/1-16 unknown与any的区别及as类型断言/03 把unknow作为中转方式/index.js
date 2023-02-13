// 这里把一个字符串赋值给数值变量
var hd = '99';
// 这样无法赋值
// let a:number = hd
// 可以先转化成unknow，再转化成number
var a = hd;
// 但是显示下面二者类型还是字符串
console.log(typeof hd);
console.log(typeof a);
console.log(hd);
console.log(a);
